import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { GeneralProComponent } from './components/general-pro/general-pro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { PantallaCargaComponent } from './components/pantalla-carga/pantalla-carga.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { FichaComponent } from './components/ficha/ficha.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'generalPro', component: GeneralProComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent},
  { path: 'pantallaCarga', component:  PantallaCargaComponent},
  { path: 'detalleProducto/:idProducto', component: DetalleProductoComponent},
  { path: 'verificacion', component: VerificacionComponent},
  { path: 'oferta', component: OfertaComponent},
  { path: 'confirmacion', component: ConfirmacionComponent},
  { path: 'ficha', component: FichaComponent},
  { path: 'detalleProducto/:idProducto', component: DetalleProductoComponent},
  { path: 'usuario', component: UsuarioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
