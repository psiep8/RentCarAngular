import {Pipe, PipeTransform} from '@angular/core';
import {orderBy} from "lodash";

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(array: any[], sortBy: string, order: string): any[] {
    if (order === 'asc') {
      return orderBy(array, [sortBy], ['desc']);
    } else {
      return orderBy(array, [sortBy], ['asc'])
    }
  }
}
