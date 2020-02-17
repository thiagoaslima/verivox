import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-plan-price',
  templateUrl: './plan-price.component.html',
  styleUrls: ['./plan-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanPriceComponent implements OnInit {
  @Input() price: {value: number, currency: string};
  @Output() selectPlan = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
