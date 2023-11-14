import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCuatroComponent } from './pagina-cuatro.component';

describe('PaginaCuatroComponent', () => {
  let component: PaginaCuatroComponent;
  let fixture: ComponentFixture<PaginaCuatroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCuatroComponent]
    });
    fixture = TestBed.createComponent(PaginaCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
