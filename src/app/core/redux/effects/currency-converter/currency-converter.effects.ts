import { Injectable } from '@angular/core';
import { CurrencyConverterApiService } from 'src/app/components/currency-converter/services/apis/currency-converter.api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as currencyConverterActions from '../../../redux/actions/currency-converter/currency-converter.actions';

import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class CurrencyConverterEffects {
    constructor(
        private currencyConverterApiService: CurrencyConverterApiService,
        private actions$: Actions
    ) { }

    @Effect()
    get$: Observable<Action> = this.actions$.pipe(
        ofType<currencyConverterActions.Actions>(currencyConverterActions.ActionTypes.GET_CURRENCY_CONVERSION_RATE),
        switchMap((action: currencyConverterActions.GetCurrencyConversionRate) =>
            this.currencyConverterApiService.get(action.payload).pipe(
                map(response => {
                    return new currencyConverterActions.GetCurrencyConversionRateSuccess(response);
                }),
                catchError(error => of(new currencyConverterActions.GetCurrencyConversionRateError(error)))
            )
        )
    );
}