import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify.js"

async function refreshAccessToken(token){
    try {
        ("refreshing token" , token, token.account.refresh_token)
        //spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setAccessToken(token.accessToken);
        // 
        spotifyApi.setRefreshToken(token.refreshToken);
       //spotifyApi.setRefreshToken(token.account.refresh_token);
       

        const {body: refreshedToken} = await spotifyApi.refreshAccessToken();
        ("refreshed token", refreshedToken)

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken : refreshedToken.refresh_token ?? token.refreshToken

        }

    }catch(err) {
        ("Refresh Error:",err)
        return {
            ...token,
            err: "refresh token error"
        }
    }

}

export default NextAuth({
 
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ,
      authorization: LOGIN_URL,
    }),
   
  ],
  secret : process.env.JWT_SECRET,
  pages: {
    signIn: "/",
    },
    callbacks: {
        async jwt({token, user, account}) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000,
                    
                }

            }
           //returns previous token if token has not expired
            if (token.accessTokenExpires > Date.now()) {
                ("token is still valid")
                return token
            }

          
            return await refreshAccessToken(token)
            //access token expires

        },

        async session({session, token}) {
            session.user.accessToken = token.accessToken
            session.user.refreshToken = token.refreshToken
            session.user.username = token.username
            return session
        },
            
    },
})

// export default NextAuth(authOptions)