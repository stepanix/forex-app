import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { amountValidator } from 'src/app/shared/validators/number-validator';
import { CurrencyModel } from '../models/currency.model';
import { CurrencyConverterFacade } from '../facades/currency-converter.facade';
import { ConversionRequestPayload } from '../models/conversion-request-payload';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  converterForm: FormGroup;

  fromCurrencyList: CurrencyModel[] = [];
  toCurrencyList: CurrencyModel[] = [];

  currencyList: CurrencyModel[] = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'EUR', name: 'Euro' },
    { code: 'BTC', name: 'Bit Coin' }
  ];

  currencyMaskOptions = {
    prefix: '',
    thousands: ',',
    decimal: '.'
  };

  constructor(private fb: FormBuilder, private currencyConverterFacade: CurrencyConverterFacade) {
    this.converterForm = this.fb.group({
      txtAmount: [0.00, amountValidator],
      selectFrom: ['', Validators.required],
      selectTo: ['', Validators.required]
    });
  }

  ngOnInit() { }

  compute() {
    const fromCurrencyCode = this.converterForm.controls['selectFrom'].value;
    const toCurrencyCode = this.converterForm.controls['selectTo'].value;
    const payload: ConversionRequestPayload = {
      from: fromCurrencyCode,
      to: toCurrencyCode
    }
    this.currencyConverterFacade.getConversionRate(payload);
  }

}
