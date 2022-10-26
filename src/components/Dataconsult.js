import Filtroconsul from "./Filtroconsul";
import Tablaconsul from "./Tablaconsul";

import { useState } from "react";

function Dataconsult() {
  const [tabla, setTabla] = useState(null);

  const [datos, setDatos] = useState(null);
  return (
    <div className="container-fluid">
      <h1 className="m-3">Consulta de datos</h1>
      <Filtroconsul setTabla={setTabla} tabla={tabla} />
      <Tablaconsul tabla={tabla} datos={datos} setDatos={setDatos} />
    </div>
  );
}
export default Dataconsult;
