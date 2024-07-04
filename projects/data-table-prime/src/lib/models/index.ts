import {Observable} from 'rxjs';
import {Signal} from "@angular/core";

export interface BaseStoreI {
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
   * Set selected item for actions
   * @param data type T as unknown
   */
  setSelected: (data: unknown) => void;
  /**
   * Create a new Entity
   * @param data type T as unknown
   */
  create: (data: unknown) => void;
  /**
   * Update Entity
   * @param data type T as unknown
   */
  update: (data: unknown) => void;
  /**
   * Delete Entity by id
   * @param id number
   */
  delete: (id: number | string) => void;
  /**
   * Open modal for Add or Edit element type T
   */
  openModalAddOrEdit: (dialog: boolean) => void;
  /**
   * Used for destroy all references
   */
  destroy: () => void;
}

export interface LoadAllRequestI {
  /**
   * Load All data required for the store
   * @param data {@link LazyLoadData}
   */
  loadAll: (data?: LazyLoadData | Partial<LazyLoadData>) => void;
}

export interface InitStateI {
  /**
   * Init the state of service
   */
  initState: () => void;
}

export interface LoadAllForExportI {
  /**
   * Load All data from server for print
   */
  loadAllForExport: () => Signal<unknown> | Observable<unknown>;
}

/**
 * Table Models
 */
export type pipe = 'number' | 'cpfCnpj' | 'date' | 'cep' | 'currency' | 'email' | 'tel' | 'shortMoney' |
  'accountant' | 'deep' | 'concat' | 'joinTextMap' | 'wrapText' | 'file' | 'cnae' | 'percent';

export interface HeadersTable {
  // required
  field: string;
  header: string;
  visible: boolean;
  export: boolean;
  // optional
  pipe?: pipe;
  extraVal?: string;
  class?: string;
  width?: number;
  sort?: boolean;
  sortField?: string;
  cFunc?: (data: any) => {};
}

export interface LazyLoadData {
  page: number;
  size: number;
  first?: number;
  filter?: string;
  sort?: string;
  direction?: any;
}

export interface LazyResultData<T> {
  content: Array<T>;
  totalElements: number;
  totalPages: number;
}

export interface RowReorder {
  dragIndex: number;
  dropIndex: number;
  item: any;
}
