import {Pipe, PipeTransform} from '@angular/core';
import {HeadersTable} from '../models/table';

@Pipe({
  name: 'colSpan'
})
export class ColSpanPipe implements PipeTransform {
  /**
   * Used for calculate the col span in the filter template dynamic
   * @param headers an {@link HeadersTable}
   * @param expand an Boolean
   * @param sort an Boolean
   */
  transform(headers: HeadersTable[], expand: boolean, sort: boolean): number {
    const {length} = headers;
    if (expand && sort) {
      return length + 2;
    } else if (expand || sort) {
      return length + 1;
    }
    return length;
  }

}
