import Image from "next/image";
import styled from "styled-components";
import AppButton from "../button/button";
import AppText from "../apptext/appText";
import { useRef } from "react";
import styles from "../../styles/Home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import{ weatherPlaylist} from "../../data/playlists";

const Row = styled.div`
width:100%; 
display:flex;
flex-direction:row;
align-items:flex-end;
justify-content:flex-start;
z-index:5;
`

const Column = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`


export default function PlaylistCard({
   
    currWeather,
    clickPlay,
}){

    const animation = useRef(null);

    const refreshList = () => {
        animation.current?.play();
        setTimeout(() => {
            animation.current?.stop();
        }, 1000);

    }


    return (
        <Row style={{gap:'2rem', width:'100%'}}>
            <Image
           src={weatherPlaylist[currWeather[0].main].image}
            className={styles.pickImage}
            width={125}
            height={125}
            />


            <Row style={{justifyContent:'space-between'}}>
            <Column>
            <AppText text='Recommended for you:' wdth='100%' c='gray' variant='bodySmall'/>
            <AppText text={weatherPlaylist[currWeather[0].main].name} c='black' variant='bodyBold' margin='0 0 1rem 0'  wdth="20"/>
            <AppButton onClick={clickPlay} variant='contained' buttonSize='buttonMedium' bg='black' textcolor='sand' textWidth='100%' text='PLAY'/>

            </Column>

            <div onClick={refreshList} className={styles.refresh}>
                <Player
                    autoplay={false}
                    ref={animation}
                    loop={false}
                    src="/animations/refresh.json"
                    style={{ height: '2rem', width: '2rem', cursor:'pointer'}}
                />
            </div>

            </Row>
        </Row>
    )
}