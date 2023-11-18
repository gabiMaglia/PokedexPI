import styled, { keyframes } from 'styled-components';

const LoadingPokeball = () => {
  return (
    <Wrapper>
    <Pokeball />
  </Wrapper>
  )
}

export default LoadingPokeball


const framesAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Pokeball = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: ${framesAnimation} 0.8s linear 0s infinite;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid;
    top: -4px;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }
`;