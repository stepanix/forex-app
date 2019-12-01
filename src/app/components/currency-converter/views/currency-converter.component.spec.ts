import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterComponent } from './currency-converter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CurrencyConverterApiService } from '../services/apis/currency-converter.api.service';
import { CurrencyConverterFacade } from '../facades/currency-converter.facade';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { StoreModule } from '@ngrx/store';
import { currencyConverterReducer } from 'src/app/core/redux/reducers/currency-converter/currency-converter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyConverterEffects } from 'src/app/core/redux/effects/currency-converter/currency-converter.effects';
import { HttpClientModule } from '@angular/common/http';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxCurrencyModule,
        SharedModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('currencyConverter', currencyConverterReducer),
        EffectsModule.forFeature([CurrencyConverterEffects])
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CurrencyConverterComponent],
      providers: [CurrencyConverterApiService, CurrencyConverterFacade, { provide: FormBuilder, useValue: formBuilder }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    component.converterForm = formBuilder.group({
      txtAmount: 100,
      selectFrom: 'USD',
      selectTo: 'GBP'
  });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call compute method', () => {
    spyOn(component, 'compute').and.callThrough();
    component.compute();
    expect(component.compute).toHaveBeenCalled();
  });

  it('should call reset method', () => {
    spyOn(component, 'reset').and.callThrough();
    component.reset();
    expect(component.reset).toHaveBeenCalled();
  });


});
