import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextWhite], [mat-text-white], .mat-text-white'
})
export class MatTextWhiteDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'color', '#fff');
  }

}
