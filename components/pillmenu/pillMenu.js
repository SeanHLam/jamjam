import AppText from "../apptext/apptext"
import Button from "@mui/material/Button"
import styles from "../../styles/Home.module.css";
import styled from 'styled-components';

const Wrapper = styled.div`
`


export default function PillMenu({
    onPill=()=>{},
    category='Sample Category'
}){

    return(
        <Wrapper>
        <Button className={styles.pill} onClick={onPill}>
            <AppText variant='pill' text={category}>
            </AppText>
        </Button>
        </Wrapper>
    )
}