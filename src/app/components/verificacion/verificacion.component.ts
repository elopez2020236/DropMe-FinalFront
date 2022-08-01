import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.scss']
})
export class VerificacionComponent {

  constructor(public sChat: ChatService) { }

  ingresar(proveedor: String) {
    console.log(proveedor)
    
    this.sChat.login( proveedor );
  }
  
}
