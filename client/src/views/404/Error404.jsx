import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/pokeback-assets/homeBackground.png";
const Error404 = () => {
  return (
    <MainDiv>
      <ErrorText>Error404</ErrorText>
    </MainDiv>
  );
};

export default Error404;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-content: center;
  z-index: -2;
  background-image: url(${bgImg});
  background-size: 1024px 100%;
  background-repeat: repeat-x;
  background-attachment: fixed;
  font-family: inherit;
`;
const ErrorText = styled.h2`
  color: var(--brightYellow);
  font-size: 120px;
  font-family: "PokemonSolidFn";
`;
