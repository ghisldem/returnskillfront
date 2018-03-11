import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource, MatInputModule } from '@angular/material';

import {Observable} from 'rxjs/Observable'
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})

export class GenericTableComponent implements OnInit {

  @Input() observableDataTable : Observable<any[]>
  @Input() columnsData: Array<[string, string]>;
  @Input() actions : boolean = false;

  
  searchBarVisible :  boolean =  false;
  dataTable: any[];
  displayColumns: Column[];
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  displayedColumnsAndActions : String [];
  dataSource = new MatTableDataSource();

  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }

  ngOnInit() {

    this.updateDisplayedColumns();
    this.updateColumns();
    this.observableDataTable.subscribe(data => {
 
      this.dataSource.data = data;
      this.ngAfterViewInit;
    });

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

    if (this.actions){ 
      this.displayedColumnsAndActions = tabProperty2;
      this.displayedColumnsAndActions.push('actionsColumn');
    } else{
      this.displayedColumns = tabProperty;
      this.displayedColumnsAndActions =this.displayedColumns;
        }

  }

  updateColumns(){
    const tabColumns: Column[] = [];
    for (const infoColumn of this.columnsData) {
      const col : Column = new Column();
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

   onClickDisplaySearchBar(){
    if (this.searchBarVisible){
this.searchBarVisible = false;
    }else{
      this.searchBarVisible = true;
          }

   }


}


class Column {
  nameProperty: string;
  nameTitle: String;
}