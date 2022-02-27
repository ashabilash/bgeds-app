import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-three',
  templateUrl: './gallery-three.component.html',
  styleUrls: ['./gallery-three.component.css']
})
export class GalleryThreeComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2, 3].map((n) => `assets/gallery/3-hygiene-hul-hosur/hygiene-hul-${n}.png`);
  itemsRow2 = [4, 5, 6].map((n) => `assets/gallery/3-hygiene-hul-hosur/hygiene-hul-${n}.png`);


  itemsRow1Content = ['Hygiene Cross Section',
                          'Hygiene Elevation', 'Hygiene Photo 1'];
  itemsRow2Content = ['Hygiene Photo 2',
                          'Hygiene Photo 3', 'Hygiene Plan'];
  ngOnInit() {
  }

}
