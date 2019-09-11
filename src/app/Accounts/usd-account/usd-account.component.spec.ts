import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdAccountComponent } from './usd-account.component';

describe('UsdAccountComponent', () => {
  let component: UsdAccountComponent;
  let fixture: ComponentFixture<UsdAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
