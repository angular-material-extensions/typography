import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[matTextCenter] , [mat-text-center], .mat-text-center'
})
export class MatTextCenterDirective {

  @HostBinding('style.text-align')
  alignment = 'center';

}
