import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingAnalysisComponent } from './grading-analysis.component';

describe('GradingAnalysisComponent', () => {
  let component: GradingAnalysisComponent;
  let fixture: ComponentFixture<GradingAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
