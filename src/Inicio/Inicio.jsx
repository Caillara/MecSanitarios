import Banner from "../Banner/Banner";
import HeroImgDerecha from "../HeroDerecha/HeroImgDerecha";
import HeroImgIzquierda from "../HeroIzquierda/HeroImgIzquierda";
import "./inicio.css"

function Inicio() {

    return (
        <>
            <Banner/>
            <HeroImgDerecha
                title="Griferías que unen funcionalidad y estilo"
                text="Descubrí nuestra colección de griferías para cocina con diseños modernos, máxima practicidad y la resistencia que tu hogar necesita día a día."
                imgSrc="/Img/Productos/Griferia/Mod.316(2).webp"
                imgAlt="Grifería de cocina moderna sobre mesada"
                ctaLabel="Ver griferías"
                ctaTo="/cocina/griferias"
              />
            <HeroImgIzquierda
                title = "Bachas que realzan tu espacio"
                text = "Descubrí nuestra línea de bachas con materiales resistentes y diseños modernos que combinan funcionalidad y estilo en tu baño o cocina."
                imgSrc = "/Img/Productos/Bachas/Mod.8289.webp"
                imgAlt = "Bacha moderna instalada sobre mueble"
                ctaLabel = "Ver bachas"
                ctaTo = "/bano/bachas"
            />
            <HeroImgDerecha
                title="Duchas que transforman tu rutina"
                text="Explorá nuestra variedad de duchas diseñadas para ofrecer confort, estilo y eficiencia. Cada modelo está pensado para convertir tu baño en un espacio de relajación diaria."
                imgSrc="/Img/Productos/Duchas/Mod.373(3).webp"   
                imgAlt="Ducha moderna con diseño minimalista"
                ctaLabel="Ver duchas"
                ctaTo="/bano/duchas"
            />

        </>
    );
}

export default Inicio;