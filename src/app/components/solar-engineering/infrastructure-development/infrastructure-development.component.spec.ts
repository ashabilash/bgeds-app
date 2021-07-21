import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureDevelopmentComponent } from './infrastructure-development.component';

describe('InfrastructureDevelopmentComponent', () => {
  let component: InfrastructureDevelopmentComponent;
  let fixture: ComponentFixture<InfrastructureDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
