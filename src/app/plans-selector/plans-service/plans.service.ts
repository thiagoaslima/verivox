import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Plan } from '../types/plan';
import { ApiResponse } from '../types/response';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private worker: Worker;
  plans$ = new BehaviorSubject<Plan[]>([]);

  constructor() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('./plans-api.worker', { type: 'module' });

      this.worker.onmessage = ({ data }: {data: ApiResponse}) => {
        this.plans$.next(data.offers);
      };
      this.orderBy('price');
    }
  }

  orderBy(prop: string) {
    this.worker.postMessage({orderBy: prop});
  }
}
