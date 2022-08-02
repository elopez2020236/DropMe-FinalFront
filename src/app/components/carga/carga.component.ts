import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {
  public solicitudModelGet: Solicitud;
  public token;
  public solicitado = [];
  idSolicitud;

  constructor(private _solicitudService: SolicitudService,) { 
    this.solicitudModelGet = new Solicitud('',[],[],'');
  }

  ngOnInit(): void {
    this.idSolicitud = localStorage.getItem('idSolicitud');
    localStorage.setItem("idSolicitud", this.idSolicitud);
    this.getSolicitud();
  }

  getSolicitud() {
    this._solicitudService.obtenerSolitudesLog(this.token).subscribe(
      (response) => {
        this.solicitudModelGet = response.solis;

        this.solicitado = response.solis[0].solicitud;
        this.idSolicitud = response.solis[0]._id;
        localStorage.setItem("idSolicitud", this.idSolicitud);
        //console.log(this.solicitado);
        console.log(this.idSolicitud);
        //this.oferta = this.solicitudModelGet[0].oferta;
        // this.oferta = response.solis[0].oferta;
        // //console.log(this.solicitudModelGet)
        // console.log(this.oferta);
        // // this.oferta = this.solicitado. ;
        // // console.log(this.solicitado);
        // console.log(this.solicitudModelGet);
        //console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  aceptarSolicitud(idSolicitud) {
    this._solicitudService.aceptarSolicitud(idSolicitud, this.token).subscribe(
      (response) => {
        this.idSolicitud = response.solis[0]._id;
        this.idSolicitud = localStorage.getItem('idSolicitud');
        console.log(response);
      },
     (error) => {
        console.log(<any>error);
      }
    )
 }

}
