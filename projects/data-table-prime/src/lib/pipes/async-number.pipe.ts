import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'asyncNumber'
})
export class AsyncNumberPipe implements PipeTransform {
  transform(value: number | null | undefined): number {

    if (!value)
      return 0;

    return Number(value);
  }
}
