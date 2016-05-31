import { Component } from '@angular/core';
import {IWillPayComponent} from './i-will-pay';

@Component({
  moduleId: module.id,
  selector: 'change-calculator-app',
  templateUrl: 'change-calculator.component.html',
  styleUrls: ['change-calculator.component.css'],
  directives: [IWillPayComponent]
})
export class ChangeCalculatorAppComponent {
  title = 'change-calculator works!';
}
