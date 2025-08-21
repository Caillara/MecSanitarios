import './App.css'
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import Contacto from './Contacto/Contacto';
import Productos from './Productos/Productos';
import Info from './Info/Info';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        {/* Define las rutas y componentes */}
        <Route path="/" element={
          <Inicio/>
          } 
        />
        <Route path="/productos" element={<Productos />} />
        {/* <Route path="/informacion" element={<Info />} /> */}
        {/* <Route path="/contacto" element={<Contacto />} /> */}
        {/* Rutas adicionales pueden ser agregadas aquí */}
        <Route path="*" element={<span className='error404'>404 - Página no encontrada</span>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
