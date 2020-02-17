import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlansService } from './../plans-service/plans.service';
import { Plan } from '../types/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanListComponent {
  plans$ = this.service.plans$;

  constructor(
    private service: PlansService
  ) { }

  trackPlan(index: number, plan: Plan): string {
    return plan.product.id;
  }

}
