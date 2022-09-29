import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterpage'
})
export class FilterpagePipe implements PipeTransform {

  transform(data: any[], itemsForPage: string, page: number): any[] {
    let restoElementiRimanenti = data.length % +itemsForPage;
    if (restoElementiRimanenti == 0) {
      return data.slice(0, data.length / +itemsForPage);
    } else {
      return data.slice(0, (data.length / +itemsForPage) + 1);
    }

  }
}


