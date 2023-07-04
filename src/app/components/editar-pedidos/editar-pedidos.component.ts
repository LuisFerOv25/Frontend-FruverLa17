import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoModel } from 'src/app/shared/pedido.model';
import { PedidoService } from 'src/app/shared/pedido.service';

@Component({
  selector: 'app-editar-pedidos',
  templateUrl: './editar-pedidos.component.html',
  styleUrls: ['./editar-pedidos.component.css']
})
export class EditarPedidosComponent implements OnInit {
  idPedido = '';
  pedido = new PedidoModel("", "", "","");
  
  constructor(private pedidoService: PedidoService,private route: ActivatedRoute, private router: Router) { }

    
  ngOnInit() {
    this.idPedido = this.route.snapshot.params['idPedido'];
  
      this.pedidoService.obtenerPedido(this.idPedido).subscribe(data => {
        this.pedido = data[0];
      }, error => {
        console.log(error);
      });
    


  }

  onSubmit() { 
    console.log("Submit realizado");
 
      this.pedidoService.actualizarPedido(this.pedido).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['acceder/administracion/pedidos/']);
        }
      );
    


  }
}