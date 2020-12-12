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

  return <menu className="topBar">
    <Img className="topBar__logo" fluid={data.logo.childImageSharp.fluid} alt="alt" />
    <ul className="topBar__menu">
      <li className="topBar__menu__item">Start</li>
      <li className="topBar__menu__item">O nas</li>
      <li className="topBar__menu__item">Oferta</li>
      <li className="topBar__menu__item">FAQ</li>
      <li className="topBar__menu__item">Kontakt</li>
    </ul>
  </menu>
}

export default TopBar;