import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'wordnica-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <wordnica-analog-welcome /> `,
})
export default class HomeComponent {}
