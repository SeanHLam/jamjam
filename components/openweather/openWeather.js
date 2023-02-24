import styled from 'styled-components';
import styles from "../../styles/Home.module.css";
import { useState } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import AppText from '../apptext/apptext';
import { Player } from '@lottiefiles/react-lottie-player';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';


const Wrapper = styled.div`
height:100%;
max-width: 90vw;
position:relative;
margin: 3em 0em;
`

const Container = styled.div`
padding:5%;
height:20rem;
width:30rem;
background-color: #DD727F;
position:relative;
border-radius:10px;
overflow:hidden;
`

const OvalOverlay = styled.div`
width: 100%;
height: 50%;
border-radius: 100%;
background-color:#F3F3F0;
transform: scaleX(2.1);
position:absolute;
margin:auto;
top:60%;
right:0;
left:0;
`

const Row = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;
gap:3%;
`

const TextRow = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
gap:3%;
`

const Column = styled.div`
display:flex;
flex-direction:column;
width:100%;
`

const Input = styled(TextField)`
outline:0;
background-color:transparent;
border:0;
width: 100%;
`

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20rem',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5%',
  boxShadow: 24,
  pt: 1.5,
  px: 1.5,
  pb: 1.5,
};

export default function OpenWeather() {

  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [trigger, setTrigger] = useState(false);
  const [background, setBackground] = useState("");
  const [city, setCity] = useState("VANCOUVER");
  const [country, setCountry] = useState("CA");
  const [id, setId] = useState('6173331');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var apiKey = process.env.NEXT_PUBLIC_OPENWEATHER;
  var units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}`;
  console.log(url)


  const searchLocation = (e) => {
    if (e) {
      axios.get(url)
        .then((response) => {
          console.clear()
          setData(response.data);
          console.log(response.data);
          setWeather(response.data.weather);
          setErrorMessage("");
          setTrigger(false);
          setBackground(response.data.weather[0].main.toLowerCase());
          setCity(response.data.name.toUpperCase());
          setCountry(response.data.sys.country);
          handleClose();
        }).catch(err => {
          console.log(err);
          setErrorMessage("Invalid Location. Please enter another location!");
          setData({});
          setWeather();
          setTrigger(true);
        })
      setLocation('')
    }
  }
  return (
    <Wrapper>

      {
        weather && weather.map((w, index) => {
          return (
            <Player
              className={styles.animation}
              autoplay
              loop
              src={`/animations/${w.main.toLowerCase()}.json`} />
          )
        })
      }

      <Container className={styles.weatherContainer}>

        <OvalOverlay />

        <Column>
          <Row>
            <SearchIcon onClick={handleOpen} fontSize='medium' color='sand' style={{ transform: 'rotateY(-180deg)', marginTop:'0.25rem'}}></SearchIcon>
            {!weather ? 
            <TextRow>
                <AppText text={city} variant='headerSmall' w='100%' c='sand'></AppText>
                <AppText text={country} variant='bodySmall' c='gray'></AppText>
                </TextRow>
                : ''} 
          {
            weather && weather.map((w, index) => {
              return (
                <Column className={styles.weatherInfo}>
                <TextRow>
                <AppText text={city} variant='headerSmall' w='100%' c='sand'></AppText>
                <AppText text={country} variant='bodySmall' c='gray'></AppText>
                </TextRow>
                  <AppText text={`${data.main.temp} °`} variant='header' c='sand'>°C</AppText>
                  <AppText text={w.main} variant='bodySmall' c='gray'></AppText>
                </Column>
              )
            })
          }
          </Row>

          {trigger ?
            <Column>
              <Player
                className={styles.animation}
                autoplay
                loop
                src='/animations/error.json'
              ></Player>
              <AppText text={errorMessage} c='gray' variant='bodySmall'></AppText>
            </Column>
            : ""}
        </Column>

        <Modal
          backdrop
          open={open}
          onBackdropClick={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description">
          <Box sx={style}>
            <Column>
              <Input
                id="standard-basic"
                label="Enter Location"
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                size='small'
              />
              {trigger ? <AppText text={errorMessage} variant='bodySmall' c='gray'></AppText> : ''}
            </Column>
            <Button color="dark" size="extraSmall" variant="contained" onClick={searchLocation}> Search </Button>
          </Box>
        </Modal>
      </Container>

    </Wrapper>

  )
}