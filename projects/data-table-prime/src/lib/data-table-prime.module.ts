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
import {DataTablePrimeComponent} from './components/data-table/data-table-prime.component';
// Pipes
import {AsyncTablePipe} from './pipes/async-table.pipe';
import {AsyncNumberPipe} from './pipes/async-number.pipe';


@NgModule({
  declarations: [
    DataTablePrimeComponent,
    AsyncNumberPipe,
    AsyncTablePipe
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
    DataTablePrimeComponent
  ]
})
export class DataTablePrimeModule {
}
