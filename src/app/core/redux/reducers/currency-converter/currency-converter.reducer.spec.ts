import { exchangeRateStub } from "src/app/shared/stubs/exchange-rate.stub";
import * as fromCurrencyConverterReducer from './currency-converter.reducer';
import * as fxActions from '../../actions/currency-converter/currency-converter.actions';
import { CurrencyConverterState } from '../../states/currency-converter.state';
import { rawExchangeRateStub } from 'src/app/shared/stubs/raw-exchange-rate.stub';
import { ExchangeRateModel } from 'src/app/components/currency-converter/models/exchange-rate.model';
import { conversionRequestPayloadStub } from 'src/app/shared/stubs/conversion-request-payload.stub';


describe('currencyConverterReducer', () => {

    const expected: CurrencyConverterState = {
        conversionRate: <ExchangeRateModel>{},
        error: {},
        isLoading: true
    };

    const expectedSuccess: CurrencyConverterState = {
        conversionRate: exchangeRateStub,
        error: {},
        isLoading: false
    };

    const expectedError: CurrencyConverterState = {
        conversionRate: exchangeRateStub,
        error: { error: 'error' },
        isLoading: false
    };

    it('should reflect state when get exchange rate is called', () => {
        expect(
            fromCurrencyConverterReducer.currencyConverterReducer(
                fromCurrencyConverterReducer.initialState,
                new fxActions.GetCurrencyConversionRate(conversionRequestPayloadStub)
            ).isLoading
        ).toEqual(expected.isLoading);
    });

    it('should reflect state when get exchange rate is successful', () => {
        expect(
            fromCurrencyConverterReducer.currencyConverterReducer(
                fromCurrencyConverterReducer.initialState,
                new fxActions.GetCurrencyConversionRateSuccess(rawExchangeRateStub)
            ).conversionRate.exchangeRate
        ).toEqual(expectedSuccess.conversionRate.exchangeRate);
    });

    it('should reflect state when error is encountered', () => {
        expect(
            fromCurrencyConverterReducer.currencyConverterReducer(
                fromCurrencyConverterReducer.initialState,
                new fxActions.GetCurrencyConversionRateError({ error: 'error' })
            ).error.error
        ).toEqual(expectedError.error.error);
    });
});