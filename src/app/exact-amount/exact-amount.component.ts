import { Component, OnInit } from '@angular/core';
import {Payment} from '../models/payment';
import {CalculateChangeService} from '../services/calculate-change.service';

@Component({
  moduleId: module.id,
  selector: 'app-exact-amount',
  templateUrl: 'exact-amount.component.html',
  styleUrls: ['exact-amount.component.css'],
  providers: [CalculateChangeService]
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
