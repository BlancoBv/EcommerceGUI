import Barralateral from "../Barralateral.js";
import Dataconsult from "../Dataconsult.js";
function Consultar() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-sm-2 ">
          <Barralateral />
        </div>
        <div className="col-sm-10">
          <Dataconsult />
        </div>
      </div>
    </div>
  );
}
export default Consultar;
