import { Component, OnInit, Input, Injectable } from '@angular/core';
import {formatDate, registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt, 'it');

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {

  @Input() result: any;
  @Input() code: any;
  today = new Date();
  date = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),2);
  oktorender : boolean = false;

  public setCorrectDate(){
    //perché qui stampa undefined??? non entra nel ciclo..deve entrare
    console.log(this.result);
    if(this.result != undefined){
      console.log('entrato nel ciclo per cambio data');
      this.result.forEach(element => {
        element['d']=this.buildDate(element['d'])
      });
      this.oktorender = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.result);
  }

  buildDate(atafNumber: any){ 
    console.log('chiamato buildDate()');
    return formatDate(new Date(Number(this.date.getTime())+Number(atafNumber)),'dd/MM HH:mm', 'it');
  }

  
}
