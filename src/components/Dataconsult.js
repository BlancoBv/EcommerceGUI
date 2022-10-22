import Filtroconsul from "./Filtroconsul";
import Tablaconsul from "./Tablaconsul";

import { useState } from "react";

function Dataconsult() {
  const [tabla, setTabla] = useState(null);
  return (
    <div className="container-fluid">
      <Filtroconsul setTabla={setTabla} tabla={tabla} />
      <Tablaconsul tabla={tabla} />
    </div>
  );
}
export default Dataconsult;
