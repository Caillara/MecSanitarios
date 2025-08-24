import './App.css'
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import Productos from './Productos/Productos';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProductosDetalle from './Productos/ProductosDetalle';

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
          <Route path="/cocina" element={<Productos />} />
          <Route path="/cocina/griferias" element={<Productos />} />

          <Route path="/bano" element={<Productos />} />
          <Route path="/bano/sanitarios-inteligentes" element={<Productos />} />
          <Route path="/bano/griferias" element={<Productos />} />
          <Route path="/bano/bachas" element={<Productos />} />
          <Route path="/bano/duchas" element={<Productos />} />

          <Route path="/accesorios" element={<Productos />} />
          <Route path="/accesorios/flor-de-ducha" element={<Productos />} />
          <Route path="/accesorios/flexiles" element={<Productos />} />
          <Route path="/accesorios/rejilla-piso" element={<Productos />} />
          <Route path="/accesorios/otros" element={<Productos />} />

          <Route path="/producto/:slug" element={<ProductosDetalle />} />
          {/* Rutas adicionales */}
          <Route path="*" element={<span className='error404'>404 - Página no encontrada</span>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
