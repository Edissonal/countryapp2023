import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePgeComponent } from './pages/home-pge/home-pge.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { LoadingspinerComponent } from './components/loadingspiner/loadingspiner.component';
import { SearchoxComponent } from './components/searchox/searchox.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    HomePgeComponent,
    SidebarComponent,
    ContacPageComponent,
    SearchoxComponent,
    LoadingspinerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    AboutPageComponent,
    HomePgeComponent,
    SidebarComponent,
    ContacPageComponent,
    SearchoxComponent,
    LoadingspinerComponent
  ]
})
export class SharedModule { }
