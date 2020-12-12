import React from "react"

const BottomBar = () => {
  return (<section className="bottomBar">
    <h2 className="bottomBar__header">
      Warto z nami<br/><span className="bold">współpracować</span>
    </h2>

      <div className="bottomBar__oferta__item">
        <img className="bottomBar__oferta__item--img" src={require("../../static/img/odznaka.svg")} alt="alt" />
        <h3 className="bottomBar__oferta__item--header">
          Profesjonalizm poparty doświadczeniem
        </h3>
      </div>

      <div className="bottomBar__oferta__item">
        <img className="bottomBar__oferta__item--img" src={require("../../static/img/tarcza.svg")} alt="alt" />
        <h3 className="bottomBar__oferta__item--header">
          Gwarancja zaufania
        </h3>
      </div>

      <div className="bottomBar__oferta__item">
        <img className="bottomBar__oferta__item--img" src={require("../../static/img/kalkulator.svg")} alt="alt" />
        <h3 className="bottomBar__oferta__item--header">
          Kompleksowa obsługa Twojej firmy
        </h3>
      </div>
  </section>)
}

export default BottomBar;