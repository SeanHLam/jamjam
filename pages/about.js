import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import AppText from "../components/apptext/apptext";
import { CardMedia } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Navigation from '../components/navigation/navigation'


export default function About() {

    return (

        <div>
            <Navigation></Navigation>
            <AppText
                text="ABOUT US"
            ></AppText>
        </div>
    )
}