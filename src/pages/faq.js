import React from "react";

import '../../static/sass/global.sass'
import '../../static/sass/pages.sass'
import '../../static/sass/pages-mobile.sass'

import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

export default function Faq() {
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

    <Footer />
    <button className="moveUpBtn" onClick={() => scrollTop()}>
      <img src={require("../../static/img/podwojna-strzalka.svg")} alt="do-gory" />
    </button>
  </div>)
}
