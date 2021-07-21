import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvLayoutComponent } from './pv-layout.component';

describe('PvLayoutComponent', () => {
  let component: PvLayoutComponent;
  let fixture: ComponentFixture<PvLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
