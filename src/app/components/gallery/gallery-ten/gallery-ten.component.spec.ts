import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTenComponent } from './gallery-ten.component';

describe('GalleryTenComponent', () => {
  let component: GalleryTenComponent;
  let fixture: ComponentFixture<GalleryTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
