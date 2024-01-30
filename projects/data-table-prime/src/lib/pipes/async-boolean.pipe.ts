import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'asyncBool'
})
export class AsyncBooleanPipe implements PipeTransform {
  /**
   * Pick the value and transform in Boolean
   * @param value
   */
  transform(value: boolean | string | number | null | undefined): boolean {
      if (value === null || value === undefined)
        return false;

      if (typeof value === 'number') {
        return  value === 1;
      } else if (typeof value === 'string') {
          return false;
      } else {
        return Boolean(value);
      }
  }
}
