import {QueryList} from '@angular/core';
import {TableRowDirective} from '../directives/table-row.directive';
import {RowTemplatePipe} from './row-template.pipe';


describe('RowTemplatePipe', () => {

  // Returns the first TableRowDirective in the QueryList that matches the given field name.
  /* it('should return the first TableRowDirective that matches the given field name', () => {
     const pipe = new RowTemplatePipe();
     const list = new QueryList<TableRowDirective>();
     const directive1 = new TableRowDirective(null);
     directive1.tableRow = 'name1';
     const directive2 = new TableRowDirective(null);
     directive2.tableRow = 'name2';
     list.reset([directive1, directive2]);

     const result = pipe.transform(list, 'name2');

     expect(result).toBe(directive2);
   });*/

  // Returns undefined if no TableRowDirective in the QueryList matches the given field name.
  /*  it('should return undefined if no TableRowDirective matches the given field name', () => {
      const pipe = new RowTemplatePipe();
      const list = new QueryList<TableRowDirective>();
      const directive1 = new TableRowDirective(null);
      directive1.tableRow = 'name1';
      const directive2 = new TableRowDirective(null);
      directive2.tableRow = 'name2';
      list.reset([directive1, directive2]);

      const result = pipe.transform(list, 'name3');

      expect(result).toBeUndefined();
    });*/

  // Returns undefined if the QueryList is empty.
  it('should return undefined if the QueryList is empty', () => {
    const pipe = new RowTemplatePipe();
    const list = new QueryList<TableRowDirective>();

    const result = pipe.transform(list, 'name');

    expect(result).toBeUndefined();
  });

  // Returns undefined if the field parameter is undefined or null.
  /* it('should return undefined if the field parameter is undefined', () => {
     const pipe = new RowTemplatePipe();
     const list = new QueryList<TableRowDirective>();
     const directive = new TableRowDirective(null);
     directive.tableRow = 'name';
     list.reset([directive]);

     const result = pipe.transform(list, undefined);

     expect(result).toBeUndefined();
   });*/

  // Returns undefined if the field parameter is an empty string.
  /*  it('should return undefined if the field parameter is an empty string', () => {
      const pipe = new RowTemplatePipe();
      const list = new QueryList<TableRowDirective>();
      const directive = new TableRowDirective(null);
      directive.tableRow = 'name';
      list.reset([directive]);

      const result = pipe.transform(list, '');

      expect(result).toBeUndefined();
    });*/

  // Returns undefined if none of the TableRowDirectives in the QueryList have a name property that matches the given field name.
  /*it('should return undefined if none of the TableRowDirectives have a name property that matches the given field name', () => {
    const pipe = new RowTemplatePipe();
    const list = new QueryList<TableRowDirective>();
    const directive1 = new TableRowDirective(null);
    directive1.tableRow = 'name1';
    const directive2 = new TableRowDirective(null);
    directive2.tableRow = 'name2';
    list.reset([directive1, directive2]);

    const result = pipe.transform(list, 'name3');

    expect(result).toBeUndefined();
  });*/

});
