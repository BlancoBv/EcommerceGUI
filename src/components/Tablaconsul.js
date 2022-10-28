import { useState, useEffect } from "react";
import get from "../helpers/get";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Tablaconsul({ tabla }) {
  const [datos, setDatos] = useState(null);
  const rutaActual = useLocation();

  const eliminarDatos = async (id) => {
    console.log(id);
    const resp = await get(`${tabla}/delete/${id}`, "DELETE");
    console.log(id);
    if (resp.statusCode === 200) {
      window.alert("Registro eliminado con exito.");
      let actualizar = await extraerData(tabla);
      setDatos(actualizar.result);
    } else {
      window.alert("Error al eliminar registro");
    }
  };

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
                        <th scope="row">{el.idUsuario}</th>
                        <td>{el.nombres}</td>
                        <td>{el.apellidoPaterno}</td>
                        <td>{el.apellidoMaterno}</td>
                        <td>{el.usuario}</td>
                        {rutaActual.pathname === "/up-del" ? (
                          <td>
                            <button
                              className="btn btn-danger m-1"
                              type="button"
                              onClick={() => eliminarDatos(el.idUsuario)}
                            >
                              Eliminar
                            </button>
                            <Link
                              className="btn btn-primary "
                              type="button"
                              to={`/actualizar/${tabla}/${el.idUsuario}`}
                            >
                              Actualizar
                            </Link>
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
                            <button
                              className="btn btn-danger m-1"
                              type="button"
                              onClick={() => eliminarDatos(el.idDireccion)}
                            >
                              Eliminar
                            </button>
                            <Link
                              className="btn btn-primary "
                              type="button"
                              to="/actualizar_id"
                            >
                              Actualizar
                            </Link>
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
                            <button
                              className="btn btn-danger m-1"
                              type="button"
                              onClick={() => eliminarDatos(el.idBanco)}
                            >
                              Eliminar
                            </button>
                            <Link
                              className="btn btn-primary "
                              type="button"
                              to={`/actualizar/${tabla}/${el.idBanco}`}
                            >
                              Actualizar
                            </Link>
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
