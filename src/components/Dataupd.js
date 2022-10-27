import Tablaconsul from "./Tablaconsul";
import Filtroconsul from "./Filtroconsul";
import Insertardato from "./Insertardato";
import { useState } from "react";
import FormActualizar from "./FormActualizar";

function Dataupd() {
  const [tabla, setTabla] = useState(null);
  //variable de estado para componente insertar
  const [insert, setInsert] = useState(null);
  const [id, setId] = useState(null);
  return (
    <div className="container-fluid">
      <h1 className="m-3">Actualización de datos</h1>
      <Filtroconsul tabla={tabla} setTabla={setTabla} id={id} setId={setId} />
      <Insertardato tabla={insert} setTabla={setInsert} />
      <FormActualizar tabla={insert} setTabla={setInsert} />
      <Tablaconsul tabla={tabla} />
    </div>
  );
}
export default Dataupd;
