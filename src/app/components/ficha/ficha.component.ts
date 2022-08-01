import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { StorageService } from 'src/app/services/storage.service';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UsuarioService } from '../../services/usuario.service';
import { ChatService } from 'src/app/services/chat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  public solicitudModelGet: Solicitud;
  public solicitudModelPost: Solicitud;
  public solicitudModelGetId: Solicitud;
  public token;

  constructor(
    private _solicitudService: SolicitudService,
    private _usuarioService: UsuarioService,
    public sChat: ChatService
  ) {
      this.solicitudModelPost = new Solicitud('',[],[],'');
      this.solicitudModelGetId = new Solicitud('',[],[],'');
      this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this.getSolicitud();

  }

  ingresar(proveedor: String) {
    console.log(proveedor)

    this.sChat.login( proveedor );
  }

  getSolicitud() {
    this._solicitudService.obtenerSolitudesLog(this.token).subscribe(
      (response) => {

        this.solicitudModelGet = response.solicitud;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  aceptarSolicitud() {
    this._solicitudService.aceptarSolicitud(this.token).subscribe(
      (response) => {

        this.solicitudModelGet = response.solicitud;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  aceptarTrato() {
    this._solicitudService.confirmarTrato(this.token).subscribe(
      (response) => {

        this.solicitudModelGet = response.solicitud;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  rechazarSolicitud() {
    this._solicitudService.cancelarSoli(this.token).subscribe(
      (response) => {

        this.solicitudModelGet = response.solicitud;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}
