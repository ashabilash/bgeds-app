import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-twelve',
  templateUrl: './gallery-twelve.component.html',
  styleUrls: ['./gallery-twelve.component.css']
})
export class GalleryTwelveComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2, 3].map((n) => `assets/gallery/12-walk-hul-pondy/walk-hul-${n}.png`);

  itemsRow1Content = ['Liquid New Walk on Area',
                          'Liquid STAAD Model with reactions', 'Liquid_Walk on Plan Arrangement'];
  ngOnInit() {
  }

}
