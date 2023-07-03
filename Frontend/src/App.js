import Context from './Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {useState, useEffect} from "react"


import Login from "./vistas/Login"
import Navbar from './componentes/Nabvar';
import Home from './vistas/Home';
import VerMas from './vistas/VerMas';
import Registro from './vistas/Registro';
import Perfil from './vistas/Perfil'
import Proyectos from './vistas/Proyectos';




function App() {

    const [descargas, setDescargas] = useState([]);
    const [total, setTotal]= useState(0)
    const [mostrar, setMostrar]=useState([])
    const [usuario, setUsuario] = useState([])
    const [portadas, setPortadas] = useState([]);
    

     //Lamando a la api
     const urlInicial = 'http://localhost:3000/portadas'
     
     const obtenerApi = async () => {
         const response = await fetch (urlInicial)
         const obtenerPortadas = await response.json();
         const nuevasPortadas = obtenerPortadas
         setPortadas(nuevasPortadas)
        };


console.log(usuario)
  
        useEffect(()=> {
          obtenerApi();
          }, []);  

      
  
  return (
    <div className="App">
      <Context.Provider value={{descargas, setDescargas, total, setTotal, mostrar, setMostrar, usuario, setUsuario, portadas, setPortadas }}>
        <BrowserRouter>
          <Navbar/> 
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Productos" element={<Proyectos/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/registrarse" element={<Registro/>} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/Proyecto/" element={<VerMas/>}/>
            <Route path="/Proyecto/:id" element={<VerMas/>}/>
            </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
