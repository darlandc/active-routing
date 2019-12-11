import { AboutPage } from './about/about.page';
import { HomePage } from './home/home.page';

import { MenuComponent } from './menu/menu.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildPage } from './child/child.page';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePage,
    AboutPage,
    ChildPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
