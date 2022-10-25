import { useState, useEffect } from "react";
import get from "../helpers/get";
import { useLocation } from "react-router-dom";

function Tablaconsul({ tabla }) {
  const [datos, setDatos] = useState(null);
  const rutaActual = useLocation();

  async function extraerData(x) {
    const data = await get(x);
    setDatos(data.result);
  }
  //extraerData();
  useEffect(() => {
    console.log("hola");
    extraerData(tabla);
  }, [tabla]);

  return (
    <div className="container-fluid">
      {/*tabla de datos*/}
      <div className="row-sm pt-3">
        <table className="table">
          <thead className="bg-light">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido paterno</th>
              <th scope="col">Apellido materno</th>
              {rutaActual.pathname === "/up-del" ? (
                <th scope="col">Eliminar/Actualizar</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {!datos
              ? false
              : datos.map((el) => {
                  return (
                    <tr>
                      <th scope="row">{el.idUsuario}</th>
                      <td>{el.nombres}</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Tablaconsul;
