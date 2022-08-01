import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  public token;

  constructor(public _http: HttpClient) { }

  obtenerSolitudesLog(token) : Observable<any> {

    return this._http.get(this.url + '/obtenerSolisLog', { headers: this.headersVariable });
  }


  //Function Agregar
  solicitudes(idProducto, idOferta, modeloSolicitud: Solicitud): Observable<any> {

    let parametros = JSON.stringify(modeloSolicitud);

    return this._http.post(this.url + '/generarSolicitud/' + idProducto + '/' + idOferta, parametros, { headers: this.headersVariable});
  }

  aceptarSolicitud(modeloSolicitud: Solicitud): Observable<any> {
    let parametro = JSON.stringify(modeloSolicitud);

    return this._http.put(this.url + '/aceptarSoli/' + modeloSolicitud._id, parametro, { headers: this.headersVariable})
  }

  confirmarTrato(modeloSolicitud: Solicitud): Observable<any> {
    let parametro = JSON.stringify(modeloSolicitud);

    return this._http.put(this.url + '/aceptarTratos/' + modeloSolicitud._id, parametro, { headers: this.headersVariable})
  }

  cancelarSoli(modeloSolicitud: Solicitud): Observable<any> {
    let parametro = JSON.stringify(modeloSolicitud);

    return this._http.put(this.url + '/rechazarSolicitud/' + modeloSolicitud._id, parametro, { headers: this.headersVariable})
  }


}
