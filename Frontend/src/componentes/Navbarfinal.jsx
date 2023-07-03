import '../componentes/Navbarfinal.css'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";

export default function Navbarfinal() {
  const navigate = useNavigate();
  const { usuario, setUsuario } = useContext(Context);
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    
    <div className="Nav">
    <nav className="navbar">
      <span className="logo"></span>

      <div className="opciones">
        
        
        <span className="me-1">
          <Link to="/">
          <button className="btn m-1 register-btn">Inicio</button>
          </Link>
          <Link to="/Productos">
          <button className="btn m-1 register-btn">Proyectos</button>
        </Link>
        </span>

        {!usuario ? (
          <div>
            <Link to="/registrarse">
              <button className="btn m-1 register-btn">Registrarse</button>
            </Link>

            <Link to="/login">
              <button className="btn login-btn">Iniciar Sesión</button>
            </Link>
            
          </div>
        ) : (
          <div>
            <Link to="/perfil">
              <button className="btn  m-1 btn-light">Mi Perfil</button>
            </Link>
            <button onClick={logout} className="btn btn-danger">
              Salir
            </button>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
}