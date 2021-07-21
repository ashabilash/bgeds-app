import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroGreetComponent } from './intro-greet.component';

describe('IntroGreetComponent', () => {
  let component: IntroGreetComponent;
  let fixture: ComponentFixture<IntroGreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroGreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
