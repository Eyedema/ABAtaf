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

  setCode(inputCode: string){
    this.code = inputCode;
  }

  setName(inputName: string){
    this.name = inputName;
  }

  showConfig(){
    this.service.getData(this.endpoint)
      .subscribe((data: any[])=> {
        this.result = data;
      })
  }

  log(){
    this.setStop(this.code, this.name)
    console.log(this.stop);
    console.log(this.code);
    console.log(this.name);
    this.showConfig();
  }

}
