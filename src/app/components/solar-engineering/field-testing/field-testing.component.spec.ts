import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTestingComponent } from './field-testing.component';

describe('FieldTestingComponent', () => {
  let component: FieldTestingComponent;
  let fixture: ComponentFixture<FieldTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
