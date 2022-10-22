import Contenido from "../Contenido.js";
import Barralateral from "../Barralateral.js";

function Home() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-sm-2 ">
          <Barralateral />
        </div>
        <div className="col-sm-10 ">
          <Contenido />
        </div>
      </div>
    </div>
  );
}
export default Home;
