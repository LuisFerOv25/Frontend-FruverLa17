import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';
import { FiltroProductosService } from 'src/app/shared/filtro-productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit{

  productos: Observable<ProductoModel[]> | undefined;
  categoriaSeleccionada: string | null = null;

  constructor(
    private productoService: ProductoService,
    private filtroProductosService: FiltroProductosService
    ) {}

  ngOnInit(){
    this.productos = this.productoService.obtenerProductos();
    this.filtroProductosService.categoriaSeleccionada.subscribe(categoria => {
      this.categoriaSeleccionada = categoria;
    });
  }


}
