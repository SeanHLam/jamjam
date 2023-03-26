import Image from "next/image";
import styled from "styled-components";
import AppButton from "../button/button";
import AppText from "../apptext/appText";
import { useRef } from "react";
import styles from "../../styles/Home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Row = styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:flex-end;
justify-content:space-evenly;
z-index:5;
`

const Column = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`

export default function PlaylistCard({
    playlist='Sample',
}){

    const animation = useRef(null);

    const refreshList = () => {
        animation.current?.play();
        setTimeout(() => {
            animation.current?.stop();
        }, 1000);

    }

    return (
        <Row>
            <Image
            src='/boiler.jpeg'
            width={125}
            height={125}
            className={styles.pickImage}/>

            <Column>
            <AppText text='Recommended for you:' wdth='100%' c='gray' variant='bodySmall'/>
            <AppText text={playlist} c='black' variant='bodyBold' margin='0 0 1rem 0' />
            <AppButton variant='contained' buttonSize='buttonMedium' bg='black' textcolor='sand' textWidth='100%' text='PLAY'/>
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
    )
}