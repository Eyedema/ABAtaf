import { Component, OnInit, Input, Injectable } from '@angular/core';
import {formatDate, registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt, 'it');
@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {

  @Input() result : any;
  today = new Date();
  date = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),2);

  setCorrectDate(){
    if(this.result != undefined){
      this.result.forEach(element => {
        element['d']=this.buildDate(element['d'])
      });
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.setCorrectDate();
  }

  buildDate(atafNumber: number){ 
    return formatDate(new Date(Number(this.date.getTime())+Number(atafNumber)),'dd/MM HH:mm', 'it');
  }

  
}
