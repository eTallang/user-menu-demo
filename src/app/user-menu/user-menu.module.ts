import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UserMenuComponent } from './user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [ UserMenuComponent ],
  exports: [ UserMenuComponent ]
})
export class UserMenuModule { }
