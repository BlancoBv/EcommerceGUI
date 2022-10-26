import IMG from "./img/IMG_PRINC.jpg";
import { Link } from "react-router-dom";

function Contenido() {
  return (
    <div className="container-fluid">
      <h1 className="m-3">Bienvenido</h1>
      <img src={IMG} className="img-fluid" width="500" alt="" />
      <div className="mt-3">
        <Link type="button" className="btn btn-primary" to="/consultar">
          Empezar
        </Link>
      </div>
    </div>
  );
}
export default Contenido;
