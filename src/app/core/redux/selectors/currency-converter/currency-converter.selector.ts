import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyConverterState } from '../../states/currency-converter.state';


/** selectors are like a repository for holding state objects. it is helpful to write query functions
 to extract a specific state object needed by the consumer layer. **/

// Create repository of current memoized exchangeRate in CurrencyConverterState
const getCurrencyConverterState = createFeatureSelector<CurrencyConverterState>(
    'currencyConverter'
);

// Query function to extract exchangeRate slice from repository
const getConversionRate = createSelector(
    getCurrencyConverterState,
    (state: CurrencyConverterState) => state.conversionRate
);

// Query function to extract error slice from repository
const getError = createSelector(
    getCurrencyConverterState,
    (state: CurrencyConverterState) => state.error
);

// Query function to extract error from repository
const getConversionRateError = createSelector(getError, (state: CurrencyConverterState) => state.error);

// Wrap query function(s) in json object and export to be open for consumption
export const conversionRateQuery = {
    getConversionRate,
    getConversionRateError
};