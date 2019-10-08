import { Component, OnInit } from '@angular/core';
import { AtafserviceService } from '../../services/atafservice.service';

import { Stop } from '../../stop'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  stop : Stop;
  code : string;
  name : string;
  endpoint : string;
  result: any;

  constructor(private service : AtafserviceService) { }

  ngOnInit() {
  }

  setStop(inputCode: string, inputName: string){
    this.stop = {code: inputCode, name: inputName};
    this.endpoint = 'http://www.temporealeataf.it/Mixer/Rest/PublicTransportService.svc/schedule?nodeID='+this.code+'&lat=43&lon=11&timeZone=%2B2';
  }

  pullResults(){
    this.service.getData(this.endpoint)
      .subscribe((data: any[])=> {
        this.result = data;
      })
  }

  searchWithCode(){
    this.endpoint = 'http://www.temporealeataf.it/Mixer/Rest/PublicTransportService.svc/schedule?nodeID='+this.code+'&lat=43&lon=11&timeZone=%2B2';
    this.pullResults();
  }
  
  log(){}
  
}
