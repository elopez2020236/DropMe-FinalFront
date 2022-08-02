import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ChatService } from 'src/app/services/chat.service';
import { ProductosService } from 'src/app/services/productos.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-valdacion',
  templateUrl: './valdacion.component.html',
  styleUrls: ['./valdacion.component.scss']
})
export class ValdacionComponent implements OnInit {
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
