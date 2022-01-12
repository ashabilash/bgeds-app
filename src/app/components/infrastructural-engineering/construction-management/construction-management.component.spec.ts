import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionManagementComponent } from './construction-management.component';

describe('ConstructionManagementComponent', () => {
  let component: ConstructionManagementComponent;
  let fixture: ComponentFixture<ConstructionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
