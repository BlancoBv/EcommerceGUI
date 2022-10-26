import { Accordion, Form /*, FloatingLabel */ } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Filtroconsul({ setTabla, tabla }) {
  const rutaActual = useLocation();
  return (
    <div className="container-fluid">
      {/* acordion filtros de busqueda*/}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {rutaActual.pathname === "/consultar"
              ? "Filtros de consulta"
              : "Filtros de busqueda"}
          </Accordion.Header>
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
                <option value="address">Direcciones</option>
                <option value="cuentas">Cuentas</option>
              </Form.Select>
              <p className="fst-italic text-success">
                {tabla ? `Consultando tabla: ${tabla}` : "Selecciona una tabla"}
              </p>
            </div>
            {/* 
            <div className="col">
              <FloatingLabel
                controlId="floatingInput"
                label="ID"
                className="mb-3"
                onChange={(ev) =>
                  ev.target.value === " " ? setId(null) : setId(ev.target.value)
                }
              >
                <Form.Control type="text" />
                <p className="fst-italic text-success ">
                  {id
                    ? `Filtrando por la id: ${id}`
                    : "No estas filtrando por id"}
                </p>
              </FloatingLabel>
            </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Filtroconsul;
