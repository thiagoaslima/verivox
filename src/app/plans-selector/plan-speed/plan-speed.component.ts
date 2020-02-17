import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-plan-speed',
  templateUrl: './plan-speed.component.html',
  styleUrls: ['./plan-speed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanSpeedComponent implements OnInit {
  @Input() speeds: { upload: number; download: number };
  @Input() unit: string;

  constructor() {}

  ngOnInit(): void {}
}
