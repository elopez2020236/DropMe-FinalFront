import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { environment, environment2 } from 'src/environments/environment';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ProductosService, UsuarioService]
})
export class OfertaComponent implements OnInit {
  public productosModelGet: Productos;
  public productosModelPost: Productos;
  public productosModelGetId: Productos;
  idOferta;
  public token;

  constructor(
    private _productosService: ProductosService,
    private _usuarioService: UsuarioService,
    private storageService: StorageService

  ) {
      this.productosModelPost = new Productos('','','','',[],[{}],{});
      this.productosModelGetId = new Productos('','','','',[],[{}],{});
      this.token = this._usuarioService.getToken();
   }

  ngOnInit(): void {
    this.getProductos();

    let idOferta = localStorage.getItem('idOferta');
    localStorage.setItem("idOferta", idOferta);
  }

  //Funcion Obtener Productos
  getProductos() {
    this._productosService.obtenerProductos(this.token).subscribe(
      (response) => {

        this.productosModelGet = response.productos;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }


  getProductosId(idOferta){
    this._productosService.obtenerProductoId(idOferta, this.token).subscribe (
      (response) => {
        console.log(response);
        localStorage.setItem("idOferta", idOferta);
        this.productosModelGetId = response.producFined;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }


  //Funcion Editar Producto
  putProducto() {
    this._productosService.editarProducto(this.productosModelGetId, this.token).subscribe (
      (response) => {
        console.log(response);
        this.getProductos();
      },
      (error) => {

      }
    )
  }


   //Funcion Agregar Producto
   postProductos(){
    this._productosService.agregarProductos(this.productosModelPost, this.token).subscribe (
      (response) => {
        console.log(response);



        this.productosModelPost.nombre = '';
        this.productosModelPost.categoria = '';
        this.productosModelPost.precio = '';
        this.productosModelPost.fotos = [];
        //this.productosModelPost.idFactura = {};
        //this.productosModelPost.idUsuario = {};
        this.getProductos();

        //Alert
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto Agregado Correctamente',
          showConfirmButton: false,
          timer: 1500
        })

      },
      (error) => {

       Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error.error.mensaje,
        showConfirmButton: false,
        timer: 1500
       })

      }
    )
  }


  //Funtion eliminar producto
  deleteProducto(id) {
    this._productosService.eliminarProducto(id, this.token).subscribe (
      response => {
        console.log(response);
        this.getProductos(); //Refrescar la página
      }
    ),
    error => {
      console.log(<any>error);
    }
  }

  //Imagenes
  imagenes : any [] = [];
  cargarImagen(event:any){
    let archivos = event.target.files
    let nombre = "Jeffer"

    for(let i = 0; i <archivos.length; i++ ){
      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
    reader.onloadend = ()=>{
      console.log(reader.result)
      this.imagenes.push (reader.result)
      this.storageService.subirImagen(nombre + "_" + Date.now(), reader.result).then(urlImagen=>{
        console.log(urlImagen);
      })

    }


  }
    }

}
