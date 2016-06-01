import { Component, OnInit } from '@angular/core';
import {Payment} from '../models/payment';
import {CalculateChangeService} from '../services/calculate-change.service';
import {MdCard} from '@angular2-material/card/card';
import {MdInput} from '@angular2-material/input';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-i-will-pay',
  templateUrl: 'i-will-pay.component.html',
  styleUrls: ['i-will-pay.component.css'],
  providers: [CalculateChangeService],
  directives: [MdCard, MdInput, MdToolbar]
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
