import "./productos.css";
import "./card.css";
import productos from "../Data/Productos.json";
import { Link, useLocation } from "react-router-dom";
import { slugify } from "../Utils/slugify";

function Productos() {
  const { pathname } = useLocation();

  // Mapear rutas -> filtros
  const getFilterFromPath = (path) => {
    const parts = path.split("/").filter(Boolean); // ["bano","bachas"] por ej
    const root = parts[0] || "";        // cocina | bano | accesorios
    const sub  = parts[1] || "";        // griferias | bachas | etc

    // Por defecto mostramos todo
    let predicate = () => true;
    let titulo = "Todos los productos";

    switch (root) {
      case "cocina":
        if (!sub) {
          predicate = (p) => p.categoria === "cocina";
          titulo = "Cocina";
        } else if (sub === "griferias") {
          predicate = (p) => p.categoria === "cocina" && p.tipo === "griferia";
          titulo = "Cocina · Griferías";
        }
        break;

      case "bano":
        if (!sub) {
          predicate = (p) => p.categoria === "baño";
          titulo = "Baño";
        } else if (sub === "bachas") {
          predicate = (p) => p.categoria === "baño" && p.tipo === "bacha";
          titulo = "Baño · Bachas";
        } else if (sub === "griferias") {
          predicate = (p) => p.categoria === "baño" && p.tipo === "griferiaBaño";
          titulo = "Baño · Griferías";
        } else if (sub === "duchas") {
          predicate = (p) => p.categoria === "baño" && p.tipo === "ducha";
          titulo = "Baño · Duchas";
        } else if (sub === "sanitarios-inteligentes") {
          predicate = (p) => p.categoria === "baño" && p.tipo === "sanitarioInteligente";
          titulo = "Baño · Sanitarios Inteligentes";
        }
        break;

      case "accesorios":
        if (!sub) {
          predicate = (p) => p.categoria === "accesorio";
          titulo = "Accesorios";
        } else if (sub === "flor-de-ducha") {
          predicate = (p) => p.categoria === "accesorio" && p.tipo === "florDeDucha";
          titulo = "Accesorios · Flor de ducha";
        } else if (sub === "flexiles") {
          predicate = (p) => p.categoria === "accesorio" && p.tipo === "flexil";
          titulo = "Accesorios · Flexibles";
        } else if (sub === "rejilla-piso") {
          predicate = (p) => p.categoria === "accesorio" && p.tipo === "rejillaPiso";
          titulo = "Accesorios · Rejilla de piso";
        } else if (sub === "otros" || sub === "otros") {
          predicate = (p) => p.categoria === "accesorio" && p.tipo === "otro";
          titulo = "Accesorios · Otros";
        }
        break;

      default:
        // Home u otras rutas: no filtra
        titulo = "Todos los productos";
    }

    return { predicate, titulo };
  };

  const { predicate, titulo } = getFilterFromPath(pathname);
  const lista = productos.filter(predicate);

  return (
    <section className="container_productos">
      <h2 className="productos_title">{titulo}</h2>

      {lista.length === 0 && (
        <p className="productos_empty">
          No hay productos para esta sección.
        </p>
      )}

      <div className="container_cards">
        {lista.map((producto, index) => {
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
                  Antes: <del>${Number(producto.precioAnterior).toLocaleString()}</del>
                </p>
              )}

              <div className="container_card_button">
                <a href={producto.link} target="_blank" rel="noreferrer">Solicitar</a>
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
