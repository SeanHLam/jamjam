import AppText from "../apptext/apptext"
import Button from "@mui/material/Button"
import styles from "../../styles/Home.module.css";
import styled from 'styled-components';
import { Typography } from "@mui/material";
const Wrapper = styled.div`
`
const Pill = styled.div`
background-color:white;
border-radius:20px;
text-align:center;
border: 1px solid var(--gray-color);
width:100%;
padding: 0.75rem 1.5rem;
margin: 0.5rem 0;
white-space: nowrap;
color:var(--gray-color);
box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px;
&:hover{
    background-color:var(--jetblack-color);
    transition: 0.25s ease-in-out;
    color:var(--sand-color);
    border: 1px solid var(--jetblack-color);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    margin: 0.25em 0;
}
`
const PillText = styled(Typography)`
`

export default function PillMenu({
    onPill=()=>{},
    category='Sample Category'
}){
    return(
        <Wrapper className="pill"> 
        <Pill onClick={onPill}>
            <PillText variant='pill'>{category}</PillText>
        </Pill>
        </Wrapper>
    )
}
