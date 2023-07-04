import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuario.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  
  obtenerUsuarios() { 
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/registro/usuarios`);
  }

  obtenerUsuario(idUsuario: string) { 
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/registro/usuarios${idUsuario}`);
  }

  agregarUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/registro/usuarios`,usuario);
  }
  autenticarUsuario(correo: string, contrasena: string) {
    const url = `${this.BASE_URL}/acceder`;
    return this.http.post<string>(url, { correo, contrasena });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
