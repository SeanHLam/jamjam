import Image from "next/image";
import styles from "../../styles/Home.module.css";
import AppButton from "../button/button";
import { useState } from "react";
import AppText from "../../components/apptext/apptext";
import { CardMedia } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const ImageCont = styled.div`
margin:0rem 1rem 1rem 0 ;
`

const Row = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
`


export default function CreatorCard() {
    const handleClick = (path) => {
        if (path === "/music") {
            console.log("Open Music Roulette");
        }
    }
    return (

        <Card className={styles.pickCard}
            sx={{
                bgcolor: "white",
                boxShadow: "none",
                display:"flex",
                justifyContent:"space-around",
                padding: "3rem 2rem"
            }}>
            <AppText variant='headerSmall' text='Creator&#39;s Picks' c='black' margin='0 0 1rem 0'></AppText> 
            
            <Row>
            <div className={styles.pickPlay}>
                <ImageCont>
                <Image className={styles.pickImage} src="/boiler.jpeg" width={200} height={200}></Image>
                </ImageCont>
                {/* <Button
                    variant="contained"
                    size="medium"
                    bg="pink"
                    onClick={() => handleClick("/music")}
                    href="/music">
                    <AppText variant='buttonSmall' c='sand' text='Play'></AppText>
                </Button> */}
                <AppButton buttonSize="buttonMedium" textVariant="buttonMedium" variant='contained' bg='pink' text='PLAY'/>
            </div>

            <div className={styles.pickText}>
                <AppText c='black' variant='headerSmall' text='SONG NAME'></AppText>
                <AppText variant='bodyExtraSmall' c='black' text='ARTIST'></AppText>
                <AppText variant='bodySmall' c='black' text='This song is awesome' margin='1rem 0 0 0'></AppText>
            </div>
            </Row>

        </Card >
    )
}