import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'asyncBool',
  standalone: true
})
export class AsyncBooleanPipe implements PipeTransform {
  transform(value: boolean | null | undefined): boolean {
    return value ? value : false;
  }
}
