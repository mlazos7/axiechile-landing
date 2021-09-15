import React from "react";
import AxieLogo from "./../assets/img/logo.png";
import styled from "styled-components";

const HeaderStyled = styled.header``;

const LogoStyled = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  img {
    width: 100px;
    height: auto;
    transform: scaleX(-1);
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <img src={AxieLogo} alt="Axie" />
      </LogoStyled>
    </HeaderStyled>
  );
};

export default Header;
