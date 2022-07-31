import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
