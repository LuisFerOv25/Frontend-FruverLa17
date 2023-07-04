import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
 logo: string = 'assets/images/logo.png';

 nombre: string = "";
 constructor(public router: Router,private usuarioService: UsuarioService) {}

 ngOnInit(){

}

 logout() {
  this.usuarioService.logout();
  this.router.navigate(['/login']);
}

esVisible(): boolean {
  const currentUrl = this.router.url;
  return (
    currentUrl === '/acceder/administracion' ||
    currentUrl === '/acceder/administracion/productos' ||
    currentUrl === '/acceder/administracion/pedidos' 
    
  );
}


esVisibleReg(): boolean {
  const currentUrl = this.router.url;
  return (
    currentUrl === '/registro/usuarios' ||
    currentUrl === '/acceder'
  );
}

}
