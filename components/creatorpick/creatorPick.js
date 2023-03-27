import Image from "next/image";
import styles from "../../styles/Home.module.css";
import AppButton from "../button/button";
import { useState } from "react";
import AppText from "../../components/apptext/apptext";
import { CardMedia } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
`

const ImageCont = styled.div`
margin:0rem 2rem 2rem 0 ;
`

const Row = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
`


export default function CreatorCard() {
    const handleClick = (path) => {
        if (path === "/music") {
          
        }
    }
    return (
        <Wrapper>
        <AppText variant='headerSmall' text='CREATOR&#39;S PICKS' c='black' margin='0 0 2rem 1rem' padding='0 0 0 1rem' wdth='100%'></AppText> 
        <Card className={styles.pickCard}
            sx={{
                bgcolor: "var(--sand-color)",
                boxShadow: "none",
                display:"flex",
                justifyContent:"space-around",
                padding: "2rem 2rem",
                borderRadius:'1.5rem',
                width:'100%',
                height:'22rem',
                width:'35rem',
            }}>
            
            <Row>
            <div className={styles.pickPlay}>
                <ImageCont>
                <Image className={styles.pickImage} src="/boiler.jpeg" width={175} height={175}></Image>
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
                <AppText c='black' variant='headerSmall' text='SONG NAME' wdth='100%'></AppText>
                <AppText variant='bodyExtraSmall' c='black' text='ARTIST' wdth='100%'></AppText>
                <AppText variant='bodySmall' c='black' text='This song is awesome' margin='1rem 0 0 0' wdth='100%'></AppText>
            </div>
            </Row>

        </Card>
        </Wrapper>
    )
}