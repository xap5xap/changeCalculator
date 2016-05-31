export class Payment {
  public price: number;
  public bills: number;
  public coins: number;
  private paid: number;
  constructor(
  ) { }

  get Paid(): number {
    var centsAmount: number = centsAmount = Number(this.coins || 0) / Number(100);
    this.paid = Number(this.bills || 0) + Number(centsAmount);
    return this.paid;
  }
}
