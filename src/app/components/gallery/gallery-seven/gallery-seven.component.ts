import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-seven',
  templateUrl: './gallery-seven.component.html',
  styleUrls: ['./gallery-seven.component.css']
})
export class GallerySevenComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1].map((n) => `assets/gallery/7-mp-hul-silvasa/master-hul-${n}.png`);
  itemsRow1Content = ['Master Plan'];
  ngOnInit() {
  }

}
