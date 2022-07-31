import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje: string = "";
  chats: Observable<any[]>;
  elemento: any

  constructor(firestore: AngularFirestore, public sChat: ChatService) {
    this.chats = firestore.collection('chats').valueChanges();
    this.sChat.cargarMensajes().subscribe(()=>{
      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
      
    })
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes')
  }
  
  enviar_mensaje(){
    console.log(this.mensaje);
    if(this.mensaje.length === 0){
      return;
    }
    this.sChat.agregarMensaje(this.mensaje).then(()=>this.mensaje = "").catch(()=>console.log('error al enviar mensaje'))
  }

}

