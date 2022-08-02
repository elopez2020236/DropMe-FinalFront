import { Component, OnInit } from '@angular/core';
import { tratoC } from 'src/app/models/tratoC.model';
import { tratoP } from 'src/app/models/tratoP.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tratos',
  templateUrl: './tratos.component.html',
  styleUrls: ['./tratos.component.scss']
})
export class TratosComponent implements OnInit {
  public tratoPModelGet: tratoP;
  public tratoCModelGet: tratoC;
  public token;
  public producto1 = [];
  public producto2 = [];
  idTrato;

  constructor(public sUsuario: UsuarioService, private _solicitudService: SolicitudService,) { 
    this.tratoPModelGet = new tratoP('',{},[],{},[], true);
    this.tratoCModelGet = new tratoC('',{},[],{},[], true);
    this.token = this.sUsuario.getToken();
  }

  ngOnInit(): void {
    this.idTrato = localStorage.getItem('idTrato');
    localStorage.setItem("idTrato", this.idTrato);
    this.getTratoPen();
  }

  getTratoPen(){
    this._solicitudService.obtenerTratosPen(this.token).subscribe(
      (response) => {
        this.tratoPModelGet = response.userfinded;
        this.producto1 = response.userfinded.Producto1;
        this.producto2 = response.userfinded.Producto2;
        this.idTrato = response.userfinded._id;
        localStorage.setItem("idTrato", this.idTrato);
        console.log(this.tratoPModelGet);
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
}

aceptarTrato(idTrato) {
     
  this._solicitudService.confirmarTrato(idTrato, this.token).subscribe(
    (response) => {
    localStorage.getItem('idTrato');
     this.tratoCModelGet = response.userfinded;
      console.log(response);
    },
   (error) => {
      console.log(<any>error);
    }
  )
}

}
