import { Injectable } from '@angular/core';
import { CurrencyConverterState } from 'src/app/core/redux/states/currency-converter.state';
import { Store } from '@ngrx/store';
import { conversionRateQuery } from 'src/app/core/redux/selectors/currency-converter/currency-converter.selector';
import { ConversionRequestPayload } from '../models/conversion-request-payload';
import { GetCurrencyConversionRate, ResetCurrencyConversionRate } from 'src/app/core/redux/actions/currency-converter/currency-converter.actions';


@Injectable()
export class CurrencyConverterFacade {

    private _conversionRate$ = this.store.select(conversionRateQuery.getConversionRate);
    private _error$ = this.store.select(conversionRateQuery.getConversionRateError);
    private _isLoading$ = this.store.select(conversionRateQuery.getIsLoading);

    constructor(private store: Store<CurrencyConverterState>) { }

    resetComputedResult() {
        this.store.dispatch(new ResetCurrencyConversionRate());
    }

    computeConversionRate(payload: ConversionRequestPayload) {
        this.store.dispatch(new GetCurrencyConversionRate(payload));
    }

    getConversionRate$() {
        return this._conversionRate$;
    }

    getConversionRateError$() {
        return this._error$;
    }

    isLoading$() {
        return this._isLoading$;
    }
    

}