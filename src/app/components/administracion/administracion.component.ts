import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent{
  Apedido: string = 'assets/images/apedido.png';
  Aproducto: string = 'assets/images/aproducto.png';
}
