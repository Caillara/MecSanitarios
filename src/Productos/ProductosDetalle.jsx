import { useLocation, useParams } from "react-router-dom";
import productos from "../Data/Productos.json";
import { slugify } from "../Utils/slugify";
import "./productosDetalle.css";

export default function ProductosDetalle() {
  const { slug } = useParams();
  const { state } = useLocation();

  // 1) si viene por state es instantáneo
  let producto = state?.producto;

  // 2) fallback: buscar por slug (si entran directo por URL)
  if (!producto) {
    producto = productos.find(p => slugify(p?.nombre) === slug);
  }

  if (!producto) {
    return (
      <section className="pd container">
        <p>No encontramos este producto.</p>
      </section>
    );
  }

  // construir galería con las imágenes existentes
  const gallery = [
    producto.img, producto.img2, producto.img3, producto.img4,
    producto.img5, producto.img6, producto.img7, producto.img8,
    producto.img9, producto.img10, producto.img11, producto.img12
  ].filter(Boolean);

  return (
    <section className="pd container" aria-labelledby="pd-title">
      <div className="pd-grid">
        {/* Media */}
        <div className="pd-media">
          <img className="pd-main" src={gallery[0]} alt={producto.nombre} />
          {gallery.length > 1 && (
            <div className="pd-thumbs" role="list">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  className="pd-thumb"
                  onClick={() => {
                    const main = document.querySelector(".pd-main");
                    if (main) main.setAttribute("src", src);
                  }}
                >
                  <img src={src} alt={`${producto.nombre} ${i+1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pd-info">
          <h1 id="pd-title" className="pd-title">{producto.nombre}</h1>

          {/* Subtítulo opcional (tipo legible) */}
          {(producto.categoria || producto.tipo) && (
            <p className="pd-subtitle">
              {[producto.categoria, producto.tipo]
                .filter(Boolean)
                .map(s => String(s).replace(/([A-Z])/g, " $1"))
                .join(" · ")
                .trim()}
            </p>
          )}

          <div className="pd-price">
            {producto.precioAnterior ? (
              <>
                <span className="pd-price-now">
                  ${Number(producto.precio || 0).toLocaleString()}
                </span>
                <span className="pd-price-before">
                  Antes: <del>${Number(producto.precioAnterior).toLocaleString()}</del>
                </span>
              </>
            ) : (
              <span className="pd-price-now">
                ${Number(producto.precio || 0).toLocaleString()}
              </span>
            )}
          </div>

          {producto.descripcion && (
            <p className="pd-desc">{producto.descripcion}</p>
          )}

          <div className="pd-actions">
            <a
              className="pd-btn"
              href={producto.link || "#"}
              target="_blank"
              rel="noreferrer"
            >
              Consultar
            </a>
          </div>

          {/* Datos opcionales */}
          <ul className="pd-meta">
            {producto.medida && <li><strong>Medida:</strong> {producto.medida}</li>}
            {producto.stock !== undefined && (
              <li><strong>Stock:</strong> {producto.stock ? "Disponible" : "Sin stock"}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
