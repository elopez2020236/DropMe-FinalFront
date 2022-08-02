import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCategoria'
})
export class SearchCategoriaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
