import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  public url: String = 'https://dropmee.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  public token;

  constructor(public _http: HttpClient) { }

  obtenerSolitudesLog(token) : Observable<any> {

    return this._http.get(this.url + '/obtenerSolisLog', { headers: this.headersVariable });
  }

  obtenerSolicitudesId(idSolicitudes, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerSolisxid/' + idSolicitudes, { headers: headersToken })
  }

  //Function Agregar
  solicitudes(idProducto, idOferta, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.post(this.url + '/generarSolicitud/' + idProducto + '/' + idOferta,  { headers: headersToken});
  }

  aceptarSolicitud(idSolicitud, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/aceptarSoli/' + idSolicitud, { headers: headersToken})
  }

  confirmarTrato(idTrato, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/aceptarTratos/' + idTrato, { headers: headersToken})
  }

  cancelarSoli(idSolicitud, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/rechazarSolicitud/' + idSolicitud, { headers: headersToken})
  }

  obtenerTratosPen(token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerTratospendientes', { headers: headersToken });
  }

  obtenerTratosConf(token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obternerTratosLog', { headers: headersToken });
  }
}
