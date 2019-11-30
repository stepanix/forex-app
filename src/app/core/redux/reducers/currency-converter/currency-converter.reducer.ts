import { CurrencyConverterState } from '../../states/currency-converter.state';
import { Actions, ActionTypes } from '../../actions/currency-converter/currency-converter.actions';
import { mapConversionRateResponseModel } from 'src/app/core/utils/model-mapper.util';
import { ExchangeRateModel } from 'src/app/components/currency-converter/models/exchange-rate.model';

export const initialState: CurrencyConverterState = {
    conversionRate: <ExchangeRateModel> {},
    error: {},
    isLoaded: false
};

// currencyConverterReducer function with action switch conditions to create a new copy of CurrencyConversionState
export function currencyConverterReducer(state = initialState, action: Actions): CurrencyConverterState {
    switch (action.type) {
        case ActionTypes.GET_CURRENCY_CONVERSION_RATE_SUCCESS: {
            return {
                ...state,
                isLoaded: true,
                conversionRate: mapConversionRateResponseModel(action.payload)
            };
        }
        case ActionTypes.GET_CURRENCY_CONVERSION_RATE_ERROR: {
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}