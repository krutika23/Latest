import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EurAccountComponent } from './eur-account.component';

describe('EurAccountComponent', () => {
  let component: EurAccountComponent;
  let fixture: ComponentFixture<EurAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EurAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
