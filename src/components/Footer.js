import React from 'react'

const Footer = () => {
  return (<footer className="footer">
    <div className="footer__col col1">
      <div className="footer__wizytowka">
        <img src={require("../../static/img/logo.webp")} alt="alt" />
        <h3>Biuro rachunkowe POL-BIUR</h3>
        <div className="wizytowka__block">
          <h4>Dane firmy</h4>
          <h5>NIP: 1111111111</h5>
          <h5>REGON: 1111111111</h5>
        </div>
        <div className="wizytowka__block">
          <h4>Dane adresowe</h4>
          <h5>Żeromskiego 12/12</h5>
          <h5>87-400 Golub-Dobrzyń</h5>
        </div>
        <div className="wizytowka__block">
          <h4>Kontakt</h4>
          <h5>Tel: 123 123 123</h5>
          <h5>Email: biuro@biuro.pl</h5>
        </div>

      </div>
    </div>
    <div className="footer__col col2">
      <h3 className="footer__slogan">Dbamy o finanse Twojej firmy</h3>
    </div>
    <div className="footer__col col3">
      <div className="footer__menu">
        <h3 className="footer__menu__header">Firma</h3>
        <ul className="footer__menu__inside">
          <li className="footer__menu__item">O nas</li>
          <li className="footer__menu__item">Kontakt</li>
          <li className="footer__menu__item">FAQ - najczęściej zadawane pytania</li>
        </ul>
      </div>
      <div className="footer__menu no-margin">
        <h3 className="footer__menu__header">Informacje</h3>
        <ul className="footer__menu__inside">
          <li className="footer__menu__item">Oferta</li>
          <li className="footer__menu__item">Referencje</li>
          <li className="footer__menu__item">Regulamin</li>
          <li className="footer__menu__item no-margin">Polityka prywatności</li>
        </ul>
      </div>
    </div>
    <div className="footer__col col4">
      <div className="footer__menu">
        <h3 className="footer__menu__header">Przydatne linki</h3>
        <ul className="footer__menu__inside">
          <li className="footer__menu__item"><a href="/">Biuro rachunkowe Toruń</a></li>
          <li className="footer__menu__item"><a href="/">Biuro rachunkowe Brodnica</a></li>
          <li className="footer__menu__item"><a href="/">Biuro rachunkowe Golub-Dobrzyń</a></li>
          <li className="footer__menu__item"><a href="/">Biuro rachunkowe Rypin</a></li>
          <li className="footer__menu__item"><a href="/">Biuro rachunkowe Bydgoszcz</a></li>
          <li className="footer__menu__item"><a href="/">Biuro rachunkowe online</a></li>
        </ul>
      </div>
      <div className="footer__socialMedia no-margin">
        <h3 className="footer__menu__header">Media społecznościowe</h3>
        <div className="footer__socialMedia__inside">
          <a className="socialMedia__item" href="https://facebook.com" target="_blank" rel="noreferrer">
            <img className="socialMedia__item__img" src={require("../../static/img/facebook.svg")} alt="alt" />
          </a>
          <a className="socialMedia__item" href="https://instagram.com" target="_blank" rel="noreferrer">
            <img className="socialMedia__item__img" src={require("../../static/img/instagram.svg")} alt="alt" />
          </a>
          <a className="socialMedia__item" href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img className="socialMedia__item__img" src={require("../../static/img/linkedin.svg")} alt="alt" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <h6 className="credits">Projekt i wykonanie: <a href="https://skylo.pl" target="_blank" rel="noreferrer">Skylo.pl</a></h6>
    </div>
  </footer>)
}

export default Footer;