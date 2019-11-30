import { BaseResponseModel } from 'src/app/shared/models/base-response.model';

export interface ExchangeRateModel extends BaseResponseModel{
    fromCurrencyCode?: string;
    fromCurrencyName?: string;
    toCurrencyCode?: string;
    toCurrencyName?: string;
    exchangeRate?: string;
    lastRefreshed?: string;
    timeZone?: string;
    bidPrice?: string;
    askPrice?: string;
}