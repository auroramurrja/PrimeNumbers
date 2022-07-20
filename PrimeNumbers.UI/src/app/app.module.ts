import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNumbersComponent } from './Components/prime-numbers/prime-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, PrimeNumbersComponent]
})
export class AppModule { }
