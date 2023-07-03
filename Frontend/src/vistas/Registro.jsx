import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../vistas/registro.css'

export default function RegistroForm() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const registrarUsuario = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/usuarios";
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  return (
    <div className="imgRegistro">
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5 fondoRegistro">
      <h1>Registrar nuevo usuario</h1>
      <hr />
      <div className="form-group mt-1 ventanas">
        <label>Email address</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group mt-1 ventanas">
        <label>Password</label>
        <input
          value={usuario.password}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="form-group mt-1 ventanas">
        <label>Rol</label>
        <select
          value={usuario.rol}
          onChange={handleSetUsuario}
          name="rol"
          className="form-select"
        >
          <option disabled selected>
            Seleccione un rol
          </option>
          <option value="Profesor">Profesor</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div className="form-group mt-1 ventanas">
        <label>Programa</label>
        <select
          value={usuario.programa}
          onChange={handleSetUsuario}
          name="programa"
          className="form-select"
        >
          <option disabled selected>
            Seleccione un Programa
          </option>
          <option value="AutoCad">AutoCad</option>
          <option value="SolidWoks">SolidWoks</option>
          <option value="SolidEdge">SolidEdge</option>
        </select>
      </div>

      <button onClick={registrarUsuario} className="btn btn-light mt-3">
        Registrarme
      </button>
    </div>
    </div>
  );
}
