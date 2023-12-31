import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string ='https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  private getcountryrequest(url:string):Observable<Country[]>{

      return this.http.get<Country[]>(url)
      .pipe(
        catchError(error=> {return of([])})
    );
    
  }




  searchByAlphacode(code:string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
   .pipe(
        map((countries:any) => countries.length > 0 ? countries[0]:null),
        catchError(error=> {
            console.log(error);
            return of(null)
        }),
      
    );

    }

  searchCapital(term:string):Observable<Country[]>{
       let url=`${this.apiUrl}/capital/${term}`;
    return this.getcountryrequest(url)

  }

  searchCopuntry(term:string):Observable<Country[]>{
     let url=`${this.apiUrl}/name/${term}`;
    return this.getcountryrequest(url)
  }

  searBYRegion(term:string):Observable<Country[]>{
    let url=`${this.apiUrl}/region/${term}`;
    return this.getcountryrequest(url)

  }

}
