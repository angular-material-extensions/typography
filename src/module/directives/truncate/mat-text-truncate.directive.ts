import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextTruncate] , [mat-text-truncate], .mat-text-truncate'
})
export class MatTextTruncateDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'overflow', 'hidden');
    renderer.setStyle(elem.nativeElement, 'text-overflow', 'ellipsis');
    renderer.setStyle(elem.nativeElement, 'white-space', 'nowrap');
  }
}
