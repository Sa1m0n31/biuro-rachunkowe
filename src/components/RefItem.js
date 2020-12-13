import React from "react"

const RefItem = ({img, company, msg, author, id}) => {
  return (<div className="refItem" id={id} >
      <img className="refItem__bck" src={require("../../static/img/quote.svg")} alt="cytat" />
      <img className="refItem__img" src={require(`../../static/img/${img}`)} alt="alt" />
      <h3 className="refItem__header">
        {company}
      </h3>
      <p className="refItem__msg">
        {msg}
      </p>
      <h4 className="refItem__author">
        {author}
      </h4>
  </div>)
}

export default RefItem;