import { NavLink } from "react-router-dom";
import "./heroImgDerecha.css";

export default function HeroImgDerecha({title, text, imgSrc, imgAlt, ctaLabel, ctaTo}) {
  return (
    <section className="hero-derecha" aria-labelledby="hero-derecha-title">
      <div className="hero-derecha__media">
        <img className="hero-derecha__img" src={imgSrc} alt={imgAlt} />
      </div>

      <div className="hero-derecha__content">
        <h1 id="hero-derecha-title" className="hero-derecha__title">
          {title}
        </h1>
        <p className="hero-derecha__text">
          {text}
        </p>

        <NavLink className="hero-derecha__btn" to={ctaTo}>
          {ctaLabel}
        </NavLink>
      </div>
    </section>
  );
}
