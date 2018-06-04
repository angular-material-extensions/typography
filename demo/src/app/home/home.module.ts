import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatTypographyModule} from '@angular-material-extensions/typography';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatTypographyModule.forRoot(),
    MatCardModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
