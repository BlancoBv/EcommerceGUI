function cuentas({ handle, enviar }) {
  return (
    <div className="container">
      <form className="row" onSubmit={enviar}>
        <div className="mb-3 col-3">
          <label for="exampleInputEmail1" className="form-label">
            Banco
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="banco"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col-3">
          <label for="exampleInputEmail1" className="form-label">
            CLABE
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="clabe"
            placeholder="123"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col-6">
          <label for="exampleInputEmail1" className="form-label">
            Nombre del titular de cuenta
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="nombreCuenta"
            onChange={handle}
            defaultValue="Banco"
          />
        </div>
        <div className="mb-3 col-6">
          <label for="exampleInputEmail1" className="form-label">
            Tipo de cuenta
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="tipoCuenta"
            onChange={handle}
            placeholder="Deb/Credi"
          />
        </div>
        <div className="mb-3 col-6">
          <label for="exampleInputEmail1" className="form-label">
            ID usuario
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="idUsuario"
            onChange={handle}
            placeholder="hola123@gmail.com"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Añadir
        </button>
      </form>
    </div>
  );
}
export default cuentas;
