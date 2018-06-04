import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextLeft], [mat-text-left], mat-text-left'
})
export class MatTextLeftDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'text-align', 'left');
  }

}
