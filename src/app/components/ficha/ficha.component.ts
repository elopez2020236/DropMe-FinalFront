import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { StorageService } from 'src/app/services/storage.service';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { UsuarioService } from '../../services/usuario.service';
import { ChatService } from 'src/app/services/chat.service';
import Swal from 'sweetalert2';
import { tratoC } from 'src/app/models/tratoC.model';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {
  public tratoCModelGet: tratoC;
  public token;
  public producto1 = [];
  public producto2 = [];

  constructor(
    public sUsuario: UsuarioService, private _solicitudService: SolicitudService,) {
      this.tratoCModelGet = new tratoC('',{},[],{},[], true);
      this.token = this.sUsuario.getToken();
  }

  ngOnInit(): void {
    this.getTratoConf();
  }

  getTratoConf(){
    this._solicitudService.obtenerTratosConf(this.token).subscribe(
      (response) => {
        this.tratoCModelGet = response.userfinded;
        this.producto1 = response.userfinded.Producto1;
        this.producto2 = response.userfinded.Producto2;
        console.log(this.tratoCModelGet);
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
}

}
