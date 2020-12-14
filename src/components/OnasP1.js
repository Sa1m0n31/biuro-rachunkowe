import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const OnasP1 = () => {
  const data = useStaticQuery(graphql`
      query ONas1Query {
          oNas1: file(relativePath: { eq: "kalkulator-o-nas.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 648, maxHeight: 378) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  return <section className="oNasSection oNasP1">
    <header className="oNasP1__header">
      <h1>Klika słów o nas</h1>
    </header>
    <main className="oNasP1__main">
      <div className="main__left">
        <h2>Księgowość to nasza pasja!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="main__right">
        <Img className="oNasP1__kalkulator"
             fluid={data.oNas1.childImageSharp.fluid}
             alt="alt" />
      </div>
    </main>
  </section>
}

export default OnasP1;