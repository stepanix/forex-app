import { AbstractControl } from '@angular/forms';


export function amountValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log('value control', control.value);
    if (control.value <= 0) {
        return { 'amountValue': true };
    }
    return null;
}