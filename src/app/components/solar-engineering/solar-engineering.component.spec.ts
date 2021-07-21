import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarEngineeringComponent } from './solar-engineering.component';

describe('SolarEngineeringComponent', () => {
  let component: SolarEngineeringComponent;
  let fixture: ComponentFixture<SolarEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
