import React from "react"

import TopBar from "./TopBar"

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const PageHeader = () => {
  const data = useStaticQuery(graphql`
      query PageHeaderQuery {
          pageHeader: file(relativePath: { eq: "landing.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 1640, maxHeight: 750) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  return <header className="pageHeader">
    <Img className="pageHeader__img"
         fluid={data.pageHeader.childImageSharp.fluid}
         alt="alt" />
     <TopBar frontPage={false} />
  </header>
}

export default PageHeader;