import PillMenu from "./pillMenu"
import { pillCategory } from "./pillCategory"
import styled from 'styled-components';
import styles from "../../styles/Home.module.css";

const Wrapper = styled.div`
width:100vw;
overflow-x: scroll;
padding: 1em;
`

const Row = styled.div`
display:flex;
justify-content:center;
flex-direction: row;
gap:2%;
`
export default function PillMenuCard(

    // const menus = pillCategory.map((menu) => menu)

){
    return (
        <Wrapper>
            <Row>
                {pillCategory.map ((o,i) => 
                <PillMenu category={pillCategory[i]} key={i}>
                </PillMenu>
                )}
            </Row>
        </Wrapper>
    )
}