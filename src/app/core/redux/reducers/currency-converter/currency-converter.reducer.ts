import { CurrencyConverterState } from '../../states/currency-converter.state';
import { Actions, ActionTypes } from '../../actions/currency-converter/currency-converter.actions';
import { mapConversionRateResponseModel } from 'src/app/core/utils/model-mapper.util';

export const initialState: CurrencyConverterState = {
    conversionRate: null,
    error: {}
};

// currencyConverterReducer function with action switch conditions to create a new copy of CurrencyConversionState
export function currencyConverterReducer(state = initialState, action: Actions): CurrencyConverterState {
    switch (action.type) {
        case ActionTypes.GET_CURRENCY_CONVERSION_RATE_SUCCESS: {
            console.log('result',  mapConversionRateResponseModel(action.payload));
            return {
                ...state,
                conversionRate: mapConversionRateResponseModel(action.payload)
            };
        }
        case ActionTypes.GET_CURRENCY_CONVERSION_RATE_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}