import Barralateral from "../Barralateral";
import Dataupd from "../Dataupd";

function Actualizar() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-sm-2 ">
          <Barralateral />
        </div>
        <div className="col-sm-10">
          <Dataupd />
        </div>
      </div>
    </div>
  );
}
export default Actualizar;
