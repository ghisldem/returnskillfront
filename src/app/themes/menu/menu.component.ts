import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 @Input() menuItems: MenuItem [];
  
  ngOnInit(){}

}

export interface MenuItem {
text: string;
link?: string;
icon?: string;
children?: MenuItem[];
parent?: MenuItem;
}
