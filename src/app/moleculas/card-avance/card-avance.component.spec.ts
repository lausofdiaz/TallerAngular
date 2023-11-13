import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvanceComponent } from './card-avance.component';

describe('CardAvanceComponent', () => {
  let component: CardAvanceComponent;
  let fixture: ComponentFixture<CardAvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAvanceComponent]
    });
    fixture = TestBed.createComponent(CardAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
