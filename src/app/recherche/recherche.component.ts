import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TagsService } from '../services/tags.service';
import { ConsultantService } from '../services/consultant.service';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';



export interface Element {
  _id: string;
  Nom: string;
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
  Technologies: string;
  client: string;
}

const ELEMENT_DATA: Element[] = [];


export interface Tech {
  active: boolean;
  Nom: string;
  Technologies: string;
}

export interface Fonc {
  active: boolean;
  Nom: string;
  titre: string;
}

export interface Dispo {
  active: boolean;
  Nom: string;
  dispo: string;
}

export interface Quali {
  active: boolean;
  Nom: string;
  quali: string;
}

export interface Techs {
  value: string;
  name: string;
}

export interface Titres {
  value: string;
  name: string;
}
export interface Critere {
  Nom: string;
}




@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  techniques = [];
  metiers = [];
  fonctions = [];
  consultants: any = [];
  newArray: any = [];
  total: number;

  Techs: Techs[] = [
    {value: '', name: 'All'},
    {value: 'SpringBoot', name: 'SpringBoot'},
    {value: 'Angular', name: 'Angular'},
  ];

  crit: Critere[] = [];



  Titres: Titres[] = [
    {value: '', name: 'All'},
    {value: 'saif', name: 'saif'},
    {value: 'ppp', name: 'ppp'},
  ];



  constructor(private modalService: NgbModal, public ts: TagsService, public us: ConsultantService, private router: Router) { }





    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns: string[] = ['Nom', 'Prenom', 'Titre', 'Technologies', 'Disponibilite', 'Clients', 'Modification', 'cv'  ];
    data = Object.assign( ELEMENT_DATA);
    dataSource = new MatTableDataSource(this.data);

    techToShow: Tech[] = [];
    foncToShow: Fonc[] = [];
    dispoToShow: Dispo[] = [{Nom: 'Dans 2 mois', active: false, dispo: 'Dans 2 mois'},
                            {Nom: 'Dans 3 mois', active: false, dispo: 'Dans 3 mois'},
                            {Nom: 'Dans 4 mois', active: false, dispo: 'Dans 4 mois'}];
    qualiToShow: Quali[] = [{Nom: 'Neutre', active: false, quali: 'Yellow'},
                            {Nom: 'Jouable', active: false, quali: 'Green'},
                            {Nom: 'Injouable', active: false, quali: 'Red'}];


    techFilter = new FormControl();
    foncFilter = new FormControl();
    nameFilter = new FormControl();
    titreFilter = new FormControl();
    globalFilter = '';
    filteredValues = {
      _id: '',
      Nom: '',
      prenom: '',
      titre: '',
      tjm: '',
      dispo: '',
      quali: '',
      tel: '',
      email: '',
      linkedin: '',
      codep: '',
      addresse: '',
      observation: '',
      Technologies: '',
      client: ''
    };



  ngOnInit() {
    this.getUsers();
    this.getTechnique();
    this.getFonction();

  }


  getUsers() {
    this.consultants = [];
    this.us.getConsultants().subscribe((data2: {}) => {
      this.consultants = data2;
      console.log(data2);
// tslint:disable-next-line: forin
      for (const i in data2) {
        ELEMENT_DATA.push({
          _id: data2[i]._id,
          Nom: data2[i].nom,
          prenom: data2[i].prenom,
          titre: data2[i].titre,
          tjm: data2[i].tjm,
          dispo: data2[i].dispo,
          quali: data2[i].quali,
          tel: data2[i].tel,
          email: data2[i].email,
          linkedin: data2[i].linkedin,
          codep: data2[i].codep,
          addresse: data2[i].addresse,
          observation: data2[i].observation,
          Technologies: data2[i].technologie,
          client: data2[i].client,
        });
    }
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
        this.filteredValues.Technologies = nameFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });
      this.titreFilter.valueChanges.subscribe((titreFilterValue) => {
        this.filteredValues.titre = titreFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });

      this.dataSource.filterPredicate = this.customFilterPredicate();

    });
    console.log(this.consultants);
  }


  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }




  selectRow(row) {
    this.router.navigate(['/fichec'], { queryParams: { id: row._id } });
}



  trackByFn(index, station) {
    return station.id;
  }

  getTechnique() {
    this.ts.getTechniques().subscribe((data2: {}) => {
// tslint:disable-next-line: forin
      for (const i in data2) {
        this.techToShow.push({ Technologies: data2[i].name, active: false, Nom: data2[i].name });
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
        this.foncToShow.push({ titre: data2[i].name, active: false, Nom: data2[i].name });
    }
    });
  }


  customFilterPredicate() {
    const myFilterPredicate = (data: Element, filter: string): boolean => {
      let globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = (data.Technologies.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1) &&
        (data.titre.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1);
      }

      if (!globalMatch) {
        return;
      }

      const searchString = JSON.parse(filter);
      return data.Technologies.toString().trim().toLowerCase().indexOf(searchString.Technologies.toLowerCase()) !== -1 &&
      data.titre.toString().trim().toLowerCase().indexOf(searchString.titre.toLowerCase()) !== -1 &&
        (this.techToShow.filter(level => !level.active).length === this.techToShow.length ||
          this.techToShow.filter(level => level.active).some(level => data.Technologies.toString().trim().toLowerCase().
          indexOf(level.Technologies.toLowerCase()) !== -1)) &&
          (this.foncToShow.filter(level => !level.active).length === this.foncToShow.length ||
          this.foncToShow.filter(level => level.active).some(level => data.titre.toString().trim().toLowerCase().
          indexOf(level.titre.toLowerCase()) !== -1)) &&
          (this.dispoToShow.filter(level => !level.active).length === this.dispoToShow.length ||
          this.dispoToShow.filter(level => level.active).some(level => data.dispo.toString().trim().toLowerCase().
          indexOf(level.dispo.toLowerCase()) !== -1)) &&
          (this.qualiToShow.filter(level => !level.active).length === this.qualiToShow.length ||
          this.qualiToShow.filter(level => level.active).some(level => data.quali.toString().trim().toLowerCase().
          indexOf(level.quali.toLowerCase()) !== -1));
    };
    return myFilterPredicate;
  }

   updateFilter(c: string, a: boolean, j: number) {
    if ( a ) {
      this.crit.push({ Nom: c });
     } else {
       for (let i = 0; i < this.crit.length ; i++) {
         if (this.crit[i].Nom === c ) {
          this.crit.splice(i, 1 );
         }
       }
     }
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  updateFilter2(c: string, a: boolean, j: number) {
    if ( a ) {
      this.crit.push({ Nom: c });
     } else {
       for (let i = 0; i < this.crit.length ; i++) {
         if (this.crit[i].Nom === c ) {
          this.crit.splice(i, 1 );
         }
       }
     }
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  updateFilter3(c: string, a: boolean, j: number) {
    if ( a ) {
      this.crit.push({ Nom: c });
     } else {
       for (let i = 0; i < this.crit.length ; i++) {
         if (this.crit[i].Nom === c ) {
          this.crit.splice(i, 1 );
         }
       }
     }
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  updateFilter4(c: string, a: boolean, j: number) {
    if ( a ) {
      this.crit.push({ Nom: c });
     } else {
       for (let i = 0; i < this.crit.length ; i++) {
         if (this.crit[i].Nom === c ) {
          this.crit.splice(i, 1 );
         }
       }
     }
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }







}



