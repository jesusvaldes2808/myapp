import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { HerolistComponent } from './list/herolist.component';




@NgModule({
  exports: [
    HeroComponent,
    HerolistComponent,
  ],
  declarations: [
    HeroComponent,
    HerolistComponent,
  ],
  imports: [
    CommonModule,
  ]

})
export class HeroesModule { }
