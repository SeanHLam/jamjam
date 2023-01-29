
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OpenWeather from '../components/openweather/openWeather'
import { useState } from "react";
import { Typography } from "@mui/material";
import AppText from "../components/apptext/apptext";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/home";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";



export default function Login() {
  

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

          <Button href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} variant="contained">Login To Spotify</Button>
          


        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>

        </Stack>


        <OpenWeather></OpenWeather>


        {/* MUI typography */}
        <Typography variant="header">VANCOUVER</Typography>
        <Typography variant="bodyLarge">CA</Typography>

        
        {/* MUI typography inside AppText */}
        <AppText variant='bodySmall' c='sand' text='hello sean'/>
        <AppText variant='header' c='pink' text='hello thi'/>

      </main>


     

    

    </div>
  );
}
