import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Prime modules
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {SplitButtonModule} from 'primeng/splitbutton';

// Other Modules
import {TranslateModule} from '@ngx-translate/core';

// Components
import {DataTableComponent} from './components/data-table/data-table.component';
// Pipes
import {ColSpanPipe} from './pipes/col-span.pipe';
import {ColHeaderPipe} from './pipes/col-header.pipe';
import {AsyncTablePipe} from './pipes/async-table.pipe';
import {AsyncNumberPipe} from './pipes/async-number.pipe';
import {RowTemplatePipe} from './pipes/row-template.pipe';

import {TableRowDirective} from './directives/table-row.directive';
import {TableFooterDirective} from './directives/table-footer.directive';
import {TableExpansionDirective} from './directives/table-expansion.directive';


@NgModule({
  declarations: [
    DataTableComponent,

    TableRowDirective,
    TableFooterDirective,
    TableExpansionDirective,

    ColSpanPipe,
    ColHeaderPipe,
    AsyncTablePipe,
    AsyncNumberPipe,
    RowTemplatePipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    MenuModule,
    TableModule,
    TooltipModule,
    SplitButtonModule,
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTablePrimeModule {
}
