import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-four',
  templateUrl: './gallery-four.component.html',
  styleUrls: ['./gallery-four.component.css']
})
export class GalleryFourComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1].map((n) => `assets/gallery/4-rm-hul-hosur/rm-hul-${n}.png`);
  itemsRow1Content = ['RM Fabrication Drawing'];
  ngOnInit() {
  }

}
