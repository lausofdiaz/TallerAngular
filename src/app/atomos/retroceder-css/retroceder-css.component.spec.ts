import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrocederCSSComponent } from './retroceder-css.component';

describe('RetrocederCSSComponent', () => {
  let component: RetrocederCSSComponent;
  let fixture: ComponentFixture<RetrocederCSSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrocederCSSComponent]
    });
    fixture = TestBed.createComponent(RetrocederCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
