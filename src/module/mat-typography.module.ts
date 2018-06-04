import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatTextCenterDirective} from './directives/center/mat-text-center.directive';
import {MatTextLeftDirective} from './directives/left/mat-text-left.directive';
import {MatTextRightDirective} from './directives/right/mat-text-right.directive';
import {MatTextJustifyDirective} from './directives/justify/mat-text-justify.directive';
import {MatTextNowrapDirective} from './directives/nowrap/mat-text-nowrap.directive';
import {MatTextTruncateDirective} from './directives/truncate/mat-text-truncate.directive';
import {MatTextLowercaseDirective} from './directives/lowercase/mat-text-lowercase.directive';
import {MatTextBlackDirective} from './directives/black/mat-text-black.directive';
import {MatTextWhiteDirective} from './directives/white/mat-text-white.directive';
import {MatTextCapitalizeDirective} from './directives/capitalize/mat-text-capitalize.directive';
import {MatTextColorDirective} from './directives/color/mat-text-color.directive';
import {MatTextHideDirective} from './directives/hide/mat-text-hide.directive';
import {MatTextMutedDirective} from './directives/muted/mat-text-muted.directive';
import {MatTextUppercaseDirective} from './directives/uppercase/mat-text-uppercase.directive';


// Export module's public API
export {MatTextCenterDirective} from './directives/center/mat-text-center.directive';
export {MatTextLeftDirective} from './directives/left/mat-text-left.directive';
export {MatTextRightDirective} from './directives/right/mat-text-right.directive';
export {MatTextJustifyDirective} from './directives/justify/mat-text-justify.directive';
export {MatTextNowrapDirective} from './directives/nowrap/mat-text-nowrap.directive';
export {MatTextTruncateDirective} from './directives/truncate/mat-text-truncate.directive';
export {MatTextLowercaseDirective} from './directives/lowercase/mat-text-lowercase.directive';
export {MatTextBlackDirective} from './directives/black/mat-text-black.directive';
export {MatTextWhiteDirective} from './directives/white/mat-text-white.directive';
export {MatTextCapitalizeDirective} from './directives/capitalize/mat-text-capitalize.directive';
export {MatTextColorDirective} from './directives/color/mat-text-color.directive';
export {MatTextHideDirective} from './directives/hide/mat-text-hide.directive';
export {MatTextMutedDirective} from './directives/muted/mat-text-muted.directive';
export {MatTextUppercaseDirective} from './directives/uppercase/mat-text-uppercase.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatTextCenterDirective,
    MatTextLeftDirective,
    MatTextRightDirective,
    MatTextJustifyDirective,
    MatTextNowrapDirective,
    MatTextTruncateDirective,
    MatTextLowercaseDirective,
    MatTextBlackDirective,
    MatTextCapitalizeDirective,
    MatTextColorDirective,
    MatTextHideDirective,
    MatTextMutedDirective,
    MatTextUppercaseDirective,
    MatTextWhiteDirective,
  ],
  declarations: [
    MatTextCenterDirective,
    MatTextLeftDirective,
    MatTextRightDirective,
    MatTextJustifyDirective,
    MatTextNowrapDirective,
    MatTextTruncateDirective,
    MatTextLowercaseDirective,
    MatTextBlackDirective,
    MatTextCapitalizeDirective,
    MatTextColorDirective,
    MatTextHideDirective,
    MatTextMutedDirective,
    MatTextUppercaseDirective,
    MatTextWhiteDirective,
  ]
})
export class MatTypographyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatTypographyModule,
      providers: []
    };
  }
}
