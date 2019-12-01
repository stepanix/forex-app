import { rawExchangeRateStub } from "src/app/shared/stubs/raw-exchange-rate.stub";
import { mapConversionRateResponseModel } from './model-mapper.util';

describe('mapConversionRateResponseModel', () => {

    it('should return exchangeRate when there is no error message', () => {
        expect(
            mapConversionRateResponseModel(rawExchangeRateStub).exchangeRate
        ).toEqual('1.45');
    });

    it('should return exchangeRate when there is an error message', () => {
        const mockErrorMessage = { 'Error Message': 'wrong api key' }
        expect(
            mapConversionRateResponseModel(mockErrorMessage).errorMessage
        ).toEqual('wrong api key');
    });

});