import { Link } from "react-router-dom";
import ModalCS from "./pages/ModalCS";

function Barralateral() {
  return (
    <div className="container pt-5 border-end border-5">
      <h3>Acciones</h3>
      <ul className="nav flex-column ">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/consultar">
            Consultar
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/up-del">
            Actualizar/eliminar
          </Link>
        </li>
        <ModalCS />
      </ul>
    </div>
  );
}
export default Barralateral;
