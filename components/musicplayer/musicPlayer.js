import styled from 'styled-components';
import { Typography } from "@mui/material";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
display:block;
height:350px;
margin:1em auto;

`

const IEmbed = styled.iframe`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border:none;
max-height:400px;
display:block;
margin:0 auto;  
`

export default function MusicPlayer({
    song="",

}){
    return (
        
     <Wrapper>
        
     <IEmbed
              src={`https://open.spotify.com/embed/track/${song}`}
              width="300"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
             

    ></IEmbed>
     </Wrapper>
    )
}