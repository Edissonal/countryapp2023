import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePgeComponent } from './shared/pages/home-pge/home-pge.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContacPageComponent } from './shared/pages/contac-page/contac-page.component';

const routes: Routes = [

 // {path:'',component:HomePgeComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContacPageComponent},
  {path:'countries',loadChildren:()=> import('./countries/countries.module').then(m =>m.CountriesModule)},
  {path:'**',redirectTo:'countries'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
