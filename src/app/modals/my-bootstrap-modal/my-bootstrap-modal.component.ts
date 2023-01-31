import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-bootstrap-modal',
  templateUrl: './my-bootstrap-modal.component.html',
  styleUrls: ['./my-bootstrap-modal.component.scss']
})
export class MyBootstrapModalComponent implements OnInit {

  @Input() newsData : any;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {}

  closeModal(sendData : any) {
    this.activeModal.close(sendData);
  }

}
