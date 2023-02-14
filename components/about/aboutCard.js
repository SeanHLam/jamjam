import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import AppText from "../../components/apptext/apptext";
import { CardMedia } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


export default function AboutCard() {
    return (

        <Card className={styles.pickCard}
            sx={{
                bgcolor: "#F3F3F0",
                maxWidth: "100%",
                minWidth: "30%",
            }}>

            <div className={styles.pickPlay}>
                <Image className={styles.pickImage} src="/favicon.ico" width="100" height="100"></Image>
            </div>

            <div className={styles.pickText}>
                <AppText c='jetBlack' text='ABOUT US'></AppText>
                <AppText variant='bodyLarge' c='jetBlack' text=''></AppText>
                <AppText variant='bodySmall' c='jetBlack' text='We are wholesome'></AppText>
            </div>

        </Card >
    )
}