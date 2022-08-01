import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from 'src/app/interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public url: String = 'http://localhost:3000/api';
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
 // public perfilModelGet: Usuario;
  public token;
  public chats: Mensaje[] = [];
  public usuario: any = {};
  headersVariable: any;

  constructor(private afs: AngularFirestore, public _http: HttpClient, public auth: AngularFireAuth) {
    this.auth.authState.subscribe( user => {
      console.log('Estado del usuario:', user)
      if(!user){
        return;
      } else {
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
   }

  login(proveedor: String) {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

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

  usuarioLogeado(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerUsuarioslog', {
      headers: this.headersVariable,
    });
  }

  // getUsuarioL() {
  //   this.sChat.usuarioLogeado(this.token).subscribe(
  //     (response) => {
  //       this.perfilModelGet = response.usario;
  //       console.log(response);
  //     },
  //     (err) => {
  //       console.log(<any>err)
  //     }
  //   )
  // }

  agregarMensaje(texto: string){
    let identidad = localStorage.getItem('identidad');
    let mensaje: Mensaje = {
      mensaje: texto,
      nombre: JSON.parse(identidad).nombre,
      fecha: new Date().getTime()
    }
    
    return this.itemsCollection.add(mensaje)  

  }


}
