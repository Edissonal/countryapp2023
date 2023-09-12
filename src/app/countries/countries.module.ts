import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BycapitalComponent } from './pages/bycapital/bycapital.component';
import { BycountryPageComponent } from './pages/bycountry-page/bycountry-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByregionpageComponent } from './pages/byregionpage/byregionpage.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountrytableComponent } from './components/countrytable/countrytable.component';



@NgModule({
  declarations: [
    BycapitalComponent,
    BycountryPageComponent,
    CountryPageComponent,
    ByregionpageComponent,
    CountrytableComponent,

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
