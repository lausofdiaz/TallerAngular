import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAvanceComponent } from './boton-avance.component';

describe('BotonAvanceComponent', () => {
  let component: BotonAvanceComponent;
  let fixture: ComponentFixture<BotonAvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonAvanceComponent]
    });
    fixture = TestBed.createComponent(BotonAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
