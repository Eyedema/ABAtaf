import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  
  constructor() { }
  
  resultCode: any;
  resultName: any;

  setResultCode(resultCode: any){
    this.resultCode = resultCode;
  }

  setResultName(resultName: any){
    this.resultName = resultName;
  }

  getResultCode(){
    return this.resultCode;
  }

  getResultName(){
    return this.resultName;
  }
}
