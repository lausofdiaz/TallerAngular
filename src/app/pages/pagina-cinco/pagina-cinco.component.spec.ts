import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCincoComponent } from './pagina-cinco.component';

describe('PaginaCincoComponent', () => {
  let component: PaginaCincoComponent;
  let fixture: ComponentFixture<PaginaCincoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCincoComponent]
    });
    fixture = TestBed.createComponent(PaginaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
