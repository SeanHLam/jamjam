import "../styles/globals.css";
import "../styles/variables.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { styles } from "../utils/theme";
import { SessionProvider } from "next-auth/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={emotionCache}>
          <Component {...pageProps} />
        </CacheProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
