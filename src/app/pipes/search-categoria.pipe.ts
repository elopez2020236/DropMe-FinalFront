import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCategoria'
})
export class SearchCategoriaPipe implements PipeTransform {

  transform(productos: any, busqueda: any): any {
  
  if(busqueda == undefined){
    return productos;
  }else{
    return productos.filter(productos=>{
      return productos.categoria.toLowerCase().includes(busqueda.toLowerCase());
    })
  }
}}
