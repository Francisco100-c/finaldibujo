import '../vistas/Proyectos.css';
import React from "react";

import imagen1 from "../componentes/img/imagen1.jpg"
import imagen2 from "../componentes/img/imagen2.jpg"
import imagen4 from "../componentes/img/imagen4.png"
import imagen5 from "../componentes/img/imagen5.jpg"
import imagen6 from "../componentes/img/imagen6.png"
import imagen7 from "../componentes/img/imagen7.jpg"
import imagen8 from "../componentes/img/imagen8.jpg"
import imagen9 from "../componentes/img/imagen9.jpg"
import imagen10 from "../componentes/img/imagen10.jpg"
import imagen11 from "../componentes/img/imagen11.jpg"
import imagen12 from "../componentes/img/imagen12.jpg"
import imagen13 from "../componentes/img/imagen13.jpg"
import imagen14 from "../componentes/img/imagen14.jpg"
import imagen15 from "../componentes/img/imagen15.jpg"




const Proyectos =  () => {
     
    return (
        <section className='fondo_uni'>
        <div className="contenedor">
        <img src={imagen1} className="im"></img>
        <img src={imagen2} className="im"></img>
        <img src={imagen4} className="im"></img>
        <img src={imagen5} className="im"></img>
        <img src={imagen6} className="im"></img>
        <img src={imagen7} className="im"></img>
        <img src={imagen8} className="im"></img>
        <img src={imagen9} className="im"></img>
        <img src={imagen10} className="im"></img>
        <img src={imagen11} className="im"></img>
        <img src={imagen12} className="im"></img>
        <img src={imagen13} className="im"></img>
        <img src={imagen14} className="im"></img>
        <img src={imagen15} className="im"></img>
        </div>
        </section>
    );
}

export default Proyectos;