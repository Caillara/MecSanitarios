import Banner from "../Banner/Banner";
import Galeria from "../Galeria/Galeria";
import Nosotros from "../Nosotros/Nosotros";
/* import NuestrosInflables from "../NuestrosInflables/NuestrosInflables"; */
import "./inicio.css"

function Inicio() {

    return (
        <>
            <Banner/>
            {/* <NuestrosInflables/> */}
            <Nosotros/>
            <Galeria/>
        </>
    );
}

export default Inicio;