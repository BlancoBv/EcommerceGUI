import { useState } from "react";
import Cuentas from "./actualizar/cuentas";
import get from "../../helpers/get";

function Formulario({ tabla, datos }) {
  const [data, setData] = useState([]);

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    console.log("-----------");
    console.log(data);
  };
  const enviarDatos = async () => {
    get(tabla, "POST", data);
  };

  if (tabla === "cuentas") {
    return (
      <div>
        <Cuentas handle={handle} enviar={enviar} />
      </div>
    );
  } else if (tabla === "user") {
    return <div>checho </div>;
  }
}
export default Formulario;
