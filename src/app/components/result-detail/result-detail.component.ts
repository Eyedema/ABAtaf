import { Component, OnInit, Input, Injectable } from '@angular/core';
import {formatDate, registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';


import { BridgeService } from '../../services/bridge.service';
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


  constructor(private bridge: BridgeService) { }

  @Input() code: any;
  resultservice: any;
  today = new Date();
  date = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),2);
  oktorender : boolean = false;

  public setCorrectDate(){
    if(this.resultservice != undefined){
      console.log('entrato nel ciclo per cambio data');
      this.resultservice.forEach(element => {
        element['d']=this.buildDate(element['d'])
      });
      this.oktorender = true;
    }
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.resultservice = this.bridge.getResultCode();
    console.log('ngOnChanges ', this.resultservice)
    this.setCorrectDate();
  }

  ngAfterViewChecked(){
  }

  buildDate(atafNumber: any){ 
    console.log('chiamato buildDate()');
    return formatDate(new Date(Number(this.date.getTime())+Number(atafNumber)),'dd/MM HH:mm', 'it');
  }

  
}
