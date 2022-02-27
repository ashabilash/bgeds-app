import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-ten',
  templateUrl: './gallery-ten.component.html',
  styleUrls: ['./gallery-ten.component.css']
})
export class GalleryTenComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2].map((n) => `assets/gallery/10-stability-nsd-hul-pondy/nsd-${n}.png`);

  itemsRow1Content = ['NSD 3D Rendering',
                          'NSD 3D Rendering'];
  ngOnInit() {
  }

}
