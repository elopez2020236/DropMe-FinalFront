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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { ValdacionComponent } from './components/valdacion/valdacion.component';
import { CargaComponent } from './components/carga/carga.component';
import { TratosComponent } from './components/tratos/tratos.component';

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

    ChatComponent,
      VerificacionComponent,
      OfertaComponent,
      ConfirmacionComponent,
      FichaComponent,
      ValdacionComponent,
      CargaComponent,
      TratosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
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
