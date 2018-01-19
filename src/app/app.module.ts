import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularModule} from './angular.module';
import { LoginComponent } from './login/login.component';
import {RoutingModule} from './routing/routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DashboardComponent } from './dashboard/dashboard.component';
import {RoundProgressComponent, RoundProgressModule} from "angular-svg-round-progressbar";
import {AccordionModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularModule,
    RoutingModule,
    BrowserAnimationsModule,
    RoundProgressModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
