import { Link } from "react-router-dom";
import "./nosotros.css"

function Nosotros() {

    return(
        <section className="container_nosotros">
            <div className="container_img_inflable_inicio">
                <img src="./Img/Inicio/Nosotros.jpg" alt="" />
            </div>
            <div className="container_texto_nosotros">
                <h2 className="title_nosotros">Sobre nosotros</h2>
                <p>En Inflables Argentina, nos especializamos en llenar tus eventos de diversión. Ofrecemos variedad de inflables para todas las edades perfectos para cualquier celebración.</p>
                <p>Nuestro compromiso es brindarte un servicio profesional, confiable y personalizado. Nos encargamos de todo, envió instalación y posterior retiro.</p>
                <p>Todos los juegos se entregan limpios y en perfectas condiciones.</p>
                <p>¡Con nosotros, la diversión está garantizada!</p>
                <button className="button_mas_info"><Link to="/informacion" className="link_ver_mas">Más info</Link></button>
            </div>      
        </section>
    );
}

export default Nosotros;