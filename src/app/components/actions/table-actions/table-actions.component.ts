import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.css']
})
export class TableActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  addAction() {

  }

}


const ACTIONS :  Action [] = [
  {
    tag : 'search',
    icon : 'search',
  },
  {
    tag : 'edit',
    icon : 'pencil'
  },
  {
    tag : 'delete',
    icon : 'trash'
  },
  {
    tag : 'add',
    icon : 'plus-square'
  },
  {
    tag : 'add',
    icon : 'plus-square'
  },

]


export class Action {

  tag : string;
  icon? : string;
  control? : (...args)=> void;
}
