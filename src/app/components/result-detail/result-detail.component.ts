import { Component, OnInit, Input, Injectable } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {


  constructor() { }

  @Input() code: any;
  @Input() result: any;

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngAfterViewChecked() {
  }

}
