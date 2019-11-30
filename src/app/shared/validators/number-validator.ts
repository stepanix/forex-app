import { AbstractControl } from '@angular/forms';


export function amountValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value <= 0) {
        return { 'amountValue': true };
    }
    return null;
}