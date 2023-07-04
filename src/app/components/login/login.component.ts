import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(){

  }
  onSubmit() {
 
    this.usuarioService.autenticarUsuario(this.correo,this.contrasena).subscribe(
      (response) => {
        
        console.log('Inicio de sesión exitoso:', response);
        this.router.navigate(['/acceder/administracion']);
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        this.router.navigate(['/acceder/']);
      }
    );

  }
    
}