import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-eight',
  templateUrl: './gallery-eight.component.html',
  styleUrls: ['./gallery-eight.component.css']
})
export class GalleryEightComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1].map((n) => `assets/gallery/8-el-hul-pondy/el-hul-${n}.png`);
  itemsRow1Content = ['NMB Equipment Layout'];
  ngOnInit() {
  }

}
