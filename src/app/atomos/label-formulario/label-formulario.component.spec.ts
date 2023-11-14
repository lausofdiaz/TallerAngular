import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelFormularioComponent } from './label-formulario.component';

describe('LabelFormularioComponent', () => {
  let component: LabelFormularioComponent;
  let fixture: ComponentFixture<LabelFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelFormularioComponent]
    });
    fixture = TestBed.createComponent(LabelFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
