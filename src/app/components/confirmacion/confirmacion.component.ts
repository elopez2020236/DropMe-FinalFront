import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {

  constructor(public sChat: ChatService, private sSolicitud: SolicitudService) { }
  
  idOferta;
  idProducto;
  public token;

  ngOnInit(): void {
    let idOferta = localStorage.getItem('idOferta');
    let idProducto = localStorage.getItem('idProducto');
    console.log(this.postSolicitud(idProducto, idOferta));
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
