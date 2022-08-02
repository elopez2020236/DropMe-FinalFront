import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StorageService } from 'src/app/services/storage.service';
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
    public _productosService: ProductosService,
    private storageService: StorageService

  ) {
   this.productosModelPost = new Productos('','','','','',[{}],{});
      this.productosModelGetId = new Productos('','','','','',[{}],{});
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

  //Imagenes
  imagenes : any [] = [];
  cargarImagen(event:any){
    let archivos = event.target.files
    let nombre = "Jeffer"
    let urlImagen = "Img"


      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = ()=>{
      console.log(reader.result)
      this.imagenes.push (reader.result)
      this.storageService.subirImagen(nombre + "_" + Date.now(), reader.result).then(urlImagen=>{
        console.log(urlImagen);

     // urlImagen = localStorage.getItem('urlImagen');

      localStorage.setItem("urlImagen", urlImagen);
      console.log(localStorage.getItem('urlImagen'));


      })

  }
    }

}




