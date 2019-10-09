import { Component, OnInit } from '@angular/core';
import { AtafserviceService } from '../../services/atafservice.service';
import { BridgeService } from '../../services/bridge.service';

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
          this.resultCode = data;
          this.bridge.setResultCode(data);
        } else{
          this.resultName = data;
          this.bridge.setResultName(data);
        }
      });
  }

  searchWithCode(){
    this.pullResults('http://www.temporealeataf.it/Mixer/Rest/PublicTransportService.svc/schedule?nodeID='+this.code+'&lat=43&lon=11&timeZone=%2B2', false);
  }

  searchStops(){
    if(this.name!=''){
      console.log('chiamato searchStops()');
      this.pullResults('http://www.temporealeataf.it/Mixer/Rest/PublicTransportService.svc/search?urLat=44&urLon=12&llLat=43&llLon=10&st='+this.name, true);
    }
  }
  
}
