import "./productos.css";
import "./card.css";
import productos from "../Data/Productos.json";
import { Link } from "react-router-dom";
import { slugify } from "../Utils/slugify";

function Productos() {
  return (
    <section className="container_productos">
      <div className="container_cards">
        {productos.map((producto, index) => {
          const slug = slugify(producto.nombre);
          return (
            <Link
              key={index}
              to={`/producto/${slug}`}
              state={{ producto }}
              className="card link-reset"
            >
              <div className="container_card_img">
                <img src={producto.img} alt={producto.nombre} loading="lazy" />
              </div>

              <div className="container_card_text">
                <h3>{producto.nombre}</h3>
                {producto.medida && <span>{producto.medida}</span>}
                <span className="price">
                  ${Number(producto.precio || 0).toLocaleString()}
                </span>
              </div>

              {producto.precioAnterior && (
                <p className="price_before">
                  Antes: <del>${producto.precioAnterior.toLocaleString()}</del>
                </p>
              )}

              <div className="container_card_button">
                <button type="button">Solicitar</button>
                <i className="bx bx-info-circle"></i>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Productos;
