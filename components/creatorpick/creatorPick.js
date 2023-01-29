import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import AppText from "../../components/apptext/apptext";
import { CardMedia } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


// const bull = (
//   );

export default function CreatorCard() {
    return (
        <Card className={styles.creatorPick}
            sx={{
                bgcolor: '#aac5bf',
                maxWidth: "100%",
                minWidth: "30%",
            }}>

            <div className={styles.pickPlay}>
                <Image className={styles.pickImage} src="/favicon.ico" width="100" height="100"></Image>
                <Button variant="contained">Play</Button>
            </div>

            <div className={styles.pickText}>
                <AppText c='jetBlack' text='SONG NAME'></AppText>
                <AppText variant='bodySmall' c='jetBlack' text='Artist'></AppText>
                <AppText variant='bodyLarge' c='jetBlack' text='This song is awesome'></AppText>
            </div>

        </Card>
    )
}