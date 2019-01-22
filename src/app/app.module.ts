import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddComponent } from './addition/add.component';


@NgModule({
  declarations: [
    AppComponent,AddComponent
  ],
  imports: [
  BrowserModule,FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
