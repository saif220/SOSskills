import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  techniques = [];
  metiers = [];
  fonctions = [];
  closeResult: string;
  technique: string;
  metier: string;
  fonction: string;
  @Input() techniqueData = { name: ''};
  @Input() metierData = { name: ''};
  @Input() fonctionData = { name: ''};
  constructor(private modalService: NgbModal, public ts: TagsService) {
  }

  ngOnInit() {
    this.getTechnique();
    this.getMetier();
    this.getFonction();
  }

  trackByFn(index, station) {
    return station.id;
  }

  getTechnique() {
    this.ts.getTechniques().subscribe((data2: {}) => {
// tslint:disable-next-line: forin
      for (const i in data2) {
        this.techniques.push(data2[i].name);
    }
    });
  }

  getMetier() {
    this.ts.getMetiers().subscribe((data2: {}) => {
// tslint:disable-next-line: forin
      for (const i in data2) {
        this.metiers.push(data2[i].name);
    }
    });
  }

  getFonction() {
    this.ts.getFonctions().subscribe((data2: {}) => {
// tslint:disable-next-line: forin
      for (const i in data2) {
        this.fonctions.push(data2[i].name);
    }
    });
  }

    // Popup ajout technique
  open(content, rowid: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.techniqueData = { name: this.technique};
      this.ts.addTechnique(this.techniqueData).subscribe(() => {
        console.log(' goooooooood ');
      }, (err) => {
        console.log(err);
      });
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
  // Popup ajout metier
  open2(content, rowid: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.metierData = { name: this.metier};
      this.ts.addMetier(this.metierData).subscribe(() => {
        console.log(' goooooooood ');
      }, (err) => {
        console.log(err);
      });
      this.metiers.push(this.metier);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

    // Popup ajout fonction
    open3(content, rowid: number) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.fonctionData = { name: this.fonction,};
        this.ts.addFonction(this.fonctionData).subscribe(() => {
          console.log(' goooooooood ');
        }, (err) => {
          console.log(err);
        });
        this.fonctions.push(this.fonction);
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

}
