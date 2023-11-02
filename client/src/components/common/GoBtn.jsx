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
    border: .1px solid #000000;
    background-color: black;
    color: #ffffff;
    
    &:hover {
      box-shadow: rgba(173, 173, 207, 0.1) 0px 8px 24px, rgba(243, 243, 255, 0.1) 0px 16px 56px, rgba(186, 186, 204, 0.1) 0px 24px 80px;
      /* font-size: 50px; */
      background-color: white;
      color: black;
      transform: scale(1.1);
      
      
      /* transform: scale(1.01); */
    }



`

export default GoBtn