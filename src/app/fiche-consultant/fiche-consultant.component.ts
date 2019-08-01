import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from '../services/consultant.service';

@Component({
  selector: 'app-fiche-consultant',
  templateUrl: './fiche-consultant.component.html',
  styleUrls: ['./fiche-consultant.component.scss']
})
export class FicheConsultantComponent implements OnInit {
  private sub: any;
  id: number;
  titree: string;
  consultant: any = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              public cs: ConsultantService) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.getConsultantbyId(this.id);
    });
  }

  getConsultantbyId(id) {
    this.consultant = [];
    this.cs.findConsultantbyId(id).subscribe((data2: {}) => {
      this.consultant = data2;
      console.log(data2);
      console.log(this.consultant.titre);
      this.titree = this.consultant.titre;

    });
  }

}
