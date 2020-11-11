import React from "react";
import styled from "styled-components";

export const ParagrafEducation = styled.div`
  width: 262px;
  height: 50px;
  font-family: "Montserrat", sans-serif;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #292929;
  margin-top: 33px;
  margin-left: 33px;
  display: flex;
`;

export const ParagrafDescription = styled.div`
  width: 267px;
  height: 122px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #292929;
  margin-left: -262px;
  margin-top: 12px;
  display: flex;
`;

export function ProspParagrafEducation(props) {
  return (
    <div>
      <ParagrafEducation>{props.title}</ParagrafEducation>
      <ParagrafDescription>{props.description}</ParagrafDescription>
    </div>
  );
}

export default ProspParagrafEducation;
