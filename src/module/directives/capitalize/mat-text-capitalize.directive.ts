import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextCapitalize], [mat-text-capitalize], mat-text-capitalize'
})
export class MatTextCapitalizeDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'text-transform', 'capitalize');
  }

}
