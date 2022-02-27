import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-two',
  templateUrl: './gallery-two.component.html',
  styleUrls: ['./gallery-two.component.css']
})
export class GalleryTwoComponent implements OnInit {

  constructor() { }
  itemsRow1 = [1, 2, 3].map((n) => `assets/gallery/2-etp-hul-hosur/etp-hul-${n}.png`);
  itemsRow2 = [4, 5, 6].map((n) => `assets/gallery/2-etp-hul-hosur/etp-hul-${n}.png`);
  itemsRow3 = [7, 8, 9].map((n) => `assets/gallery/2-etp-hul-hosur/etp-hul-${n}.png`);
  itemsRow4 = [10, 11, 12].map((n) => `assets/gallery/2-etp-hul-hosur/etp-hul-${n}.png`);
  itemsRow5 = [13, 14, 15].map((n) => `assets/gallery/2-etp-hul-hosur/etp-hul-${n}.png`);
  itemsRow6 = [16, 17].map((n) => `assets/gallery/2-etp-hul-hosur/etp-hul-${n}.png`);


  itemsRow1Content = ['ETP, Blower Foundation',
                          'ETP, Lamella Unit', 'ETP, Master Layout'];
  itemsRow2Content = ['ETP, Raw water tank',
                          'ETP, Unit 1A & 1B, 3D Rendering', 'ETP, Unit 1A & 1B, Cross Section'];
  itemsRow3Content = ['ETP, Unit 1A & 1B, Plan 1',
                          'ETP, Unit 1A & 1B, Plan 2', 'ETP, Unit 2, 3D Rendering'];
  itemsRow4Content = ['ETP, Unit 2, Plan',
  'ETP, Unit 2, RC details', 'ETP, Unit 2, Section'];
  itemsRow5Content = ['ETP, Unit 4 & 7, 3D Rendering',
  'ETP, Unit 4 & 7, Plan', 'ETP, Unit 4 & 7, Section'];
  itemsRow6Content = ['ETP Foundation',
  'ETP'];

  ngOnInit() {
  }

}
