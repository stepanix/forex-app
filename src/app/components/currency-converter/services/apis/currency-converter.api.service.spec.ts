import { TestBed, getTestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { CurrencyConverterApiService } from './currency-converter.api.service';
import { conversionRequestPayloadStub } from 'src/app/shared/stubs/conversion-request-payload.stub';
import { rawExchangeRateStub } from 'src/app/shared/stubs/raw-exchange-rate.stub';


describe('CurrencyConverterApiService', () => {
  let service: CurrencyConverterApiService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyConverterApiService],
      imports: [HttpClientTestingModule]
    });
    service = getTestBed().get(CurrencyConverterApiService);
    httpMock = getTestBed().get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable response object', () => {
    expect(service).toBeDefined();

    service.get(conversionRequestPayloadStub).subscribe(res => {
      expect(res).toBeDefined();
    });
    const parameters = `from_currency=${conversionRequestPayloadStub.from}&to_currency=${conversionRequestPayloadStub.to}`;
    const endPoint = environment.baseUrl + parameters;
    
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(rawExchangeRateStub);
  });
});