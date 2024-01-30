import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'asyncTable'
})
export class AsyncTablePipe implements PipeTransform {
  /**
   * Pick the value and transform in Array of any
   * @param value
   */
  transform(value: any[] | null | undefined): any[] {
    return value ?? [];
  }
}
