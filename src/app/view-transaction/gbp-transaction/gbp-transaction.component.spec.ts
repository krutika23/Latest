import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbpTransactionComponent } from './gbp-transaction.component';

describe('GbpTransactionComponent', () => {
  let component: GbpTransactionComponent;
  let fixture: ComponentFixture<GbpTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbpTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbpTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
