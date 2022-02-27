import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-eleven',
  templateUrl: './gallery-eleven.component.html',
  styleUrls: ['./gallery-eleven.component.css']
})
export class GalleryElevenComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2, 3].map((n) => `assets/gallery/11-stability-tsf-hul-pondy/tsf-hul-${n}.png`);

  itemsRow1Content = ['TSF 3D Rendering',
                          'TSF Noodles', 'TSF Noodles'];
  ngOnInit() {
  }

}
