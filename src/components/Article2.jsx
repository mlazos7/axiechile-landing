import React from "react";
import styled from "styled-components";
import Axie2 from "./../assets/img/axie_2.png";

const ArticleStyled = styled.article`
  position: relative;
  min-height: 450px;
  padding: 0 10vw;
  padding-left: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h2 {
    text-align: right;
  }
  p {
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
    <ArticleStyled className="bg--light">
      <h2>Súmate a la revolución del play-to-earn jugando Axie Infinity</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quis
        exercitationem laudantium vel voluptatibus expedita et tenetur dolorum
        voluptate! Recusandae nesciunt rem illum non et odio incidunt sed, quia
        deserunt!
      </p>

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
