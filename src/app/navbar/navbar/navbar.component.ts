import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlansService } from '../../plans-selector/plans-service/plans.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(
    private plansService: PlansService
  ) { }

  ngOnInit(): void {
  }

  orderBy(prop: string) {
    this.plansService.orderBy(prop);
  }

}
