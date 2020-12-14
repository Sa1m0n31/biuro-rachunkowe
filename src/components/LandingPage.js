import React, { useEffect } from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import TopBar from "./TopBar"
import BottomBar from "./BottomBar"

const LandingPage = () => {
  useEffect(() => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      window.addEventListener("scroll", () => {
        if(window.pageYOffset > 200) {
          document.querySelector(".moveUpBtn").style.opacity = 1;
        }
        else {
          document.querySelector(".moveUpBtn").style.opacity = 0;
        }
      });
    }
  });

  const data = useStaticQuery(graphql`
      query LandingQuery {
          landing: file(relativePath: { eq: "landing.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 1640, maxHeight: 750) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  return (<section className="landingPage">
    <Img className="landingPage__img" loading="eager" fluid={data.landing.childImageSharp.fluid} alt="alt" />
    <TopBar frontPage={true} />
    <h1 className="landingPage__slogan">
      Kompleksowa księgowość dla małych i dużych firm
    </h1>
    <button className="btn btn--callToAction">
      <span className="btn--txt">Sprawdź ofertę</span>
      <img className="btn--img" src={require("../../static/img/strzalka-okragla.svg")} alt="alt" />
    </button>
    <BottomBar />
  </section>)
}

export default LandingPage;