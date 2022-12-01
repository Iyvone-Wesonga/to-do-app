import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { NavStuffComponent } from './components/nav-stuff/nav-stuff.component';
import { AppendListComponent } from './components/append-list/append-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NavStuffComponent,
    AppendListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
