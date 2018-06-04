import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextRight], [mat-text-right], mat-text-right'
})
export class MatTextRightDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'text-align', 'right');
  }

}
