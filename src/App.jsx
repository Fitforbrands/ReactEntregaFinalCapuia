import PropTypes from "prop-types";

// css - bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const App = ({ nombre, mensaje }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top f4b-nav-color">
        <div className="container-fluid">
          <a href="./index.html">
            <img
              src="./img/fletear-logo-min.png"
              alt="logo fletear"
              className="f4b-logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse f4b-div-nav"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav f4b-nav">
              <li className="nav-item">
                <a
                  className="nav-link active f4b-nav-estoyaca"
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-house-door-fill"></i> Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./paginas/fletesFlex.html">
                  <i className="bi bi-fire"></i> Mercado Libre FLEX
                  <i className="bi bi-fire"></i>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-geo-alt-fill"></i> Zonas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="./index.html">
                      Todas las zonas
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./paginas/microcentro.html"
                    >
                      Microcentro
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="./paginas/belgrano.html">
                      Belgrano
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./paginas/villacrespo.html"
                    >
                      Villa crespo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./paginas/contacto.html">
                  <i className="bi bi-badge-ad-fill"></i> Publicá
                </a>
              </li>
            </ul>

            <ul className="f4b-redes">
              <li>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1>Hola soy {nombre}</h1>
      <p>{mensaje}</p>
    </>
  );
};

App.propTypes = {
  nombre: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
};

App.defaultProps = {
  nombre: "...",
  mensaje: "...",
};
