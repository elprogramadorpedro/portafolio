import React from "react";

import {
  DivMyProjects,
  DivMyProTitle,
  DivTitleProject,
  DivPictur,
  DivPictureComputer,
  DivMycompuInfo,
  DivTextFrom,
  DivTextDescription,
  DivButton,
  NomeButton,
  SpaceRule,
  DivTitleProject4eddit,
  DivPictureInvertido,
  DivMy4edditInfo,
  My4edditDivTextFrom,
  DivDescription4eddit,
  DivButtonTwo,
  DivPictureIpad,
  TiTleLabetube,
  BoxInfoFutureTube,
  DivPictureimac,
  DivinfosFuture,
  BoxBottons,
  ButtonOne,
  ButtonTwo,
  ButtonOneText,
  ButtonTwoText,
  ButtonCentral,
  ButtonCentralNome,
} from "./styles";
import macbook from "../pics/macbook.svg";
import ipad from "../pics/ipad.svg";
import imac from "../pics/imac.svg";

export function MyProjects() {
  return (
    <div>
      <DivMyProjects>
        <DivMyProTitle>Meus projetos</DivMyProTitle>

        <DivTitleProject>Whats4</DivTitleProject>

        <DivPictur>
          <DivPictureComputer>
            <img src={macbook} alt="" />
          </DivPictureComputer>

          <DivMycompuInfo>
            <DivTextFrom>Front-end</DivTextFrom>

            <DivTextDescription>
              Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML,
              CSS. e como gerenciador de pacotes do NodeJS o npm [ou yarn, para
              quem usou yarn] Sobre a divisão dos arquivos, há dois grandes
              setores. Os components são os componentes em si do meu projeto
              (botão de enviar, inputs dos usuários messages e outros).
            </DivTextDescription>

            <DivButton>
              <a
                href="https://github.com/elprogramadorpedro/whatslab9"
                target="blanck"
              >
                <NomeButton>Ver no GitHub</NomeButton>
              </a>
            </DivButton>
          </DivMycompuInfo>
        </DivPictur>

        <SpaceRule></SpaceRule>

        <DivTitleProject4eddit>Labex</DivTitleProject4eddit>

        <DivPictureInvertido>
          <DivMy4edditInfo>
            <My4edditDivTextFrom>Front End</My4edditDivTextFrom>
            <DivDescription4eddit>
              Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML,
              CSS e uma API integrada; e como gerenciador de pacotes do NodeJS o
              npm Sobre a divisão dos arquivos, há dois grandes setores. Já os
              Containers são as páginas em si e podem ser pensadas como a união
              dos componentes para se mostrar na tela. ##Dependências npm
              install @material-ui/core@latest npm install
              @material-ui/core@3.9.3 npm install @material-ui/icons npm install
              styled-components npm install axios npm install react-router-dom
            </DivDescription4eddit>

            <DivButtonTwo>
              <a 
                href="https://github.com/elprogramadorpedro/Labexspaces"
                target="blanck" >
                <NomeButton>   Ver no GitHub</NomeButton>  </a>
              
            </DivButtonTwo>
          </DivMy4edditInfo>

          <DivPictureIpad>
            <img src={ipad} alt="" />
          </DivPictureIpad>
        </DivPictureInvertido>
        <SpaceRule></SpaceRule>

        <TiTleLabetube>FutureXabias</TiTleLabetube>
        <BoxInfoFutureTube>
          <DivPictureimac>
            <img src={imac} alt="" />
          </DivPictureimac>

          <DivinfosFuture>
            <DivTextFrom>Full Stack</DivTextFrom>
            <DivTextDescription>
              Xabiax é um projeto full stack feito para construir grandes
              histórias, dividido em duas partes, front-end e back-end. Foi
              feito com tecnologias como react, css, html, usando as seguintes
              dependências @ material-ui / core @ latest, @ material-ui / core @
              3.9.3, install styled-components, npm install axios, npm install
              react- router-dom e javascript, e o back-enf foi feito com node,
              typescript e mysql workbench.
            </DivTextDescription>
            <BoxBottons>
              <ButtonOne>


              <a 
                href="https://github.com/elprogramadorpedro/xabiaxs"
                target="blanck"
              >
                 <ButtonOneText>front-end GitHub</ButtonOneText>
              </a>



              
              </ButtonOne>
              <ButtonTwo>

              <a 
                href="https://github.com/elprogramadorpedro/Xabiax"
                target="blanck"
              >
                <ButtonTwoText>back-end GitHub</ButtonTwoText>
              </a>
               




              </ButtonTwo>
            </BoxBottons>
          </DivinfosFuture>
        </BoxInfoFutureTube>
        <ButtonCentral>
          <ButtonCentralNome>mais projetos</ButtonCentralNome>
        </ButtonCentral>
      </DivMyProjects>
    </div>
  );
}
