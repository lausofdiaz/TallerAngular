import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrgaComponent } from './card-orga.component';

describe('CardOrgaComponent', () => {
  let component: CardOrgaComponent;
  let fixture: ComponentFixture<CardOrgaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOrgaComponent]
    });
    fixture = TestBed.createComponent(CardOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
