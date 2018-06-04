import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextBlack], [mat-text-black], mat-text-black'
})
export class MatTextBlackDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'color', '#000000');
  }

}
