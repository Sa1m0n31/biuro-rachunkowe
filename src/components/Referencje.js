import React, { useState, useRef } from "react"

import RefItem from "./RefItem"

const Referencje = () => {
  let [left, setLeft] = useState(2);
  let [center, setCenter] = useState(3);
  let [right, setRight] = useState(4);

  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const r4 = useRef(null);
  const r5 = useRef(null);

  const handleLeft = () => {
      console.log(r1.current);
  }

  const handleRight = () => {

  }

  return (<section className="refSection">
    <header className="sectionHeader">
      <h2>Referencje</h2>
    </header>

    <main className="refMain">
      <button className="refArrow refLeft" onClick={() => handleLeft()}>
        <img src={require("../../static/img/right.svg")} alt="left" />
      </button>

      <div className="refMainSlider">
        <RefItem img="apple.webp"
                 company="Apple Inc"
                 msg="Współpraca z tym biurem rachunkowym to czysta przyjemność. Wysoki standard obsługi i elastyczne podejście do klienta. Liczę na długą i owocną współpracę!"
                 author="Steve Jobs"
                 id="ref1"
        />
        <RefItem img="tesla.webp"
                 company="Tesla"
                 msg="Współpraca z tym biurem rachunkowym to czysta przyjemność. Wysoki standard obsługi i elastyczne podejście do klienta. Liczę na długą i owocną współpracę!"
                 author="Elon Musk"
                 id="ref2"
        />
        <RefItem img="apple.webp"
                 company="Microsoft"
                 msg="Współpraca z tym biurem rachunkowym to czysta przyjemność. Wysoki standard obsługi i elastyczne podejście do klienta. Liczę na długą i owocną współpracę!"
                 author="Bill Gates"
                 id="ref3"
        />
        <RefItem img="tesla.webp"
                 company="Tesla"
                 msg="Współpraca z tym biurem rachunkowym to czysta przyjemność. Wysoki standard obsługi i elastyczne podejście do klienta. Liczę na długą i owocną współpracę!"
                 author="Elon Musk"
                 id="ref4"
        />
        <RefItem img="tesla.webp"
                 company="Tesla"
                 msg="Współpraca z tym biurem rachunkowym to czysta przyjemność. Wysoki standard obsługi i elastyczne podejście do klienta. Liczę na długą i owocną współpracę!"
                 author="Elon Musk"
                 id="ref5"
        />
      </div>

      <button className="refArrow refRight" onClick={() => handleRight()}>
        <img src={require("../../static/img/left.svg")} alt="right" />
      </button>
    </main>
  </section>)
}

export default Referencje;