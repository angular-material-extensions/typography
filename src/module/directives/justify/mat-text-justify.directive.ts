import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextJustify] , [mat-text-justify], .mat-text-justify'
})
export class MatTextJustifyDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'text-align', 'justify');
  }
}
