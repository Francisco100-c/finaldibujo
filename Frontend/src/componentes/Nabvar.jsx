
import '../componentes/Navbar.css'
import Navbarfinal from './Navbarfinal';
import { useContext } from "react";
import Context from '../Context';


const Navbar = ()=>{

    const {usuarios} = useContext(Context);

    
return(
    <div>
    
        <nav className="navbar navbar-expand-lg Nav fondo">
            <div className="container-fluid">
            <div className="navbar-brand color">
            <img src="https://saetadiecasting.com/wp-content/uploads/2017/02/Icono-ingenieria.png"  width="45" height="34" className="d-inline-block align-text-top"></img>
            <a className='texto1'>Dibujo Técnico</a>
            </div>
            <a className='texto'>Bienvenido...</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">   
                     </ul>
                </div>
            </div>
        </nav>
        
        <Navbarfinal/>
    </div>
    



);



}

export default Navbar;