import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from 'src/app/interfaces/mensaje.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) { }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(map((mensaje: Mensaje[])=>{
      console.log(mensaje);
      this.chats = [] ;

      for (let msg of mensaje){
        this.chats.unshift(msg);
      }
      return this.chats;
    })
    )
  }

  agregarMensaje(texto: string){
    let mensaje: Mensaje = {
      mensaje: texto,
      nombre: 'Demo',
      fecha: new Date().getTime()
    }
    
    return this.itemsCollection.add(mensaje)  

  }


}
