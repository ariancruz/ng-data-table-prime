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


import {TableRowDirective} from './directives/table-row.directive';
import {TableFooterDirective} from './directives/table-footer.directive';
import {TableExpansionDirective} from './directives/table-expansion.directive';
import {TablePipesModule} from './pipes/table-pipes.module';
import {ColSpanPipe} from './pipes/col-span.pipe';

@NgModule({
  declarations: [
    DataTableComponent,

    TableRowDirective,
    TableFooterDirective,
    TableExpansionDirective,

    ColSpanPipe,
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

    TablePipesModule
  ],
  exports: [
    DataTableComponent,
    TablePipesModule
  ]
})
export class DataTablePrimeModule {
}
