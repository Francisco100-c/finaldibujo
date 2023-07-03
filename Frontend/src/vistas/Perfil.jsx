import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import axios from "axios";
import Productos from "./Productos";


export default function Home() {
  const { setUsuario: setUsuarioGlobal } = useContext(Context);

  const [setUsuarioLocal] = useState({});

  const getUsuarioData = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/usuarios";
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuarioGlobal(data);
      setUsuarioLocal(data);
    } catch ({ response: { message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  useEffect(() => {
    getUsuarioData();
  },[]);

  return(

   <div className="fondoUniforme">
     <Productos/>
   </div>

)
}
