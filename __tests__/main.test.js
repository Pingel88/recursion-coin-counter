import {
  coinCounter
} from '../src/main.js';

describe('coinCounter', () => {
  test("try to return something", () => {
    const change = 2;
    expect(coinCounter(change)).toEqual(2);
  });
})


// describe('Age', () => {
//   test('should correctly create an Age object with age and expectancy for male', () => {
//     const age = new Age(34, 'male');
//     expect(age.years).toEqual(34);
//     expect(age.expect).toEqual(42);
//   });
// });