import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeComponent } from './liste/liste.component';
import { ListeDComponent } from './liste-d/liste-d.component';
import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { TagsComponent } from './tags/tags.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { AjoutConsultantComponent } from './ajout-consultant/ajout-consultant.component';
import { FicheConsultantComponent } from './fiche-consultant/fiche-consultant.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'Liste', component: ListeComponent},
  {path: 'listeD', component: ListeDComponent},
  {path: 'Recherche', component: RechercheComponent},
  {path: 'users', component: UtilisateursComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'test', component: TestComponent},
  {path: 'ajoutc', component: AjoutConsultantComponent},
  {path: 'fichec', component: FicheConsultantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
