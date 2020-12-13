import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TopBar = () => {
  const data = useStaticQuery(graphql`
      query TopBarQuery {
          logo: file(relativePath: { eq: "logo.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 210, maxHeight: 138) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  const handleScroll = (arg) => {
    if((typeof document !== 'undefined')&&(typeof window !== 'undefined')) {
      let dest;
      if(arg === 1) dest = document.querySelector("#oferta");
      else dest = document.querySelector("#contact");
      dest.scrollIntoView({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  return <menu className="topBar">
    <Img className="topBar__logo" fluid={data.logo.childImageSharp.fluid} alt="alt" />
    <ul className="topBar__menu">
      <li className="topBar__menu__item">Start</li>
      <li className="topBar__menu__item">O nas</li>
      <li className="topBar__menu__item" onClick={() => handleScroll(1)}>Oferta</li>
      <li className="topBar__menu__item">FAQ</li>
      <li className="topBar__menu__item" onClick={() => handleScroll(2)}>Kontakt</li>
    </ul>
  </menu>
}

export default TopBar;