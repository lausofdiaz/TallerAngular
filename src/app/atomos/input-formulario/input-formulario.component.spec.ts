import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormularioComponent } from './input-formulario.component';

describe('InputFormularioComponent', () => {
  let component: InputFormularioComponent;
  let fixture: ComponentFixture<InputFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFormularioComponent]
    });
    fixture = TestBed.createComponent(InputFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
