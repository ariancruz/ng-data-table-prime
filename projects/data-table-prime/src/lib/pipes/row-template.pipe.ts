import {Pipe, PipeTransform, QueryList} from '@angular/core';
import {TableRowDirective} from '../directives/table-row.directive';

@Pipe({
  name: 'rowTemplate'
})
export class RowTemplatePipe implements PipeTransform {

  /**
   * Search for the list {@link TableRowDirective} directives using the name
   * for e render in
   * @param list an {@link QueryList} of {@link TableRowDirective}
   * @param field an String
   */
  transform(list: QueryList<TableRowDirective>, field: string): TableRowDirective | undefined {
    return list.find((f: TableRowDirective): boolean => f.name === field);
  }
}
