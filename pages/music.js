import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OpenWeather from "../components/openweather/openWeather";
import { useEffect, useState } from "react";
import axios from "axios";
import PillMenuCard from "../components/pillmenu/pillMenuCard";
import { Wrapper } from "./home";
import Navigation from "../components/navigation/navigation";
import MusicPlayer from "../components/musicplayer/musicPlayer";
import { padding } from "@mui/system";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import { playlist, weatherPlaylist } from "../data/playlists";
import NoMusic from "../components/musicplayer/noMusic";
import AppText from "../components/apptext/appText";
import Popup from "../components/popuup/popup";
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0 1em 0em;
`;


export const PlaylistWrapper = styled.div`
  padding: 0 0 1em 0em;
  margin-bottom: 3em;
`;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Music() {
  const { data: session, status } = useSession();
  const [song, setSong] = useState();
  const [category, setCategory] = useState("");
  const [likes, setLikes] = useState([]);
  const [randomPlaylist, setRandomPlaylist] = useState(0);
  const [songPosition, setSongPosition] = useState(0);
  const [playlistLength, setPlaylistLength] = useState(0);
  const [playlistName, setPlaylistName] = useState("");
  const [weather, setWeather] = useState({main:"Clouds"});

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
    newSong();
  }, [category]);

  function getRandomSearch() {
    // A list of all characters that can be chosen.
    const characters = "abcdefghijklmnopqrstuvwxyz";

    // Gets a random character from the characters string.
    const randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    let randomSearch = "";

    // Places the wildcard character at the beginning, or both beginning and end, randomly.
    switch (Math.round(Math.random())) {
      case 0:
        randomSearch = randomCharacter + "%";
        break;
      case 1:
        randomSearch = "%" + randomCharacter + "%";
        break;
    }

    return randomSearch;
  }

  const makeCategory = (category) => {
    setCategory(category);
  };

  const makeWeather = (weather) => {
    setWeather(weather);
  };

  
  const newSong = async (e) => {
    if (category === "Random") {
      randomSong();
    } else if (
      category === "Creators Picks" ||
      category === "New Releases" ||
      category === "Recommended" ||
      (category === "Billboard" && category != undefined)
    ) {
      playCategory();
     
    } else if (
      category === "Genres" ||
      category === "Decade" ||
      (category === "Artist" && category != undefined)
    ) {
      setRandomPlaylist(randomPlaylist);
      playRandomPlaylist();
    }else if (category === "Weather"){
      playWeatherPlaylist()
    }
  };

  const playRandomPlaylist = async (e) => {
    axios
      .get(
        `https://api.spotify.com/v1/playlists/${playlist[category][randomPlaylist]}`,
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          params: {
            offset: 0,
          },
        }
      )
      .then((response) => {
        if (response) {
          const randomSong = randomIntFromInterval(
            0,
            response.data.tracks.items.length - 1
          );
          setSong(response.data.tracks.items[randomSong].track);
        }
      })
      .catch((error) => {
        if (error.response) {
         
        }
      });
  };

  const playCategory = async (e) => {
    axios
      .get(`https://api.spotify.com/v1/playlists/${playlist[category]}`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
        params: {
          offset: 0,
        },
      })
      .then((response) => {
        if (response) {
          const randomSong = randomIntFromInterval(
            0,
            response.data.tracks.items.length - 1
          );
          setSong(response.data.tracks.items[randomSong].track);
        }
      })
      .catch((error) => {
        if (error.response) {
         
        }
      });
  };
 
  const playWeatherPlaylist = async (e) => {
    axios
      .get(`https://api.spotify.com/v1/playlists/${weatherPlaylist[weather.main].music}`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
        params: {
          offset: 0,
        },
      })
      .then((response) => {
        if (response) {
          const randomSong = randomIntFromInterval(
            0,
            response.data.tracks.items.length - 1
          );
          setSong(response.data.tracks.items[randomSong].track);
        }
      })
      .catch((error) => {
        if (error.response) {
       
        }
      });
  };

  const randomSong = async (e) => {
    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
        params: {
          type: "track",
          q: getRandomSearch(),
          offset: randomOffset,
        },
      })
      .then((response) => {
        if (response) {
          console.log(response)
          setSong(response.data.tracks.items[15]);
        }
      })
      .catch((error) => {
        if (error.response) {
        
      }
      }
      );
  };

  const nextSong = async (e) => {
    if (category === "Random") {
      randomSong();
    } else if (
      category === "Creators Picks" ||
      category === "New Releases" ||
      category === "Recommended" ||
      (category === "Billboard" && category != undefined)
    ) {
      playCategory();
    } else if (
      category === "Genres" ||
      category === "Decade" ||
      (category === "Artist" && category != undefined)
    ) {
      playRandomPlaylist();
    }else if (category === "Weather"){
      playWeatherPlaylist()
    }
  };

  const addSong = async (e) => {
    if(song){
      if (likes.includes(song.id)) {
      
      } else {
        setLikes([...likes, song.id]);
      }
      nextSong();
     

    }
   
  };

  const addPlaylist = async (e) => {
    
    
    
    axios
      .put(`https://api.spotify.com/v1/me/tracks?ids=${likes.join(",")}`, 
      
      {},
      {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
          'Content-Type': 'application/json',

        },

      })
      .catch((error) => {
        if (error.response) {
         
        }
      });

      setLikes([]);
  };

  return (
    <>
      <Head>
        <title>Music</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navigation></Navigation>
      <Wrapper>
        <PillMenuCard sendCategory={makeCategory} />

        <div style={{borderRadius: '1.5rem', backgroundColor:'var(--pink-color)', padding:'0.5rem 1rem'}}>
          <AppText wdth="300" c='sand' align="center" variant="headerSmall" text={`Currently Playing: ${category}`} />
        </div>
        {song ? <MusicPlayer song={song.id} /> : <NoMusic />}
       
        <ButtonWrapper>
          <Button onClick={newSong} variant="contained">
            DISLIKE
          </Button>
          <Button sx={{ margin: .5 }} onClick={addSong} variant="contained">
            LIKE
          </Button>
        </ButtonWrapper>
        <Button sx={{ marginBottom: 2 }} onClick={addPlaylist} variant="contained">
            ADD {likes.length} TO LIKES
        </Button>
       
        <PlaylistWrapper/>
  

        <OpenWeather sendWeather={makeWeather} />

        <Footer />
      </Wrapper>
    </>
  );
}
