import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource  } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-arch-civil-struct-services',
  templateUrl: './arch-civil-struct-services.component.html',
  styleUrls: ['./arch-civil-struct-services.component.css']
})
export class ArchCivilStructServicesComponent implements OnInit {

  constructor() { }
  images = [1, 2, 3].map((n) => `assets/services/solar-engineering/corrosion-study/carousel/corrosion-${n}.jpg`);

  utilitiesRow1 = [1, 2, 3, 4].map((n) => `assets/services/infra/arch-civil/utilities/utilities-3-${n}.png`);
  utilitiesRow2 = [1, 2, 3, 4].map((n) => `assets/services/infra/arch-civil/utilities/utilities-4-${n}.png`);
  utilitiesRow3 = [5, 6, 7].map((n) => `assets/services/infra/arch-civil/utilities/utilities-${n}.png`);
  assessmentRow1 = [1].map((n) => `assets/services/infra/arch-civil/assessment/assessment-${n}.png`);

  utilitiesRow3Content = ['1010 KVA DG foundation with shed and coil cooler foundation, Pondicherry',
                          'Main Control Room Design & Engg services for 22MW Solar Power Plant', ''];
  assessmentRow1Content = ['Manufacturing Tower'];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  ngOnInit() {
  }

}
