import {Pipe, PipeTransform} from '@angular/core';
import {HeadersTable} from '../models/table';

@Pipe({
  name: 'colHeader'
})
export class ColHeaderPipe implements PipeTransform {
  /**
   * Pick the value and check if every element is the same type of
   * {@link HeadersTable} and return the array
   * @param value
   */
  transform(value: any[] | null | undefined): HeadersTable[] {
    if (!Array.isArray(value)) {
      return [];
    }

    for (const item of value) {
      if (!isHeadersTable(item)) {
        return []
      }
    }
    return <HeadersTable[]>value;
  }

}


function isHeadersTable(obj: any): obj is HeadersTable {
  return (
    typeof obj === 'object' &&
    typeof obj.field === 'string' &&
    typeof obj.header === 'string' &&
    typeof obj.visible === 'boolean' &&
    typeof obj.export === 'boolean' &&
    (typeof obj.pipe === 'undefined' || typeof obj.pipe === 'string') &&
    (typeof obj.extraVal === 'undefined' || typeof obj.extraVal === 'string') &&
    (typeof obj.class === 'undefined' || typeof obj.class === 'string') &&
    (typeof obj.width === 'undefined' || typeof obj.width === 'number') &&
    (typeof obj.sort === 'undefined' || typeof obj.sort === 'boolean') &&
    (typeof obj.sortField === 'undefined' || typeof obj.sortField === 'string') &&
    (typeof obj.cFunc === 'undefined' || typeof obj.cFunc === 'function')
  );
}
