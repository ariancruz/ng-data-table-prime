import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'asyncString'
})
export class AsyncStringPipe implements PipeTransform {

  /**
   * Pick the value and transform in String
   * @param value
   */
  transform(value: string | number | null | undefined): string {
    if (!value && typeof value !== 'number')
      return '';
    return String(value);
  }
}
