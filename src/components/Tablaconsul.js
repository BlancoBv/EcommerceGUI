import { useState, useEffect } from "react";
import get from "../helpers/get";
function Tablaconsul({ tabla }) {
  const [datos, setdatos] = useState(null);
  async function extraerData(x) {
    const data = await get(x);
    setdatos(data.result);
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
