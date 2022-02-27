import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySevenComponent } from './gallery-seven.component';

describe('GallerySevenComponent', () => {
  let component: GallerySevenComponent;
  let fixture: ComponentFixture<GallerySevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
