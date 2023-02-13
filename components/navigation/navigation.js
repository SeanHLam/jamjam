import { Link, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';


const Wrapper = styled.div`
width:100vw;
background-color:transparent;
padding:0.75em 2.5em;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0%;
z-index:10;
`

export default function Navigation() {

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
        width: '80%',
        bgcolor: 'background.paper',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5%',
        boxShadow: 24,
        pt: 1.5,
        px: 1.5,
        pb: 1.5,
    };

    return (
        <Wrapper className={scrolled ? `${styles.navscroll}` : ""}>
            <Image src="/logo.svg" alt="JamJam Logo" width={65} height={65} />

            <GridViewRoundedIcon onClick={toggleMenu} color="primary" sx={{ fontSize: 40 }} />

            <Modal
                backdrop
                open={menu}
                onBackdropClick={() => setMenu(!menu)}
            >
                <Box sx={style}>
                    <div style={{ position: 'absolute' }}>hi</div>
                </Box>
            </Modal>

        </Wrapper>
    )
}