import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {DUDE, TURKEY, UGLY_TURKEY} from '../common/constants';

@Component({
  selector: 'pr-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {

  DUDE = DUDE;
  TURKEY = TURKEY;
  UGLY_TURKEY = UGLY_TURKEY;


  constructor() { }

  ngOnInit(): void {
  }

}
