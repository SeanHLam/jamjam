import styled from 'styled-components';
import { Typography } from "@mui/material";
import AppText from '../apptext/apptext';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height:0px;

margin:0 auto;
height:350px;
background-color: var(--pink-color);
width:40%;
border-radius: 10px;

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

export default function NoMusic({
   

}){
    return (
        
     <Wrapper className="NoMusic">
        <AppText text="Select A Category" variant='header' align='center' wdth='100' c='sand'></AppText>
     </Wrapper>
    )
}