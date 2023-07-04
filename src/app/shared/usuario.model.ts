export class UsuarioModel { 
    constructor(
        public idUsuario: string, public nombre: string, public direccion:string, 
        public correo: string, public contrasena: string, public tipo: string
        ) { 
  
    }
  }