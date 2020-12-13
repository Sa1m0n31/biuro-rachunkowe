import React from "react"

const InfoBox = () => {
  return (<section className="infoBox">
    <div className="infoBoxContainer">
      <div className="infoBox__left">
        <h3 className="sectionHeader infoBox--header">
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