import styled from 'styled-components';
import { useState } from 'react'; 
import axios from 'axios';
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import SearchIcon from '@mui/icons-material/Search';

const Wrapper = styled.div`
width:100%;
`

const Row = styled.div`
display:flex;
flex-direction:column;
`

const Input = styled.input`

`

export default function OpenWeather() {

    const [location, setLocation] = useState('');
    const [data, setData] = useState({});
    const [weather, setWeather] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [trigger, setTrigger] = useState(false);
    const [background, setBackground] = useState("Background");
  
    var apiKey = process.env.NEXT_PUBLIC_OPENWEATHER;
    var units = "metric";
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}`;
    console.log(url)
  
  
    const searchLocation = (event) => {
      if(event.key === "Enter") {
        axios.get(url)
        .then((response)=> {
          console.clear()
          setData(response.data);
          console.log(response.data);
          setWeather(response.data.weather);
          setErrorMessage("");
          setTrigger(false);
          setBackground(response.data.weather[0].main.toLowerCase());
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
        <Row>
          <SearchIcon style={{transform:'rotateY(180deg)', marginRight:'2%'}}></SearchIcon>

          {
            weather && weather.map((w, index) => {
              return(
                <div key={index}>
                  {data.name}
                  {data.sys.country}
                </div>
              )
            })
          }

        </Row>
        <Input
            type="text"
            value = {location}
            onChange= {event => setLocation(event.target.value)}
            placeholder = "Enter Location"
            onKeyDown= {searchLocation}/>

        {/* {
          weather && weather.map((w, index) => {
            return (
              <div key={index}>
                <Card
                temp={data.main.temp}
                city={data.name}
                desc={w.description}
                main={w.main}
                feels={data.main.feels_like}
                gust={data.wind.gust}
                icon={`/animations/${w.main.toLowerCase()}.json`}
                />
                {data.name}
                {data.sys.country}
                {data.main.temp}
              </div>
            )
          })
        } */}

        </Wrapper>

    )
}