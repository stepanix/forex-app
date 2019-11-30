import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CurrencyConverterApiService {
    constructor(private httpClient: HttpClient) { }

    get(from: string, to: string): Observable<any> {
        const parameters = `from_currency=${from}&to_currency=${to}`;
        const endPoint = environment.baseUrl + parameters;
        return this.httpClient.get<any>(endPoint);
    }
}