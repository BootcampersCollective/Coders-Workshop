/**
* Tests for capitalizeATitle
*/
import { MaxProfit } from './maxProfit';

describe('MaxProfit', () => {

  it('should render max profit forward of 5', () => {
    const list = [9, 11, 8, 5, 7, 10];
    const result = AppComponent.maxProfitForward(list);
    expect(result).toEqual(5);
  });

  it('should render max profit forward of 0', () => {
    const list = [9];
    const result = AppComponent.maxProfitForward(list);
    expect(result).toEqual(0);
  });
  it('should render max profit forward of 0 with undefined list', () => {
    const list = undefined;
    const result = AppComponent.maxProfitForward(list);
    expect(result).toEqual(0);
  });

  it('should render max profit forward of 9', () => {
    const list = [2, 10, 11, 5, 7, 10];
    const result = AppComponent.maxProfitForward(list);
    expect(result).toEqual(9);
  });

  it('should render max profit forward of 6', () => {
    const list = [2, 5, 7, 5, 7, 11];
    const result = AppComponent.maxProfitForward(list);
    expect(result).toEqual(6);
  });
});