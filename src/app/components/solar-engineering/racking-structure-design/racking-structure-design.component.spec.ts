import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackingStructureDesignComponent } from './racking-structure-design.component';

describe('RackingStructureDesignComponent', () => {
  let component: RackingStructureDesignComponent;
  let fixture: ComponentFixture<RackingStructureDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackingStructureDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackingStructureDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
