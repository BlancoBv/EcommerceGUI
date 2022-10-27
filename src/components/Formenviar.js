import Formuser from "./Formuser";
import Formdirec from "./Formdirec";
import Formcuenta from "./Formcuenta";

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
