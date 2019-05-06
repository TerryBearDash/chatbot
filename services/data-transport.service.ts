import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataTransportService {

  search = new Subject();

  constructor() {
    this.search.next(null);
  }

}