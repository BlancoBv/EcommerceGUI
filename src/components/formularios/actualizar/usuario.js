function usuario({ handle, enviar }) {
  return (
    <div className="container">
      <form className="row" onSubmit={enviar}>
        <div className="mb-3 col-6">
          <label for="exampleInputEmail1" className="form-label">
            Nombre(s)
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="nombres"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col-3">
          <label for="exampleInputEmail1" className="form-label">
            Apellido Paterno
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="apellidoPaterno"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col-3">
          <label for="exampleInputEmail1" className="form-label">
            Apellido materno
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="apellidoMaterno"
            onChange={handle}
          />
        </div>
        <div className="mb-3 col">
          <label for="exampleInputEmail1" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="usuario"
            onChange={handle}
            placeholder="hola123@gmail.com"
          />
        </div>
        <div className="mb-3 col">
          <label for="exampleInputEmail1" className="form-label">
            Contraseña
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="password"
            onChange={handle}
            placeholder="*********"
          />
        </div>
        <div className="mb-3 col">
          <label for="exampleInputEmail1" className="form-label">
            Nueva contraseña
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="newPassword"
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
export default usuario;
