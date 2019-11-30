import { ExchangeRateModel } from 'src/app/components/currency-converter/models/exchange-rate.model';


export const mapConversionRateResponseModel = (rawResponseModel: any) => {
    const rawExchangeRateModel = rawResponseModel['Realtime Currency Exchange Rate'];
    let returnExchangeRateModel: ExchangeRateModel = {} as ExchangeRateModel;
    if (rawExchangeRateModel) {
        returnExchangeRateModel = <ExchangeRateModel>{
            fromCurrencyCode: rawExchangeRateModel['1. From_Currency Code'],
            fromCurrencyName: rawExchangeRateModel['2. From_Currency Name'],
            toCurrencyCode: rawExchangeRateModel['3. To_Currency Code'],
            toCurrencyName: rawExchangeRateModel['4. To_Currency Name'],
            exchangeRate: rawExchangeRateModel['5. Exchange Rate'],
            lastRefreshed: rawExchangeRateModel['6. Last Refreshed'],
            timeZone: rawExchangeRateModel['7. Time Zone'],
            bidPrice: rawExchangeRateModel['8. Bid Price'],
            askPrice: rawExchangeRateModel['9. Ask Price']
        }
    } else {
        returnExchangeRateModel = {
            errorMessage: rawResponseModel['Error Message']
        };
    }
    return returnExchangeRateModel;
}