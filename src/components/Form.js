import React, { useState, useRef } from "react"

import { useFormik } from "formik"
import * as Yup from 'yup'

import { gsap } from 'gsap/all'

const Form = () => {
  let [check, setCheck] = useState(false);
  let [submitted, setSubmitted] = useState(false);

  const form = useRef(null);
  const l1 = useRef(null);
  const l2 = useRef(null);
  const l3 = useRef(null);
  const l4 = useRef(null);

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    name: "",
    phoneNumber: "",
    email: "",
    msg: ""
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Wpisz swoje imię i nazwisko"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Wpisz poprawny numer telefonu")
        .required("Wpisz swój numer telefonu"),
      email: Yup.string()
        .email("Wpisz poprawny adres email")
        .required("Wpisz swój adres email")
    }),
    onSubmit: values => {
      setSubmitted(true);
      if(check) {
        console.log(JSON.stringify(values));
        formik.resetForm({});
        setCheck(false);
        setSubmitted(false);
        gsap.fromTo(form.current, { y: 0, opacity: 1 }, { y: 300, opacity: 0, duration: .5 });
      }
    }
  })

  const handleDefocus = () => {
    l1.current.style.border = "none";
    l2.current.style.border = "none";
    l3.current.style.border = "none";
    l4.current.style.border = "none";
  }

  const handleFocus = (n) => {
    handleDefocus();

    if(n === 1) l1.current.style.border = "2px solid #3BA093";
    else if(n === 2) l2.current.style.border = "2px solid #3BA093";
    else if(n === 3) l3.current.style.border = "2px solid #3BA093";
    else l4.current.style.border = "2px solid #3BA093";
  }

  return (<section className="formSection" id="contact">
    <header className="formHeader">
      <h2>Wypełnij formularz i zostaw do siebie kontakt, a my oddzwonimy do Ciebie i umówimy się na konsultacje.</h2>
    </header>

    <main className="formMain" ref={form}>
      <form className="form" method="POST" action="#" onSubmit={formik.handleSubmit}>
        <label className="label" ref={l1}>
          <img className="inputIcon" src={require("../../static/img/user.svg")} alt="imie-i-nazwisko" />
          <input className="input"
                 name="name"
                 placeholder="Imię i nazwisko"
                 type="text"
                 onFocus={() => handleFocus(1)}
                 onBlur={() => handleDefocus()}
                 {... formik.getFieldProps("name")}
          />
        </label>

        <label className="label" ref={l2}>
          <img className="inputIcon" src={require("../../static/img/phone.svg")} alt="numer-telefonu" />
          <input className="input"
                 name="phoneNumber"
                 placeholder="Numer telefonu"
                 type="text"
                 onFocus={() => handleFocus(2)}
                 {... formik.getFieldProps("phoneNumber")}
          />
        </label>

        <label className="label" ref={l3}>
          <img className="inputIcon" src={require("../../static/img/mail.svg")} alt="adres-email" />
          <input className="input"
                 name="email"
                 placeholder="Adres email"
                 type="text"
                 onFocus={() => handleFocus(3)}
                 {... formik.getFieldProps("email")}
          />
        </label>

        <label className="textAreaLabel">
          <textarea className="textarea" ref={l4}
                    name="msg"
                    placeholder="Uwagi, prośby (opcjonalnie)"
                    onFocus={() => handleFocus(4)}
                    {... formik.getFieldProps("msg")}
          />
        </label>

        <label className="privacy">
          <button className="privacyCheck" type="button" onClick={() => { setCheck(!check) }}>
            <img className={check ? "check" : "d-none"} src={require("../../static/img/check.svg")} alt="ok" />
          </button>
          <span className="privacyText">
            Zapoznałem się z regulaminem i polityką prywatności.
          </span>
        </label>

        {(formik.errors.name || formik.errors.phoneNumber || formik.errors.email || (!check && submitted)) ? (<div className="formErrors">
          <span className="formErrors__item">
            {formik.errors.name}
          </span>
          <span className="formErrors__item">
            {formik.errors.phoneNumber}
          </span>
          <span className="formErrors__item">
            {formik.errors.email}
          </span>
          {!check ? (<span className="formErrors__item">
              Musisz wyrazić zgodę na przetwarzanie danych osobowych
          </span>) : ""}
        </div>) : ""}

        <button type="submit" className="btn btn--form">
          Wyślij formularz
        </button>
      </form>
    </main>
  </section>)
}

export default Form;