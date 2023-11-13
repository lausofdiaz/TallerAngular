import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseCSSComponent } from './registrarse-css.component';

describe('RegistrarseCSSComponent', () => {
  let component: RegistrarseCSSComponent;
  let fixture: ComponentFixture<RegistrarseCSSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarseCSSComponent]
    });
    fixture = TestBed.createComponent(RegistrarseCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
