import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryElevenComponent } from './gallery-eleven.component';

describe('GalleryElevenComponent', () => {
  let component: GalleryElevenComponent;
  let fixture: ComponentFixture<GalleryElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
