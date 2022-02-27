import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFourComponent } from './gallery-four.component';

describe('GalleryFourComponent', () => {
  let component: GalleryFourComponent;
  let fixture: ComponentFixture<GalleryFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
