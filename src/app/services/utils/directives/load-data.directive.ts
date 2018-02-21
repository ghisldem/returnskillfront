import { Directive,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[LoadData]'
})
export class LoadDataDirective implements OnInit {
  @Input() typeData: string;

  constructor() { }


ngOnInit(){
this.searchData(this.typeData);
}


searchData(typeData : string){
if (typeData === "users"){

}



}

  

}
