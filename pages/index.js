
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OpenWeather from '../components/openweather/openWeather'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/home";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>

        </Stack>
          <OpenWeather></OpenWeather>
      </main>


     

    

    </div>
  );
}
