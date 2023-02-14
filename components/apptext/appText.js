import styled from 'styled-components';
import { Typography } from "@mui/material";

const Text = styled(Typography)`
color: ${({col}) => 
    col === 'jetBlack' && '#29252d' ||
    col === 'sand' && '#ecede8' ||
    col === 'green' && '#aac5bf' ||
    col === 'pink' && '#dd727f' ||
    col === 'black' && '#151513' ||
    col === 'gray' && '#c5c5c5' ||
    '#29252d'
};


width: ${ props => props.widwidth};
text-align: ${ props => props.txtalign};
margin: ${ props => props.margin};
`

export default function AppText({
    text="Sample Text",
    c="jetBlack",
    wdth="100%",
    align="left",
    margin='0',
    variant='header',
    onText=()=>{},
}){
    return (
        <Text  variant={variant} txtalign={align} margin={margin} col={c} widwidth={wdth} onClick={onText}>
            {text}
        </Text>
    )
}