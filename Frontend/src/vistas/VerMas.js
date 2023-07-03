import '../vistas/VerMas.css'
import { useContext } from "react";
import Context from '../Context';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';






const VerMas = () =>{
    const {mostrar} = useContext(Context);
    const navigate = useNavigate();
    
   
    const quitarProducto= ()  => { 
        mostrar.splice(0)
        navigate(`/Perfil`);
        
                  
    }
    
    return(
        <div className="sectionCarrito1">
            <div>
            
            
            {mostrar.map((imagen, i) =>(
                
                <div key={i} className="contenedor3">
                <section>
                    <h3>{imagen.nombre}</h3>
                    <p>Dificultad:{imagen.dificultad}</p>
                    </section>
                    
                    <img className="imagen1" src={imagen.imagen} />
                    <img className="imagen1" src={imagen.img1} />
                    <img className="imagen1" src={imagen.img2} />
                    <img className="imagen1" src={imagen.img3} />
                    
                    
                    
                </div>
  
    ))}

        
          </div>   
          <Button className='boton botonV' id='agregar ${producto.id}' variant="primary" onClick={() => quitarProducto()} >Volver</Button>
          
          <Button className='botonD boton'>Descargar</Button>  
          
          
          </div>
          

    );
}

export default VerMas;