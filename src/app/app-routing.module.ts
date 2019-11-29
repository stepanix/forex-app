import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyConverterComponent } from './components/currency-converter/views/currency-converter.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
  component: CurrencyConverterComponent,
  path: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
