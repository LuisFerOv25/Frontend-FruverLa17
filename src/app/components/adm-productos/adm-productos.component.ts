import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-adm-productos',
  templateUrl: './adm-productos.component.html',
  styleUrls: ['./adm-productos.component.css']
})
export class AdmProductosComponent implements OnInit{
  
productos: Observable<ProductoModel[]> | undefined;

  constructor(private productoService: ProductoService,private location: Location) { }

  ngOnInit(){
    this.productos = this.productoService.obtenerProductos();
  }

  borrarProducto(idProducto: string) { 
    this.productoService.borrarProducto(idProducto).subscribe(data => { 
      console.log("Registro Eliminado");
      this.ngOnInit();
    });
  }
  atras() {
    this.location.back();
  }
}
