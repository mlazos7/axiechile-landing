import AxieImage from "./assets/img/axie.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import Flag from "react-world-flags";

function App() {
  const telegramChannel = "https://t.me/joinchat/91fRo7oHNOsyMDUx";
  return (
    <div className="App">
      <header>
        <h1>AxieChile</h1>
        <Flag code="cl" height="20" />
      </header>
      <main>
        <h2>
          Nuevos Scholarships <span>pronto!</span>
        </h2>
        <p>Únete a la comunidad de Telegram</p>
        <a href={telegramChannel} rel="noreferrer" target="_blank">
          Subscríbete
        </a>
        <img src={AxieImage} alt="Axie" />
      </main>
      <footer>
        <IconContext.Provider
          value={{ className: "social--icon", size: "32px" }}
        >
          <div class="social">
            <AiFillTwitterCircle />
            <a href={telegramChannel} rel="noreferrer" target="_blank">
              <RiTelegramFill />
            </a>
          </div>
        </IconContext.Provider>

        <p>&copy; Copyright AxieChile. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
