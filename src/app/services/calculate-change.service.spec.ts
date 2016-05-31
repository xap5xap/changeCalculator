import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CalculateChangeService } from './calculate-change.service';

describe('CalculateChange Service', () => {
  beforeEachProviders(() => [CalculateChangeService]);

  it('should ...',
      inject([CalculateChangeService], (service: CalculateChangeService) => {
    expect(service).toBeTruthy();
  }));
});
