import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UsuarioService } from '../../services/usuario.service';
import { ChatService } from 'src/app/services/chat.service';
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
  public oferta = [];
  public solicitado = [];

  constructor(
    private _solicitudService: SolicitudService,
    private _usuarioService: UsuarioService,
    public sChat: ChatService
  ) {
      this.solicitudModelGet = new Solicitud('',[],[],'');
      this.solicitudModelPost = new Solicitud('',[],[],'');
      this.solicitudModelGetId = new Solicitud('',[],[],'');
      this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    let idSolicitud = localStorage.getItem('idSolicitud');
    localStorage.setItem("idSolicitud", idSolicitud);
    this.getSolicitud();
  }

  ingresar(proveedor: String) {
    console.log(proveedor)
    this.sChat.login( proveedor );
  }

  getSolicitudLog(){
      this._solicitudService.obtenerSolitudesLog(this.token).subscribe(
        (response) => {
  
          this.solicitudModelGet = response.solis;
          console.log(response);
        },
        (error) => {
          console.log(<any>error);
        }
      )
  }

  getProductosId(idSolicitud){
    this._solicitudService.obtenerSolicitudesId(idSolicitud, this.token).subscribe (
      (response) => {
        console.log(response);
        localStorage.setItem("idSolicitud", idSolicitud);
        this.solicitudModelGetId = response.solicitued;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  getSolicitud() {
    this._solicitudService.obtenerSolitudesLog(this.token).subscribe(
      (response) => {
        this.solicitudModelGet = response.solis;

        this.solicitado = response.solis[0].solicitud;
        console.log(this.solicitado);
        //this.oferta = this.solicitudModelGet[0].oferta;
        this.oferta = response.solis[0].oferta;
        //console.log(this.solicitudModelGet)
        console.log(this.oferta);
        // this.oferta = this.solicitado. ;
        // console.log(this.solicitado);
        console.log(this.solicitudModelGet);
        //console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  aceptarSolicitud() {
    let idSolicitud = localStorage.getItem('idSolicitud');
    this._solicitudService.aceptarSolicitud(idSolicitud, this.token).subscribe(
      (response) => {
        this.solicitado = response.solis[0]._id;
        idSolicitud = JSON.parse(response.solis[0]._id);
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  aceptarTrato() {
    let idTrato = localStorage.getItem('idTrato');
    this._solicitudService.confirmarTrato(idTrato, this.token).subscribe(
      (response) => {
        localStorage.setItem("idTrato", idTrato);
        this.solicitudModelGet = response.solicitud;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  rechazarSolicitud() {
    let idSolicitud = localStorage.getItem('idSolicitud');
    this._solicitudService.cancelarSoli(idSolicitud, this.token).subscribe(
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
