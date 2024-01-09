import {TemplateRef} from '@angular/core';

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
  inject?: boolean;
  class?: string;
  width?: number;
  sort?: boolean;
  sortField?: string;
  cFunc?: (data: any) => {};
}

export interface TemplateSlot {
  name: string;
  template: TemplateRef<any>;
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
