// Archivo Galeria.jsx
import "./galeria.css";

function Galeria() {
    const images = [
        "/Img/Galeria/Jump.jpg",
        "/Img/Inicio/Nosotros.jpg",
        "/Img/Inicio/InflableInicio.jpeg",
        "/Img/Galeria/2.jpg",
        "/Img/Galeria/Fun.jpg",
        "/Img/Galeria/3.jpg",
        "/Img/Productos/ToboganAcuatico.jpg",
        "/Img/Galeria/Party.jpg",
        "/Img/Productos/DeslizadorAcuatico.jpg",
        "/Img/Galeria/1.jpg",
    ];

    return (
        <section>
            <div className="gallery">
                {images.map((src, index) => (
                    <div key={index} className="gallery_item">
                        <img src={src} alt={`Imagen ${index + 1}`} />
                        {/* <div className="hover_overlay">
                            <p>Texto {index + 1}</p>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Galeria;
