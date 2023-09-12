import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countrytable',
  templateUrl: './countrytable.component.html',
  styleUrls: ['./countrytable.component.css']
})
export class CountrytableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() countries:Country[]=[];


}
