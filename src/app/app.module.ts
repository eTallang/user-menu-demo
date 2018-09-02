import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserMenuModule } from './user-menu/user-menu.module';
import { ActionFabModule } from './action-fab/action-fab.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    UserMenuModule,
    ActionFabModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
