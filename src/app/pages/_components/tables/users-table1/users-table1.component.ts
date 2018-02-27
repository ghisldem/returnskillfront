import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import {MatTableDataSource, MatInputModule} from '@angular/material';
/*
 * Modules
 */
import {MatTableModule} from '@angular/material/table';

/*
 * Services
 */
import { UserService } from '../../../../services/data/user.service';

/*
 * Models
 */
import { User } from '../../../../models/user';


@Component({
  selector: 'app-users-table1',
  templateUrl: './users-table1.component.html',
  styleUrls: ['./users-table1.component.css']
})
export class UsersTable1Component implements OnInit {

  users: User[] ;

  displayedColumns = ['id', 'lastname', 'firstname'];
  dataSource;

  constructor( private userService: UserService) {

  }

  getAllUsers() {
    this.userService.getAll().subscribe(reponse => this.dataSource = new MatTableDataSource(this.users = reponse));
    setTimeout(() => {
      console.log(this.dataSource);
    }, 3000); }

  ngOnInit() {
   this.getAllUsers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
