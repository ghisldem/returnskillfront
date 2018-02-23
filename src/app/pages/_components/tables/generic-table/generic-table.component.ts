import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})

export class GenericTableComponent implements OnInit{

  @Input() dataTable: any[];
  @Input() columnsData: Array<[string, string]>;

  displayItemsColumns :  string[] = ['id','nom', 'progression', 'couleur'];
  displayedColumns:  string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }

  ngOnInit(){
    
    this.updateDisplayedColumns();
    this.updateItemsColumns();
    this.dataSource = new MatTableDataSource(this.dataTable);
   
  }

  /** 
   * update data
  */


  updateDisplayedColumns() {
    let tabProperty : string [] = [];
    for(const infoColumn of this.columnsData){
      tabProperty.push(infoColumn[0]);
    }
    this.displayedColumns = tabProperty;
  }

  updateItemsColumns() {
    let tabItem : string [] = [];
    for(const infoColumn of this.columnsData){
      tabItem.push(infoColumn[1]);
    }
    this.displayItemsColumns  = tabItem;
    console.log(this.displayItemsColumns);
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



}





