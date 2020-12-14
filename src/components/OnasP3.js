import React from "react"

const OnasP3 = () => {
  return <section className="oNasSection oNasP3">
    <div className="main__left">
      <h2 className="oNasP3__header">Przenieś finanse swojej firmy<br/>na wyższy poziom</h2>
      <p className="oNasP3__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="oNasP3__text">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <div className="main__right">
      <img className="oNasP1__kalkulator"
          src={require("../../static/img/onas-1.svg")} alt="alt" />
    </div>
  </section>
}

export default OnasP3;