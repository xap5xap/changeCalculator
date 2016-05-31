import { Injectable } from '@angular/core';
import {Payment} from '../models/payment';

@Injectable()
export class CalculateChangeService {

  constructor() { }

  calculateChange(payment: Payment) {
    return (payment.Paid - Number(payment.price || 0)).toFixed(2);
  }



}
