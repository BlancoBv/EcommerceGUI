import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div className="container-fluid">
      <div className="text-center position-absolute top-50 start-50 translate-middle">
        <p className="fs-1 fw-bold">¡Vaya!</p>
        <p className="fs-4">
          No deberias estar aqui <i className="bi bi-emoji-frown"></i>
        </p>
        <p className="fst-italic">Que tal si regresas al inicio</p>
        <Link className="btn btn-primary" role="button" to="/">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
