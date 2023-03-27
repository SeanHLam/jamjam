import styled from 'styled-components';
import styles from "../../styles/Home.module.css";
import AppText from '../apptext/appText';
import Card from '@mui/material/Card';
import Image from 'next/image';

const Photo = styled(Image)`
opacity: 0.3;
object-fit:contain;
`

const Container = styled.div`
width: 10rem;
height:100%;
background-image: ${ props => props.img};
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
align-items:center;
background-color: ${props => props.bgcolor}
`

export default function LandingCard({
    url = '/spotify.png',
    head= 'Sample',
    sub= 'Sample',
    bgcolor = 'white',
    width='100',
    height='50'
}){

    return (
        <Card className={styles.pickCard}
        sx={{
            bgcolor: "white",
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"center",
            height:"auto"
        }}>

        <Container bgcolor={bgcolor}>
            <Photo src={url} width={width} height={height}/>
            <AppText variant='headerSmall' c= 'black' text={head}/>
            <AppText variant='bodySmall' c='gray' text={sub}/>
        </Container>

        </Card>
    )
}