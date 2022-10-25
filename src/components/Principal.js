import { useState } from "react";
import auth from "../helpers/auth";
function Principal() {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <div className="col container-sm mt-5">
      <div className="row mb-3 ">
        <h3 className="text-center">Ingresa tu usuario y contraseña:</h3>
        <label
          for="exampleFormControlInput1"
          className="col-sm-2 col-form-label"
        >
          Usuario
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control "
            id="inputUser"
            placeholder="tilin123"
            onChange={(ev) => {
              setUser(ev.target.value);
            }}
          />
        </div>
        <p>value user: {user}</p>
      </div>

      <div className="row mb-3 ">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Contraseña
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control user-select-none"
            id="inputPassword"
            placeholder="*******"
            onChange={(ev) => {
              setPass(ev.target.value);
            }}
          />
        </div>
        <p>value pass: {pass}</p>
      </div>

      <div className="row mb-3 ps-5 pe-5">
        <button
          type="button"
          className="btn btn-primary "
          to="home"
          onClick={async () => await auth(user, pass)}
        >
          Validar
        </button>
      </div>
    </div>
  );
}
export default Principal;
