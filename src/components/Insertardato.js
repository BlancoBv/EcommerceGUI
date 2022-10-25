import { Accordion, Form } from "react-bootstrap";
function Insertardato({ setTabla, tabla }) {
  return (
    <div className="container-fluid mt-2">
      {/* acordion filtros de busqueda*/}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Añadir registro</Accordion.Header>
          <Accordion.Body className="col">
            <div className="row">
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
              <p className="fst-italic text-success">
                {tabla
                  ? `Insertaras un registro en: ${tabla}`
                  : "Selecciona una tabla"}
              </p>
            </div>
            {/*Input de id*/}
            <div className="row">
              espacio formulario
              <button className="btn btn-primary " type="button">
                Añadir
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Insertardato;
