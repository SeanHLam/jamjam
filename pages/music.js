import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OpenWeather from "../components/openweather/openWeather";
import { useEffect, useState } from "react";
import axios from "axios";
import PillMenuCard from "../components/pillmenu/pillMenuCard";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Music() {
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  const [song, setSong] = useState();
  const [token, setToken] = useState("");
  const searchArray = [
    "%25a%25",
    "a%25",
    "%25e%25",
    "e%25",
    "%25i%25",
    "i%25",
    "%25o%25",
    "o%25",
  ];
  const randomSearch =
    searchArray[Math.floor(Math.random() * searchArray.length)];
  const randomOffset = randomIntFromInterval(1, 1000);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  //   const randomSong = async (e) => {
  //     e.preventDefault();
  //     const { data } = await axios.get(
  //       `"https://api.spotify.com/v1/search?query=${randomSearch}&offset=${randomOffset}&limit=1&type=track&market=NL";`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         params: {
  //           q: searchKey,
  //           type: "track",
  //         },
  //       }
  //     );

  const randomSong = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: "beatles",
            type: "artist"
        }
        
    }
    ).catch((error) => {
        if( error.response ){
            console.log(error.response.data); 
        }
    });

    console.log(data)
}

  return (
    <div>
      <Button onClick={randomSong} variant="contained">
        Random Song
      </Button>
      <PillMenuCard/>
    </div>
  );
}