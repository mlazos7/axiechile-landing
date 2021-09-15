



// import TokenBox from "./components/TokenBox.jsx";
import DataAcademy from "./components/DataAcademy";
import Footer from "./components/Footer";
import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";

function App() {
  const telegramChannel = "https://t.me/joinchat/91fRo7oHNOsyMDUx";
  const twitter = "https://twitter.com/AxieChile";
  
  return (
    <React.Fragment>
      {/* <TokenBox /> */}
      <Header/>
      <Hero/>
      <DataAcademy/>

      <Article1/>
      <Article2/>

      <Footer twitter={twitter} telegram={telegramChannel}  />
    </React.Fragment>
  );
}

export default App;
