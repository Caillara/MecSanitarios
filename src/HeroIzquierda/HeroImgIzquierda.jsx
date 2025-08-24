import { NavLink } from "react-router-dom";
import "./heroImgIzquierda.css";

export default function HeroImgIzquierda({title, text, imgSrc, imgAlt, ctaLabel, ctaTo}) {
  return (
    <section className="hero-izquierda" aria-labelledby="hero-izquierda-title">
      <div className="hero-izquierda__media">
        <img className="hero-izquierda__img" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="hero-izquierda__content">
        <h1 id="hero-izquierda-title" className="hero-izquierda__title">
          {title}
        </h1>
        <p className="hero-izquierda__text">
          {text}
        </p>

        <NavLink className="hero-izquierda__btn" to={ctaTo}>
          {ctaLabel}
        </NavLink>
      </div>
    </section>
  );
}
