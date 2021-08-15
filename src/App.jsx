import AxieLogo from "./assets/img/logo_axiechileweb.png";
import SLPIcon from "./assets/img/slp_icon.png";
import ScholarIcon from "./assets/img/scholar_icon.png";
import CountryIcon from "./assets/img/country_icon.png";
import Axie1 from "./assets/img/axie_1.png";
import Axie2 from "./assets/img/axie_2.png";
import Axie3 from "./assets/img/axie_3.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { TokenBox } from "./components/TokenBox.jsx";

function App() {
  const telegramChannel = "https://t.me/joinchat/91fRo7oHNOsyMDUx";
  return (
    <div className="App">
      <TokenBox />

      <main className="main">
        <div className="main__header">
          <h1>Axie Chile</h1>
          <h2>
            Nuevos Scholarships <span>pronto!</span>
          </h2>
          <a
            href={telegramChannel}
            className="button"
            rel="noreferrer"
            target="_blank"
          >
            Únete a la comunidad
          </a>
        </div>
        <div className="main__image">
          <img src={AxieLogo} alt="Axie" />
        </div>
      </main>
      <section className="data">
        <div className="data__box data__scholar">
          <div className="box-header">
            <img src={ScholarIcon} alt="Scholarships" />
            <p className="number">23</p>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptate molestiae distinctio eius rem, obcaecati animi, id saepe
            ratione quo hic quibusdam necessitatibus voluptatibus doloribus
            eaque earum explicabo temporibus odit?
          </p>
        </div>
        <div className="data__box data__claim">
          <div className="box-header">
            <img src={SLPIcon} alt="SLP Claimed" />
            <p className="number">37530</p>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            autem exercitationem quidem voluptatem tenetur suscipit corporis
            assumenda libero amet, non voluptatibus iure dignissimos nisi
            reiciendis cum sed magni corrupti maxime.
          </p>
        </div>
        <div className="data__box data__country">
          <div className="box-header">
            <img src={CountryIcon} alt="Countries" />
            <p className="number">4</p>
          </div>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            asperiores aspernatur, voluptatibus quae earum totam dolor ad
            accusantium, voluptates omnis pariatur dolores voluptatum! Animi
            magni reiciendis repellat repudiandae maxime minus?
          </p>
        </div>
      </section>

      <section className="our">
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
      <section className="joinus">
        <h2>Dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quis
          exercitationem laudantium vel voluptatibus expedita et tenetur dolorum
          voluptate! Recusandae nesciunt rem illum non et odio incidunt sed,
          quia deserunt!
        </p>

        <a
          href={telegramChannel}
          className="button"
          rel="noreferrer"
          target="_blank"
        >
          Únete a la comunidad
        </a>

        <div className="axie axie-l">
          <img src={Axie2} alt="Axie" />
        </div>
      </section>
      <footer>
        <IconContext.Provider
          value={{ className: "social--icon", size: "32px" }}
        >
          <div className="social">
            <AiFillTwitterCircle />
            <a href={telegramChannel} rel="noreferrer" target="_blank">
              <RiTelegramFill />
            </a>
          </div>
        </IconContext.Provider>

        <p>&copy; Copyright AxieChile. All rights reserved.</p>
        <div className="axie axie-r">
          <img src={Axie3} alt="Axie" />
        </div>
      </footer>
    </div>
  );
}

export default App;
