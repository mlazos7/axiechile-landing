import React from "react";
import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

// const googleFormLink =
//   "https://docs.google.com/forms/d/e/1FAIpQLScHCErpcBwzXJx6ndsb_ZTjBMI1x9TMYjPLtOxwY7RvlPdVAA/viewform?usp=sf_link";

const HeroStyled = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 10vh;

  .title {
    text-transform: uppercase;
    padding: 0 12%;
    padding-bottom: 4vh;
    text-align: center;
    h1 {
      margin: 0;
    }
    h2 {
      margin: 0;
      margin-top: 60px;
      margin-bottom: 6vh;
    }
    /* a {
      font-size: 1.3em;
      margin: 0 auto;
    } */
  }

  .social {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.7em;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;

    .title {
      text-align: center;
    }

    /* .button {
      margin: 0 auto;
    } */
  }

  @media only screen and (max-width: 768px) {
    .twitter {
      display: none;
    }
  }
`;

const Hero = ({twitter,telegram,instagram}) => {
  return (
    <HeroStyled>
      <div className="title">
        <h1>Academia Axie Infinity Chile</h1>
        <h2>
          Únete a la revolución <span>Play to Earn</span>
        </h2>
        {/* <a
          type="button"
          href={googleFormLink}
          className="button"
          rel="noreferrer"
          target="_blank"
        >
          Postular
        </a> */}
      </div>
      <div className="social">
        <IconContext.Provider
          value={{ color: "rgba(0, 0, 0, 0.72)", size: "60px" }}
        >

<a href={twitter} className="icons--hover" rel="noreferrer" target="_blank">
<FaTwitter />
            </a>

            <a href={instagram} className="icons--hover" rel="noreferrer" target="_blank">
            <FaInstagram />
            </a>

            <a href={telegram} className="icons--hover" rel="noreferrer" target="_blank">
            <FaTelegram />
            </a>


          {/* <div className="icons--hover">
            
            <FaTwitter />
          </div>
          <div className="icons--hover">
            <FaInstagram />
          </div>
          <div className="icons--hover">
            <FaTelegram />
          </div> */}
        </IconContext.Provider>
      </div>
      {/* <div className="twitter">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "axiechile",
          }}
          options={{
            height: "100%",
            width: "600",
            theme: "light",
          }}
        />
      </div> */}
    </HeroStyled>
  );
};

export default Hero;
