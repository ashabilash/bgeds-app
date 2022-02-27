import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFiveComponent } from './gallery-five.component';

describe('GalleryFiveComponent', () => {
  let component: GalleryFiveComponent;
  let fixture: ComponentFixture<GalleryFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
