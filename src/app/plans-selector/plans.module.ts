import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanCardComponent } from './plan-card/plan-card.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanSpeedComponent } from './plan-speed/plan-speed.component';
import { CoreModule } from '../core/core.module';
import { PlanPriceComponent } from './plan-price/plan-price.component';

@NgModule({
  declarations: [PlanListComponent, PlanCardComponent, PlanSpeedComponent, PlanPriceComponent],
  imports: [CommonModule, CoreModule],
  exports: [PlanListComponent]
})
export class PlansModule {}
