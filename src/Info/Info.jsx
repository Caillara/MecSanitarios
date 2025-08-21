import "./info.css"

function Info() {

    return (
        <section className="container_extra_info">
            <h2 className="extra_info_title">Información</h2>
            <div className="content_extra_info">
                <p className="extra_info_text">
                En <strong>Inflables Argentina</strong>, queremos que tu experiencia sea lo más sencilla y placentera posible. Por eso, hemos diseñado nuestro servicio pensando en tu comodidad y tranquilidad.
                </p>
        
                <div className="extra_info_section">
                    <h3 className="extra_info_subtitle">Horarios de Entrega y Retiro:</h3>
                    <ul className="extra_info_list">
                        <li>Entrega: De lunes a sábado, de 9:00 y las 16:00 hs.</li>
                        <li>Retiro: El mismo día del evento o al día siguiente, dependiendo del horario de finalización del evento.</li>
                        <li>¿Tu evento tiene horarios especiales? ¡Avísanos! Nos adaptamos a tus necesidades.</li>
                    </ul>
                </div>
        
                <div className="extra_info_section">
                    <h3 className="extra_info_subtitle">Servicio Todo Incluido:</h3>
                    <ul className="extra_info_list">
                        <li>Transporte del inflable al lugar del evento.</li>
                        <li>Instalación y prueba de seguridad para garantizar que todo funcione perfectamente.</li>
                        <li>Retiro puntual sin que tengas que preocuparte por nada.</li>
                    </ul>
                </div>
        
                <div className="extra_info_section">
                    <h3 className="extra_info_subtitle">Compromiso con la Seguridad:</h3>
                    <p className="extra_info_text">
                        Todos nuestros inflables son revisados y desinfectados antes y después de cada uso. Utilizamos materiales de alta calidad y diseñados para la diversión segura de grandes y chicos.
                    </p>
                </div>
        
{/*                 <div className="extra_info_section extra_info_promo">
                    <h3 className="extra_info_subtitle">Promoción Especial:</h3>
                    <p className="extra_info_text">
                        ¡Reserva con al menos 7 días de anticipación y obtén un <strong>10% de descuento</strong> en tu alquiler!
                    </p>
                </div> */}
            </div>
            
    
           {/*  <p className="extra-info__contact">📞 <strong>¿Tienes dudas?</strong> Contáctanos y resolveremos todas tus consultas rápidamente.</p> */}
      </section>
    );
}

export default Info;