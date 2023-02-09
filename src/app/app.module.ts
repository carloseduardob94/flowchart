import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { ComponentHelpComponent } from './component-help/component-help.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    LeftMenuComponent,
    ComponentHelpComponent,
    HomeComponent,
    ChartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
