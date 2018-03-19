import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource, MatInputModule } from '@angular/material';

import { Observable } from 'rxjs/Observable'
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { MatSnackBar } from '@angular/material';

/**
 * services
 */
import { ActionsUserService } from '../../../services/actions/actions-user.service';



/**
 * Models-features
 */
import { Action } from '../../../models/features/action';
import { error } from 'util';
import { Subscriber, pipe } from 'rxjs';
import { EventEmitter } from 'events';



@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})

export class GenericTableComponent implements OnInit {

  @Input() observableDataTable: Observable<any[]>;
  @Input() columnsData: Array<[string, string]>;
  @Input() actions: boolean = false;
  @Input() actionsHeader: Action[];
  @Input() actionsRow: Action[];
  @Input() titleTable: string;
  @Input() updateDatasource: boolean =  false;



  searchBarVisible: boolean = false;
  displayColumns: Column[];
  displayedColumns: string[];
  displayedColumnsAndActions: String[];
  dataSource = new MatTableDataSource();
  isData: boolean = false;



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private actionsUserSevice: ActionsUserService, public snackBar: MatSnackBar) {

    setInterval(() => ( this.refreshPage()), 2000);
  }

  ngOnInit() {

    /** settings actions */
    const that = this;
    // this.actionsHeader = [
    //   { tag: 'search', icon: 'search', control: function () { that.onClickDisplaySearchBar(); } },
    //   { tag: 'add', icon: 'plus-square', control: function () { that.onClickAddEntry(); } },
    //   { tag: 'search', icon: 'search', control: this.onClickDisplaySearchBar },
    // ];

  
    /**formatting column */
    this.updateDisplayedColumns();
    this.updateColumns();

    /**
     * loading data
     */
    this.observableDataTable.subscribe(
      /** transmit data to datasource */
      data => {

        this.dataSource.data = data;
        //setInterval(() => (this.updateDataSource()), 2000);

        if (data.length > 0) {
          this.isData = true;
        }
      
      },
      /**handler error */
      error => {
        let message = 'Erreur de chargement des données pour la table ' + this.titleTable;
        this.snackBar.open(message, null, {
          duration: 5000, panelClass:"snackbar-error",
        });
      }
      
    );

  }

/**
 * update datasource
 */

updateDataSource(){
  console.log("contrôle passage");
  this.observableDataTable.subscribe( data => {this.dataSource.data = data;});
}

/**
 * refresh page
 */
refreshPage(){
  console.log("état signal de mise à jour " + this.updateDatasource);
if (this.updateDatasource){
  this.updateDataSource();
  this.updateDatasource =  false;
}

}


  /** 
   * update data columns model
  */
  updateDisplayedColumns() {
    const tabProperty: string[] = [];
    const tabProperty2: string[] = [];
    for (const infoColumn of this.columnsData) {
      tabProperty.push(infoColumn[0]);
      tabProperty2.push(infoColumn[0]);
    }

    if (this.actionsHeader || this.actionsRow) {
      this.displayedColumnsAndActions = tabProperty2;
      this.displayedColumnsAndActions.push('actionsColumn');
    } else {
      this.displayedColumns = tabProperty;
      this.displayedColumnsAndActions = this.displayedColumns;
    }

  }

  updateColumns() {
    const tabColumns: Column[] = [];
    for (const infoColumn of this.columnsData) {
      const col: Column = new Column();
      col.nameProperty = infoColumn[0];
      col.nameTitle = infoColumn[1];
      tabColumns.push(col);
    }
    this.displayColumns = tabColumns;
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /**
   * function display search bar
   */

  onClickDisplaySearchBar(): void {
    if (this.searchBarVisible) {
      this.searchBarVisible = false;
    } else {
      this.searchBarVisible = true;
    }

  }

  /**
   * add entry in datasource
   */

  onClickAddEntry() {
    console.log("ajouter une entrée");
  }
  /**
   *  edit one row
   */


  edit(element: any) {
    element.editing = !(element.editing);
    this.actionsUserSevice.getUser(element);
  }


  confirmEditCreate(element: any) {
    element.editing = !(element.editing);
  }

}

interface DataTable {
  editing: boolean;

}

class Column {
  nameProperty: string;
  nameTitle: String;
}

