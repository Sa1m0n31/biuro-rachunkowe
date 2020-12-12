import React from "react";

import '../../static/sass/style.sass';
import LandingPage from "../components/LandingPage"
import Oferta from "../components/Oferta"
import InfoBox from "../components/InfoBox"

export default function Home() {
  return (<div className="container">
    <LandingPage />
    <Oferta />
    <InfoBox />
    </div>)
}
