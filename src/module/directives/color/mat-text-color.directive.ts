import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextColor], [mat-text-color], mat-text-color'
})
export class MatTextColorDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'color', '#000000');
  }

}
