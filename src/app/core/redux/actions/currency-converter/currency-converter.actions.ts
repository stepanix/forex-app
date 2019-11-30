import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_CURRENCY_CONVERSION_RATE = '[CurrencyConverter] Get',
    GET_CURRENCY_CONVERSION_RATE_SUCCESS = '[CurrencyConverter] Get Success',
    GET_CURRENCY_CONVERSION_RATE_ERROR = '[CurrencyConverter] Get Error'
}

export class GetCurrencyConversionRate implements Action {
    readonly type = ActionTypes.GET_CURRENCY_CONVERSION_RATE;
    constructor() { }
}

export class GetCurrencyConversionRateSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENCY_CONVERSION_RATE_SUCCESS;
    constructor(public payload: any) { }
}

export class GetCurrencyConversionRateError implements Action {
    readonly type = ActionTypes.GET_CURRENCY_CONVERSION_RATE_ERROR;
    constructor(public payload: any) { }
}


export type Actions = GetCurrencyConversionRate | GetCurrencyConversionRateSuccess | GetCurrencyConversionRateError;