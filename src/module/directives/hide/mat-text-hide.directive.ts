import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTextHide], [mat-text-hide], mat-text-hide'
})
export class MatTextHideDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'font', '0/0 a');
    renderer.setStyle(elem.nativeElement, 'color', 'transparent');
    renderer.setStyle(elem.nativeElement, 'text-shadow', 'none');
    renderer.setStyle(elem.nativeElement, 'background-color', 'transparent');
    renderer.setStyle(elem.nativeElement, 'border', 0);
  }

}
