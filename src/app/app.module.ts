import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MyButtonComponent } from './my-button/my-button.component';
import { FirstContainerComponent } from './first-container/first-container.component';
import { SecondContainerComponent } from './second-container/second-container.component';

import { Default } from './values/default.value';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    MyButtonComponent,
    FirstContainerComponent,
    SecondContainerComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: "Values", useValue: Default }
  ]
})
export class AppModule { }
