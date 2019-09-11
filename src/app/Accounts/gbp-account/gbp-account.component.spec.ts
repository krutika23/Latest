import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbpAccountComponent } from './gbp-account.component';

describe('GbpAccountComponent', () => {
  let component: GbpAccountComponent;
  let fixture: ComponentFixture<GbpAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbpAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbpAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
