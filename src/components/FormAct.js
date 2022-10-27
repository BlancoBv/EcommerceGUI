import Formuseract from "./Formuseract";
import Formdirec from "./Formdirec";
import Formcuenta from "./Formcuenta";

function FormAct({ handle, enviar, tabla }) {
  if (tabla === null) {
    return;
  } else if (tabla === "user") {
    return <Formuseract handle={handle} enviar={enviar} />;
  } else if (tabla === "address") {
    return <Formdirec handle={handle} enviar={enviar} />;
  } else {
    return <Formcuenta handle={handle} enviar={enviar} />;
  }
}
export default FormAct;
