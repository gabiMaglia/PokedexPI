/* eslint-disable react/prop-types */

import { styled } from "styled-components";

const PageLabel = ({ content }) => {
  return (
      <PagedLabel>{content}</PagedLabel>
  );
};

const PagedLabel = styled.div`
  background-color: #ffffffe8;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  box-sizing: border-box;
  color: #41403e;
  border: 2px solid #41403e;

  line-height: 20px;

  padding: 0.1rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  font-size: 20px;
`;

export default PageLabel;
