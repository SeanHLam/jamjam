import styled from 'styled-components';
import { Typography } from "@mui/material";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height:0px;
display:block;
margin:0 auto;
height:350px;

`

const IEmbed = styled.iframe`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height:0px;
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
              width="400"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
             

    ></IEmbed>
     </Wrapper>
    )
}