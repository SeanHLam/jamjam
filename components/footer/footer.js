import Image from "next/image";
import styled from "styled-components";
import AppText from "../apptext/apptext";

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
margin: 10rem 0 3rem 0;
`

export default function Footer(){

    return (
        <Wrapper>
            <Image 
            src='/logoPink.svg'
            width={50}
            height={50}
            />
            <AppText wdth='auto' variant='bodySmall' c='gray' align='center' text={'2023 JamJam.\nAll Rights Reserved.'}></AppText>
        </Wrapper>
    )
}