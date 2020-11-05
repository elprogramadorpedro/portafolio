import React from "react";
import styled from "styled-components";

export const PagrafStacks = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #ffffff;
`;

export function ProspParagrafoStack(props) {
  return <PagrafStacks>{props.title}</PagrafStacks>;
}

export default ProspParagrafoStack;
