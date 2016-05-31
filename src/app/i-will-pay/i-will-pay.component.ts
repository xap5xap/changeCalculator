import { Component, OnInit } from '@angular/core';
import {Payment} from '../models/payment';
import {CalculateChangeService} from '../services/calculate-change.service';

@Component({
  moduleId: module.id,
  selector: 'app-i-will-pay',
  templateUrl: 'i-will-pay.component.html',
  styleUrls: ['i-will-pay.component.css'],
  providers: [CalculateChangeService]
})
export class IWillPayComponent implements OnInit {

  payment: Payment;
  constructor(private calculateChangeService: CalculateChangeService) {
    this.payment = new Payment();
  }

  ngOnInit() {
    
  }

  getChange() {
    return this.calculateChangeService.calculateChange(this.payment);
  }

}
