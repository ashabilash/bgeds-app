import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilStructServicesComponent } from './civil-struct-services.component';

describe('CivilStructServicesComponent', () => {
  let component: CivilStructServicesComponent;
  let fixture: ComponentFixture<CivilStructServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilStructServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilStructServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
