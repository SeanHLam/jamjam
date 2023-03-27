import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppText from "../apptext/appText";

const PopupDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: .5em;
  animation: popup-in 0.5s ease-in-out forwards;
  z-index: 100;
  background-color: var(--pink-color);
  margin-bottom: 1rem;
  border-radius: 10px;

  @keyframes popup-in {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
}

@keyframes popup-out {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
}
`;

export default function Popup({ message, timeout = 2000 }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, timeout);
    }
    return () => {
      clearTimeout(timer);
      if (showPopup) {
        setShowPopup(false);
      }
    };
  }, [showPopup, timeout]);

 
  return (
    <>
      {showPopup && (
        <PopupDiv>
          <AppText
            text={message}
            variant="bodyLarge"
            align="center"
            wdth="100"
            c="sand"
          ></AppText>
        </PopupDiv>
      )}
    </>
  );
}
