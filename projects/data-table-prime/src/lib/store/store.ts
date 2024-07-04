import {computed, signal, Signal, WritableSignal} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LazyLoadData} from '../models';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {toObservable} from '@angular/core/rxjs-interop';

/**
 * Load all http init request
 */
declare interface LoadAllRequest {
  /**
   * Load All data required for the store
   * @param data {@link LazyLoadData}
   */
  loadAll: (data?: LazyLoadData | Partial<LazyLoadData>) => void;
}

/**
 * Method for load all data using in export
 */
declare interface LoadAllForExport {
  /**
   * Load All data from server for print
   */
  loadAllForExport: () => Signal<unknown> | Observable<unknown>;
}

/**
 * The common property for the store service
 */
declare interface CommonProperty {
  /**
   * Server side pagination and filter default value false
   */
  serverSide: boolean;
  /**
   * Server side pagination start on Init default value true
   */
  lazyLoadOnInit: boolean;
  /**
   * Keep the reference for pagination in lazy mode default value 0
   */
  pageRecord: number;
  /**
   * Keep the reference for pagination number of row per page in lazy mode default value 25
   */
  pageSize: number;
  /**
   * Keep all subscription of NgRx
   * @protected ngUnsubscribe Subject boolean
   */
  ngUnsubscribe: Subject<boolean>;
  /**
   * Reference of dialog
   * @private dialogRef {@link DynamicDialogRef}
   */
  dialogRef: DynamicDialogRef;
}

/**
 * The base store class for implement
 */
class Base implements CommonProperty {
  pageSize = 25;
  pageRecord = 0;
  serverSide = false;
  lazyLoadOnInit = true;
  dialogRef!: DynamicDialogRef;
  ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  /**
   * Set selected item for actions
   * @param data type T as unknown
   */
  setSelected!: (data: unknown) => void;
  /**
   * Create a new Entity
   * @param data type T as unknown
   */
  create!: (data: unknown) => void;
  /**
   * Update Entity
   * @param data type T as unknown
   */
  update!: (data: unknown) => void;
  /**
   * Delete Entity by id
   * @param id number
   */
  delete!: (id: number | string) => void;
  /**
   * Open modal for Add or Edit element type T
   */
  openModalAddOrEdit!: (dialog: boolean) => void;

  /**
   * Used for destroy all references
   */
  destroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}

class BaseStore extends Base implements LoadAllRequest {
  loadAll(data?: LazyLoadData | Partial<LazyLoadData>): void {
    if (data) {
      const {size, first} = data;
      this.pageSize = size ?? 25;
      this.pageRecord = first ?? 0;
    }
  }
}

class BaseDragStore extends Base implements LoadAllRequest {
  loadAll(data?: LazyLoadData | Partial<LazyLoadData>): void {
    if (data) {
      const {size, page} = data;
      this.pageSize = size ?? 25;
      this.pageRecord = page ?? 0;
    }
  }
}

export class StoreService<T> extends BaseStore implements LoadAllForExport {

  loaded: WritableSignal<boolean> = signal(false);
  loaded$: Signal<boolean | undefined> = computed(() => this.loaded());
  readonly loaded$$: Observable<boolean | undefined> = toObservable(this.loaded$);

  total: WritableSignal<number> = signal(0);
  total$: Signal<number | undefined> = computed(() => this.total());
  readonly total$$: Observable<number | undefined> = toObservable(this.total$);

  listEntities: WritableSignal<T[]> = signal([]);
  listEntities$: Signal<T[] | undefined> = computed(() => this.listEntities());
  readonly listEntities$$: Observable<T[] | undefined> = toObservable(this.listEntities$);

  selectedEntity: WritableSignal<any> = signal(null);
  selectedEntity$: Signal<T | any> = computed(() => this.selectedEntity());
  readonly selectedEntity$$: Observable<T | any> = toObservable(this.selectedEntity$);

  dialog: WritableSignal<boolean> = signal(false);
  dialog$: Signal<boolean | undefined> = computed(() => this.dialog());
  readonly dialog$$: Observable<boolean | undefined> = toObservable(this.dialog$);

  loadAllForExport(): Signal<any> | Observable<any> {
    return this.listEntities$;
  }
}

export class StoreDragService<T> extends BaseDragStore implements LoadAllForExport {

  loaded: WritableSignal<boolean> = signal(false);
  loaded$: Signal<boolean | undefined> = computed(() => this.loaded());
  loaded$$: Observable<boolean | undefined> = toObservable(this.loaded$);

  total: WritableSignal<number> = signal(0);
  total$: Signal<number | undefined> = computed(() => this.total());
  total$$: Observable<number | undefined> = toObservable(this.total$);

  listEntities: WritableSignal<T[]> = signal([]);
  listEntities$: Signal<T[] | undefined> = computed(() => this.listEntities());
  listEntities$$: Observable<T[] | undefined> = toObservable(this.listEntities$);

  selectedEntity: WritableSignal<any> = signal(null);
  selectedEntity$: Signal<T | any> = computed(() => this.selectedEntity());
  selectedEntity$$: Observable<T | any> = toObservable(this.selectedEntity$);

  dialog: WritableSignal<boolean> = signal(false);
  dialog$: Signal<boolean | undefined> = computed(() => this.dialog());
  dialog$$: Observable<boolean | undefined> = toObservable(this.dialog$);

  /**
   * If total elements is loaded
   * the observable is for used in store ngrx and the plain value is always updated
   */
  totalElements: WritableSignal<number> = signal(0);
  totalElements$: Signal<number | undefined> = computed(() => this.totalElements());
  totalElements$$: Observable<number | undefined> = toObservable(this.totalElements$);
  /**
   * Show when the request is executing
   * the observable is for used in store ngrx and the plain value is always updated
   */
  allLoaded$: Signal<boolean> = computed(() => {
    const totalElements = this.totalElements$();
    const total = this.total$();
    return totalElements !== undefined && total !== undefined && totalElements <= total;
  });
  allLoaded$$: Observable<boolean | undefined> = toObservable(this.allLoaded$);

  loadAllForExport(): Signal<any> | Observable<any> {
    return this.listEntities$;
  }
}
