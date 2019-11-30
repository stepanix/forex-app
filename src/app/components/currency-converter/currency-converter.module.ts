import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxCurrencyModule } from "ngx-currency";

import { CurrencyConverterComponent } from './views/currency-converter.component';
import { CurrencyConverterApiService } from './services/apis/currency-converter.api.service';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyConverterEffects } from 'src/app/core/redux/effects/currency-converter/currency-converter.effects';
import { StoreModule } from '@ngrx/store';
import { currencyConverterReducer } from 'src/app/core/redux/reducers/currency-converter/currency-converter.reducer';
import { CurrencyConverterFacade } from './facades/currency-converter.facade';


@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    StoreModule.forFeature('currencyConverter', currencyConverterReducer),
    EffectsModule.forFeature([CurrencyConverterEffects])
  ],
  providers: [CurrencyConverterApiService, CurrencyConverterFacade]
})
export class CurrencyConverterModule { }
