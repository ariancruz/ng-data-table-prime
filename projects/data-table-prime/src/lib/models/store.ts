import {Observable} from 'rxjs';
import {LazyLoadData} from './table';

export interface BaseStore {
  /**
   * Init the state of service
   */
  initState: () => void;
  /**
   * Load All data required for the store
   * @param data {@link LazyLoadData}
   */
  loadAll: (data?: LazyLoadData | Partial<LazyLoadData>) => void;
  /**
   * Load All data from server for print
   */
  loadAllForExport: () => Observable<any>;
  /**
   * Set selected item for actions
   * @param data type T as any
   */
  setSelected: (data: any) => void;
  /**
   * Create a new Entity
   * @param data type T as any
   */
  create: (data: any) => void;
  /**
   * Update Entity
   * @param data type T as any
   */
  update: (data: any) => void;
  /**
   * Delete Entity by id
   * @param id number
   */
  delete: (id: number) => void;
  /**
   * Open modal for Add or Edit element type T
   */
  openModalAddOrEdit: () => void;
}
