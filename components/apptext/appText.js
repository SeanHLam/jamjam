import styled from 'styled-components';

// const righteous = Righteous({
//     weight: ['400'],
//     style: ['normal'],
//     subsets: ['latin'],
//   })

// const sarabun = Sarabun({
// weight: ['400'],
// style: ['normal'],
// subsets: ['latin'],
// })

const Text = styled.div`
font-size: ${({size}) => 
        size === 'header' && '28px' ||
        size === 'headerSmall' && '16px' || 
        size === 'bodyLarge' && '20px' || 
        size === 'bodyMedium' && '16px' || 
        size === 'bodySmall' && '12px' ||
        size === 'pill' && '14px' ||
        size === 'button' && '24px' ||
        size === 'buttonSmall' && '16px' ||
        '16px'
  };

font-family: ${({size}) => 
        size === 'header' && "Righteous" ||
        size === 'headerSmall' && "Righteous" || 
        size === 'bodyLarge' && "Sarabun" || 
        size === 'bodyMedium' && "Sarabun" || 
        size === 'bodySmall' && "Sarabun" ||
        size === 'pill' && "Righteous" ||
        size === 'button' && "Righteous" ||
        size === 'buttonSmall' && "Righteous" ||
        "Sarabun"
  };

    color: ${({col}) => 
        col === 'jetBlack' && '#29252d' ||
        col === 'sand' && '#ecede8' ||
        col === 'green' && '#aac5bf' ||
        col === 'pink' && '#dd727f' ||
        col === 'black' && '#151513' ||
        col === 'gray' && '#c5c5c5' ||
        '#29252d'
    };


    width: ${ props => props.WidWidth};
    text-align: ${ props => props.txtalign};
    padding-left: ${ props => props.paddingLeft};
    margin: ${ props => props.margin};
`

export default function AppText({
    style="headerSmall",
    text="Sample Text",
    c="jetBlack",
    wdth="100%",
    align="left",
    paddingleft='0',
    margin='0',
    onText=()=>{},
}){
    return (
        <Text margin={margin} paddingLeft={paddingleft} col={c} size={style} txtalign={align} WidWidth={wdth}>
            {text}
        </Text>
    )
}