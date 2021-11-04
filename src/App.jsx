



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
  const instagram = "https://www.instagram.com/axiechileacademia";
  
  return (
    <React.Fragment>
      {/* <TokenBox /> */}
      <Header/>
      <Hero twitter={twitter} telegram={telegramChannel} instagram={instagram}/>
      <DataAcademy/>

      <Article2/>
      <Article1/>
    

      <Footer twitter={twitter} telegram={telegramChannel} instagram={instagram}  />
    </React.Fragment>
  );
}

export default App;
