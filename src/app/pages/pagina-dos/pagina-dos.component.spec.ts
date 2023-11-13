import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDosComponent } from './pagina-dos.component';

describe('PaginaDosComponent', () => {
  let component: PaginaDosComponent;
  let fixture: ComponentFixture<PaginaDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDosComponent]
    });
    fixture = TestBed.createComponent(PaginaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
