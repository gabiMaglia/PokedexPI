/* eslint-disable react/prop-types */

import { styled } from "styled-components";

const PageLabel = ({ content }) => {
  return (
    <div className="maincontent">
      <PagedLabel>{content}</PagedLabel>
    </div>
  );
};

const PagedLabel = styled.div`
  background-color: #ffffffe8;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  box-sizing: border-box;
  color: #41403e;
  border: 2px solid #41403e;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.4rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: "Fuzzy Bubbles", cursive;
  font-size: 20px;
`;

export default PageLabel;
