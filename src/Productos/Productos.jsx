import React, { useState } from "react";
import "./productos.css";
import "./card.css";
import productos from "../Data/Productos.json";

function Productos() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDescriptionClick = (producto) => {
    setSelectedProduct(producto);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
  };


  return (
    <section className="container_productos">
      <h2>Nuestros inflables</h2>
      <div className="container_cards">
        {productos.map((producto, index) => (
          <div key={index} className="card">
            <div className="container_card_img">
              <img src={producto.img} alt={producto.nombre} />
            </div>
            <div className="container_card_text">
              <h3>{producto.nombre}</h3>
              <span>{producto.medida}</span>
              <span className="price">${producto.precio.toLocaleString()}</span>
            </div>
            {producto.precioAnterior && (
              <p className="price_before">Antes: <del>${producto.precioAnterior.toLocaleString()}</del></p>
            )}
            <div className="container_card_button">
              <button>Alquilar</button>
              <i className='bx bx-info-circle' onClick={() => handleDescriptionClick(producto)}></i>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="dialog_overlay">
          <div className="dialog">
            <button className="close_button" onClick={closeDialog}>×</button>
            <h3>{selectedProduct.nombre}</h3>
            <img src={selectedProduct.img} alt={selectedProduct.nombre} />
            <p>{selectedProduct.descripcion}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Productos;
