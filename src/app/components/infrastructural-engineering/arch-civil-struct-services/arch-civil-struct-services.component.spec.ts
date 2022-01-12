import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchCivilStructServicesComponent } from './arch-civil-struct-services.component';

describe('ArchCivilStructServicesComponent', () => {
  let component: ArchCivilStructServicesComponent;
  let fixture: ComponentFixture<ArchCivilStructServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchCivilStructServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchCivilStructServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
