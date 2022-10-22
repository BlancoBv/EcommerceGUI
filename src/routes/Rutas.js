import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "../components/Principal.js";
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
          <Route exact path="/" element={<Principal />} />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/up-del" element={<Actualizar />} />
          <Route exact path="/consultar" element={<Consultar />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default Rutas;
