import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solar-engineering',
  templateUrl: './solar-engineering.component.html',
  styleUrls: ['./solar-engineering.component.css']
})
export class SolarEngineeringComponent implements OnInit {

  constructor() { }

  responsiveOptions;

  ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
