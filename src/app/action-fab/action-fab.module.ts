import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { ActionFabComponent } from './action-fab.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule
  ],
  declarations: [ ActionFabComponent ],
  exports: [ ActionFabComponent ]
})
export class ActionFabModule { }
