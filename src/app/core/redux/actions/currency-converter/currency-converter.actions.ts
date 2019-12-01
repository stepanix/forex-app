import { Action } from '@ngrx/store';
import { ConversionRequestPayload } from 'src/app/components/currency-converter/models/conversion-request-payload';
import { ExchangeRateModel } from 'src/app/components/currency-converter/models/exchange-rate.model';

export enum ActionTypes {
    GET_CURRENCY_CONVERSION_RATE = '[CurrencyConverter] Get',
    GET_CURRENCY_CONVERSION_RATE_SUCCESS = '[CurrencyConverter] Get Success',
    GET_CURRENCY_CONVERSION_RATE_ERROR = '[CurrencyConverter] Get Error',
    RESET_CURRENCY_CONVERSION_RATE = '[CurrencyConverter] Reset',
}

export class ResetCurrencyConversionRate implements Action {
    readonly type = ActionTypes.RESET_CURRENCY_CONVERSION_RATE;
    constructor() { }
}

export class GetCurrencyConversionRate implements Action {
    readonly type = ActionTypes.GET_CURRENCY_CONVERSION_RATE;
    constructor(public payload: ConversionRequestPayload) { }
}

export class GetCurrencyConversionRateSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENCY_CONVERSION_RATE_SUCCESS;
    constructor(public payload: any) { }
}

export class GetCurrencyConversionRateError implements Action {
    readonly type = ActionTypes.GET_CURRENCY_CONVERSION_RATE_ERROR;
    constructor(public payload: any) { }
}


export type Actions = ResetCurrencyConversionRate | GetCurrencyConversionRate | GetCurrencyConversionRateSuccess | GetCurrencyConversionRateError;