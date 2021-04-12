import {
  coinCounter
} from '../src/main.js';

describe('coinCounter', () => {
  test("try to return something", () => {
    const change = 0;
    expect(coinCounter(change)).toEqual(0);
  });

  test('should return number of pennies', () => {
    const change = 0.04;
    expect(coinCounter(change)).toEqual(4);
  });

  test('should return number of nickels', () => {
    const change = 0.05;
    expect(coinCounter(change)).toEqual(1);
  });
})


// describe('Age', () => {
//   test('should correctly create an Age object with age and expectancy for male', () => {
//     const age = new Age(34, 'male');
//     expect(age.years).toEqual(34);
//     expect(age.expect).toEqual(42);
//   });
// });