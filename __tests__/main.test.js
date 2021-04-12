import {
  coinCounter
} from '../src/main.js';

describe('coinCounter', () => {
  test("try to return something", () => {
    const result = coinCounter(0);
    expect(result).toEqual('Nickels: 0, Pennies: 0');
  });

  test('should return the number of pennies', () => {
    const result = coinCounter(0.04);
    expect(result).toEqual('Nickels: 0, Pennies: 4');
  });

  test('should return the number of nickels', () => {
    const result = coinCounter(0.05);
    expect(result).toEqual('Nickels: 1, Pennies: 0');
  });

  test('should return the number of nickels and pennies', () => {
    const result = coinCounter(0.09);
    expect(result).toEqual('Nickels: 1, Pennies: 4');
  });
  test('should return the number of dimes', () => {
    const result = coinCounter(.1);
    expect(result).toEqual('Dimes: 1, Nickels: 0, Pennies: 0');
  });
});