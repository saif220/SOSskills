import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantService } from '../services/consultant.service';

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
  @Input() consultantData = { nom: '', prenom: '', titre: '', tjm: '', dispo: '',
  quali: '', tel: '', email: '', linkedin: '', codep: '', addresse: '', observation: '', technologie: '', client: '' };
  nom: string;
  prenom: string;
  titre: string;
  tjm: string;
  dispo: string;
  quali: string;
  tel: number;
  email: string;
  linkedin: string;
  codep: number;
  addresse: string;
  observation: string;
  technologie: string;
  client: string;

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

  constructor(private modalService: NgbModal, public us: ConsultantService) { }

  ngOnInit() {
  }

  addConsultant() {
  console.log(this.dispo);
  console.log(this.quali);
  this.consultantData = { nom: this.nom, prenom: this.prenom, titre: this.titre, tjm: this.tjm, dispo: this.dispo,
  quali: this.quali, tel: this.tel.toString(), email: this.email, linkedin: this.linkedin, codep: this.codep.toString(),
  addresse: this.addresse, observation: this.observation, technologie: this.technologie, client: this.client };

  this.us.addConsultant(this.consultantData).subscribe((result) => {
    console.log(' goooooooood ');
  }, (err) => {
    console.log(err);
  });
  }

}
