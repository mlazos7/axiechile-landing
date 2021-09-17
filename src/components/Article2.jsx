import React from "react";
import styled from "styled-components";
import Axie2 from "./../assets/img/axie_2.png";

const ArticleStyled = styled.article`
  position: relative;
  min-height: 600px;
  padding: 0 10vw;
  padding-left: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h2 {
    text-align: right;
    padding-bottom: 20px;
    font-size: 2.4em;
  }
  p {
    margin: 0;
    text-align: right;
    padding-bottom: 2vh;
    font-size: 1.4em;
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 768px) {
    padding: 0 10vw;
    align-items: center;
    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;

const Article2 = () => {
  return (
    <ArticleStyled className="bg--white">
      <h2>Súmate a la revolución del play-to-earn jugando Axie Infinity</h2>
      <p>
        Axie Infinity es un juego online competitivo del tipo play-to-earn que utiliza la
        tecnología blockchain. 
      </p>
      <p> En el juego, se tiene que formar un equipo de tres
        Axies para competir con otros rivales. Cada Axie es representado por un Non
        Fungible Token (NFT), convirtiendo a los mismos en activos
        coleccionables digitales.</p>
        <p>Al ganar batallas y completar misiones obtienes como recompensa $SLP, un token ERC-20 que puede ser tradeado en los principales exchanges</p>

      {/* <a
          href={googleFormLink}
          className="button"
          rel="noreferrer"
          target="_blank"
        >
          Únete a la Academia
        </a> */}

      <div className="axie axie-l">
        <img src={Axie2} alt="Axie" />
      </div>
    </ArticleStyled>
  );
};

export default Article2;
