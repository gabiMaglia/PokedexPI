/* eslint-disable react/prop-types */

import styled from "styled-components";
/**
 * This function represents the NavBar buttons
 *
 * @returns {React.JSX}
 */
const NavBtn = ({ content, type, color }) => {
 
  return <SearchButton style={{color:`${color? color : 'var(--mainFontColor)' }`}} type={type}>{content}</SearchButton>;
};
const SearchButton = styled.button`
  /* for button */
  text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  text-align: right;
 
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: var(--mainFontColor) 1px 0 5px;
  background: none;
  cursor: pointer;

  background: none;
  border: none;
  padding: 10px;
  margin: 0;
  font: inherit;
  
  &::hover {
    color: white;
  }
`;
export default NavBtn;
