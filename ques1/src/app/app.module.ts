import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { InputSelectorComponent } from './input-selector/input-selector.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component'; 



@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    InputSelectorComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, InputSelectorComponent]
  
})
export class AppModule { }
