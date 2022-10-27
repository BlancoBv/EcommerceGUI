import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../GUI/Layout.js";
import Notfound from "../components/pages/Notfound.js";
import Home from "../components/pages/Home.js";
import Actualizar from "../components/pages/Actualizar.js";
import Consultar from "../components/pages/Consultar.js";

function Rutas() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/up-del" element={<Actualizar />} />
          <Route exact path="/consultar" element={<Consultar />} />
          <Route exact path="/actualizar-usuario/:id" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default Rutas;
