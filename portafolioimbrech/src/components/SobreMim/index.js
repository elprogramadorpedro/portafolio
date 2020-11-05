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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
            <ParaButton>CV em PDF</ParaButton>
          </ButtonOne>
        </DivInfoStack>
      </DivSobrePhotoParagraf>

      <DivSpaceTwo></DivSpaceTwo>
    </DivSobreMinn>
  );
}
export default SobreMin;
