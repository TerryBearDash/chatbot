import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

@Injectable()
export class DataTransportService {

  search = new Subject();

  constructor() {
    this.search.next(null);
  }

}