import Formuser from "./Formuser";

function Formenviar({ handle, enviar, tabla }) {
  if (tabla === "user") {
    return <Formuser handle={handle} enviar={enviar} />;
  } else if (tabla === "address") {
    return "nya";
  } else {
    return "checho";
  }
}
export default Formenviar;
