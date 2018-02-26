import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})

export class GenericTableComponent implements OnInit {

  @Input() dataTable: any[];
  @Input() columnsData: Array<[string, string]>;

  displayColumns: Column[];
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }

  
  ngOnInit() {

    this.updateDisplayedColumns();
    this.updateColumns();
    this.dataSource = new MatTableDataSource(this.dataTable);
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.dataTable);
      this.ngAfterViewInit();
    }, 2000);
  }

  /** 
   * update data columns model
  */
  updateDisplayedColumns() {
    let tabProperty: string[] = [];
    for (const infoColumn of this.columnsData) {
      tabProperty.push(infoColumn[0]);
    }
    this.displayedColumns = tabProperty;
  }

  updateColumns(){
    let tabColumns: Column[] = [];
    for (const infoColumn of this.columnsData) {
      let col : Column = new Column();
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

}
class Column {
  nameProperty: string;
  nameTitle: String;
}





