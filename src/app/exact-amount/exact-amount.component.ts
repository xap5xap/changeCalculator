import { Component, OnInit } from '@angular/core';
import {Payment} from '../models/payment';
import {CalculateChangeService} from '../services/calculate-change.service';
import {MdCard} from '@angular2-material/card/card';
import {MdInput} from '@angular2-material/input';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-exact-amount',
  templateUrl: 'exact-amount.component.html',
  styleUrls: ['exact-amount.component.css'],
  providers: [CalculateChangeService],
  directives: [MdCard, MdInput, MdToolbar]
})
export class ExactAmountComponent implements OnInit {

  payment: Payment;
  desiredChange: number;
  constructor(private calculateChangeService: CalculateChangeService) {
    this.payment = new Payment();
  }

  ngOnInit() {
  }

  calculatePaymentAmount() {
    return this.calculateChangeService.calculatePaymentAmmount(this.payment, this.desiredChange);
  }
}
