import styled from 'styled-components';
import styles from "../../styles/Home.module.css";
import { useState } from 'react'; 
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import AppText from '../apptext/appText';
import { Player } from '@lottiefiles/react-lottie-player';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';


const Wrapper = styled.div`
width:100%;
`

const Container = styled.div`
width: 100%;
padding: 5%;
background-color: #DD727F;
position:relative;
`

const OvalOverlay = styled.div`
width:100%;
position:absolute;
bottom:0;
background-color:#F3F3F0;
z-index;
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
font-size:50px;
width: 60%;
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25rem',
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

            <Row>
              <SearchIcon onClick={handleOpen} style={{transform:'rotateY(-180deg)'}}></SearchIcon>
              {
                weather && weather.map((w, index) => {
                  return (
                    <Row>
                      <Column>
                        <Row key={index} style={{alignItems:'flex-end'}}>
                          <AppText text={city} style='headerSmall'></AppText>
                          <AppText text={data.sys.country} style='bodySmall' c='gray'></AppText>
                        </Row>
                        {data.main.temp} °C
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
            </Row>

            <Modal
            backdrop
            open={open}
            onBackdropClick={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description">
              <Box sx={style}>
                <Input
                sx={{
                  color:'red'
                }}
                id="standard-basic"
                label="Enter Location"
                type="text"
                value = {location}
                onChange= {e => setLocation(e.target.value)}
                size='small'
                // onKeyDown= {searchLocation}
                />
                <Button variant="contained" onClick={searchLocation}> Search </Button>
              </Box>
            </Modal>
            

          </Container>
        </Wrapper>

    )
}