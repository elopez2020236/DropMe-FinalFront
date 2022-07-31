import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
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
  public token;
  
  constructor(
    public _activatedRoute: ActivatedRoute,
    public _productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      console.log(dataRuta.get('idProducto'));
      this.getProductoId(dataRuta.get('idProducto'))
    })
  }
  getProductoId(idProducto) {
    this._productosService.obtenerProductoId(idProducto, this.token).subscribe(
      response => {
        console.log(response);
      },
      (error)=> {

      }
    )
  }

  getProductos() {
    this._productosService.obtenerProductosPro(this.token).subscribe(
      (response) => {

        this.productosModelGet = response.productos;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
}




