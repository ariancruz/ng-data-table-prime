import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColHeaderPipe} from './col-header.pipe';
import {AsyncTablePipe} from './async-table.pipe';
import {AsyncNumberPipe} from './async-number.pipe';
import {AsyncStringPipe} from './async-string.pipe';
import {RowTemplatePipe} from './row-template.pipe';
import {AsyncBooleanPipe} from './async-boolean.pipe';


@NgModule({
  declarations: [
    ColHeaderPipe,
    RowTemplatePipe,

    AsyncTablePipe,
    AsyncNumberPipe,
    AsyncStringPipe,
    AsyncBooleanPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColHeaderPipe,
    RowTemplatePipe,

    AsyncTablePipe,
    AsyncNumberPipe,
    AsyncStringPipe,
    AsyncBooleanPipe,
  ],
})
export class TablePipesModule {
}
