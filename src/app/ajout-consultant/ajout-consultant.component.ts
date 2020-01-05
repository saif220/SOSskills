import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantService } from '../services/consultant.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from '../services/upload-file.service';

export interface Disponibility {
  value: string;
}

export interface Qualite {
  value: string;
}

@Component({
  selector: 'app-ajout-consultant',
  templateUrl: './ajout-consultant.component.html',
  styleUrls: ['./ajout-consultant.component.scss']
})
export class AjoutConsultantComponent implements OnInit {
  showMainContent: Boolean = false;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  @Input() consultantData = { nom: '', prenom: '', titre: '', tjm: '', dispo: '',
  quali: '', tel: '', email: '', linkedin: '', codep: '', addresse: '', observation: '', technologie: '', client: '', cv: '' };
  nom = "";
  prenom="";
  titre="";
  tjm="";
  dispo="";
  quali="";
  tel="";
  email="";
  linkedin="";
  codep="";
  addresse="";
  observation="";
  technologie="";
  client="";

  disponibilities: Disponibility[] = [
    {value: 'dans 2 Mois'},
    {value: 'dans 3 Mois'},
    {value: 'dans 4 Mois'}
  ];

  qualites: Qualite[] = [
    {value: 'Red'},
    {value: 'Green'},
    {value: 'Yellow'}
  ];

  constructor(private modalService: NgbModal, public us: ConsultantService, private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  addConsultant() {
    if (this.nom === ""|| this.prenom === "" || this.titre === "" || this.tjm === "" || this.dispo === "" || this.quali === ""
    || this.codep === "" || this.email === ""  ){
      console.log('wrong !!!');
      this.showMainContent = this.showMainContent ? false : true;

    } else {
  this.consultantData = { nom: this.nom, prenom: this.prenom, titre: this.titre, tjm: this.tjm, dispo: this.dispo,
  quali: this.quali, tel: this.tel, email: this.email, linkedin: this.linkedin, codep: this.codep,
  addresse: this.addresse, observation: this.observation, technologie: this.technologie,
  client: this.client, cv: this.nom + '_' + this.selectedFiles.item(0).name };

  this.us.addConsultant(this.consultantData).subscribe((result) => {
    console.log(' goooooooood ');
    this.showMainContent = false;
    this.upload();
  }, (err) => {
    console.log(err);
  });
}
console.log('aaaaaaaaaaaaa');
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress.percentage = 0;
    console.log(this.selectedFiles.item(0).type);
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.nom).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

}
