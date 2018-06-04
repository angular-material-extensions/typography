import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextMuted], [mat-text-muted], .mat-text-white'
})
export class MatTextMutedDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'color', '#6c757d');
  }

}
