import React from "react";

import '../../static/sass/global.sass'
import '../../static/sass/pages.sass'
import '../../static/sass/pages-mobile.sass'

import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import OnasP1 from "../components/OnasP1"
import OnasP3 from "../components/OnasP3"
import OnasP2 from "../components/OnasP2"

export default function Onas() {
  const scrollTop = () => {
    if(typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  return (<div className="pageContainer">
    <PageHeader />

    <OnasP1 />
    <OnasP2 />
    <OnasP3 />

    <Footer />
    <button className="moveUpBtn" onClick={() => scrollTop()}>
      <img src={require("../../static/img/podwojna-strzalka.svg")} alt="do-gory" />
    </button>
  </div>)
}
