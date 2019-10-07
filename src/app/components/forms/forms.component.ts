import { Component, OnInit } from '@angular/core';
import { Stop } from '/Users/Ubaldo/Documents/GitHub/ABAtaf/src/app/stop'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  stop : Stop;
  code : number;
  name : string;

  constructor() { }

  ngOnInit() {
  }

  setStop(inputCode: number, inputName: string){
    this.stop = {code: inputCode, name: inputName};
  }

  setCode(inputCode: number){
    this.code = inputCode;
  }

  setName(inputName: string){
    this.name = inputName;
  }

  log(){
    this.setStop(this.code, this.name)
    console.log(this.stop);
    console.log(this.code);
    console.log(this.name);
  }

}
