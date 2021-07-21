import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationalDesignComponent } from './foundational-design.component';

describe('FoundationalDesignComponent', () => {
  let component: FoundationalDesignComponent;
  let fixture: ComponentFixture<FoundationalDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationalDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
