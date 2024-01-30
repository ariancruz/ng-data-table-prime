import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'asyncNumber'
})
export class AsyncNumberPipe implements PipeTransform {

  /**
   * Pick the value and transform in Number
   * @param value
   */
  transform(value: number | null | undefined): number {

    if (!value)
      return 0;

    return Number(value);
  }
}
