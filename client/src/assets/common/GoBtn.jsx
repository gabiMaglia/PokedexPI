/* eslint-disable react/prop-types */

import { styled } from 'styled-components'

const GoBtn = ({content}) => {
  return (
    <GoButton>{content}</GoButton>
  )
}


const GoButton = styled.button`
    position: relative;
    left: -54.5%;
    width: 50px;
    line-height: 26px;
    border-radius: 10px;
    text-align: center;
    margin-top: 25px;
    background: none;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.2s ease-in;
    font-weight: 800;
    border: .1px solid #f4faf3;
    font-size: 40px;
    background-color: white;
    color: black;
    border: .1px solid #000000;
    
    &:hover {
      background-color: black;
      color: #ffffff;
      
      
      /* transform: scale(1.01); */
    }



`

export default GoBtn