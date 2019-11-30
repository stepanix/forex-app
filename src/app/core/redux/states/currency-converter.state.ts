import { ExchangeRateModel } from 'src/app/components/currency-converter/models/exchange-rate.model';

export interface CurrencyConverterState {
    conversionRate: ExchangeRateModel;
    error: any;
    isLoading: boolean
  }