import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoModel } from 'src/app/shared/pedido.model';
import { PedidoService } from 'src/app/shared/pedido.service';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit{
  idProducto = '';
  cant:number = 0;
  producto: ProductoModel | undefined;
  pedido = new PedidoModel("", "","",new Date().toISOString());

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
     private router: Router,
    private pedidoService: PedidoService,
    private location: Location
    ) { }

  ngOnInit(){
    this.idProducto = this.route.snapshot.params['idProducto'];
      this.productoService.obtenerProducto(this.idProducto).subscribe(data => {
        this.producto = data[0],
        this.pedido.detalle = this.producto.detalle;
        this.pedido.cantidad = '1';
      }, error => {
        console.log(error);
      });

    
 
  }


  onSubmit(){
    this.pedidoService.agregarPedido(this.pedido).subscribe(data => {
      this.router.navigate(['/pedidos']);
    }, error => {
      console.log(error);
    });
  }
  
  atras() {
    this.location.back();
  }
}
