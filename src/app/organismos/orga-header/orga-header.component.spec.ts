import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaHeaderComponent } from './orga-header.component';

describe('OrgaHeaderComponent', () => {
  let component: OrgaHeaderComponent;
  let fixture: ComponentFixture<OrgaHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgaHeaderComponent]
    });
    fixture = TestBed.createComponent(OrgaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
