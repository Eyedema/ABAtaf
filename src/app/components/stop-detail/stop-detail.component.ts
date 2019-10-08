import { Component, OnInit, Input, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.css']
})
export class StopDetailComponent implements OnInit {

  @Input() result: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  update(){

  }


}
