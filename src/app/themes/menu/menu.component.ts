import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem [] = [
    {
      text : 'essai1',
      children : [
        {
          text : 'essai1.1',
          children : [{
            text : 'essai1.1.1'
          },
          {
            text : 'essai1.1.2'
          },
          ]
        },
        {
          text : 'essai1.2',
        },
      ]
    },
    {
      text : 'essai2',
    },
    {
      text : 'essai3',
    }
  ];
constructor() {}

ngOnInit(){
  console.log (this.menuItems);
}


  selected = '';
  items = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help', disabled: true},
    {text: 'Sign Out'}
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }

}

export interface MenuItem {
text: string;
link?: string;
icon?: string;
children?: MenuItem[];
parent?: MenuItem;
}
