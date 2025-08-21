import React from "react";
import "./contacto.css";

function Contacto () {
    
  return (
    <section className="contact_section">
      <div className="contact_container">
        <h2 className="contact_title">¡Contáctanos!</h2>
        <p className="contact_description">
          Llena el formulario o utiliza los métodos de contacto de abajo para
          alquilar inflables y hacer de tu evento algo único.
        </p>
        <form className="contact_form">
          <div className="form_group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Escribe tu nombre"
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu correo"
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn_submit">
            Enviar
          </button>
        </form>
        <div className="contact_info">
          <p>
            <strong>WhatsApp:</strong><a href="" target="_blank" rel="noopener noreferrer">+54 11 6914-0010</a>
          </p>
          <p>
            <strong>Email:</strong><a href="">grupoalquilar@outlook.com.ar</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
