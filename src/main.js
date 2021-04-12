export function coinCounter(change) {
  const cents = change * 100;
  const quarters = parseInt(cents / 25);
  const dimes = parseInt(cents % 25 / 10);
  const nickels = parseInt(cents % 25 % 10 / 5);
  const pennies = cents % 5;

  return `Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
}