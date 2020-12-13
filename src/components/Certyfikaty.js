import React, { useState, useEffect, useRef } from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import { gsap } from 'gsap/all'

const Cerfytikaty = () => {
  let [page, setPage] = useState(1);

  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);

  const data = useStaticQuery(graphql`
      query CertyfikatyQuery {
          certyfikat: file(relativePath: { eq: "certyfikat.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 367, maxHeight: 515) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  const handlePage = (n) => {
    let currentPage, newPage;

    switch(page) {
      case 1:
        currentPage = p1.current;
        break;
      case 2:
        currentPage = p2.current;
        break;
      default:
        currentPage = p3.current;
        break;
    }

    setPage(n);

    switch(n) {
      case 1:
        newPage = p1.current;
        break;
      case 2:
        newPage = p2.current;
        break;
      default:
        newPage = p3.current;
        break;
    }

    gsap.to(currentPage, { opacity: 0, duration: .5 });
    gsap.to(newPage, { opacity: 1, duration: .5 });
  }

  return (<section className="certyfikatySection">
    <header className="sectionHeader">
      <h2>Certyfikaty i dyplomy</h2>
    </header>

    <main className="certyfikatySlider">
      <span ref={p1} className={page === 1 ? "page" : "d-none"} >
          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>

          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>

          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>
      </span>

      <span ref={p2} className={page === 2 ? "page" : "d-none"} >
          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>

          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>

          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>
      </span>

      <span ref={p3} className={page === 3 ? "page" : "d-none"} >
          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>

          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>

          <div className="certyfikatyItem">
            <Img className="certyfikatyItem--img"
                 fluid={data.certyfikat.childImageSharp.fluid}
                 alt="alt" />
          </div>
      </span>
    </main>

    <aside className="certyfikatyControls">
      <button className="controls control-1"
              id={page === 1 ? "active" : ""}
              onClick={() => handlePage(1)}
      />
      <button className="controls control-2"
              id={page === 2 ? "active" : ""}
              onClick={() => handlePage(2)}
      />
      <button className="controls control-3"
              id={page === 3 ? "active" : ""}
              onClick={() => handlePage(3)}
      />
    </aside>
  </section>)
}

export default Cerfytikaty;