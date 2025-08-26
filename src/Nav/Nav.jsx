import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "boxicons";

function Nav() {
  const [active, setActive] = useState(false); // panel hamburguesa
  const [openSub, setOpenSub] = useState({
    cocina: false,
    bano: false,
    accesorios: false,
  });

  // Detecta si el dispositivo soporta hover "real" (desktop)
  const [isHoverable, setIsHoverable] = useState(true);
  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setIsHoverable(mql.matches);
    apply();
    mql.addEventListener?.("change", apply);
    return () => mql.removeEventListener?.("change", apply);
  }, []);

  const handleClick = () => setActive((v) => !v);

  const closeMenu = () => {
    setActive(false);
    setOpenSub({ cocina: false, bano: false, accesorios: false });
  };

  const toggleSub = (key) =>
    setOpenSub((s) => ({ ...s, [key]: !s[key] }));

  // Handlers de hover sólo en desktop
  const hoverHandlers = (key) =>
    isHoverable
      ? {
          onMouseEnter: () => setOpenSub((s) => ({ ...s, [key]: true })),
          onMouseLeave: () => setOpenSub((s) => ({ ...s, [key]: false })),
        }
      : {};

  return (
    <nav>
      <div className="container_logo">
        <img className="logo_ms" src="/Img/Inicio/Logo_MecSanitarios.png" alt="Logo de Mec Sanitarios" />
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

        <li className="has-submenu-inicio">
          <NavLink to="/" className="link_menu_nav" onClick={closeMenu}>
            Inicio
          </NavLink>
        </li>

        {/* COCINA */}
        <li
          className={`has-submenu ${openSub.cocina ? "open" : ""}`}
          {...hoverHandlers("cocina")}
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
                toggleSub("cocina"); // en mobile actúa como acordeón
              }}
              title="Abrir submenú de Cocina"
            >
              <i className={`bx bx-chevron-down ${openSub.cocina ? "rot" : ""}`} />
            </button>
          </div>

          <ul
            id="submenu-cocina"
            className={`submenu ${isHoverable ? "" : "is-mobile"}`}
            aria-hidden={!openSub.cocina}
          >
            <li><NavLink to="/cocina/griferias" onClick={closeMenu}>Griferías</NavLink></li>
          </ul>
        </li>

        {/* BAÑO */}
        <li
          className={`has-submenu ${openSub.bano ? "open" : ""}`}
          {...hoverHandlers("bano")}
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
              <i className={`bx bx-chevron-down ${openSub.bano ? "rot" : ""}`} />
            </button>
          </div>

          <ul
            id="submenu-bano"
            className={`submenu ${isHoverable ? "" : "is-mobile"}`}
            aria-hidden={!openSub.bano}
          >
            <li><NavLink to="/bano/sanitarios-inteligentes" onClick={closeMenu}>Sanitarios inteligentes</NavLink></li>
            <li><NavLink to="/bano/griferias" onClick={closeMenu}>Griferias</NavLink></li>
            <li><NavLink to="/bano/bachas" onClick={closeMenu}>Bachas</NavLink></li>
            <li><NavLink to="/bano/duchas" onClick={closeMenu}>Duchas</NavLink></li>
          </ul>
        </li>

        {/* ACCESORIOS */}
        <li
          className={`has-submenu ${openSub.accesorios ? "open" : ""}`}
          {...hoverHandlers("accesorios")}
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
              <i className={`bx bx-chevron-down ${openSub.accesorios ? "rot" : ""}`} />
            </button>
          </div>

          <ul
            id="submenu-accesorios"
            className={`submenu ${isHoverable ? "" : "is-mobile"}`}
            aria-hidden={!openSub.accesorios}
          >
            <li><NavLink to="/accesorios/flor-de-ducha" onClick={closeMenu}>Flor de ducha</NavLink></li>
            <li><NavLink to="/accesorios/flexiles" onClick={closeMenu}>Flexiles</NavLink></li>
            <li><NavLink to="/accesorios/rejilla-piso" onClick={closeMenu}>Rejilla piso</NavLink></li>
            <li><NavLink to="/accesorios/otros" onClick={closeMenu}>Otros</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
