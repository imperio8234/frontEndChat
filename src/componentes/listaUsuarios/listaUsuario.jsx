import { useState, useEffect } from "react";
import { PerfilUsuario } from "./componentes/cardUsuario"

// eslint-disable-next-line react/prop-types
export const ListaUsuario = ({usuarios, socket}) => {
  const [usuarioEscribiendo, setUsuarioEscribiendo]= useState('');

  // usuario escribiendo

  useEffect(() =>{
    
  // eslint-disable-next-line react/prop-types
  socket.on("escribiendo", (idUsuario) => {
    setUsuarioEscribiendo(idUsuario)
  })
  
}, [socket])

setTimeout(() => {
   setUsuarioEscribiendo('');
}, 700)
    return (
        <div className="contenedorLista">
           <div>
            
           </div>
           <div className="contUsuario">
             {
              usuarios?
              // eslint-disable-next-line react/prop-types
              usuarios.map((usuario, key) => {
                return(
                  <PerfilUsuario usuario={usuario} key={key} escribiendo={usuarioEscribiendo}/>
                )
              })
              : ""
             }
             
           </div>
        </div>
    )
}