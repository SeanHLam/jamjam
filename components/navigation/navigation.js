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
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";


const Wrapper = styled.div`
width:100vw;
background-color: transparent;
padding:1em 5em;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0%;
z-index:10;
backdrop-filter:blur(1px);   
filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
`

const Text = styled(Typography)`
color:var(--sand-color);
text-align: left;
cursor: pointer;
width:0%;
&:hover{
    transition: 0.5s ease;
    color:var(--pink-color);
}
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
    padding: '2em 1em',
    margin: '0 1em',
    outline: 'none'
    };

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          }
        }
      };

    const menus = {
        hidden: { y: 300, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "linear",
            type: "spring",
            stiffness: 100, damping: 30
        }
        }
    };

    const logout = () => {
        
       
        signOut({callbackUrl:"/"})
    }

    return (
        <Wrapper className={scrolled ? `${styles.navscroll}` : ""}>
            <Image onClick={()=>router.push("/home")} src="/logo.svg" alt="JamJam Logo" width={65} height={65}/>

            <GridViewRoundedIcon onClick={toggleMenu} color="primary" sx={{ fontSize: 40 }} />

            <Modal
                sx={{backgroundColor: "rgba(0, 0, 0, 0.6)",}}
                backdrop
                open={menu}
                onBackdropClick={() => setMenu(!menu)}   
            >
                
                <Box
                onClick={() => setMenu(!menu)}
                 sx={style}> 
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    style={{listStyle:"none"}}
                    >
                    <motion.li variants={menus}>
                        <Text onClick={()=>router.push("/home")} variant={"navText"}>HOME</Text>
                    </motion.li>
                    <motion.li variants={menus}>
                        <Text onClick={()=>router.push("/music")} variant={"navText"}>MUSIC</Text>
                    </motion.li>
                    <motion.li variants={menus}>
                        <Text onClick={()=>router.push("/about")} variant={"navText"}>ABOUT</Text>
                    </motion.li>
                    <motion.li variants={menus}>
                        <Text onClick={logout} variant={"button"}>LOGOUT</Text>
                    </motion.li>
                </motion.ul>
                </Box>

            </Modal>

        </Wrapper>
    )
}