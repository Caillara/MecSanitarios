import WsppFlotante from '../Wspp/WsppFlotante';
import './footer.css';

function Footer() {
  return (
    <footer>
        <WsppFlotante/>
        <div>
            {/* <span>&copy; Copyright 2024</span> */}
            <span class="creador">Creado por <a href="http://fcdigitals.com/" target="_blank">fcdigitals.com</a></span>
        </div>
    </footer>
  );
}

export default Footer;