import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { ProductoService } from './shared/producto.service';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AdmProductosComponent } from './components/adm-productos/adm-productos.component';
import { AdmPedidosComponent } from './components/adm-pedidos/adm-pedidos.component';
import { EditarPedidosComponent } from './components/editar-pedidos/editar-pedidos.component';
import { UsuarioService } from './shared/usuario.service';
import { PedidoService } from './shared/pedido.service';
import { FiltroProductosService } from './shared/filtro-productos.service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ListadoProductosComponent,
    FiltroComponent,
    LoginComponent,
    RegistroComponent,
    EditarProductosComponent,
    DetalleProductosComponent,
    AdministracionComponent,
    AdmProductosComponent,
    AdmPedidosComponent,
    EditarPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService,
    UsuarioService,
    PedidoService,
    FiltroProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
