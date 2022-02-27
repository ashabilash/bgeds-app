import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySixComponent } from './gallery-six.component';

describe('GallerySixComponent', () => {
  let component: GallerySixComponent;
  let fixture: ComponentFixture<GallerySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
