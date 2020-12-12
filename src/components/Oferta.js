import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const Oferta = () => {
  const data = useStaticQuery(graphql`
      query OfertaQuery {
          oferta1: file(relativePath: { eq: "oferta1.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 346, maxHeight: 218) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
          oferta2: file(relativePath: { eq: "oferta2.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 346, maxHeight: 218) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  return <section className="ofertaSection">
    <header className="ofertaSection__header">
      <h2>Nasza oferta</h2>
    </header>
    <main className="ofertaList">
      <div className="ofertaList__item">
        <Img className="ofertaList__item--img"
             fluid={data.oferta1.childImageSharp.fluid}
             alt="alt" />
        <h3 className="ofertaList__item--header">
            Księgowość
        </h3>
        <p className="ofertaList__item--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="ofertaList__item">
        <Img className="ofertaList__item--img"
             fluid={data.oferta2.childImageSharp.fluid}
             alt="alt" />
        <h3 className="ofertaList__item--header">
          Księgowość
        </h3>
        <p className="ofertaList__item--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="ofertaList__item">
        <Img className="ofertaList__item--img"
             fluid={data.oferta1.childImageSharp.fluid}
             alt="alt" />
        <h3 className="ofertaList__item--header">
          Księgowość
        </h3>
        <p className="ofertaList__item--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </main>
  </section>
}

export default Oferta;