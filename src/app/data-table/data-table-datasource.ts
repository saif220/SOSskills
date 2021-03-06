import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// Data model type
export interface DataTableItem {
  cv: string;
  Nom: string;
  Prenom: string;
  Titre: string;
  Technologies: string;
  Disponibilite: string;
  Clients: string;
  Modification: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {cv: 'red', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'green', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'red', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'green', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'yellow', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'red', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'yellow', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'green', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'yellow', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'},
   {cv: 'red', Nom: 'Soukaki', Prenom: 'Adama', Titre: 'Consultant BI', Technologies: 'Software', Disponibilite: '1 Mois',
   Clients: 'Bouygues', Modification: '4/7/1992'}

];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Nom': return compare(a.Nom, b.Nom, isAsc);
        case 'Prenom': return compare(+a.Prenom, +b.Prenom, isAsc);
        default: return 0;
      }
    });
  }
}



/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
