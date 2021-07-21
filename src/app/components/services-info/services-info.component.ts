import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbModal  } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-services-info',
  templateUrl: './services-info.component.html',
  styleUrls: ['./services-info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesInfoComponent implements OnInit {
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

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

  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


}
