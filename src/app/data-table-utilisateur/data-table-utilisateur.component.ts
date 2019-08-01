import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-data-table-utilisateur',
  templateUrl: './data-table-utilisateur.component.html',
  styleUrls: ['./data-table-utilisateur.component.scss']
})
export class DataTableUtilisateurComponent implements OnInit {
  @Input() userData = { prenom: '', nom: '', email: '', password: '', droit: '' };
  users: any = [];
  closeResult: string;
  constructor(private modalService: NgbModal, public us: UserService) {
  }

  displayedColumns = ['prenom', 'nom', 'email', 'password', 'droit', 'operations'];
  // tslint:disable-next-line: no-use-before-declare
    data = Object.assign( ELEMENT_DATA);
    dataSource = new MatTableDataSource<Element>(this.data);
    selection = new SelectionModel<Element>(true, []);
    prenom: string;
    nom: string;
    email: string;
    password: string;
    droit: string;
    prenomEdit: string;
    nomEdit: string;
    emailEdit: string;
    passwordEdit: string;
    droitEdit: string;


  ngOnInit() {
    this.getUsers();
  }





  getUsers() {
    this.users = [];
    this.us.getUsers().subscribe((data2: {}) => {
      this.users = data2;
      console.log(data2);

// tslint:disable-next-line: forin
      for (const i in data2) {
        this.data.push({
          _id: data2[i]._id,
          prenom: data2[i].prenom,
          nom: data2[i].nom,
          email: data2[i].email,
          password: data2[i].password,
          droit: data2[i].droit
        });
    }

      this.dataSource = new MatTableDataSource<Element>(this.data);

    });
    console.log(this.users);

  }

  removeSelectedRows(rowid: number) {

    this.data.splice(rowid, 1);
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }
  addRow() {
    console.log(this.userData);
    this.userData = { prenom: this.prenom, nom: this.nom, email: this.email, password: this.password, droit: this.droit };
    this.us.addUser(this.userData).subscribe((result) => {
      console.log(' goooooooood ');
    }, (err) => {
      console.log(err);
    });

    this.data.push({
      prenom: this.prenom,
      nom: this.nom,
      email: this.email,
      password: this.password,
      droit: this.droit
    });
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  // Popup Delete
  open(content, rowid: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.us.deleteUser(this.dataSource.data[rowid]._id)
      .subscribe(res => {
          console.log('bravooooooooo');
        }, (err) => {
          console.log(err);
        }
      );
      this.data.splice(rowid, 1);
      this.dataSource = new MatTableDataSource<Element>(this.data);
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

  // Popup Update
  open2(content, rowid: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.updateUser(rowid);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  // End popup update


  updateUser(rowid: number) {
    this.userData = { prenom: this.prenomEdit, nom: this.nomEdit, email: this.emailEdit,
      password: this.passwordEdit, droit: this.droitEdit };
    console.log(this.userData);
    this.us.updateUser(this.dataSource.data[rowid]._id, this.userData).subscribe((result) => {
        console.log('bien !!!');
      }, (err) => {
        console.log(err);
      });
    this.data.splice(rowid, 1);
    this.data.push({
      prenom: this.prenomEdit,
      nom: this.nomEdit,
      email: this.emailEdit,
      password: this.passwordEdit,
      droit: this.droitEdit
    });
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }

}

export interface Element {
  _id: string;
  prenom: string;
  nom: string;
  email: string;
  password: string;
  droit: string;
}

const ELEMENT_DATA: Element[] = [
  {_id: '00000', prenom: 'Rudy', nom: 'Gomez', email: 'rudy@itns-tn.com', password: '00000', droit: 'Admin'},
  {_id: '00000', prenom: 'aaaaaa', nom: 'Gomez', email: 'rudy@itns-tn.com', password: '00000', droit: 'Admin'},
];


