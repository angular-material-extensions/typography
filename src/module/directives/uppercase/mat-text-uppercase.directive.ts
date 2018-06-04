import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextUppercase] , [mat-text-uppercase], .mat-text-uppercase'
})
export class MatTextUppercaseDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'text-transform', 'uppercase');
  }

}
