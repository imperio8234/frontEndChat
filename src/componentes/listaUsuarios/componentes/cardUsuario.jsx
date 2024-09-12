import { Avatar, Badge } from "@mui/material"

// eslint-disable-next-line react/prop-types
export const PerfilUsuario = ({usuario, escribiendo}) => {
  // eslint-disable-next-line react/prop-types
  const nombre = usuario.nombre? usuario.nombre :usuario.id_usuario.slice(0,3);

    return (
        <div className="cardUsuario">
          {
            // avatar y estado del usuario 
              // eslint-disable-next-line react/prop-types
              usuario.estado== "activo"?
              <Badge color="success" badgeContent=" "  variant="dot">
               <Avatar>
                {nombre}
               </Avatar>

            </Badge>
            :
            <Badge color="error" badgeContent=" "  variant="dot">
              <Avatar>
                {nombre}
               </Avatar>

            </Badge>
            }
          
          <div className="cuerpo">
            <p>{nombre}</p>
            <p>{
            // eslint-disable-next-line react/prop-types
            escribiendo && escribiendo == usuario.id_usuario?"escribiendo...": ""}</p>
          </div>
        </div>
    )
}