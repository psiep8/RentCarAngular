import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], filterText: string, selected: string): any[] {
    if (!array) return [];
    if (!filterText) return array;
    filterText = filterText.toLowerCase();
    return array.filter(items => {
      return items[selected].toLowerCase().includes(filterText);
    })
  }
}
