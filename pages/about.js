import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Navigation from '../components/navigation/navigation'
import AboutCard from '../components/about/aboutCard'
import AppText from "../components/apptext/apptext";
import Footer from '../components/footer/footer';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100vw;
padding: 2em 5em;
min-height:110vh;
`

export default function About() {
    return (
        <div>
            <Navigation></Navigation>
            <Wrapper>
                <AboutCard></AboutCard>
            </Wrapper>
            <Footer/>
        </div>
    )
}