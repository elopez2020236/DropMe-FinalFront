import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Productos } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  public token;

  constructor(public _http: HttpClient) { }

  //Funcion Obtener productos
  obtenerProductos(token) : Observable<any> {

    return this._http.get(this.url + '/obtenerProductosLog', { headers: this.headersVariable });
  }

  obtenerProductosPro(token) : Observable<any> {

    return this._http.get(this.url + '/obtenerProductos', { headers: this.headersVariable });
  }

  //Obtener un producto en espercífico
  obtenerProductoId(idProducto, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obterxId/' + idProducto, { headers: headersToken })
  }

  //Function Agregar producto
  agregarProductos(modeloProductos: Productos, token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloProductos) 

    return this._http.put(this.url + '/addProducto', parametros, { headers: headersToken });

  }

  //Function Editar producto
  editarProducto(modeloProductos: Productos, token) : Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloProductos);
    return this._http.put(this.url + '/editarProducto/' + modeloProductos._id, parametros, { headers: headersToken, });
  }

  //Function Eliminar producto
  eliminarProducto(idProducto, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarProducto/' + idProducto, { headers: headersToken, });
  }

}
