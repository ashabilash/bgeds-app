import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNineComponent } from './gallery-nine.component';

describe('GalleryNineComponent', () => {
  let component: GalleryNineComponent;
  let fixture: ComponentFixture<GalleryNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
