import React from "react";
import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";

const googleFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLScHCErpcBwzXJx6ndsb_ZTjBMI1x9TMYjPLtOxwY7RvlPdVAA/viewform?usp=sf_link";

const HeroStyled = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  .title {
    padding: 0 3vw;
    padding-bottom: 4vh;
    text-align: left;
    h1 {
      margin: 0;
    }
    h2 {
      margin: 0;
      margin-top: 1vh;
      margin-bottom: 6vh;
    }
    a {
      font-size: 1.3em;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;

    .title {
      text-align: center;
    }

    .button {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 768px) {
    .twitter{
      display: none;
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyled>
      <div className="title">
        <h1>Academia AxieChile</h1>
        <h2>
          Becas <span>disponibles!</span>
        </h2>
        <a
          type="button"
          href={googleFormLink}
          className="button"
          rel="noreferrer"
          target="_blank"
        >
          Postular
        </a>
      </div>
      <div className="twitter">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "axiechile",
          }}
          options={{
            height: "380",
            width: "480",
            theme: "light",
          }}
        />
      </div>
    </HeroStyled>
  );
};

export default Hero;
