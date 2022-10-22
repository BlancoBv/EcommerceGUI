import { Accordion, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
function Filtroconsul({ setTabla, tabla }) {
  const [id, setId] = useState("");

  return (
    <div className="container-fluid">
      {/* acordion filtros de busqueda*/}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filtros de consulta</Accordion.Header>
          <Accordion.Body className="row">
            <div className="col">
              {/*Lista de opciones acordeon*/}
              <Form.Select
                aria-label="Tablas"
                onChange={(ev) =>
                  ev.target.value === "0"
                    ? setTabla(null)
                    : setTabla(ev.target.value)
                }
              >
                <option value="0">Seleccionar tabla</option>
                <option value="user">Usuario</option>
                <option value="direcciones">Direcciones</option>
                <option value="3">Three</option>
              </Form.Select>
              <p>
                {tabla ? `estas en la tabla: ${tabla}` : "selecciona una tabla"}
              </p>
            </div>
            {/*Input de id*/}
            <div className="col">
              <FloatingLabel
                controlId="floatingInput"
                label="ID"
                className="mb-3"
                onChange={(ev) => setId(ev.target.value)}
              >
                <Form.Control type="text" />
                <p>valueid: {id}</p>
              </FloatingLabel>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Filtroconsul;
