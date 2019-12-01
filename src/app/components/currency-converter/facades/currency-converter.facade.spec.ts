import { CurrencyConverterFacade } from "./currency-converter.facade";
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { currencyConverterReducer } from 'src/app/core/redux/reducers/currency-converter/currency-converter.reducer';
import * as fromReducer from 'src/app/core/redux/reducers/currency-converter/currency-converter.reducer';
import { NgModule } from '@angular/core';
import { conversionRequestPayloadStub } from 'src/app/shared/stubs/conversion-request-payload.stub';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { conversionRateQuery } from 'src/app/core/redux/selectors/currency-converter/currency-converter.selector';
import { exchangeRateStub } from 'src/app/shared/stubs/exchange-rate.stub';


describe('CurrencyConverterFacade', () => {

  let facade: CurrencyConverterFacade;
   
  beforeEach(() => {
    @NgModule({
      providers: [CurrencyConverterFacade],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('currencyConverter', currencyConverterReducer, {
          initialState: fromReducer.initialState
        }),
      ]
    })
    class AppModule { }
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        provideMockStore({
          selectors: [
            { selector: conversionRateQuery.getConversionRate, value: exchangeRateStub },
            { selector: conversionRateQuery.getConversionRateError, value: {} },
            { selector: conversionRateQuery.getIsLoading, value: true }
          ],
        }),
      ]
    });
    facade = TestBed.get(CurrencyConverterFacade);
  });

  it('should invoke resetComputedResult and expect it to have been called', () => {
    spyOn(facade, 'resetComputedResult').and.callThrough();
    facade.resetComputedResult();
    expect(facade.resetComputedResult).toHaveBeenCalled();
  });

  it('should invoke computeConversionRate expect it to have been called', () => {
    spyOn(facade, 'computeConversionRate').and.callThrough();
    facade.computeConversionRate(conversionRequestPayloadStub);
    expect(facade.computeConversionRate).toHaveBeenCalled();
  });

  it('should call getConversionRate$() Observable and expect exchangeRate to be defined', () => {
    facade.computeConversionRate(conversionRequestPayloadStub);
    facade.getConversionRate$().subscribe(data => {
      expect(data).toBeDefined();      
    });
  });

  it('should call getConversionRateError$() Observable and expect error to be undefined', () => {
    facade.computeConversionRate(conversionRequestPayloadStub);
    facade.getConversionRateError$().subscribe(data => {
      expect(data).toEqual({});      
    });
  });

  it('should call isLoading$() Observable and expect isLoading to be true', () => {
    facade.computeConversionRate(conversionRequestPayloadStub);
    facade.isLoading$().subscribe(data => {
      expect(data).toEqual(true);      
    });
  });


});
