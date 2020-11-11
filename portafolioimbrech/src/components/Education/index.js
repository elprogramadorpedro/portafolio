import React from "react";
import ProspParagrafEducation from "../PropsParagrafEducation";
import {
  DivEducation,
  DivTitleEducation,
  DivThreeBoxInfo,
  BoxInfoOne,
  BoxInfoTwo,
  BoxInfoThree,
} from "./styles";

export function Education() {
  return (
    <div>
      <DivEducation>
        <DivTitleEducation>Educação</DivTitleEducation>

        <DivThreeBoxInfo>
          <BoxInfoOne>
            <ProspParagrafEducation
              title={"Engenheiro Industrial"}
            ></ProspParagrafEducation>
            <ProspParagrafEducation
              description={
               'Olá, meu nome completo é Pedro Antonio Villalba Imbrech. Sou venezuelano em 2010 comecei a estudar minha primeira graduação em engenharia industrial, no Instituto Universitário Politécnico "Santiago Mariño", terminei minha carreira profissional em 2015, uma das minhas disciplinas preferidas era informática, e controle de qualidade foram 5 anos de estudos nos quailidade.'
              }
            />
          </BoxInfoOne>

          <BoxInfoTwo>
            <ProspParagrafEducation
              title={"Curso de Web Full Stack na Labenu"}
            ></ProspParagrafEducation>
            <ProspParagrafEducation
              description={
               'Emigrei para o Brasil no final de 2019 para estudar tecnologia, resolvi entrar em um processo seletivo em uma empresa de educação em 2020, após uma espera de 2 semanas recebi a resposta maravilhosa que havia sido selecionada, em um curso para ser treinado como programador full stack o tempo de carga das salas de segunda a sexta das 8h às 17h, durante 6 meses.'
              }
            />
          </BoxInfoTwo>

          <BoxInfoThree>
            <ProspParagrafEducation title={"Fundamentos de Programação.."}>
              {" "}
            </ProspParagrafEducation>
            <ProspParagrafEducation
              description={
                "Curso realizado na Udemy onde aprendi partindo das bases teóricas, passando pelos conceitos fundamentais, conhecendo as estruturas algorítmicas através de exercícios práticos em pseudocódigo, depois realizando a análise de cada algoritmo através de fluxogramas."
              }
            />
          </BoxInfoThree>
        </DivThreeBoxInfo>
      </DivEducation>
    </div>
  );
}
