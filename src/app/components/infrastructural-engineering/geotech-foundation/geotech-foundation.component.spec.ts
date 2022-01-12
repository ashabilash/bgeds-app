import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeotechFoundationComponent } from './geotech-foundation.component';

describe('GeotechFoundationComponent', () => {
  let component: GeotechFoundationComponent;
  let fixture: ComponentFixture<GeotechFoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeotechFoundationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeotechFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
