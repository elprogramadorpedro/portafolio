import React from "react";
import {
  DivSobreMinn,
  DivSpaceOone,
  DivSobrePhotoParagraf,
  DivSpaceTwo,
  DivPhoto,
  DivInfoStack,
  DivSomimparagrafBold,
  DivSomosDescription,
  DivStack,
  DivToolsOne,
  DivToolsTwo,
  DivToolsThree,
  DivToolsFor,
  DivToolsFive,
  Pi,
  ButtonOne,
  ParaButton,
} from "./styles";

import ProspParagrafoStack from "../ProspParagrafoStack";

export function SobreMin() {
  return (
    <DivSobreMinn>
      <DivSpaceOone></DivSpaceOone>
      <DivSobrePhotoParagraf>
        <DivPhoto></DivPhoto>
        <DivInfoStack>
          <DivSomimparagrafBold>Sobre mim</DivSomimparagrafBold>

          <DivSomosDescription>
            Olá, meu nome completo é Pedro Antonio Villalba Imbrech, sou
            venezuelano e sou um programador full stack. Emigrei para o Brasil
            no final de 2019 para estudar tecnologia, resolvi entrar em um
            processo seletivo em uma empresa de educação em 2020, após uma
            espera de 2 semanas recebi a resposta maravilhosa que havia sido
            selecionada, em um curso para ser treinado como programador full
            stack o tempo de carga das salas de segunda a sexta das 8h
            às 17h, durante 6 meses.
          </DivSomosDescription>

          <DivStack>
            <DivToolsOne>
              <Pi></Pi>
              <ProspParagrafoStack title={"NodeJS"} />
            </DivToolsOne>

            <DivToolsTwo>
              <Pi></Pi>
              <ProspParagrafoStack title={"MySQL"} />
            </DivToolsTwo>

            <DivToolsThree>
              <Pi></Pi>
              <ProspParagrafoStack title={"HTML"} />
            </DivToolsThree>

            <DivToolsFor>
              <Pi></Pi>
              <ProspParagrafoStack title={"CSS"} />
            </DivToolsFor>

            <DivToolsFive>
              <Pi></Pi>
              <ProspParagrafoStack title={"Javascript"} />
            </DivToolsFive>
          </DivStack>

          

          <ButtonOne>
          <a 
                href="https://www.dropbox.com/s/mbdkmst574s1n39/cvpedrovillalba.pdf?dl=0"
                target="blanck" >
                  
            <ParaButton>CV em PDF</ParaButton>
</a>

          </ButtonOne>
        </DivInfoStack>
      </DivSobrePhotoParagraf>

      <DivSpaceTwo></DivSpaceTwo>
    </DivSobreMinn>
  );
}
export default SobreMin;


