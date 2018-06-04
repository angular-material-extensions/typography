import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextLowercase] , [mat-text-lowercase], .mat-text-lowercase'
})
export class MatTextLowercaseDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'text-transform', 'lowercase');
  }
}
