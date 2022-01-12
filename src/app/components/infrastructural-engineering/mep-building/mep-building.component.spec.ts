import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MepBuildingComponent } from './mep-building.component';

describe('MepBuildingComponent', () => {
  let component: MepBuildingComponent;
  let fixture: ComponentFixture<MepBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MepBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MepBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
