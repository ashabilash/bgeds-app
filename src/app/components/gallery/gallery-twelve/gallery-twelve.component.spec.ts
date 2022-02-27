import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTwelveComponent } from './gallery-twelve.component';

describe('GalleryTwelveComponent', () => {
  let component: GalleryTwelveComponent;
  let fixture: ComponentFixture<GalleryTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
