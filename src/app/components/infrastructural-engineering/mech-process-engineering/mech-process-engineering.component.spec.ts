import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechProcessEngineeringComponent } from './mech-process-engineering.component';

describe('MechProcessEngineeringComponent', () => {
  let component: MechProcessEngineeringComponent;
  let fixture: ComponentFixture<MechProcessEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechProcessEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechProcessEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
