import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserMenuModule } from './user-menu/user-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    UserMenuModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
