import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "boxicons";

function Nav() {
  const [active, setActive] = useState(false); // menú hamburguesa
  const [openSub, setOpenSub] = useState({
    cocina: false,
    bano: false,
    accesorios: false,
  });

  const handleClick = () => setActive(!active);
  const closeMenu = () => {
    setActive(false);
    setOpenSub({ cocina: false, bano: false, accesorios: false });
  };

  const toggleSub = (key) =>
    setOpenSub((s) => ({ ...s, [key]: !s[key] }));

  return (
    <nav>
      <div>
        <h1 className="nav_title">Mec Sanitarios</h1>
      </div>

      <button
        onClick={handleClick}
        className="menu_icon"
        aria-label="Abrir menú"
        aria-expanded={active}
        aria-controls="menu"
        type="button"
      >
        <i className={active ? "bx bx-x" : "bx bx-menu"} />
      </button>

      <ul id="menu" className={active ? "menu active" : "menu"}>
        <li>
          <NavLink to="/" className="link_menu_nav" onClick={closeMenu}>
            Inicio
          </NavLink>
        </li>

        {/* COCINA */}
        <li
          className={`has-submenu ${openSub.cocina ? "open" : ""}`}
          onMouseEnter={() => setOpenSub((s) => ({ ...s, cocina: true }))}
          onMouseLeave={() => setOpenSub((s) => ({ ...s, cocina: false }))}
        >
          <div className="parent-with-caret">
            <NavLink to="/cocina" className="link_menu_nav" onClick={closeMenu}>
              Cocina
            </NavLink>
            <button
              className="caret-btn"
              type="button"
              aria-expanded={openSub.cocina}
              aria-controls="submenu-cocina"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSub("cocina");
              }}
              title="Abrir submenú de Cocina"
            >
              <i className={`bx bx-chevron-down ${openSub.cocina ? "rot" : ""}`}></i>
            </button>
          </div>

          <ul
            id="submenu-cocina"
            className="submenu"
            aria-hidden={!openSub.cocina}
          >
            <li><NavLink to="/cocina/griferias" onClick={closeMenu}>Griferías</NavLink></li>
            <li><NavLink to="/cocina/bachas" onClick={closeMenu}>Bachas</NavLink></li>
            <li><NavLink to="/cocina/piletas" onClick={closeMenu}>Piletas</NavLink></li>
            <li><NavLink to="/cocina/desagues" onClick={closeMenu}>Desagües</NavLink></li>
          </ul>
        </li>

        {/* BAÑO */}
        <li
          className={`has-submenu ${openSub.bano ? "open" : ""}`}
          onMouseEnter={() => setOpenSub((s) => ({ ...s, bano: true }))}
          onMouseLeave={() => setOpenSub((s) => ({ ...s, bano: false }))}
        >
          <div className="parent-with-caret">
            <NavLink to="/bano" className="link_menu_nav" onClick={closeMenu}>
              Baño
            </NavLink>
            <button
              className="caret-btn"
              type="button"
              aria-expanded={openSub.bano}
              aria-controls="submenu-bano"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSub("bano");
              }}
              title="Abrir submenú de Baño"
            >
              <i className={`bx bx-chevron-down ${openSub.bano ? "rot" : ""}`}></i>
            </button>
          </div>

          <ul
            id="submenu-bano"
            className="submenu"
            aria-hidden={!openSub.bano}
          >
            <li><NavLink to="/bano/griferias" onClick={closeMenu}>Griferías</NavLink></li>
            <li><NavLink to="/bano/inodoros" onClick={closeMenu}>Inodoros</NavLink></li>
            <li><NavLink to="/bano/bidets" onClick={closeMenu}>Bidets</NavLink></li>
            <li><NavLink to="/bano/vanitorys" onClick={closeMenu}>Vanitorys</NavLink></li>
            <li><NavLink to="/bano/duchas" onClick={closeMenu}>Duchas</NavLink></li>
          </ul>
        </li>

        {/* ACCESORIOS */}
        <li
          className={`has-submenu ${openSub.accesorios ? "open" : ""}`}
          onMouseEnter={() => setOpenSub((s) => ({ ...s, accesorios: true }))}
          onMouseLeave={() => setOpenSub((s) => ({ ...s, accesorios: false }))}
        >
          <div className="parent-with-caret">
            <NavLink to="/accesorios" className="link_menu_nav" onClick={closeMenu}>
              Accesorios
            </NavLink>
            <button
              className="caret-btn"
              type="button"
              aria-expanded={openSub.accesorios}
              aria-controls="submenu-accesorios"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSub("accesorios");
              }}
              title="Abrir submenú de Accesorios"
            >
              <i className={`bx bx-chevron-down ${openSub.accesorios ? "rot" : ""}`}></i>
            </button>
          </div>

          <ul
            id="submenu-accesorios"
            className="submenu"
            aria-hidden={!openSub.accesorios}
          >
            <li><NavLink to="/accesorios/portarrollos" onClick={closeMenu}>Portarrollos</NavLink></li>
            <li><NavLink to="/accesorios/toalleros" onClick={closeMenu}>Toalleros</NavLink></li>
            <li><NavLink to="/accesorios/repisas" onClick={closeMenu}>Repisas</NavLink></li>
            <li><NavLink to="/accesorios/espejos" onClick={closeMenu}>Espejos</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
