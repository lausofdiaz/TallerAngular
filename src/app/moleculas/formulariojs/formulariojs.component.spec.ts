import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariojsComponent } from './formulariojs.component';

describe('FormulariojsComponent', () => {
  let component: FormulariojsComponent;
  let fixture: ComponentFixture<FormulariojsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariojsComponent]
    });
    fixture = TestBed.createComponent(FormulariojsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
