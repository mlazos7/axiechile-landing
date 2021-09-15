import React from 'react'
import styled from 'styled-components';
import { Timeline } from "react-twitter-widgets";


const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLScHCErpcBwzXJx6ndsb_ZTjBMI1x9TMYjPLtOxwY7RvlPdVAA/viewform?usp=sf_link";

const HeroStyled = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;



const Hero = () => {
    return (
        <HeroStyled>
             <div>
          <h1>Academia AxieChile</h1>
          <h2>
            Scholarships <span>abiertos!</span>
          </h2>
          <a
          type="button"
            href={googleFormLink}
            className="button"
            rel="noreferrer"
            target="_blank"
          >
            
            Únete a la Academia
          </a>

          
        </div>
        <div>
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
    )
}

export default Hero
