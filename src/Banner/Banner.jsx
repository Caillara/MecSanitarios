import { useNavigate } from 'react-router-dom';
import './banner.css';

const Banner = () => {

  return (
    <section className="banner">
      <div className="banner-content">
        <h1>¡Diversión Asegurada para tus Eventos!</h1>
        <p>Alquiler de castillos inflables, toboganes y más para todas las edades.</p>
        <button className="button_reserva_ahora">
          Reservar ahora
        </button>
      </div>
    </section>
  );
};

export default Banner;
