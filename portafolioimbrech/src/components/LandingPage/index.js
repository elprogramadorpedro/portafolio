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
              <DivQuemSou>Quem Sou</DivQuemSou>

              <DivProjetos>Projetos</DivProjetos>

              <Contato>Contato</Contato>
            </DivBoxoptions>
          </DivLogo>
        </DivSubHeader>
        <DivSpaco139></DivSpaco139>

        <DivRedSocial>
          <DivRedSocialColums>
            <DivLink>
              <img src={linked} alt="" />
            </DivLink>
            <DivWhat>
              <img src={what} alt="" />
            </DivWhat>
            <DivGithup>
              <img src={github} alt="" />
            </DivGithup>
            <DivTwter>
              <img src={twiter} alt="" />
            </DivTwter>
            <DivInsta>
              <img src={instag} alt="" />
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
    </div>
  );
}
