import React from "react";
import {
  DivFooter,
  DivTextTitle,
  DivTextConten,
  RedSocial,
  DivYea,
  DivAuthor,
} from "./styles";
import linx from "../pics/linx.svg";
import wax from "../pics/wax.svg";
import git from "../pics/git.svg";
import twi from "../pics/twi.svg";
import insta from "../pics/insta.svg";

export function Footer() {
  return (
    <DivFooter>
      <DivTextTitle>Contrata-me!</DivTextTitle>

      <DivTextConten>
        Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver
        e evoluir na minha carreia profissional.
        <br />
        <br />
        E-mail para contato: elprogramadorpedro@gmail.com Celular: (21)
        96818-0170
      </DivTextConten>

      <RedSocial>
        <a
          href="https://www.linkedin.com/in/pedro-antonio-villalba-imbrech-aa61841a1/"
          target="blanck"
        >
          <img src={linx} alt="" />
        </a>

        <a href="https://wa.me/<+5521968180170>" target="blanck">
          <img src={wax} alt="" />
        </a>

        <a href="https://github.com/elprogramadorpedro" target="blanck">
          <img src={git} alt="" />
        </a>

        <a href="https://twitter.com/elprogramadorp1" target="blanck">
          <img src={twi} alt="" />
        </a>

        <a href="https://www.instagram.com/imbrech_imbrech/" target="blanck">
          <img src={insta} alt="" />
        </a>
      </RedSocial>

      <DivYea>
        <DivAuthor>© 2020 Pedro Villalba</DivAuthor>
      </DivYea>
    </DivFooter>
  );
}
