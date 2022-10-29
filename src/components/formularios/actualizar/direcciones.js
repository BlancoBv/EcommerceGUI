function direcciones({ handle, enviar }) {
  return (
    <div className="container">
      <form className="row" onSubmit={enviar}>
        <div className="mb-3 col-6">
          <label for="exampleInputEmail1" className="form-label">
            Calle
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="calle"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col-3">
          <label for="exampleInputEmail1" className="form-label">
            Colonia
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="colonia"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col-3">
          <label for="exampleInputEmail1" className="form-label">
            Número exterior
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="numExt"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col-3">
          <label for="exampleInputEmail1" className="form-label">
            Número interior
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="numInt"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col">
          <label for="exampleInputEmail1" className="form-label">
            Entre calles
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="entreCalles"
            onChange={handle}
            placeholder="hola123@gmail.com"
          />
        </div>
        <div className="mb-3 col">
          <label for="exampleInputEmail1" className="form-label">
            Referencia
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="referencia"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col">
          <label for="exampleInputEmail1" className="form-label">
            ID direccion
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="idDireccion"
            onChange={handle}
            placeholder="admin/user"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Añadir
        </button>
      </form>
    </div>
  );
}
export default direcciones;
