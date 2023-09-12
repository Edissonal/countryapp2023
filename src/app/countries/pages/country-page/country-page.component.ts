import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

public country?:Country;

  constructor(private activatedRoute:ActivatedRoute,
              private countryService:CountriesService,
              private router:Router) { }

  ngOnInit(): void {
  
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.countryService.searchByAlphacode(id))
      )
    .subscribe((res)=>{
          if(!res){return this.router.navigateByUrl('')};
          console.log('tenemos un pais');
        
          return  this.country = res;
       
    })

  }

  

}
