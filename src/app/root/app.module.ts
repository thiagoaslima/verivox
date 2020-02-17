import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from '../navbar/navbar.module';
import { PlansModule } from './../plans-selector/plans.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NavbarModule,
    PlansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
