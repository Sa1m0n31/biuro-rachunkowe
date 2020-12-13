import React from "react";

import '../../static/sass/style.sass'
import '../../static/sass/mobile.sass'

import LandingPage from "../components/LandingPage"
import Oferta from "../components/Oferta"
import InfoBox from "../components/InfoBox"
import Cerfytikaty from "../components/Certyfikaty"
import Referencje from "../components/Referencje"
import Form from "../components/Form"

export default function Home() {
  return (<div className="container">
    <LandingPage />
    <Oferta />
    <InfoBox />
    <Cerfytikaty />
    <Referencje />
    <Form />
    </div>)
}
