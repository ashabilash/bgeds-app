import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3RenderingCivilMechComponent } from './d3-rendering-civil-mech.component';

describe('D3RenderingCivilMechComponent', () => {
  let component: D3RenderingCivilMechComponent;
  let fixture: ComponentFixture<D3RenderingCivilMechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3RenderingCivilMechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3RenderingCivilMechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
