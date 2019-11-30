import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConversionRequestPayload } from '../../models/conversion-request-payload';

@Injectable()
export class CurrencyConverterApiService {
    constructor(private httpClient: HttpClient) { }

    get(payload: ConversionRequestPayload): Observable<any> {
        const parameters = `from_currency=${payload.from}&to_currency=${payload.to}`;
        const endPoint = environment.baseUrl + parameters;
        return this.httpClient.get<any>(endPoint);
    }
}