import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forex-app';
  constructor() {
    const jsonSample =  {
        "1. From_Currency Code": "BTC",
        "2. From_Currency Name": "Bitcoin",
        "3. To_Currency Code": "USD",
        "4. To_Currency Name": "United States Dollar",
        "5. Exchange Rate": "7563.71000000",
        "6. Last Refreshed": "2019-11-28 00:59:01",
        "7. Time Zone": "UTC",
        "8. Bid Price": "7563.71000000",
        "9. Ask Price": "7563.72000000"
      };
    
    console.log(jsonSample['1. From_Currency Code']);
  }
}
