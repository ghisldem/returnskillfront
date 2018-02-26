import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ChangeColor]'
})
export class ChangeColorDirective {

  @Input() mycolor: string;//attribut de la balise HTML qui a la directive, input c'est tout ce qui est entrant (on recoit de la valeur de variable)
  @Output() result = new EventEmitter(); ////attribut de la balise HTML qui a la directive, input c'est tout ce qui est sortant (on émmet un signal )

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
      this.el.nativeElement.style = "background:" + this.mycolor;
  }

}
