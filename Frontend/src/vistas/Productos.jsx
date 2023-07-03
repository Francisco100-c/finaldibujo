import '../vistas/Productos.css'
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import Context from '../Context';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'


const Productos =  () => {
    
    
    const { mostrar, setMostrar, portadas} = useContext(Context);
    const navigate = useNavigate();
   

    const Ver_mas = (imagenes)  => {
        setMostrar([...mostrar, imagenes]);
        navigate(`/Proyecto/`);
    }

  

        
    return(
      
        <div className='home' >
            {portadas.map((imagenes) => (
                <Card className='card card1' key={imagenes.id} style={{ width: '18rem' }} >
                    <img src={imagenes.imagen} class="card-img-top" alt={imagenes.nombre}></img>
                    <div class="card-body">
                        <h5 class="card-title">{imagenes.nombre}</h5>
                        <p class="card-text">{imagenes.dificultad}</p>
                    </div>
                    <div>
                        <Button
                            className='boton' id='agregar ${producto.id}' variant="primary" onClick={() => Ver_mas(imagenes)}>Detalles</Button>
     
                    </div>
                </Card>
            ))}
        </div>

    );
}

export default Productos;
