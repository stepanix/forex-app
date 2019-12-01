import * as fxActions from "./currency-converter.actions";
import { conversionRequestPayloadStub } from 'src/app/shared/stubs/conversion-request-payload.stub';
import { exchangeRateStub } from 'src/app/shared/stubs/exchange-rate.stub';

describe('currency-converter actions', () => {

    it('should create a ResetCurrencyConversionRate action', () => {
        const action = new fxActions.ResetCurrencyConversionRate();
        expect(action.type).toEqual(fxActions.ActionTypes.RESET_CURRENCY_CONVERSION_RATE);
    });

    it('should create a GetCurrencyConversionRate action', () => {
        const action = new fxActions.GetCurrencyConversionRate(conversionRequestPayloadStub);
        expect(action.type).toEqual(fxActions.ActionTypes.GET_CURRENCY_CONVERSION_RATE);
    });

    it('should create a GetCurrencyConversionRateSuccess action', () => {
        const action = new fxActions.GetCurrencyConversionRateSuccess(exchangeRateStub);
        expect(action.type).toEqual(fxActions.ActionTypes.GET_CURRENCY_CONVERSION_RATE_SUCCESS);
    });

    it('should create a GetCurrencyConversionRateError action', () => {
        const action = new fxActions.GetCurrencyConversionRateError({ error: 'error' });
        expect(action.type).toEqual(fxActions.ActionTypes.GET_CURRENCY_CONVERSION_RATE_ERROR);
    });
});