import {Observable} from 'rxjs';
import {LazyLoadData} from './table';
import {Signal} from "@angular/core";

export interface BaseStoreI {
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
