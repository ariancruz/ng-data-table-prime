import {ElementRef, Pipe, PipeTransform} from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {get, map} from 'lodash';

declare var jsbrasil: any;

@Pipe({
  name: 'pipesResolver',
})
export class PipesResolverPipe implements PipeTransform {

  constructor(private datePipe: DatePipe,
              private elementRef: ElementRef,
              private decimalPipe: DecimalPipe,
              private currencyPipe: CurrencyPipe,
              private translate: TranslateService) {
  }

  transform(value: any, pipe?: string, extraVal?: string): unknown {
    if (pipe === 'number') {
      return this.decimalPipe.transform(value);
    } else if (pipe === 'date') {
      return this.datePipe.transform(value, 'dd/MM/YYYY', '+0');
    } else if (pipe === 'currency') {
      return this.currencyPipe.transform(value);
    } else if (pipe === 'cpfCnpj') {
      return value?.length === 11 ? jsbrasil.maskBr.cpf(value) : jsbrasil.maskBr.cnpj(value);
    } else if (pipe === 'cep' || pipe === 'cnae') {
      return jsbrasil.maskBr[pipe](value);
    } else if (pipe === 'email') {
      return this.elementRef.nativeElement.innerHTML = `<a href="mailto:${value}">${value}</a>`;
    } else if (pipe === 'tel') {
      const cell = this.cellTransform(value);
      return this.elementRef.nativeElement.innerHTML = ` <a href="tel:${value}">${cell}</a>`;
    } else if (pipe === 'shortMoney') {
      return new Intl.NumberFormat('pt', {notation: 'compact', maximumSignificantDigits: 3})
        .format(parseFloat(value ? value.toString() : '0'));
    } else if (pipe === 'accountant') {
      if (!value || value === 0 || value === '0' || value === '') {
        return '0' + extraVal;
      } else if (value === 'N/A') {
        return value;
      }
      const parsedValue = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
      }).format(parseFloat(value.toString()));
      return parsedValue.includes('-') ? `(${parsedValue.slice(1)}) ${extraVal}` : parsedValue + ' ' + extraVal;
    } else if (pipe === 'deep' && extraVal) {
      return get(value, extraVal);
    } else if (pipe === 'concat') {
      return this.translate.instant(extraVal + value);
    } else if (pipe === 'wrapText') {
      const length = Number(extraVal) ?? 60;
      return value.length > length ? value.slice(0, length - 3) + '...' : value;
    } else if (pipe === 'joinTextMap') {
      return map(value, (v) => this.translate.instant(extraVal + v)).toString();
    } else {
      console.log(pipe, value);
    }

    return '-';
  }

  cellTransform(value: any): string {
    if (value && value.startsWith('+55')) {
      return jsbrasil.maskBr.celular(value.slice(3));
    } else if (value && value.startsWith('55')) {
      return jsbrasil.maskBr.celular(value.slice(2));
    }
    return jsbrasil.maskBr.celular(value);
  }

}
