import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  closeResult: string;
  public isMenuCollapsed = true;
  FormData: FormGroup;
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  closeModal() {
    this.modalService.dismissAll();
  }


  constructor(private modalService: NgbModal, private builder: FormBuilder, private http: HttpClient) {

  }


  ngOnInit() {
    this.FormData = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      EmailID: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      MobileNumber: new FormControl('', [Validators.required]),
      Company: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  successAlertNotification() {
    Swal.fire('Thanks for reaching out to us!', 'We\'ll get back to you in no time', 'success');
  }

  submitForm() {
    // console.log(this.FormData.value);
    const email = this.FormData.value;
    this.http.post('https://formspree.io/f/xqkwgzwe',
      { body: email}).subscribe(
        response => {
          console.log(response);
        }
      );
    this.closeModal();
    this.successAlertNotification();
  }

}
