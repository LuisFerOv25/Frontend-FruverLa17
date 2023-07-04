import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/usuario.model';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
 
  usuario = new UsuarioModel("", "", "","","","2");

  constructor(private usuarioService: UsuarioService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() { 

      console.log('Nuevo Usuario');
      this.usuarioService.agregarUsuario(this.usuario).subscribe(data => { 
        this.router.navigate(['/pedidos']);
      });
    

  }

}
