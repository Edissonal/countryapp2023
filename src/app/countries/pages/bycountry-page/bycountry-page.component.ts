import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-bycountry-page',
  templateUrl: './bycountry-page.component.html',
  styleUrls: ['./bycountry-page.component.css']
})
export class BycountryPageComponent implements OnInit {
  countries:Country[]=[];
  constructor(private countriesService:CountriesService) { }


  ngOnInit(): void {
  }

  seachByCountry(term:string){

    this.countriesService.searchCopuntry(term)
    .subscribe(res=>{
      this.countries = res;
    })
  
    console.log('Desde Bycapital Page')
    console.log({term})
  }




}
