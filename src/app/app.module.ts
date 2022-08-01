import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './auth-token.interceptor';
import { UsuarioService } from './services/usuario.service';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from '@rinminase/ng-charts';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { GeneralProComponent } from './components/general-pro/general-pro.component';
import { PantallaCargaComponent } from './components/pantalla-carga/pantalla-carga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    UsuarioComponent,
    SignUpComponent,
    SignInComponent,
    ProductosComponent,
    DetalleProductoComponent,
    SolicitudComponent,
    GeneralProComponent,
    PantallaCargaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [
    UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
