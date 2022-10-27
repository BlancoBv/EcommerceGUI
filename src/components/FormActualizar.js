import { Accordion, Form } from "react-bootstrap";
import { useState } from "react";
import get from "../helpers/get";
import FormAct from "./FormAct";

function FormActualizar({ setTabla, tabla }) {
  const [data, setData] = useState([]);

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    console.log("-----------");
    console.log(data);
    enviarDatos();
  };
  const enviarDatos = async () => {
    get(tabla, "PUT", data);
  };

  return (
    <div className="container-fluid mt-2">
      {/* acordion filtros de busqueda*/}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editar registro</Accordion.Header>
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
                <option value="address">Direcciones</option>
                <option value="cuentas">Cuentas</option>
              </Form.Select>
              <p className="fst-italic text-success">
                {tabla
                  ? `Insertaras un registro en: ${tabla}`
                  : "Selecciona una tabla"}
              </p>
            </div>
            {/*Input de id*/}
            <div className="row">
              <FormAct handle={handle} enviar={enviar} tabla={tabla} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default FormActualizar;
