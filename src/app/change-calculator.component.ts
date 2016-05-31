import { Component } from '@angular/core';
import {IWillPayComponent} from './i-will-pay';
import {ExactAmountComponent} from './exact-amount';

@Component({
  moduleId: module.id,
  selector: 'change-calculator-app',
  templateUrl: 'change-calculator.component.html',
  styleUrls: ['change-calculator.component.css'],
  directives: [IWillPayComponent, ExactAmountComponent]
})
export class ChangeCalculatorAppComponent {
  title = 'change-calculator works!';
}
