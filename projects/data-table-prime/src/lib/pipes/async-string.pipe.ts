import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'asyncString'
})
export class AsyncStringPipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (!value && typeof value !== 'number')
      return '';
    return String(value);
  }
}
