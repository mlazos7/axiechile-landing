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
    flex-basis: 100%;

    img {
      width: 90px;
      height: auto;
    }

    .number {
      /* font-family: "Old Standard TT", serif; */
      font-size: 2.7em;
      font-weight: normal;
      /* font-style: italic; */
    }

    &__description {
      font-size: 1.4em;
      text-align: justify;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;

    .card {
      align-items: center;

      &__header {
        width: 100%;
        min-height: 350px;
        /* display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly; */
      }
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;

const DataAcademy = () => {
  const ScholarCount = 50;
  const SLPClaimed = 150000;

  return (
    <DataStyled>
      <div className="card bg--green">
        <img src={ScholarIcon} alt="Scholarships" />
        <p className="number">{ScholarCount}</p>

        <p className="card__description">
          {`Nuestra Academia cuenta con más de ${ScholarCount} miembros.`}
        </p>
      </div>
      <div className="card bg--light">
        <img src={SLPIcon} alt="SLP Claimed" />
        <p className="number">{SLPClaimed}</p>

        <p className="card__description">
          Los miembros de la Academia han recolectado más de {SLPClaimed} SLP
        </p>
      </div>
      <div className="card bg--yellow">
        <img src={CountryIcon} alt="Countries" />
        <p className="number">6</p>

        <p className="card__description">
          Tenemos presencia en 6 países de Latino America.
        </p>
      </div>
    </DataStyled>
  );
};

export default DataAcademy;
