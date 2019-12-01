import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeRatePipe'
})
export class ExchangeRatePipe implements PipeTransform {

  transform(rate: string, amount: number): number {
    const rateValue = parseFloat(rate);
    const result = rateValue * amount;
    return result;
  }

}