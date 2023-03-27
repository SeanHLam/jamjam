import AppText from "../apptext/appText"
import styled from "styled-components";
import { Typography } from "@mui/material";

const Button = styled.button`
width: ${props => props.width};
background-color: ${({bgcolor}) => 
    bgcolor === 'black' && '#29252d' ||
    bgcolor === 'sand' && '#f3f3f0' ||
    bgcolor === 'pink' && '#dd727f' ||
    '#dd727f'
};

padding: ${({buttonSize}) => 
    buttonSize === 'buttonSmall' && '0.5rem 1.5rem' ||
    buttonSize === 'buttonMedium' && '0.625rem 1.75rem' ||
    buttonSize === 'buttonLarge' && '0.75rem 2rem' ||
    buttonSize === 'none' && '0' ||
    '0'
    };
margin: ${ props => props.margin};
box-shadow:none;
border:none;
border-radius:10px;
height:auto;
transition:0.5s;

&:hover {
    background-color: ${({bgcolor}) =>
        bgcolor === 'black' && '#f3f3f0' ||
        bgcolor === 'sand' && '#29252d' ||
        bgcolor === 'pink' && '#f3f3f0' ||
        '#dd727f'
    };
    
    span{
        color: ${({bgcolor}) =>
        bgcolor === 'black' && '#29252d' ||
        bgcolor === 'sand' && '#f3f3f0' ||
        bgcolor === 'pink' && '#dd727f' ||
        '#aac5bf'
    };
    }
`

export default function AppButton({
    variant='contained',
    bg='pink',
    text='Button',
    margin='auto',
    textVariant='buttonLarge',
    buttonWidth='auto',
    buttonSize='buttonLarge',
    textcolor='sand',
    textWidth='auto',
    textMargin='buttonLarge',
    onClick=()=>{},
}){
    return(
        <div>
        <Button
        variant={variant}
        bgcolor={bg}
        onClick={onClick}
        width={buttonWidth}
        buttonSize={buttonSize}
        margin={margin}
        >
            <AppText margin={textMargin} buttonSize={buttonSize} wdth={textWidth} c={textcolor} text={text} variant={textVariant}/>
        </Button>
        </div>
    )
}