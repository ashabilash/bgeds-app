import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructuralEngineeringComponent } from './infrastructural-engineering.component';

describe('InfrastructuralEngineeringComponent', () => {
  let component: InfrastructuralEngineeringComponent;
  let fixture: ComponentFixture<InfrastructuralEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructuralEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructuralEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
