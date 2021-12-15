import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string, changeDirection?: boolean): any[] {
    array.sort((a: any, b: any) => {
      let aValue = a[field];
      let bValue = b[field];
      if (aValue < bValue) {
        return -1;
      } else if (aValue > bValue) {
        return 1;
      } else {
        return 0;
      }
    });
    if (changeDirection) {
      array.reverse();
    }
    return array;    
  }

}
