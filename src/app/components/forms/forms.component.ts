import { Component, OnInit } from '@angular/core';
import { AtafserviceService } from '../../services/atafservice.service';
import { BridgeService } from '../../services/bridge.service';
import {formatDate, registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

import { Stop } from '../../stop'
import { ResultDetailComponent } from '../result-detail/result-detail.component'
import { StopDetailComponent } from '../stop-detail/stop-detail.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  stop : Stop;
  code : string;
  name : string;
  resultCode: any;
  resultName: any;
  today = new Date();
  date = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),2);

  constructor(private service : AtafserviceService, private bridge: BridgeService, private resultDetail: ResultDetailComponent, private stopDetail: StopDetailComponent) { }

  
  ngOnInit() {
  }

  setStop(inputCode: string, inputName: string){
    this.stop = {code: inputCode, name: inputName};
  }

  pullResults(endpoint: string, flag : boolean){
    this.service.getData(endpoint)
      .subscribe((data: any[])=> {
        if(!flag){          
          this.resultCode = this.setCorrectDate(data);
        } else{
          this.resultName = data;
        }
      });
  }

  searchWithCode(){
    this.pullResults('http://www.temporealeataf.it/Mixer/Rest/PublicTransportService.svc/schedule?nodeID='+this.code+'&lat=43&lon=11&timeZone=%2B2', false);
  }

  searchStops(){
    if(this.name!=''){
      this.pullResults('http://www.temporealeataf.it/Mixer/Rest/PublicTransportService.svc/search?urLat=44&urLon=12&llLat=43&llLon=10&st='+this.name, true);
    }
  }

  buildDate(atafNumber: any){
    return formatDate(new Date(Number(this.date.getTime())+Number(atafNumber)),'dd/MM HH:mm','en-EN');
  }

  public setCorrectDate(data: any){
    if(data != undefined){
      data.forEach(element => {
        element['d']=this.buildDate(element['d'])
      });
    }
    return data;
  }
  
}
