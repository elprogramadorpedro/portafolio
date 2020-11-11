import React from "react";
import SobreMin from "../SobreMim";
import {
  DivHeader,
  DivSubHeader,
  DivSpace,
  DivLogo,
  DivLogoonly,
  DivBoxoptions,
  DivQuemSou,
  DivProjetos,
  Contato,
  DivSpaco139,
  DivRedSocial,
  DivRedSocialColums,
  DivLink,
  DivWhat,
  DivGithup,
  DivTwter,
  DivInsta,
  DivBoxText,
  DivBoxvacio27,
  DivBoxtextIam,
  DivBoxtexDesenvolvedor,
  DivBoxTextaIlove,
  DivBoxtextIamparagraf,
  DivBoxtextIamNicknameparagraf,
} from "./styles";

import github from "../pics/github.svg";
import instag from "../pics/instag.svg";
import linked from "../pics/linked.svg";
import twiter from "../pics/twiter.svg";
import pedrito from "../pics/pedrito.svg";
import what from "../pics/what.svg";
import { WhatIdo } from "../WhatIdo";
import { Education } from "../Education";
import { MyProjects } from "../MyProjects";
import { Footer } from "../Footer";
import {  Link } from "react-router-dom";



export function LandingPage() {
  return (
    <div>
      <DivHeader>
        <DivSubHeader>
          <DivSpace></DivSpace>
          <DivLogo>
            <DivLogoonly>
              <img src={pedrito} alt="" />
            </DivLogoonly>

            <DivBoxoptions>

           
            
            <Link to={'/perfil'}>
            <DivQuemSou>Quem Sou</DivQuemSou>
        </Link>  



        <Link to={'/projetos'}>
        <DivProjetos>Projetos</DivProjetos>
        </Link>


        <Link to={'/contato'}>
        <Contato>Contato</Contato>
        </Link>
              


            </DivBoxoptions>
          </DivLogo>
        </DivSubHeader>
        <DivSpaco139></DivSpaco139>

        <DivRedSocial>
          <DivRedSocialColums>
            <DivLink>
            <a href="https://www.linkedin.com/in/pedro-antonio-villalba-imbrech-aa61841a1/" target="blanck">
              <img src={linked} alt=""  />     
           </a>

            </DivLink>


            <DivWhat>
            <a href="https://wa.me/<+5521968180170>" target="blanck">
              <img src={what} alt=""  />     
           </a>
            </DivWhat>


            <DivGithup>
            <a href="https://github.com/elprogramadorpedro" target="blanck">
            <img src={github} alt="" />  
            </a>
           
              


            </DivGithup>



            <DivTwter>


              
              <a href="https://twitter.com/elprogramadorp1" target="blanck">
              <img src={twiter} alt="" />
              </a>
            
            </DivTwter>


            <DivInsta>

            <a href="https://www.instagram.com/imbrech_imbrech/" target="blanck">
            <img src={instag} alt="" />
            </a>
              



              

            </DivInsta>
          </DivRedSocialColums>

          <DivBoxText>
            <DivBoxvacio27></DivBoxvacio27>
            <DivBoxtextIam>
              <DivBoxtextIamparagraf>Eu Sou</DivBoxtextIamparagraf>
              <DivBoxtextIamNicknameparagraf>
                Pedro Villalba
              </DivBoxtextIamNicknameparagraf>
            </DivBoxtextIam>

            <DivBoxtexDesenvolvedor>
              Desenvolvedor Web Full Stack
            </DivBoxtexDesenvolvedor>

            <DivBoxTextaIlove>
              Apaxonado por tecnologia e programação
            </DivBoxTextaIlove>
          </DivBoxText>
        </DivRedSocial>
      </DivHeader>
      <SobreMin></SobreMin>
      <WhatIdo></WhatIdo>
      <Education></Education>
      <MyProjects></MyProjects>
      <Footer></Footer>
   
    </div>
  );
}
