import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Footer = ({telegram, axie}) => {
    return (
        <footer className="bg--yellow">
        <IconContext.Provider
          value={{ className: "icons", size: "32px" }}
        >
          <div className="social">
            <AiFillTwitterCircle />
            <a href={telegram} rel="noreferrer" target="_blank">
              <RiTelegramFill />
            </a>
          </div>
        </IconContext.Provider>

        <p>&copy; Copyright AxieChile. All rights reserved.</p>
        <div className="axie axie-r">
          <img src={axie} alt="Axie" />
        </div>
      </footer>
    )
}

export default Footer
