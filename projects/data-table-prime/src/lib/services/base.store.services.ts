import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {BaseStoreI} from '../models/store';
import {LazyLoadData} from '../models/table';


@Injectable({
  providedIn: 'root'
})
export class BaseStoreServices<T> implements BaseStoreI {
  /**
   * Server side pagination and filter default value false
   */
  serverSide: boolean = false;
  /**
   * Server side pagination start on Init default value true
   */
  lazyLoadOnInit = true;
  /**
   * Keep the reference for pagination in lazy mode default value 0
   */
  pageRecord = 0;
  /**
   * Keep the reference for pagination number of row per page in lazy mode default value 25
   */
  pageSize = 25;
  /**
   * Show when the request is executing
   */
  loaded: boolean = false;
  loaded$!: Observable<boolean>;
  /**
   * Length value from list of Entities
   */
  total = 0;
  total$!: Observable<number>;
  /**
   * List of Entities type T
   */
  listEntities: T[] = [];
  listEntities$!: Observable<T[]>;
  /**
   * Selected Entity type T
   */
  selectedEntity!: T;
  selectedEntity$!: Observable<T | any>;
  /**
   * The dialog visibility
   */
  dialog = false;
  dialog$!: Observable<boolean>;
  /**
   * Keep all subscription of NgRx
   * @protected ngUnsubscribe Subject boolean
   */
  protected ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  /**
   * Reference of dialog
   * @private dialogRef {@link DynamicDialogRef}
   */
  protected dialogRef!: DynamicDialogRef;

  constructor() {
  }

  initState(): void {
  }

  /**
   * Clear subscription
   */
  destroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  loadAll(data?: LazyLoadData | Partial<LazyLoadData>): void {
    if (data) {
      const {size, first} = data;
      this.pageSize = size ? size : 25;
      this.pageRecord = first ? first : 0;
    }
  }

  loadAllForExport(): Observable<T[]> {
    return this.listEntities$;
  }

  setSelected(data: any): void {
  }

  create(data: any): void {
  }

  update(data: any): void {
  }

  delete(id: number | string): void {
  }

  openModalAddOrEdit(): void {
  }
}
