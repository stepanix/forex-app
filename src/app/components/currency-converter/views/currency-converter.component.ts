import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  converterForm: FormGroup;

  currencyMaskOptions = {
    prefix: '',
    thousands: ',', 
    decimal: '.'
  };

  constructor(private fb: FormBuilder) { 
    this.converterForm = this.fb.group({
      txtAmount: [0.00, Validators.required],
      selectFrom: ['', Validators.required],
      selectTo: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
