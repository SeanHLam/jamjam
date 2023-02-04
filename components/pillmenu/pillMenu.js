import AppText from "../apptext/apptext"
import Button from "@mui/material/Button"
import styles from "../../styles/Home.module.css";
import styled from 'styled-components';
import { Typography } from "@mui/material";

const Wrapper = styled.div`
`

const Pill = styled.div`
background-color:var(--sand-color);
border-radius:20px;
text-align:center;
border: 1px solid #29252D;
width:100%;
padding: 0.5em 1.25em;
white-space: nowrap;
color:var(--jetblack-color);
&:hover{
    background-color:var(--jetblack-color);
    transition: 0.5s ease;
    color:var(--sand-color);
}
`

const PillText = styled(Typography)`

`


export default function PillMenu({
    onPill=()=>{},
    category='Sample Category'
}){

    return(
        <Wrapper>
        <Pill onClick={onPill}>
            <PillText variant='pill'>{category}</PillText>
        </Pill>
        </Wrapper>
    )
}