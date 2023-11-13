import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrocederComponent } from './retroceder.component';

describe('RetrocederComponent', () => {
  let component: RetrocederComponent;
  let fixture: ComponentFixture<RetrocederComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrocederComponent]
    });
    fixture = TestBed.createComponent(RetrocederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
