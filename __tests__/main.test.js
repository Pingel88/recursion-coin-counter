import {
  coinCounter
} from '../src/main.js';

describe('coinCounter', () => {
      test("try to return something", () => {
        const result = coinCounter(0);
        expect(coinCounter(result)).toEqual('Nickels: 0, Pennies: 0');
      });

      test('should return the number of pennies', () => {
        const result = coinCounter(0.04);
        expect(coinCounter(result)).toEqual('Nickels: 0, Pennies: 4');
      });

      test('should return the number of nickels', () => {
        const result = coinCounter(0.05);
        expect(result).toEqual('Nickels: 1, Pennies: 0');
      });

      test('should return the number of nickels and pennies', () => {
        const result = coinCounter(0.09);
        expect(result).toEqual('Nickels: 1, Pennies: 4')
      })


      // describe('Age', () => {
      //   test('should correctly create an Age object with age and expectancy for male', () => {
      //     const age = new Age(34, 'male');
      //     expect(age.years).toEqual(34);
      //     expect(age.expect).toEqual(42);
      //   });
      // });