import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Plan } from '../types/plan';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanCardComponent {
  @Input() plan: Plan;

  get title(): string {
    return this.plan.product.content.text;
  }

  get speeds(): { upload: number; download: number } {
    return {
      download: Number(this.plan.contractTerm.downloadSpeed.amount) / 1_000,
      upload: Number(this.plan.contractTerm.uploadSpeed.amount) / 1_000
    };
  }

  get price(): { value: number; currency: string } {
    const cost = this.plan.cost.effectiveCost;

    return {
      value: Number(cost.amount),
      currency: cost.unit
    };
  }
}
