import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvanComponent } from './card-avan.component';

describe('CardAvanComponent', () => {
  let component: CardAvanComponent;
  let fixture: ComponentFixture<CardAvanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAvanComponent]
    });
    fixture = TestBed.createComponent(CardAvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
