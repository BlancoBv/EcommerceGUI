import { Link } from "react-router-dom";
import ModalCS from "./pages/ModalCS";
import { useLocation } from "react-router-dom";

function Barralateral() {
  const ruta = useLocation();

  return (
    <div className="container pt-5 pb-5 border border-5">
      <h3>Acciones</h3>
      <ul className="nav flex-column ">
        <li className="nav-item">
          <Link
            className={
              ruta.pathname === "/home"
                ? `nav-link link-dark fw-light`
                : "nav-link"
            }
            to="/home"
          >
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              ruta.pathname === "/consultar"
                ? `nav-link link-dark fw-light`
                : "nav-link"
            }
            to="/consultar"
          >
            Consultar
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              ruta.pathname === "/up-del"
                ? `nav-link link-dark fw-light`
                : "nav-link"
            }
            to="/up-del"
          >
            Actualizar/eliminar
          </Link>
        </li>
        <ModalCS />
      </ul>
    </div>
  );
}
export default Barralateral;
