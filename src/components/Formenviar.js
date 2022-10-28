import Formuser from "./formularios/Formuser";
import Formdirec from "./formularios/Formdirec";
import Formcuenta from "./formularios/Formcuenta";

function Formenviar({ handle, enviar, tabla }) {
  if (tabla === null) {
    return;
  } else if (tabla === "user") {
    return <Formuser handle={handle} enviar={enviar} />;
  } else if (tabla === "address") {
    return <Formdirec handle={handle} enviar={enviar} />;
  } else {
    return <Formcuenta handle={handle} enviar={enviar} />;
  }
}
export default Formenviar;
