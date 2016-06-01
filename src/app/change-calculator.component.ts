import { Component } from '@angular/core';
import {IWillPayComponent} from './i-will-pay';
import {ExactAmountComponent} from './exact-amount';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

@Component({
  moduleId: module.id,
  selector: 'change-calculator-app',
  templateUrl: 'change-calculator.component.html',
  styleUrls: ['change-calculator.component.css'],
  directives: [MdToolbar, MdIcon, MdButton, MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES, APP_SHELL_DIRECTIVES,
    IWillPayComponent, ExactAmountComponent],
  providers: [MdIconRegistry]
})
export class ChangeCalculatorAppComponent {

}
