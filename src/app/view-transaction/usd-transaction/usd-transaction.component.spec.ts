import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdTransactionComponent } from './usd-transaction.component';

describe('UsdTransactionComponent', () => {
  let component: UsdTransactionComponent;
  let fixture: ComponentFixture<UsdTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
