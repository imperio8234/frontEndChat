import { SendOutlined } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Chat = ({socket, mensajes, chats}) => {
    const [mensaje, setMensaje] = useState("");
    const [id, setId] = useState('');
    const enviarMensaje = () => {
        const data = {
            mensaje,
            // eslint-disable-next-line react/prop-types
            id_usuario:socket.id
        }
        // eslint-disable-next-line react/prop-types
        setId(socket.id)
        if (mensaje.trim()) {
            // eslint-disable-next-line react/prop-types
        socket.emit("mensaje", data);
        }
        setMensaje('')
    }
    function usuarioEscribiendo () {

        // eslint-disable-next-line react/prop-types
        socket.emit("escribiendo", id)
    }
    return (
        <div className="contenedorChat">
           <Avatar>
            
           </Avatar>
           <div className="cuerpoChat">
            {

                // chats de la base de datos 
                // eslint-disable-next-line react/prop-types
              chats? chats.map((mensaje, key) => {
                
                    return (
                        <div key={key} className={mensaje.id_usuario!= id?"mensaje1":"mensaje2"} >
                            <p key={key}>{mensaje.mensaje}</p>
                            <div className="nombreChat">
                                <p>{mensaje.id_usuario.slice(0,3)}</p>
                            </div>
                        </div>
                    )
                })
                :""
               
            }


            {
                //chats actuales 

                
                // eslint-disable-next-line react/prop-types
              mensajes.length >0? mensajes.map((mensaje, key) => {
                    return (
                        <div key={key} className={mensaje.id_usuario!= id?"mensaje1":"mensaje2"} >
                            <p key={key}>{mensaje.mensaje}</p>
                            <div className="nombreChat">
                                <p>{mensaje.id_usuario?mensaje.id_usuario.slice(0.3):""}</p>
                            </div>
                        </div>
                    )
                })
                :""
               
            }
           </div>
           <div className="escrituraChat">
            <div>
            <textarea value={mensaje} onKeyUp={()=> usuarioEscribiendo()} onChange={(e) => setMensaje(e.target.value)} id="autoExpand" rows="1" placeholder="Escribe aquí..."></textarea>
            </div>
            <div className="btnE">
                <IconButton onClick={() => enviarMensaje()}>
                    <SendOutlined />
                </IconButton>
            </div>
           </div>
        </div>
    )
}