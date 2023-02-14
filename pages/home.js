
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OpenWeather from '../components/openweather/openWeather'
import {useEffect, useState} from 'react';
import Navigation from '../components/navigation/navigation'
import CreatorCard from "../components/creatorpick/creatorPick";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/home";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width:100vw;
padding: 2em 5em;
min-height:110vh;
`

export default function Home() {
  const [token, setToken] = useState("")

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


  return (
    <>
      <Head>
      <title>Home</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navigation/>
      <Wrapper>
        <Button onClick={logout}>Logout</Button>
        <CreatorCard></CreatorCard>
      

      </Wrapper>
    </>
  );
}
