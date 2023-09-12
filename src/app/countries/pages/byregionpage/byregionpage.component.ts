import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-byregionpage',
  templateUrl: './byregionpage.component.html',
  styleUrls: ['./byregionpage.component.css']
})
export class ByregionpageComponent implements OnInit {
  countries:Country[]=[];
  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {
  }

  seachByregion(term:string){

    this.countriesService.searBYRegion(term)
    .subscribe(res=>{
      this.countries = res;
    })
  
    console.log('Desde Bycapital Page')
    console.log({term})
  }
}

