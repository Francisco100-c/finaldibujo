import { useState, useContext } from "react";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

import '../vistas/login.css'



import axios from "axios";

export default function RegistroForm() {
  const { setUsuario } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y clave obligatorias");
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      alert("Usuario identificado con éxito 😀");
      navigate("/Perfil");
      localStorage.setItem("token", token);
      setUsuario()
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  return (
    <div className="imgLogin">
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5 fondo">
      <h1>Iniciar Sesión</h1>
      <hr />
      <div className="form-group mt-1 ventanas ">
        <label>Dirección de Email</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group mt-1 ventanas ">
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

      <button onClick={iniciarSesion} className="btn btn-light mt-3">
        Iniciar Sesión
      </button>
    </div>
    </div>
  );
}