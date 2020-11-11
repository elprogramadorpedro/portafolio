import React from "react";
import SobreMin from "../components/SobreMim";
import styled from "styled-components";
import codecode from "../../src/components/pics/codecode.svg";

const PositionSobreMin = styled.div`
  display: flex;
  background-image: url(${codecode});
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export function PerfilPedro() {
  return (
    <div>
      <PositionSobreMin>
        <SobreMin></SobreMin>
      </PositionSobreMin>
    </div>
  );
}

export default PerfilPedro;
