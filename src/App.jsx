import AxieLogo from "./assets/img/logo.png";
import Axie1 from "./assets/img/axie_1.png";
import Axie2 from "./assets/img/axie_2.png";
import Axie3 from "./assets/img/axie_3.png";

// import TokenBox from "./components/TokenBox.jsx";
import SectionData from "./components/SectionData";
import Footer from "./components/Footer";
import React from "react";
import { Timeline } from "react-twitter-widgets";

function App() {
  const telegramChannel = "https://t.me/joinchat/91fRo7oHNOsyMDUx";
  const twitter = "https://twitter.com/AxieChile";
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLScHCErpcBwzXJx6ndsb_ZTjBMI1x9TMYjPLtOxwY7RvlPdVAA/viewform?usp=sf_link";
  return (
    <React.Fragment>
      {/* <TokenBox /> */}
      <header>
        <div className="logo">
          <img src={AxieLogo} alt="Axie" />
        </div>
      </header>
      <main className="hero">
        <div className="hero__title">
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
        <div className="hero__twitter">
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
      </main>

      <SectionData />

      <section className="section-our">
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
      </section>
      <section className="section-join bg--light">
        <h2>Súmate a la revolución del play-to-earn jugando Axie Infinity</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quis
          exercitationem laudantium vel voluptatibus expedita et tenetur dolorum
          voluptate! Recusandae nesciunt rem illum non et odio incidunt sed,
          quia deserunt!
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
      </section>

      <Footer twitter={twitter} telegram={telegramChannel} axie={Axie3} />
    </React.Fragment>
  );
}

export default App;
