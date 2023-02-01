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
`

const Container = styled.div`
width: 30rem;
max-width: 90vw;
height: 15rem;
padding: 5%;
background-color: #DD727F;
position:relative;
contain:paint;
`

const OvalOverlay = styled.div`
width: 18rem;
height: 15rem;
border-radius: 50%;
background-color:#F3F3F0;
transform: scaleX(2.1);
position:absolute;
margin:auto;
top:40%;
right:0;
left:0;
`

const Row = styled.div`
display:flex;
flex-direction:row;
`

const Column = styled.div`
display:flex;
flex-direction:column;
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
  width: '80%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function OpenWeather() {

    const [location, setLocation] = useState('');
    const [data, setData] = useState({});
    const [weather, setWeather] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [trigger, setTrigger] = useState(false);
    const [background, setBackground] = useState("Background");
    const [city, setCity] = useState("Vancouver");
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
      if(e) {
        axios.get(url)
        .then((response)=> {
          console.clear()
          setData(response.data);
          console.log(response.data);
          setWeather(response.data.weather);
          setErrorMessage("");
          setTrigger(false);
          setBackground(response.data.weather[0].main.toLowerCase());
          setCity(response.data.name.toUpperCase());
          setCountry(response.data.sys.country);
          handleClose()
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
          <Container>
            <OvalOverlay/>

            <Row>
              <Row>
              <SearchIcon onClick={handleOpen} color='sand' style={{transform:'rotateY(-180deg)'}}></SearchIcon>

              </Row>
              {
                weather && weather.map((w, index) => {
                  return (
                    <Row>
                      <Column>
                        <Row key={index} style={{alignItems:'flex-end'}}>
                          <AppText text={city} variant='headerSmall' c='sand'></AppText>
                          <AppText text={data.sys.country} variant='bodySmall' c='gray'></AppText>
                        </Row>
                        <AppText text={data.main.temp} variant='header' c='sand'>°C</AppText>
                        <AppText text={w.main} variant='bodySmall' c='gray'></AppText>
                      </Column>
                      <Row>
                      <Player
                        className={styles.animation}
                        autoplay
                        loop
                        src={`/animations/${w.main.toLowerCase()}.json`}></Player>
                      </Row>
                    </Row>
                    )
                })
              }

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
            </Row>

            <Modal
            backdrop
            open={open}
            onBackdropClick={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description">
              <Box sx={style}>
                <Column style={{marginRight:'2%'}}>
                <Input
                id="standard-basic"
                label="Enter Location"
                type="text"
                value = {location}
                onChange= {e => setLocation(e.target.value)}
                size='small'
                // onKeyDown= {searchLocation}
                />
                { trigger ? <AppText text={errorMessage} variant='bodySmall' c='gray'></AppText> : ''}
                </Column>
                <Button size="extraSmall" variant="contained" onClick={searchLocation}> Search </Button>
              </Box>
            </Modal>
            

          </Container>
        </Wrapper>

    )
}