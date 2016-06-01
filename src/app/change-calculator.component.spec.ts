import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ChangeCalculatorAppComponent } from '../app/change-calculator.component';

beforeEachProviders(() => [ChangeCalculatorAppComponent]);

describe('App: ChangeCalculator', () => {
  it('should create the app',
      inject([ChangeCalculatorAppComponent], (app: ChangeCalculatorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'change-calculator works!\'',
  //     inject([ChangeCalculatorAppComponent], (app: ChangeCalculatorAppComponent) => {
  //   expect(app.title).toEqual('change-calculator works!');
  // }));
});
