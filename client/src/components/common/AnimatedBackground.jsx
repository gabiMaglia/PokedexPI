import React from "react";
import styled, { keyframes } from "styled-components";
import bgImg from "../../assets/pokeback-assets/homeBackground.png";
import pikachu from "../../assets/pokeback-assets/homeBackground.png";

const AnimatedBackground = () => {
  return <Bg />;
};

export default AnimatedBackground;

const animatedBackground = keyframes`
  from { background-position: 100% 0; }
  to { background-position: 0 0; }
`;

const Bg = styled.div`

  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
  background-image: url(${bgImg});
  background-size: 1024px 100%;
  background-repeat: repeat-x;
  background-attachment: fixed;
  animation: ${animatedBackground} 40s linear infinite;

`;

