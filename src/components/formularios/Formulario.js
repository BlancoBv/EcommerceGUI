import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cuentas from "./actualizar/cuentas";
import Direcciones from "./actualizar/direcciones";
import Usuario from "./actualizar/usuario";
import get from "../../helpers/get";

function Formulario({ tabla }) {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const handle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = (e) => {
    e.preventDefault();
    console.log("-----------");
    console.log(data);
    enviarDatos();
  };
  const enviarDatos = async () => {
    const resp = await get(tabla, "PUT", data);
    if (resp.statusCode === 200) {
      window.alert("Registro actualizado con exito.");
      navigate("/up-del");
    } else {
      window.alert("Error al actualizar registro");
    }
  };

  if (tabla === "cuentas") {
    return (
      <div>
        <Cuentas handle={handle} enviar={enviar} />
      </div>
    );
  } else if (tabla === "user") {
    return (
      <div>
        <Usuario handle={handle} enviar={enviar} />
      </div>
    );
  } else {
    return <Direcciones handle={handle} enviar={enviar} />;
  }
}
export default Formulario;
