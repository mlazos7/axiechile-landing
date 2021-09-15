import React from "react";
import Axie1 from "./../assets/img/axie_1.png";
import styled from "styled-components";

const ArticleStyled = styled.article`
  position: relative;
  font-size: 0.9em;
  padding: 0 10vw;
  padding-right: 30vw;
  min-height: 350px;
  display: flex;
  align-items: center;
  background-color: $background-color;

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 768px) {
    padding: 0 10vw;
  }
`;

const Article1 = () => {
  return (
    <ArticleStyled className="bg--white">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
        perferendis assumenda tempora maiores voluptatum nesciunt minus ex
        perspiciatis! Modi ratione magni nihil! Aliquid dignissimos magnam
        voluptatem sint, esse nihil nisi! Sunt aut quae id laudantium quis,
        repellat omnis vero cumque earum iusto excepturi soluta exercitationem
        laborum harum, voluptates aliquid voluptate porro consectetur. Earum,
        quas! Cumque minima sapiente dolore eligendi eum. Eveniet iste, cumque
        ratione eius cum fuga autem dolore perspiciatis iure dolorum minus
        pariatur reprehenderit a. Molestiae reiciendis ipsam odio blanditiis
        eaque deleniti labore, ducimus.
      </p>
      <div className="axie axie-r">
        <img src={Axie1} alt="Axie" />
      </div>
    </ArticleStyled>
  );
};

export default Article1;
