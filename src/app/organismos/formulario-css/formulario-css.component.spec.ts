import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCSSComponent } from './formulario-css.component';

describe('FormularioCSSComponent', () => {
  let component: FormularioCSSComponent;
  let fixture: ComponentFixture<FormularioCSSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCSSComponent]
    });
    fixture = TestBed.createComponent(FormularioCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
