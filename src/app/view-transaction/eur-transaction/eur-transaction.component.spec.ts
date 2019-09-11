import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EurTransactionComponent } from './eur-transaction.component';

describe('EurTransactionComponent', () => {
  let component: EurTransactionComponent;
  let fixture: ComponentFixture<EurTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EurTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
