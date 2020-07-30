import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoComponentComponent } from './ingreso-component.component';

describe('IngresoComponentComponent', () => {
  let component: IngresoComponentComponent;
  let fixture: ComponentFixture<IngresoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
