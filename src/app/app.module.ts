import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateOnomatopeiaComponent } from './create-onomatopeia/create-onomatopeia.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOnomatopeiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
