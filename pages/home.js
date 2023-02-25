import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OpenWeather from '../components/openweather/openWeather'
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import Navigation from '../components/navigation/navigation'
import CreatorCard from "../components/creatorpick/creatorPick";
import { Player } from "@lottiefiles/react-lottie-player";
import AppText from "../components/apptext/apptext";
import LandingCard from "../components/landingcard/landingCard";
import AppButton from "../components/button/button";
import Footer from "../components/footer/footer";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/home";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100vw;
`

const Photo = styled(Image)`
opacity: 0.3;
object-fit:contain;
`

const Row = styled.div`
display:flex;
flex-direction:row;
padding: 2em 5em;
align-items:center;
justify-content:space-around;
width:100%;
margin-bottom:5rem;
`

const LandingContainer = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
margin:3rem 0 5rem 0;
width:100%;
justify-content:space-around;
padding: 2em 5em;
`

const Column = styled.div`
display:flex;
flex-direction:column;
`

const LandingText = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
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
width:12rem;
height: ${props => props.height};
margin: ${props => props.margin};
box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;

@media (max-width: 600px) {
  width: 8rem;
  height: ${props => props.mobileheight};
  border-radius:1.5rem;
}

`

const BlockCont = styled.div`
display:flex;
gap:2rem;
@media (max-width: 600px) {
  display:none;
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

@media (max-width: 600px) {
  flex-direction: column;
}

`

export default function Home() {
  const [token, setToken] = useState("")

  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
}

function stylizeLastWord(text, color) {
  const words = text.split(" ");
  const lastWord = words.pop();

  return (
    <>
      {words.join(" ")}
      <AppText c='pink' variant='landing' text={lastWord}></AppText>
    </>
  );
}

  return (
    <>
      <Head>
      <title>Home</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navigation/>
      <Wrapper>

      <LandingContainer>
        <LandingText>
          <Column style={{width:'100%'}}>
          <AppText variant='landing' c='black' wdth='80%' text={stylizeLastWord("EXPLORE THE\nWORLD OF\nENDLESS  JAMS", "pink")} align='left' style={{whiteSpace: 'pre-line'}}/>
          {/* <AppText variant='landing' c='black' text={'EXPLORE THE WORLD OF\nENDLESS MUSIC JAMS'} align='left' style={{ whiteSpace: 'pre-line' }}/> */}
          <AppText variant='bodySmall' c='gray' wdth='55%' margin='1rem 0 3rem 0 ' text={"Easily find music you never knew you needed. Simply generate a unique mix of songs that you'll love. Get ready to explore new music, find hidden gems, and shape your own unique music experience."}/>
          </Column>
          <AppButton onClick={()=>router.push("/music")} variant='contained' buttonSize='buttonLarge' bg='black' text='DISCOVER' textcolor='sand' textWidth='100%'/>
        </LandingText>
        
        <BlockCont>
          <Block background='#dd727f' height='20rem' mobileheight='10rem' style={{padding:'3rem 2rem'}}>
            <AppText variant='headerSmall' c='sand' align='center' wdth='100%' text="Music for Every Mood"/>
            <Player
              autoplay
              loop
              src="animations/spotify.json"
              speed={0.5}
            />
          </Block>
          <Block background='#aac5bf' height='27rem' mobileheight='13.5rem' style={{overflow:'none'}} >
              <Player 
                    autoplay
                    loop
                    src='animations/astronaut3.json'
                    speed={0.5}
                    className={styles.astronaut}
                    
              />
          </Block>
        </BlockCont>
      </LandingContainer>

      <Row>
      <AppText text='powered by' c='gray' variant='bodySmall' wdth="100%"/>
      <LandingBottom>
        <Photo src='/spotify.png' width={85} height={50}></Photo>
        <Photo src='/openweather.png' width={85} height={50}></Photo>
      </LandingBottom>
      </Row>

      <BottomSection>
        <CreatorCard/>
        <OpenWeather/>

        <Footer/>
      </BottomSection>

      {/* <Column style={{justifyContent:'flex-start'}}>
        <AppText variant='headerSmall' text='Creator&#39;s Picks'></AppText> 
        <CreatorCard/>
      </Column>
       */}


      </Wrapper>
    </>
  );
}
