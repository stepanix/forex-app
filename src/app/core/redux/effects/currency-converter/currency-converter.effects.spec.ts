import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';

import * as fxActions from '../../actions/currency-converter/currency-converter.actions';
import { of } from 'rxjs/internal/observable/of';

import { throwError } from 'rxjs/internal/observable/throwError';
import { conversionRequestPayloadStub } from 'src/app/shared/stubs/conversion-request-payload.stub';
import { exchangeRateStub } from 'src/app/shared/stubs/exchange-rate.stub';
import { CurrencyConverterEffects } from './currency-converter.effects';


describe('CurrencyConverterEffects', () => {

    it('can handle successful call to get exchange rate', () => {
      const source = hot('--a-', { a: new fxActions.GetCurrencyConversionRate(conversionRequestPayloadStub) });
      const service = createSuccessfulServiceStub(exchangeRateStub);
      const effects = new CurrencyConverterEffects(service, new Actions(source));
      const completion = new fxActions.GetCurrencyConversionRateSuccess(exchangeRateStub);
      const expected = cold('--b', { b: completion });
      expect(effects.get$).toBeObservable(expected);
    });
  
    it('can handle failed call to get exchange rate', () => {
      const source = hot('--a-', { a: new fxActions.GetCurrencyConversionRate(conversionRequestPayloadStub) });
      const service = createErrorServiceStub({error: 'error'});
      const effects = new CurrencyConverterEffects(service, new Actions(source));
      const completion = new fxActions.GetCurrencyConversionRateError(
          {error: 'error'}
      );
      const expected = cold('--b', { b: completion });
      expect(effects.get$).toBeObservable(expected);
    });
  
    function createSuccessfulServiceStub(response: any) {
      const service = jasmine.createSpyObj('service', [
        'get'
      ]);
      const serviceResponse = of(response);
      service.get.and.returnValue(serviceResponse);
      return service;
    }
  
    function createErrorServiceStub(response: any) {
      const service = jasmine.createSpyObj('service', [
        'get'
      ]);
      const serviceResponse = throwError(response);
      service.get.and.returnValue(serviceResponse);
      return service;
    }
  });