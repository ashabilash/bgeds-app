import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-nine',
  templateUrl: './gallery-nine.component.html',
  styleUrls: ['./gallery-nine.component.css']
})
export class GalleryNineComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2, 3].map((n) => `assets/gallery/9-stability-talc-hul-pondy/talc-hul-${n}.png`);
  itemsRow2 = [4].map((n) => `assets/gallery/9-stability-talc-hul-pondy/talc-hul-${n}.png`);


  itemsRow1Content = ['TALC Deflection Check',
                          'TALC Load Calculation', 'TALC Loading Sequence'];
  itemsRow2Content = ['TALC Plan for Blender Extension'];
  ngOnInit() {
  }

}
