import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-d',
  templateUrl: './liste-d.component.html',
  styleUrls: ['./liste-d.component.scss']
})
export class ListeDComponent implements OnInit {
  techniques = ['Asap', '1 Month', '3 Months', '+3 Months'];
  metiers = ['Neutre', 'Jouable', 'Injouable', 'Good'];
  fonctions = ['Axa', 'Bnp Paribas', 'Orange', 'SNCF'];
  closeResult: string;
  technique: string;
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  trackByFn(index, station) {
    return station.id;
  }

  add() {
    this.techniques.push('ppppppp');
  }

    // Popup Delete
    open(content, rowid: number) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.techniques.push(this.technique);
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    // end popup delete

}
