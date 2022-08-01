import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
  providers: [ProductosService]
})

export class DetalleProductoComponent implements OnInit {
  public productosModelGet: Productos;
  public productosModelPost: Productos;
  public productosModelGetId: Productos;
  idProducto;
  public token;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    public _productosService: ProductosService
  ) {
   this.productosModelPost = new Productos('','','','',[],[{}],{});
      this.productosModelGetId = new Productos('','','','',[],[{}],{});
      this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      console.log(dataRuta.get('idProducto'));
      this.getProductoId(dataRuta.get('idProducto'))
    })

    let idProducto = localStorage.getItem('idProducto');
    localStorage.setItem("idProducto", idProducto);
    this.getProductoId(idProducto);
  }

  getProductoId(idProducto) {
    this._productosService.obtenerProductoId(idProducto, this.token).subscribe(
      response => {

        this.productosModelGet= response.producFined;
        console.log(response);
        localStorage.setItem("idProducto", idProducto);


      },
      (error)=> {

      }
    )
  }




  //Funcion Editar Producto



}




