import { Injectable } from '@angular/core';
// import { clone, cloneDeep } from 'lodash';

const getUniqueID = () => {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 5)
  ).toUpperCase();
};

class Rule {
  id: string;
  type: string;
  name: string;
  value: string;
  constructor() {
    this.id = getUniqueID();
    this.type = 'rule';
    this.name = '';
    this.value = '';
  }
}
class Group {
  id: string;
  type: string;
  condition: string;
  rules: any[];

  constructor() {
    this.id = getUniqueID();
    this.type = 'group';
    this.condition = 'AND';
    this.rules = [new Rule()];
  }
}

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  query: any;
  constructor() {
    this.query = new Group();
  }

  getQuery(): any {
    return this.query;
  }

  getNewRule(): any {
    return new Rule();
  }

  getNewGroup(): any {
    return new Group();
  }
}