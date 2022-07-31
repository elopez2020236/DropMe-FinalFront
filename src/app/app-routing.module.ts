import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { GeneralProComponent } from './components/general-pro/general-pro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component'

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },  
  { path: 'generalPro', component: GeneralProComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent},
  { path: 'detalleProducto/:idProducto', component: DetalleProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
