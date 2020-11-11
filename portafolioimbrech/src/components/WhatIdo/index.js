import React from "react";
import {
  DivWhatIdo,
  DivForText,
  DivTexOquefaco,
  DivSpaceVacOne,
  DivSpaceFromBack,
  DivFromBack,
  DivTextFromEnd,
  DivTextBackEnd,
  DivBoxText,
  DivTextFromEndLong,
  DivTextBackEndLong,
  DivEducation
} from "./styles";

export function WhatIdo() {
  return (
    <div>
      <DivWhatIdo>
        <DivForText>
          <DivTexOquefaco>O que faço?</DivTexOquefaco>
        </DivForText>
        <DivSpaceVacOne></DivSpaceVacOne>
        <DivSpaceFromBack>
          <DivFromBack>
            <DivTextFromEnd>Front-End</DivTextFromEnd>
            <DivTextBackEnd>Back-End</DivTextBackEnd>
          </DivFromBack>
        </DivSpaceFromBack>

        <DivBoxText>
          <DivTextFromEndLong>
            Desenvolvimento de aplicações web utilizando React, HTML, CSS e JavaScript.
            <br />
            <br />
            Criação de sites responsivos seguindo princípio de Mobile First.
          </DivTextFromEndLong>
          <DivTextBackEndLong>
            Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s
            para comunicação com front-end seguindo princípio de Clean Code.
          </DivTextBackEndLong>
        </DivBoxText>
      </DivWhatIdo>
    </div>
  );
}
