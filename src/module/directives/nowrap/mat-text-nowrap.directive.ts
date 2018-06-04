import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextNowrap] , [mat-text-nowrap], .mat-text-nowrap'
})
export class MatTextNowrapDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'text-align', 'nowrap');
  }
}
