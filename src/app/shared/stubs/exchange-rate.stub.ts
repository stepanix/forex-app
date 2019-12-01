import { ExchangeRateModel } from 'src/app/components/currency-converter/models/exchange-rate.model';


export const exchangeRateStub: ExchangeRateModel = {
    fromCurrencyCode: 'USD',
    fromCurrencyName: 'US Dollar',
    toCurrencyCode: 'GBP',
    toCurrencyName: 'British Pound',
    exchangeRate: '1.45',
    lastRefreshed: 'today',
    timeZone: 'UTC',
    bidPrice: '1.45',
    askPrice: '1.45',
    errorMessage: ''
};