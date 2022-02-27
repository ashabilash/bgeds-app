import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryEightComponent } from './gallery-eight.component';

describe('GalleryEightComponent', () => {
  let component: GalleryEightComponent;
  let fixture: ComponentFixture<GalleryEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
