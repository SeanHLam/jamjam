import PillMenu from "./pillMenu"
import { pillCategory } from "./pillCategory"
import styled from 'styled-components';
import styles from "../../styles/Home.module.css";

const Wrapper = styled.div`


@media (min-width: 0px) {
    width:100vw;
  }

@media (min-width: 820px) {
    width:75vw;
  }
@media (min-width: 1000px) {
    width:55%;
  }
overflow-x: scroll;
padding: 1em;
`

const Row = styled.div`
display:flex;
justify-content:center;
flex-direction: row;
flex-wrap: wrap;
gap:2%;
`
export default function PillMenuCard(
    {sendCategory}
    // const menus = pillCategory.map((menu) => menu)
    
){
    const getCategory = (category) => {
        
        sendCategory(category)
    }

    return (
        <Wrapper>
            <Row>
                {pillCategory.map ((o,i) => 
                <PillMenu onPill={() => getCategory(pillCategory[i])} category={pillCategory[i]} key={i}>
                </PillMenu>
                )}
            </Row>
        </Wrapper>
    )
}