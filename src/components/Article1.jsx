import React from "react";
import Axie1 from "./../assets/img/axie_1.png";
import styled from "styled-components";

const ArticleStyled = styled.article`
  position: relative;
  font-size: 0.9em;
  padding: 0 10vw;
  padding-right: 30vw;
  min-height: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: $background-color;

  p {
    font-size: 1.4em;
  }
  h2{
    width: 100%;
    text-align: left;
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 768px) {
    h2{
      text-align: center;
    }
    padding: 0 10vw;
  }
`;

const Article1 = () => {
  return (
    <ArticleStyled className="bg--light">
      <h2>Axie Infinity - Becas</h2>
      <p>
        Si has llegado hasta aquí es porque quieres jugar a Axie Infinity pero
        la inversión inicial puede resultar elevada para ti o simplemente no
        quieres invertir tu dinero.
      </p>
      <p>
        No te preocupes, has llegado al lugar indicado, nuestra Academia esta
        creando semanalmente becas de Axie Infinity para que todos puedan jugar.
 Puedes postular y participar en los distintos sorteos que
        realizamos en las redes sociales.
      </p>
      <div className="axie axie-r">
        <img className="animate" src={Axie1} alt="Axie" />
      </div>
    </ArticleStyled>
  );
};

export default Article1;
