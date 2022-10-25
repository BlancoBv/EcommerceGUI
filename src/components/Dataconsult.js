import Filtroconsul from "./Filtroconsul";
import Tablaconsul from "./Tablaconsul";
import { useState } from "react";

function Dataconsult() {
  const [tabla, setTabla] = useState(null);
  const [id, setId] = useState(null);
  return (
    <div className="container-fluid">
      <h1 className="m-3">Consulta de datos</h1>
      <Filtroconsul setTabla={setTabla} tabla={tabla} id={id} setId={setId} />
      <Tablaconsul tabla={tabla} />
    </div>
  );
}
export default Dataconsult;
