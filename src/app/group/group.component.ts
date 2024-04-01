import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QueryService } from '../query.service';
// import { clone } from 'lodash';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() query: any;
  @Input() groupLevel: number = -1;
  @Input() groupIndex: number = 0;
  @Output() handleDelete = new EventEmitter();
  constructor(private qs: QueryService) {}

  ngOnInit() {
    if (!Array.isArray(this.query.rules)) {
      this.query.rules = [];
    }
    
    if (!Array.isArray(this.query.groups)) {
      this.query.groups = [];
    }
}

  // Similarly, initialize this.query.groups if needed
  
  handleAddRule() {
    const newRule = this.qs.getNewRule();
    this.query.rules.push(newRule);
  }
  handleAddGroup() {
    const newGroup = this.qs.getNewGroup();
    this.query.rules.push(newGroup);
  }
  // handleAddGroup() {
  //   const newGroup = this.qs.getNewGroup();
  //   this.query.groups.push(newGroup); // Corrected from this.query.rules.push(newGroup)
  // }
  
  handleDeleteGroup(id: any) {
    console.log('Delete group', id, this.groupIndex);
    this.handleDelete.emit({
      rule: this.query,
      id,
      groupLevel: this.groupLevel,
      groupIndex: this.groupIndex
    });
  }
  handleChildDelete({ rule, id, groupLevel, groupIndex } : any) {
    console.log(rule, id, groupLevel, groupIndex);
    // this.query.rules.splice(groupIndex, 1);
    this.query.rules.splice(this.query.rules.indexOf(rule), 1);

  }
}