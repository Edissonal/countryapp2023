import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';


@Component({
  selector: 'app-searchox',
  templateUrl: './searchox.component.html',
  styleUrls: ['./searchox.component.css']
})
export class SearchoxComponent implements OnInit,OnDestroy {

  @Input() placeholder:string ='';
  @Output() onValue: EventEmitter<string> = new EventEmitter();
  @Output() ondebonce: EventEmitter<string> = new EventEmitter();
  @ViewChild('txtByInput', {static: false}) txtByInput!: ElementRef;

  private debouncer:Subject<string> = new Subject<string>();
  private debouncersubcription?:Subscription;
  constructor() { }

  ngOnInit(): void {
  
    this.debouncersubcription = this.debouncer;
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value =>{
        this.ondebonce.emit(value);
    })
  }

  ngOnDestroy(){
    this.debouncer.unsubscribe();
  }


 
  keyData(term:string){
  
    this.onValue.emit(term);
  
  }

  onkeypress(searhterm:string){
      
    this.debouncer.next(searhterm);
  }



}
