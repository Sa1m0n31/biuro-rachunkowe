import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const InfoBox = () => {
  const data = useStaticQuery(graphql`
      query InfoBoxQuery {
          infobox: file(relativePath: { eq: "infoBox1.svg" }) {
              childImageSharp {
                  fluid(maxWidth: 440, maxHeight: 411) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  return (<section className="infoBox">
    <div className="infoBoxContainer">
      <div className="infoBox__left">
        <h3 className="infoBox--header">
          Płać mniej i oszczędzaj dzięki naszemu doświadczeniu
        </h3>
        <p className="infoBox--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="btn btn--infoBox">
          <span className="btn--text">Skontaktuj się z nami</span>
          <img className="doubleArrow" src={require("../../static/img/podwojna-strzalka.svg")} alt="alt" />
        </button>
      </div>

      <div className="infoBox--right">
        <img className="infoBox--img" src={require("../../static/img/infoBox1.svg")} alt="alt" />
      </div>
    </div>
  </section>)
}

export default InfoBox;