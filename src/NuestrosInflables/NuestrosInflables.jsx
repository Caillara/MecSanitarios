import { Link } from "react-router-dom";
import "./nuestrosInflables.css"

function NuestrosInflables() {

    return (
        <section className="container_nuestros_inflables">
            <div className="container_img_inflable_inicio">
                <img src="./Img/Inicio/InflableInicio2.jpeg" alt="" />
            </div>
            <div className="container_texto_nuestros_inflables">
                <h2 className="title_nuestros_inflables">Nuestros Inflables</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum minus dicta illum quod dolores nulla quibusdam et, totam facilis doloremque sint voluptatem molestiae porro! Quisquam temporibus vel reiciendis officia.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quam dignissimos. Quia ab, officia quibusdam, molestias maiores facilis fuga sapiente.</p>
                <button className="button_ver_mas"><Link to="/productos" className="link_ver_mas">Ver más</Link></button>
            </div>      
        </section>
    );
}

export default NuestrosInflables;