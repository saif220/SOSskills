import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  level: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { level: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { level: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { level: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { level: 3, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { level: 3, name: 'Boron', weight: 10.811, symbol: 'B' },
  { level: 2, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { level: 1, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { level: 1, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { level: 2, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { level: 2, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface Level {
  active: boolean;
  name: string;
  level: number;
}



  @Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
  })
  export class TestComponent implements OnInit {
    displayedColumns: string[] = ['level', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    levelsToShow: Level[] = [
      { level: 1, active: false, name: 'Level 1' },
      { level: 2, active: false, name: 'Level 2' },
      { level: 3, active: false, name: 'Level 3' },
    ];

    levelFilter = new FormControl();
    nameFilter = new FormControl();
    globalFilter = '';

    filteredValues = {
      level: '',
      name: '',
      weight: '',
      symbol: ''
    };

    ngOnInit() {
      this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
        this.filteredValues['name'] = nameFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });

      this.dataSource.filterPredicate = this.customFilterPredicate();
    }

    customFilterPredicate() {
      const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {
        var globalMatch = !this.globalFilter;

        if (this.globalFilter) {
          // search all text fields
          globalMatch = data.name.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
        }

        if (!globalMatch) {
          return;
        }

        let searchString = JSON.parse(filter);
        return data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1 &&
          (this.levelsToShow.filter(level => !level.active).length === this.levelsToShow.length ||
            this.levelsToShow.filter(level => level.active).some(level => level.level === data.level));
      }
      return myFilterPredicate;
    }

     updateFilter() {
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    }
  }

  /**  Copyright 2018 Google Inc. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at http://angular.io/license */
