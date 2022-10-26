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

  if (tabla === null) {
    return;
  } else if (tabla === "user") {
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
                        <td>{el.apellidoPaterno}</td>
                        <td>{el.apellidoMaterno}</td>
                        {rutaActual.pathname === "/up-del" ? (
                          <td>
                            <button></button>
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (tabla === "address") {
    return (
      <div className="container-fluid">
        {/*tabla de datos*/}
        <div className="row-sm pt-3">
          <table className="table">
            <thead className="bg-light">
              <tr>
                <th scope="col">idDireccion</th>
                <th scope="col">Calle</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Colonia</th>
                <th scope="col">Entre calles</th>
                <th scope="col">Estado</th>
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
                        <th scope="row">{el.idDireccion}</th>
                        <td>{el.calle}</td>
                        <td>{el.ciudad}</td>
                        <td>{el.colonia}</td>
                        <td>{el.entreCalles}</td>
                        <td>{el.estado}</td>
                        {rutaActual.pathname === "/up-del" ? (
                          <td>
                            <button></button>
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        {/*tabla de datos*/}
        <div className="row-sm pt-3">
          <table className="table">
            <thead className="bg-light">
              <tr>
                <th scope="col">idBanco</th>
                <th scope="col">Banco</th>
                <th scope="col">CLABE</th>
                <th scope="col">Nombre de cuenta</th>
                <th scope="col">Tipo de cuenta</th>
                <th scope="col">Usuario</th>
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
                        <th scope="row">{el.idBanco}</th>
                        <td>{el.banco}</td>
                        <td>{el.clabe}</td>
                        <td>{el.nombreCuenta}</td>
                        <td>{el.tipoCuenta}</td>
                        <td>{el.usuario}</td>
                        {rutaActual.pathname === "/up-del" ? (
                          <td>
                            <button></button>
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Tablaconsul;
