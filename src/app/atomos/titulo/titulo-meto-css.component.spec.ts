import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloMetoCssComponent } from './titulo-meto-css.component';

describe('TituloMetoCssComponent', () => {
  let component: TituloMetoCssComponent;
  let fixture: ComponentFixture<TituloMetoCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloMetoCssComponent]
    });
    fixture = TestBed.createComponent(TituloMetoCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
