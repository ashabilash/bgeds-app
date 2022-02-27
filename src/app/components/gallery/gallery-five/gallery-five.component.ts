import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-five',
  templateUrl: './gallery-five.component.html',
  styleUrls: ['./gallery-five.component.css']
})
export class GalleryFiveComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2, 3].map((n) => `assets/gallery/5-sakthi-tea-hosur/sakthi-tea-${n}.png`);
  itemsRow2 = [4].map((n) => `assets/gallery/5-sakthi-tea-hosur/sakthi-tea-${n}.png`);

  itemsRow1Content = ['Sakthi Tea Plant-Elevation',
                          'Sakthi Tea Plant-Geotechnical Investigation', 'Sakthi Tea Plant-Master Plan'];
  itemsRow2Content = ['Sakthi Tea Plant-Topographic Plan'];
  ngOnInit() {
  }

}
