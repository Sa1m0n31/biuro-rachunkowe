import React from "react";

import '../../static/sass/global.sass'
import '../../static/sass/style.sass'
import '../../static/sass/mobile.sass'

import LandingPage from "../components/LandingPage"
import Oferta from "../components/Oferta"
import InfoBox from "../components/InfoBox"
import Cerfytikaty from "../components/Certyfikaty"
import Referencje from "../components/Referencje"
import Form from "../components/Form"
import Footer from "../components/Footer"

export default function Home() {
  const scrollTop = () => {
    if(typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  return (<div className="container">
    <LandingPage />
    <Oferta />
    <InfoBox />
    <Cerfytikaty />
    <Referencje />
    <Form />
    <Footer />
    <button className="moveUpBtn" onClick={() => scrollTop()}>
      <img src={require("../../static/img/podwojna-strzalka.svg")} alt="do-gory" />
    </button>
    </div>)
}
