import { useNavigate } from 'react-router-dom';
import './banner.css';

const Banner = () => {

  return (
    <section className="banner">
      <div className="banner-content">
        <h1>¡Renová tu hogar con calidad y estilo en cada detalle!</h1>
        <p>En Mec Sanitarios te ofrecemos productos de cocina, baño y accesorios 
        pensados para brindarte calidad, diseño y confianza en cada detalle 
        de tu hogar.</p>
        <button className="button_reserva_ahora">
          Consultar ahora
        </button>
      </div>
    </section>
  );
};

export default Banner;
