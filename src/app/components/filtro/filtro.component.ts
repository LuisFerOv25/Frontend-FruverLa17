import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroProductosService } from 'src/app/shared/filtro-productos.service';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  constructor(public router: Router,private filtroProductosService: FiltroProductosService){};
  categoriaSeleccionada: string | null = null;
 
  

  ngOnInit() {
    this.filtroProductosService.categoriaSeleccionada.next(this.categoriaSeleccionada);
  }
  onCategoriaSeleccionadaChange() {
    if (this.categoriaSeleccionada === '') {
      this.categoriaSeleccionada = null;
    }
    this.filtroProductosService.categoriaSeleccionada.next(this.categoriaSeleccionada);
  }

  esVisible(): boolean {
    const currentUrl = this.router.url;
    return (
      currentUrl === '/acceder/administracion' ||
      currentUrl === '/acceder/administracion/productos' ||
      currentUrl === '/acceder/administracion/pedidos' ||
      currentUrl === '/registro/usuarios' ||
      currentUrl === '/acceder'
    );
  }
  
  
}
