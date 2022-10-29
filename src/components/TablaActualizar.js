import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Barralateral from "./Barralateral";
import get from "../helpers/get";
import Formulario from "./formularios/Formulario";

function TablaActualizar() {
  let { id, tabla } = useParams();
  const [datos, setDatos] = useState(null);

  const extraerData = async (x) => {
    const data = await get(`${x}/${id}`, "GET");
    setDatos(data.result);
    console.log(datos);
  };

  useEffect(() => {
    console.log("si");
    extraerData(tabla);
    // eslint-disable-next-line
  }, [tabla]);

  if (tabla === "cuentas") {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-2 ">
            <Barralateral />
          </div>
          <div className="col-sm-10">
            <h1>Actualizando datos de:</h1>
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th scope="col">idBanco</th>
                  <th scope="col">Banco</th>
                  <th scope="col">CLABE</th>
                  <th scope="col">Nombre de cuenta</th>
                  <th scope="col">Tipo de cuenta</th>
                  <th scope="col">ID del usuario</th>
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
                          <td>{el.idUsuario}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
            {/*Inicio formulario*/}
            <Formulario tabla={tabla} datos={datos} />
          </div>
        </div>
      </div>
    );
  } else if (tabla === "user") {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-2 ">
            <Barralateral />
          </div>
          <div className="col-sm-10">
            <h1>Actualizando datos de:</h1>
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th scope="col">idBanco</th>
                  <th scope="col">Banco</th>
                  <th scope="col">CLABE</th>
                  <th scope="col">Nombre de cuenta</th>
                  <th scope="col">Tipo de cuenta</th>
                  <th scope="col">ID del usuario</th>
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
                          <td>{el.idUsuario}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
            {/*Inicio formulario*/}
            <p>hola</p>
            <Formulario tabla={tabla} datos={datos} id={id} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-2 ">
            <Barralateral />
          </div>
          <div className="col-sm-10">
            <h1>Actualizando datos de:</h1>
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th scope="col">idBanco</th>
                  <th scope="col">Banco</th>
                  <th scope="col">CLABE</th>
                  <th scope="col">Nombre de cuenta</th>
                  <th scope="col">Tipo de cuenta</th>
                  <th scope="col">ID del usuario</th>
                </tr>
              </thead>
              <tbody>
                {!datos
                  ? false
                  : datos.map((el) => {
                      return (
                        <tr>
                          <th scope="row">{el.idDireccion}</th>
                          <td>{el.banco}</td>
                          <td>{el.clabe}</td>
                          <td>{el.nombreCuenta}</td>
                          <td>{el.tipoCuenta}</td>
                          <td>{el.idUsuario}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
            {/*Inicio formulario*/}
            <p>hola</p>
            <Formulario tabla={tabla} datos={datos} id={id} />
          </div>
        </div>
      </div>
    );
  }
}

export default TablaActualizar;
