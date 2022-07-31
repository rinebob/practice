import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    ViewComponent,
    PanelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ViewComponent],
})
export class ViewModule { }
