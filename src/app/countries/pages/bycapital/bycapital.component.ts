import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-bycapital',
  templateUrl: './bycapital.component.html',
  styleUrls: ['./bycapital.component.css']
})
export class BycapitalComponent implements OnInit {
  
  countries:Country[]=[];
  isloading:boolean=false;
  constructor(private countriesService:CountriesService) { }
  
  ngOnInit(): void {
  }
  
  seachByCapital(term:string){
    this.isloading = true;
    this.countriesService.searchCapital(term)
    .subscribe(res=>{
      this.countries = res;
      this.isloading = false;
    })
  
    console.log('Desde Bycapital Page')
    console.log({term});
  }


}
