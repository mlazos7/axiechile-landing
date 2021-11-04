import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";
import { AiFillInstagram } from 'react-icons/ai';
import { IconContext } from "react-icons";
import styled from "styled-components";



import Axie3 from "./../assets/img/axie_3.png";

const FooterStyled = styled.footer`
  position: relative;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2vh;
  font-size: 0.8em;
`;

const Footer = ({twitter, telegram, instagram}) => {
    return (
        <FooterStyled className="bg--yellow">
                  <div className="axie axie--fotter axie-l">
          <img src={Axie3} alt="Axie" />
        </div>
        <IconContext.Provider
          value={{ className: "icons", size: "32px" }}
        >
          <div>
 

            <a href={twitter} rel="noreferrer" target="_blank">
            <AiFillTwitterCircle />
            </a>
            <a href={instagram} rel="noreferrer" target="_blank">
            <AiFillInstagram />
            </a>
            <a href={telegram} rel="noreferrer" target="_blank">
              <RiTelegramFill />
            </a>
           
          </div>
        </IconContext.Provider>

        <p>&copy; Copyright AxieChile. All rights reserved.</p>

      </FooterStyled>
    )
}

export default Footer
