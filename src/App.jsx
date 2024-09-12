import "./estilos/chat.css"
import "./estilos/lista.css"
import './App.css'
import { Chat } from './componentes/chat/chat'
import { ListaUsuario } from './componentes/listaUsuarios/listaUsuario'
import io from 'socket.io-client';
import { useEffect, useState } from "react"

  const socket = io('http://localhost:2000', {forceNew: true});

function App() {


  const [mensajes, setMensajes] = useState([]);
  const [msServer, setMsServer] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [chats, setChats] = useState([]);


  // funciones para cargar usuarios y mensajes desde la api

 async function optenerUsuarios () {
  try {
    const res = await fetch('http://localhost:2000/api/chat/usuarios');
    const usuarios = await res.json();
    setUsuarios(usuarios.data)

  } catch (error) {
    alert(error);
  }

  }

 async function optenerMensajes () {
  try {
    const res = await fetch('http://localhost:2000/api/chat/mensajes');
    const mensajesApi = await res.json();
    setChats(mensajesApi.data)

  } catch (error) {
    alert(error);
  }
  }
  
  
  // control de los sockets 
   useEffect(() => {
    socket.on('mensaje', (msg) => {
      setMsServer(msg);
    })

    optenerUsuarios()
   }, [socket])
   
   // mensajes acomulados 
   useEffect(() => {
    setMensajes([...mensajes, msServer]);
    
   }, [msServer])

   useEffect(() => {
      optenerMensajes();
   }, [])

  return (
     <div className='contenedorPrincipal'>
      <ListaUsuario usuarios={usuarios}  socket={socket}/> 
      <Chat socket={socket} mensajes ={mensajes} chats={chats}/>
     </div>
  )
}

export default App
