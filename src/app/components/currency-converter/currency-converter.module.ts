import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxCurrencyModule } from "ngx-currency";

import { CurrencyConverterComponent } from './views/currency-converter.component';


@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: []
})
export class CurrencyConverterModule { }
