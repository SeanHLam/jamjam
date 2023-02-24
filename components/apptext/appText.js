import styled from 'styled-components';
import { Typography } from "@mui/material";

const Text = styled(Typography)`
color: ${({col}) => 
    col === 'black' && '#29252d' ||
    col === 'sand' && '#f3f3f0' ||
    col === 'green' && '#aac5bf' ||
    col === 'pink' && '#dd727f' ||
    col === 'gray' && '#A9A9A9' ||
    col === 'white' && '#FFFFFF' ||
    '#29252d'
    };

width: ${ props => props.widwidth};
text-align: ${ props => props.txtalign};
padding: ${ props => props.padding};
margin ${ props => props.margin};
white-space: pre-line;
`

export default function AppText({
    text="Sample Text",
    c="black",
    wdth="0",
    align="left",
    variant='header',
    margin='0',
    padding='0',
    onText=()=>{},
}){
    return (
        <Text variant={variant} padding={padding} txtalign={align} margin={margin} col={c} widwidth={wdth} onClick={onText}>
            {text}
        </Text>
    )
}