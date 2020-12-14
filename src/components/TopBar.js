import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const TopBar = ({frontPage}) => {
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
    if((typeof document !== 'undefined')&&(typeof window !== 'undefined')&&(frontPage)) {
      let dest;
      if(arg === 1) dest = document.querySelector("#oferta");
      else dest = document.querySelector("#contact");
      dest.scrollIntoView({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
    else {
      if(typeof window !== 'undefined') {
        if(arg === 1) {
          window.location = "/#oferta";
        }
        else {
          window.location = "/#contact";
        }
      }
    }
  }

  return <menu className="topBar">
    <Link className="topBar__logo" to="/">
      <Img className="topBar__logo" fluid={data.logo.childImageSharp.fluid} alt="alt" />
    </Link>

    <ul className="topBar__menu">
      <li className="topBar__menu__item"><Link to="/">Start</Link></li>
      <li className="topBar__menu__item"><Link to="/o-nas">O nas</Link></li>
      <li className="topBar__menu__item" onClick={() => handleScroll(1)}>Oferta</li>
      <li className="topBar__menu__item"><Link to="/faq">FAQ</Link></li>
      <li className="topBar__menu__item" onClick={() => handleScroll(2)}>Kontakt</li>
    </ul>
  </menu>
}

export default TopBar;