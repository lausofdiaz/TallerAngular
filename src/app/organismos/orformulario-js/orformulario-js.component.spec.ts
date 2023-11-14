import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrformularioJSComponent } from './orformulario-js.component';

describe('OrformularioJSComponent', () => {
  let component: OrformularioJSComponent;
  let fixture: ComponentFixture<OrformularioJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrformularioJSComponent]
    });
    fixture = TestBed.createComponent(OrformularioJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
