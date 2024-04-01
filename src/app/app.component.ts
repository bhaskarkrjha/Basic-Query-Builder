import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;
  query: any = {};
  constructor(private qs: QueryService) {
    this.title = 'Basic Query Builder';
    this.query = this.qs.getQuery();
  }
  ngOnInit() {}
  handleAddRule() {
    this.query.rules.push(this.qs.getNewRule());
  }
  handleAddGroup() {
    this.query.rules.push(this.qs.getNewGroup());
  }
  getQuery() {
    console.log(this.query);
  }
}