import { Injectable } from '@angular/core';
import { CurrencyConverterState } from 'src/app/core/redux/states/currency-converter.state';
import { Store } from '@ngrx/store';
import { conversionRateQuery } from 'src/app/core/redux/selectors/currency-converter/currency-converter.selector';
import { ConversionRequestPayload } from '../models/conversion-request-payload';
import { GetCurrencyConversionRate } from 'src/app/core/redux/actions/currency-converter/currency-converter.actions';


@Injectable()
export class CurrencyConverterFacade {

    private _conversionRate$ = this.store.select(conversionRateQuery.getConversionRate);
    private _conversionRateError$ = this.store.select(conversionRateQuery.getConversionRateError);

    constructor(private store: Store<CurrencyConverterState>) {

    }

    computeConversionRate(payload: ConversionRequestPayload) {
        this.store.dispatch(new GetCurrencyConversionRate(payload));
    }

    getConversionRate$() {
        return this._conversionRate$;
    }

    getConversionRateError$() {
        return this._conversionRateError$;
    }

}