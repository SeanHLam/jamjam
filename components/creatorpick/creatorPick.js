import Image from "next/image";
import styles from "../../styles/Home.module.css";
import AppButton from "../button/button";
import { useState } from "react";
import AppText from "../../components/apptext/appText";
import { CardMedia } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useRouter } from "next/router";
import musicPicks from '../../data/creatorPick.json'
import {useEffect } from "react";

const Wrapper = styled.div`
display:flex;
flex-direction:column;
width: 500px;
@media (min-width: 701px) and (max-width: 1120px) {
    width: 400px;
    height:300px;
  };
  
  @media (max-width: 700px) {
    width: 350px;
    height:250px;
  }
`

const ImageCont = styled.div`
margin:0rem 2rem 1rem 0 ;
`

const Row = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
`


export default function CreatorCard() {

    const router = useRouter();

    const [randomNumber, setRandomNumber] = useState(0)

    const handleClick = (path) => {
        if (path === "/music") {
          
        }
    }
    const clickPlay = () => {
        router.push(`/music`)
 
     }

     useEffect(() => {
        const newRandomNumber = Math.floor(Math.random() * 3)
        setRandomNumber(newRandomNumber)
      }, [])
 
     
    return (
        <Wrapper>
        <AppText variant='headerSmall' text='CREATOR&#39;S PICKS' c='black' margin='0 0 1rem 1rem' padding='0 0 0 0rem' wdth='100%'></AppText> 
        <Card className={styles.pickCard}
            sx={{
                bgcolor: "var(--sand-color)",
                boxShadow: "none",
                display:"flex",
                justifyContent:"space-around",
                padding: "1.5em 1.5rem",
                borderRadius:'1.5rem',
                width:'100%',
            }}>
            
            <Row>
            <div className={styles.pickPlay}>
                <ImageCont>
                <Image className={styles.pickImage} src={musicPicks.songs[randomNumber].Song} width={150} height={150}></Image>
                </ImageCont>
                <AppButton onClick={clickPlay} buttonSize="buttonMedium" textVariant="buttonMedium" variant='contained' bg='black' text='PLAY'/>
            </div>

            <div className={styles.pickText}>
                <AppText c='black' variant='bodyBold' text={musicPicks.songs[randomNumber].Song_name} wdth='100%'></AppText>
                <AppText variant='bodyExtraSmall' c='black' text={musicPicks.songs[randomNumber].Artist} wdth='100%'></AppText>
                <AppText variant='bodySmall' c='black' text={musicPicks.songs[randomNumber].Reason} margin='1rem 0 0 0' wdth='100%'></AppText>
            </div>
            </Row>

        </Card>
        </Wrapper>
    )
}