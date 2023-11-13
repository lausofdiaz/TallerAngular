import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseHTMLComponent } from './registrarse-html.component';

describe('RegistrarseHTMLComponent', () => {
  let component: RegistrarseHTMLComponent;
  let fixture: ComponentFixture<RegistrarseHTMLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarseHTMLComponent]
    });
    fixture = TestBed.createComponent(RegistrarseHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
