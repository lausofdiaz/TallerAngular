import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloAvanceComponent } from './titulo-avance.component';

describe('TituloAvanceComponent', () => {
  let component: TituloAvanceComponent;
  let fixture: ComponentFixture<TituloAvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloAvanceComponent]
    });
    fixture = TestBed.createComponent(TituloAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
