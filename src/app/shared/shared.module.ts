import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/views/loading-indicator.component';
import { ErrorScreenComponent } from './components/error-screen/views/error-screen.component';
import { ExchangeRatePipe } from './pipes/exchange-rate/exchange-rate.pipe';

@NgModule({
  declarations: [ExchangeRatePipe,LoadingIndicatorComponent, ErrorScreenComponent],
  exports: [ExchangeRatePipe,LoadingIndicatorComponent, ErrorScreenComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }