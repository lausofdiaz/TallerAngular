import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHTMLComponent } from './formulario-html.component';

describe('FormularioHTMLComponent', () => {
  let component: FormularioHTMLComponent;
  let fixture: ComponentFixture<FormularioHTMLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioHTMLComponent]
    });
    fixture = TestBed.createComponent(FormularioHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
