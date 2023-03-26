import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Navigation from '../components/navigation/navigation'
import CreatorCard from "../components/creatorpick/creatorPick";
import { Player } from "@lottiefiles/react-lottie-player";
import AppText from "../components/apptext/appText";
import LandingCard from "../components/landingcard/landingCard";
import AppButton from "../components/button/button";
import Footer from "../components/footer/footer";
import { handleScroll } from '../components/scroll/scrollDown';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
min-height: 100vh;

@media (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 60vh;
}

@media (min-width: 701px) and (max-width: 1120px) {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 60vh;
}
`
const Spacer = styled.div`
margin-top: 8rem;

@media (min-width: 701px) and (max-width: 1120px) {
    margin-top: 5rem;
}

@media (max-width: 600px) {
    margin-top: 3rem;
}
`

const BlockCont = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap:2rem;
margin-right: 2rem;

@media (min-width: 701px) and (max-width: 1120px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap:2rem;

}


@media (max-width: 600px) {
  display:none;
}
`

const LandingText = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
`

const LandingContainer = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
margin:3rem 0 5rem 0;
width:100%;
justify-content:space-around;
padding: 2em 5em;

@media (min-width: 701px) and (max-width: 1120px) {
    margin: 2rem 0 5rem 0;
}
`

const Column = styled.div`
display:flex;
flex-direction:column;

@media (min-width: 701px) and (max-width: 1120px) {
    flex-direction: column;
    align-items: fkex-start;
    justify-content: flex-start;
}

@media (max-width: 600px) {
    
}
`

const Photo = styled(Image)`
opacity: 0.3;
object-fit:contain;
`

const AnimCont = styled.div`
width:40rem;
position:absolute;
top:5px;
left:0px;
`

const Block = styled.div`
background-color: ${props => props.background};
border-radius: 2rem;
width:16rem;
height: ${props => props.height};
margin: ${props => props.margin};
box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;

@media (min-width: 701px) and (max-width: 1120px) {
    width:10rem;
    height: 12rem;
}


@media (max-width: 600px) {
  width: 8rem;
  height: ${props => props.mobileheight};
  border-radius:1.5rem;
}
`


const LandingBottom = styled.div`
display:flex;
flex-direction:row;
align-items:center;
gap:5rem;
`

const BottomSection = styled.section`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
width:100%;
background-color:#EDEDE8;
padding:6rem 0rem 0rem 0rem;
border-radius:20% 20% 0% 0%;

@media (min-width: 701px) and (max-width: 1120px) {
    justify-content: center;
    padding:6rem 0rem 0rem 0rem; 
    width:100vw;
}

@media (max-width: 600px) {
  flex-direction: column;
}

display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
width:100%;
background-color:#EDEDE8;
padding:6rem 0rem 0rem 0rem;
border-radius:20% 20% 0% 0%;

@media (max-width: 600px) {
  flex-direction: column;
}
`

const FillTextPink = styled.span`
margin-top: 2pt;
display: inline;
width: fit-content; 
position: relative;
transition: all 0.2s ease-in-out;
padding-left: 5pt;
padding-right: 5pt;
border-radius: 8pt;
color: #DD727F;
text-shadow: 1px 1px 1px #000, 0 -1px 1px #000, 1px 1px 1px #000, -1px 0 0 #000, 1px 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000;

  &:hover {
    text-shadow: #000 2pt 0 1pt;
    
    background-color: #DD727F ;
    color: #DD727F;
    text-stroke: #363630 1pt solid;
  }
`;

const FillTextGreen = styled.span`
margin-top: 2pt;
display: inline;
width: fit-content; 
position: relative;
transition: all 0.2s ease-in-out;
padding-left: 5pt;
padding-right: 5pt;
border-radius: 8pt;
color: #DD727F;
text-shadow: 1px 1px 1px #000, 0 -1px 1px #000, 1px 1px 1px #000, -1px 0 0 #000, 1px 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000;

  &:hover {
    text-shadow: #000 2pt 0 1pt;
    
    background-color: #AAC5BF;
    color: #DD727F;
    text-stroke: #363630 1pt solid;
  }
`;

const ProcessCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
`

const Row = styled.div`
display:flex;
flex-direction:row;
gap: 2rem;
align-items:center;
justify-content:space-around;
width:100%;
margin-bottom:5rem;

@media (min-width: 701px) and (max-width: 1120px) {
    flex-direction: column;
    justify-content:center;
}

@media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const ProcessBlock = styled.div`
// background-color: #DCE7E4;
background-color: #CEDEDB;
border-radius: 2rem;
width:26rem;
height:22rem;
height: ${props => props.height};
margin: ${props => props.margin};
box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;

@media (min-width: 701px) and (max-width: 1120px) {
    width:30rem;
    height:18rem;
}


@media (max-width: 600px) {
    width:18rem;
    height:18rem;
    border-radius:1rem;
}
`



export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className={styles.mainAbout}>
                <Navigation></Navigation>
                <Wrapper>
                    <LandingContainer>
                        <LandingText>
                            <Column style={{ width: '100%' }}>

                                <AppText variant='landing' c='black' wdth='55%' text={"Together we"} />
                                <FillTextPink onClick={() => handleScroll('bottomSection')}>
                                    <AppText
                                        variant='landing'
                                        wdth='55%'
                                        margin=''
                                        c='sand'
                                        style={{ whiteSpace: 'pre-line' }}
                                        text="BRAINSTORMED,"
                                    />
                                </FillTextPink>

                                <FillTextGreen onClick={() => handleScroll('bottomSection')}>
                                    <AppText variant='landing' c='sand' wdth='40%' text={"DESIGNED, "}
                                        style={{ whiteSpace: 'pre-line' }} />
                                </FillTextGreen>


                                <AppText variant='landing' c='black' wdth='55%' text={"and "} />
                                <FillTextPink onClick={() => handleScroll('bottomSection')}>
                                    <AppText variant='landing' c='sand' wdth='55%' text={"DEVELOPED."}
                                        style={{ whiteSpace: 'pre-line' }} />
                                </FillTextPink>

                            </Column>
                        </LandingText>


                        <BlockCont>
                            <Block background='#dd727f' height='20rem' mobileheight='10rem' style={{ padding: '3rem 2rem' }}>
                                <AppText variant='headerSmall' c='sand' align='center' wdth='100%' text="Sean" />
                            </Block>

                            <Block background='#aac5bf' height='20rem' mobileheight='10rem' style={{ padding: '3rem 2rem' }} >
                                <AppText variant='headerSmall' c='sand' align='center' wdth='100%' text="Jason" />
                            </Block>

                            <Block background='#dd727f' height='20rem' mobileheight='10rem' style={{ padding: '3rem 2rem' }}>
                                <AppText variant='headerSmall' c='sand' align='center' wdth='100%' text="Thi" />
                            </Block>

                            <Player
                                autoplay
                                loop
                                src='animations/cogs.json'
                                speed={0.5}
                                className={styles.cog}
                            />
                        </BlockCont>
                    </LandingContainer>

                    <Spacer />
                    <AppText variant='landing' c='black' wdth='40%' text={'OUR PROCESS'} align="center" />

                </Wrapper>

                <Spacer />
                <BottomSection id="bottomSection">
                    <ProcessCont>
                        <Row>
                            <ProcessBlock background='sand' mobileheight='10rem' style={{ padding: '3rem 2rem' }}>
                                <AppText variant='headerSmall' c='pink' align='center' wdth='100%' text="Ideation" />
                                <br />
                                <br />
                                <AppText variant='bodySmall' c='black' wdth='55%' margin='1rem 0 3rem 0 '
                                    text={"We desire to create a personalized music experience based on the user's location and the current weather. We conducted extensive research and brainstormed ideas until we settled on using Spotify's API and OpenWeather API."} />
                            </ProcessBlock>

                            <ProcessBlock background='sand' mobileheight='10rem' style={{ padding: '3rem 2rem' }}>
                                <AppText variant='headerSmall' c='pink' align='center' wdth='100%' text="Design" />
                                <br />
                                <br />
                                <AppText variant='bodySmall' c='black' wdth='55%' margin='1rem 1rem 5 0 '
                                    text={"Jamjam was inspired by Twitter's UI. With Next.js, Styled-Components, and Material UI, we aim to design a clean and modern interface that is visually appealing and easy to navigate. We paid close attention to typography, color schemes, and visual hierarchy to ensure a cohesive look and feel throughout the app."} />
                            </ProcessBlock>

                            <ProcessBlock background='sand' mobileheight='10rem' style={{ padding: '3rem 2rem' }}>
                                <AppText variant='headerSmall' c='pink' align='center' wdth='100%' text="Development" />
                                <br />
                            </ProcessBlock>


                        </Row>
                    </ProcessCont>

                    <Footer />
                </BottomSection>
            </div>
        </>

    )
}