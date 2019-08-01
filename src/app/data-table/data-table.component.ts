import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { ConsultantService } from '../services/consultant.service';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TagsService } from '../services/tags.service';


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


export interface Techs {
  value: string;
  name: string;
}

export interface Titres {
  value: string;
  name: string;
}

export interface Dispo {
  value: string;
  name: string;
}

export interface Client {
  value: string;
  name: string;
}

export interface Quali {
  value: string;
  name: string;
}



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements  OnInit {
  consultants: any = [];
  newArray: any = [];

  Techs: Techs[] = [
    {value: '', name: 'All'}
  ];

  Titres: Titres[] = [
    {value: '', name: 'All'}
  ];

  Dispo: Dispo[] = [
    {value: '', name: 'All'},
    {value: 'Dans 2 Mois', name: 'Dans 2 Mois'},
    {value: 'Dans 3 Mois', name: 'Dans 3 Mois'},
    {value: 'Dans 4 Mois', name: 'Dans 4 Mois'}
  ];

  Client: Client[] = [
    {value: '', name: 'All'},
    {value: 'AXA', name: 'AXA'},
    {value: 'Orange', name: 'Orange'},
    {value: 'CNP', name: 'CNP'}
  ];

  Quali: Quali[] = [
    {value: '', name: 'All'},
    {value: 'Green', name: 'Jouable'},
    {value: 'Yellow', name: 'Neutre'},
    {value: 'Red', name: 'Injouable'}
  ];

  constructor(public us: ConsultantService, private router: Router, public ts: TagsService) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['Nom', 'Prenom', 'Titre', 'Technologies', 'Disponibilite', 'Clients', 'Modification', 'cv'  ];
  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource(this.data);

  techFilter = new FormControl();
  dispoFilter = new FormControl();
  clientFilter = new FormControl();
  qualiFilter = new FormControl();
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
    this.getFonction();
    this.getTechnique();
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
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
      this.dispoFilter.valueChanges.subscribe((dispoFilterValue) => {
        this.filteredValues.dispo = dispoFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });
      this.clientFilter.valueChanges.subscribe((clientFilterValue) => {
        this.filteredValues.client = clientFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });
      this.qualiFilter.valueChanges.subscribe((qualiFilterValue) => {
        this.filteredValues.quali = qualiFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });

      this.dataSource.filterPredicate = this.customFilterPredicate();

    });
    console.log(this.consultants);
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: Element, filter: string): boolean => {
      let globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = (data.Technologies.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1) &&
        (data.titre.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1) &&
        (data.dispo.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1) &&
        (data.client.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1) &&
        (data.quali.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1);
      }

      if (!globalMatch) {
        return;
      }

      const searchString = JSON.parse(filter);
      return data.Technologies.toString().trim().toLowerCase().indexOf(searchString.Technologies.toLowerCase()) !== -1 &&
      data.titre.toString().trim().toLowerCase().indexOf(searchString.titre.toLowerCase()) !== -1 &&
      data.dispo.toString().trim().toLowerCase().indexOf(searchString.dispo.toLowerCase()) !== -1 &&
      data.client.toString().trim().toLowerCase().indexOf(searchString.client.toLowerCase()) !== -1 &&
      data.quali.toString().trim().toLowerCase().indexOf(searchString.quali.toLowerCase()) !== -1;
    };
    return myFilterPredicate;
  }

  updateFilter(c: string, a: boolean, j: number) {
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }


  selectRow(row) {
    this.router.navigate(['/fichec'], { queryParams: { id: row._id } });
}

getTechnique() {
  this.ts.getTechniques().subscribe((data2: {}) => {
// tslint:disable-next-line: forin
    for (const i in data2) {
      this.Techs.push({ value: data2[i].name, name: data2[i].name });
  }
  });
}

getFonction() {
  this.ts.getFonctions().subscribe((data2: {}) => {
// tslint:disable-next-line: forin
    for (const i in data2) {
      this.Titres.push({ value: data2[i].name, name: data2[i].name });
  }
  });
}

}


