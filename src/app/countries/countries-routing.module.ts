import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BycapitalComponent } from './pages/bycapital/bycapital.component';
import { BycountryPageComponent } from './pages/bycountry-page/bycountry-page.component';
import { ByregionpageComponent } from './pages/byregionpage/byregionpage.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    {path:'by-capital',component:BycapitalComponent},
    {path:'by-country',component:BycountryPageComponent},
    {path:'by-region',component:ByregionpageComponent},
    {path:'by/:id',component:CountryPageComponent},
    {path:'**',redirectTo:'by-capital'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
