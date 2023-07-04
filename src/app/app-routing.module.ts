import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AdmProductosComponent } from './components/adm-productos/adm-productos.component';
import { AdmPedidosComponent } from './components/adm-pedidos/adm-pedidos.component';
import { EditarPedidosComponent } from './components/editar-pedidos/editar-pedidos.component';

const routes: Routes = [
  {path:'productos',component: ListadoProductosComponent}, 
  { path: 'productos/editar/:idProducto', component: EditarProductosComponent},
  { path: 'productos/agregar', component: EditarProductosComponent },
  { path: 'productos/detalles/:idProducto', component: DetalleProductosComponent },
  { path: 'registro/usuarios', component: RegistroComponent},
  { path: 'acceder', component: LoginComponent},
  { path: 'acceder/administracion', component: AdministracionComponent},
  { path: 'acceder/administracion/productos', component: AdmProductosComponent},
  { path: 'acceder/administracion/pedidos', component: AdmPedidosComponent},
  { path: 'pedidos/editar/:idPedido', component: EditarPedidosComponent},
  { path: 'pedidos/agregar', component: DetalleProductosComponent },
  {path:'**',redirectTo:'/productos',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
