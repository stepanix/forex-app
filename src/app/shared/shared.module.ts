import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/views/loading-indicator.component';
import { ErrorScreenComponent } from './components/error-screen/views/error-screen.component';

@NgModule({
  declarations: [LoadingIndicatorComponent, ErrorScreenComponent],
  exports: [LoadingIndicatorComponent, ErrorScreenComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }