import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import codecode from "../../src/components/pics/codecode.svg";

const PositionFooter = styled.div`
  display: flex;
  background-image: url(${codecode});
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
`;

export function FooterContato() {
  return (
    <PositionFooter>
      <Footer></Footer>
    </PositionFooter>
  );
}

export default FooterContato;
