//modal para cierre de sesion
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function ModalCS() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <li className="nav-item">
        <Link className="nav-link link-danger" onClick={handleShow}>
          Cerrar sesión
        </Link>
      </li>
      <Modal size="md" show={show} backdrop="static" onHide={handleClose}>
        <Modal.Header className="bg-danger bg-gradient" closeButton>
          <Modal.Title className="text-white fs-3">Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fs-4">
          ¿Deseas cerrar sesión?
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Volver
          </button>
          <Link className="btn btn-primary" to="/" onClick={handleClose}>
            Continuar
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalCS;
