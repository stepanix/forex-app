import { FormBuilder } from "@angular/forms";
import { amountValidator } from './number-validator';

const formBuilder: FormBuilder = new FormBuilder();

describe('amountValidator', () => {

    it('should return null when control value is valid', () => {
        expect(amountValidator(formBuilder.control(10))).toEqual(null);
    });

    it('should return true when control value is invalid', () => {
        expect(amountValidator(formBuilder.control(0))).toEqual({'amountValue': true});
    });

});