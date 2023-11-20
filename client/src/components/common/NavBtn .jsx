/* eslint-disable react/prop-types */

import { styled } from "styled-components";

const NavBtn = ({ content }) => {
  return (
    <div className="maincontent">
      <NavButton>{content}</NavButton>
    </div>
  );
};

const NavButton = styled.button`
  background-color: #ffffffe8;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;

  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
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
  transform: translate3d(0, 2px, 0);

  &:hover {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;

export default NavBtn;
