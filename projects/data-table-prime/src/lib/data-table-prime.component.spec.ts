import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablePrimeComponent } from './data-table-prime.component';

describe('DataTablePrimeComponent', () => {
  let component: DataTablePrimeComponent;
  let fixture: ComponentFixture<DataTablePrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTablePrimeComponent]
    });
    fixture = TestBed.createComponent(DataTablePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
