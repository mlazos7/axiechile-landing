import AxieLogo from "./assets/img/logo_axiechileweb.png";
import Axie1 from "./assets/img/axie_1.png";
import Axie2 from "./assets/img/axie_2.png";
import Axie3 from "./assets/img/axie_3.png";


import TokenBox from "./components/TokenBox.jsx";
import SectionData from "./components/SectionData";
import Footer from "./components/Footer";

function App() {
  const telegramChannel = "https://t.me/joinchat/91fRo7oHNOsyMDUx";
  return (
    <div className="App">
      <TokenBox />

      <main className="hero">
        <div className="hero__title">
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
        <div className="hero__image">
          <img src={AxieLogo} alt="Axie" />
        </div>
      </main>

     <SectionData/>

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

      <Footer telegram={telegramChannel} axie={Axie3}/>

    </div>
  );
}

export default App;
