import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.css']
})
export class StopDetailComponent implements OnInit {
  stop : Stop;


  constructor() { }

  ngOnInit() {
  }

}
