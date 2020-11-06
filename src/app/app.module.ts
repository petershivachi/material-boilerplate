import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IconsComponent } from './components/icons/icons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenusComponent } from './components/menus/menus.component';
import { ListComponent } from './components/list/list.component';
import { GridListComponent } from './components/grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    IconsComponent,
    NavbarComponent,
    MenusComponent,
    ListComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
