import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColumn',
  pure: false
})
export class FilterColumn implements PipeTransform {
  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.column==filter.column );
  }
}
