import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-six',
  templateUrl: './gallery-six.component.html',
  styleUrls: ['./gallery-six.component.css']
})
export class GallerySixComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1].map((n) => `assets/gallery/6-master-kerala/master-kerala-${n}.png`);
  itemsRow1Content = ['Master Plan'];
  ngOnInit() {
  }

}
