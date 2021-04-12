export function coinCounter(change) {
  const cents = change * 100;
  const quarters = parseInt(cents / 25);
  const dimes = parseInt(cents % 25 / 10);
  const nickels = parseInt(cents % 25 % 10 / 5);
  const pennies = cents % 5;

  return `Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
}

function recursionCoinCounter(change) {
  if (isNaN(change)) {
    return ` Invalid input `;
  }
  const cents = change * 100;
  if (cents < 5) {
    return (cents != 0) ? `| Pennies: ${cents} |` : '';
  } else if (cents < 10) {
    const newChange = cents % 5 / 100;
    const nickels = parseInt(cents / 5);
    return recursionCoinCounter(newChange) + `| Nickels: ${nickels} |`;
  } else if (cents < 25) {
    const newChange = cents % 10 / 100;
    const dimes = parseInt(cents / 10);
    return recursionCoinCounter(newChange) + `| Dimes: ${dimes} |`;
  } else {
    const newChange = cents % 25 / 100;
    const quarters = parseInt(cents / 25);
    return recursionCoinCounter(newChange) + `| Quarters: ${quarters} |`;
  }
}