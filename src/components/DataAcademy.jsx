import React from "react";
import SLPIcon from "./../assets/img/slp_icon.png";
import ScholarIcon from "./../assets/img/scholar_icon.png";
import CountryIcon from "./../assets/img/country_icon.png";
import styled from "styled-components";

const DataStyled = styled.article`
  display: flex;
  flex-direction: row;
  min-height: 450px;

  .card {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 90px;
      height: auto;
    }

    .number {
      font-family: "Old Standard TT", serif;
      font-size: 2rem;
      font-weight: bold;
    }

    &__description {
      text-align: justify;
    }
  }

  @media only screen and (max-width: 1024px) {
    height: auto;
    flex-direction: column;

    .card {
      &__header {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;

const DataAcademy = () => {
  return (
    <DataStyled>
      <div className="card bg--green">
        <div className="card__header">
          <img src={ScholarIcon} alt="Scholarships" />
          <p className="number">43</p>
        </div>
        <p className="card__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptate molestiae distinctio eius rem, obcaecati animi, id saepe
          ratione quo hic quibusdam necessitatibus voluptatibus doloribus eaque
          earum explicabo temporibus odit?
        </p>
      </div>
      <div className="card bg--light">
        <div className="card__header">
          <img src={SLPIcon} alt="SLP Claimed" />
          <p className="number">140000</p>
        </div>

        <p className="card__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          autem exercitationem quidem voluptatem tenetur suscipit corporis
          assumenda libero amet, non voluptatibus iure dignissimos nisi
          reiciendis cum sed magni corrupti maxime.
        </p>
      </div>
      <div className="card bg--yellow">
        <div className="card__header">
          <img src={CountryIcon} alt="Countries" />
          <p className="number">6</p>
        </div>

        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          asperiores aspernatur, voluptatibus quae earum totam dolor ad
          accusantium, voluptates omnis pariatur dolores voluptatum! Animi magni
          reiciendis repellat repudiandae maxime minus?
        </p>
      </div>
    </DataStyled>
  );
};

export default DataAcademy;
