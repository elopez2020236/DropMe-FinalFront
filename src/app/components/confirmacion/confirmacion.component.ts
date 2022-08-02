import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ChatService } from 'src/app/services/chat.service';
import { ProductosService } from 'src/app/services/productos.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit{
  public productosModelGetId: Productos;
  idOferta;
  idProducto;
  public token;

  constructor(public sChat: ChatService, private sSolicitud: SolicitudService, private _productosService: ProductosService,) { 
    this.productosModelGetId = new Productos('','','','','',[{}],{});
  }
  
  
  

  ngOnInit(): void {
    this.idProducto = localStorage.getItem('idProducto');
    this.idOferta = localStorage.getItem('idOferta');
    console.log(this.idProducto);
  }

  ingresar(proveedor: String) {
    console.log(proveedor)
    
    this.sChat.login( proveedor );
  }

  getProductosId(idOferta){
    this._productosService.obtenerProductoId(idOferta, this.token).subscribe (
      (response) => {
        console.log(response);
        localStorage.setItem("idOferta", idOferta);
        idOferta = localStorage.getItem('idOferta');
        console.log(this.idOferta);
        this.productosModelGetId = response.producFined;
      },
      (error) => {
        
      }
    )
  }

  postSolicitud(idProducto, idOferta){
    this.sSolicitud.solicitudes(idProducto, idOferta, this.token).subscribe (
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}
