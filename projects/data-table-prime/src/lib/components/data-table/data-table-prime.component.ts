import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// primeng
import {Table} from 'primeng/table';
import {ConfirmationService, MenuItem} from 'primeng/api';
// module extra
import {TranslateService} from '@ngx-translate/core';
// services
import {BaseStoreServices} from '../../services/base.store.services';
// models
import {HeadersTable, RowReorder, TemplateSlot} from '../../models/table';
import {TableLazyLoadEvent, TableRowReorderEvent} from 'primeng/table/table.interface';

@Component({
  selector: 'data-table-prime',
  templateUrl: './data-table-prime.component.html',
  styleUrls: ['./data-table-prime.component.scss']
})
export class DataTablePrimeComponent implements OnInit {

  /**
   * Set custom css class to de table
   */
  @Input() class = '';
  /**
   * Set mode row drag and drop in the table default is false
   */
  @Input() rowDragAndDrop = false;
  /**
   * Set mode row expansion in the table default is false
   */
  @Input() rowExpansion = false;
  /**
   * Inject template for row expansion
   */
  @ContentChild('expansionSlot') expansionSlot!: TemplateRef<any>;
  /**
   * For enable pagination table default value true
   */
  @Input() pagination = true;
  /**
   * Array the values for the pagination default value 25, 50, 100
   */
  @Input() rowsPerPageOptions: number[] = [25, 50, 75, 100];
  /**
   * The available table Headers
   */
  @Input() headers: HeadersTable[] = [];
  /**
   * Service inject data from store
   */
  @Input() service!: BaseStoreServices<any>;
  /**
   * Inject templates for custom columns
   */
  @Input() templateSlot: TemplateSlot[] = [];
  /**
   * List of items inside of Button Split type {@link MenuItem}
   */
  @Input() itemsSplit: MenuItem[] = [];
  /**
   * Action column default true
   */
  @Input() action = true;
  /**
   * Show Create Button Action
   */
  @Input() showCreate = true;
  /**
   * Show Edit Button Action
   */
  @Input() showEdit = true;
  /**
   * Show Delete Button Action
   */
  @Input() showDelete = true;
  /**
   * Inject template for action extra
   */
  @ContentChild('actionExtra') actionExtra!: TemplateRef<any>;
  /**
   * List of source items optional use service
   */
  @Input() items!: any[];
  /**
   * Toggle export button
   */
  @Input() exportBtn = true;
  /**
   * EventEmitter for create Action launch the modal
   */
  @Output() create: EventEmitter<void> = new EventEmitter<void>();
  /**
   * EventEmitter for edit Action launch the modal width current value of row item
   */
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  /**
   * EventEmitter for Export Action. launch the export feature
   */
  @Output() export: EventEmitter<any> = new EventEmitter<any>();
  /**
   * EventEmitter for delete Action confirm action before emit the event
   */
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  /**
   * EventEmitter for row drag and drop action event
   */
  @Output() onRowReorder: EventEmitter<RowReorder> = new EventEmitter<RowReorder>();
  /**
   * Input for control search state
   */
  @ViewChild('inputSearch', {static: false}) input!: ElementRef;
  /**
   * Contains the search value
   */
  search: string = '';
  /**
   * Set custom names to tooltips to the actions in table
   */
  name = '';


  constructor(private confirmationService: ConfirmationService,
              private translateService: TranslateService,
              private routing: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.headers = this.headers.filter(header => header.visible);
    /**
     * Extract metadata from routing
     */
    this.routing.data.subscribe((r: any) => this.name = r?.name);
  }

  /**
   * Search and Inject the correct template for the column
   * @param value string
   * @return An {@link TemplateRef<any>}
   */
  injectTemplate(value: string): TemplateRef<any> | null {
    const slot = this.templateSlot.find(f => f.name === value);
    return slot ? slot?.template : null;
  }

  /**
   * It's for lazy load of data, filters and sort elements direct in API server
   * @param $event {@link LazyLoadEvent}
   */
  loadCustomLazy($event: TableLazyLoadEvent): void {
    const {first, rows, globalFilter, sortField, sortOrder} = $event;
    // @ts-ignore
    this.service.loadAll({
      page: (first as number / (rows ? rows as number : 0)),
      size: rows ? rows : 25,
      filter: globalFilter ? globalFilter as string : '',
      sort: sortField as string,
      direction: sortField ? sortOrder === 1 ? 'ASC' : 'DESC' : sortField,
      first
    });
  }

  /**
   * Make the global filter over data elements
   * @param event Event
   * @param dt {@link Table}
   */
  setGlobalFilter(event: { target: { value: string; } } | any, dt: Table): void {
    const {value} = event.target;
    this.search = event.target.value;
    dt.filterGlobal(value, 'contains');
  }

  /**
   * Set the selected item in the store for future work
   * @param event any
   */
  setSelectedRow(event: any): void {
    this.service.setSelected(event);
  }

  /**
   * Emit the create event and set dialog in true
   */
  createItem(): void {
    if (this.service && this.showCreate) {
      this.service.openModalAddOrEdit();
    }
    this.create.emit();
  }

  /**
   * Emit the edit event and set dialog in true
   * @param item any
   */
  editItem(item: any): void {
    if (this.service && this.showEdit) {
      this.service.openModalAddOrEdit();
    }
    this.edit.emit(item);
  }

  /**
   * Confirm the action of delete before emit the event
   * @param event {@link Event}
   * @param item any
   */
  deleteItem(event: { target: any }, item: any): void {
    this.confirmationService.confirm({
      message: this.translateService.instant('common.textConfirmDelete'),
      acceptLabel: this.translateService.instant('common.yes'),
      rejectLabel: this.translateService.instant('common.cancel'),
      icon: 'mdi mdi-alert-outline',
      acceptIcon: 'mdi mdi-check',
      rejectIcon: 'mdi mdi-close',
      rejectButtonStyleClass: 'p-button-outlined',
      accept: () => {
        this.delete.emit(item);
        if (this.service) {
          this.service.delete(item.id);
        }
      }
    });
  }

  /**
   * Method make mix object width rowData and column configuration
   * @param row any data
   * @param column {@link HeadersTable}
   * @return An combine object
   */
  rowAndColumn(row: any, column: HeadersTable): object {
    return {...row, columnTable: column};
  }

  /**
   * Method recharges the data of the table
   */
  refreshContentData(dt: Table): void {
    this.service.serverSide ? this.service.loadAll({
      page: 0,
      size: dt.rows,
      filter: undefined,
      sort: undefined,
      direction: undefined
    }) : this.service.loadAll();
    this.input.nativeElement.value = '';
    dt.filterGlobal('', 'contains');
  }

  /**
   * Emit event drag and drop for row table
   * @param event {@link TableRowReorderEvent}
   * @param dt {@link Table}
   */
  rowReorder(event: TableRowReorderEvent, dt: Table): void {
    const {dragIndex, dropIndex} = event;
    this.onRowReorder.emit({
      dragIndex: dragIndex as number,
      dropIndex: dropIndex as number,
      item: dt.value[dropIndex as number]
    });
  }

  /**
   * Trigger the export feature
   */
  showPrintModal(): void {
    this.export.emit();
  }
}

