import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-one',
  templateUrl: './gallery-one.component.html',
  styleUrls: ['./gallery-one.component.css']
})
export class GalleryOneComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2, 3].map((n) => `assets/gallery/1-coffee-hul-hosur/coffee-plant-${n}.png`);
  itemsRow2 = [4, 5, 6].map((n) => `assets/gallery/1-coffee-hul-hosur/coffee-plant-${n}.png`);
  itemsRow3 = [7, 8, 9].map((n) => `assets/gallery/1-coffee-hul-hosur/coffee-plant-${n}.png`);


  itemsRow1Content = ['Coffee Plant Site',
                          'Coffee Plant Site', 'Coffee Plant Elevation Plan'];
  itemsRow2Content = ['Coffee Plant-Equipment Layout @ 0.0 m level',
                          'Coffee Plant-Equipment Layout @ 5.5 m level', 'Coffee Plant-Equipment Layout Elevation'];
  itemsRow3Content = ['Coffee Plant-Foundation & Pedestal Plan',
                          'Coffee Plant-Roofing Plan', 'Coffee Plant-Section'];

  ngOnInit() {
  }

}
