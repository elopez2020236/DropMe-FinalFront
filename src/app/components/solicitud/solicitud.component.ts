import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
  providers: [SolicitudService, UsuarioService]

})
export class SolicitudComponent implements OnInit {
  public solicitudModelGet: Solicitud;
  public solicitudModelPost: Solicitud;
  public solicitudModelGetId: Solicitud;
  public token;

  constructor(
    private _solicitudService: SolicitudService,
    private _usuarioService: UsuarioService
  ) {
      this.solicitudModelPost = new Solicitud('',[],[],'');
      this.solicitudModelGetId = new Solicitud('',[],[],'');
      this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this.getSolicitud();

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
