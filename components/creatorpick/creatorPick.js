import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import AppText from "../../components/apptext/apptext";
import { CardMedia } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


export default function CreatorCard() {
    const handleClick = (path) => {
        if (path === "/music") {
            console.log("Open Music Roulette");
        }
    }
    return (

        <Card className={styles.pickCard}
            sx={{
                bgcolor: "#F3F3F0",
                maxWidth: "100%",
                minWidth: "30%",
            }}>

            <div className={styles.pickPlay}>
                <Image className={styles.pickImage} src="/favicon.ico" width="100" height="100"></Image>
                <Button
                    // variant="contained"
                    size="small"
                    bg="pink"
                    onClick={() => handleClick("/music")}
                    href="/music">
                    <AppText variant='buttonSmall' c='sand' text='Play'></AppText>
                </Button>
            </div>

            <div className={styles.pickText}>
                <AppText c='jetBlack' text='SONG NAME'></AppText>
                <AppText variant='bodyLarge' c='jetBlack' text='Artist'></AppText>
                <AppText variant='bodySmall' c='jetBlack' text='This song is awesome'></AppText>
            </div>

        </Card >
    )
}