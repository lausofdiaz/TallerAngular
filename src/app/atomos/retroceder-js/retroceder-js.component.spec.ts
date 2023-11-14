import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrocederJSComponent } from './retroceder-js.component';

describe('RetrocederJSComponent', () => {
  let component: RetrocederJSComponent;
  let fixture: ComponentFixture<RetrocederJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrocederJSComponent]
    });
    fixture = TestBed.createComponent(RetrocederJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
