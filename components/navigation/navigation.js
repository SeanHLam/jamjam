import { Link, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import { useRouter } from 'next/router'
import AppText from "../apptext/apptext";

const Wrapper = styled.div`
width:100vw;
background-color: transparent;
padding:0.3em 2.5em;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0%;
z-index:10;
backdrop-filter:blur(1px);    
/* filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06)); */
`

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


export default function Navigation() {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 35) {
                setScrolled(true);
            } else if (window.scrollY < 35) {
                setScrolled(false);
            }
        };
    }, []);



    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    display:'flex',
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
  };

    return (
        <Wrapper className={scrolled ? `${styles.navscroll}` : ""}>
            <Image onClick={()=>router.push("/home")} src="/logo.svg" alt="JamJam Logo" width={65} height={65}/>

            <GridViewRoundedIcon onClick={toggleMenu} color="primary" sx={{ fontSize: 40 }} />

            <Modal
                backdrop
                open={menu}
                onBackdropClick={() => setMenu(!menu)}
            >
                <Box sx={style}>
                 <AppText c="sand" variant="header"/>
                 <AppText/>

                </Box>
            </Modal>

        </Wrapper>
    )
}