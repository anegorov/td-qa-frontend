import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'td-qa-fromt';
  testResults: any[];

  // products = [
  //   {name:'test1'},
  //   {name:'test2'},
  //   {name:'test3'},
  //   {name:'test4'}
  // ];

  constructor(private HttpService: HttpService) { }

  ngOnInit() {
     this.HttpService.getTestResults().subscribe(test => {this.testResults = test});
  }
}
