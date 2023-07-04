import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoModel } from 'src/app/shared/pedido.model';
import { PedidoService } from 'src/app/shared/pedido.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adm-pedidos',
  templateUrl: './adm-pedidos.component.html',
  styleUrls: ['./adm-pedidos.component.css']
})
export class AdmPedidosComponent implements OnInit {
  
  pedidos: Observable<PedidoModel[]> | undefined;

  constructor(private pedidoService: PedidoService,private location: Location) { }


  ngOnInit(){
    this.pedidos = this.pedidoService.obtenerPedidos();
  }

  borrarPedido(idPedido: string) { 
    this.pedidoService.borrarPedido(idPedido).subscribe(data => { 
      console.log("Registro Eliminado");
      this.ngOnInit();
    });
  }
  atras() {
    this.location.back();
  }
}