// export function coinCounter(change) {
//   const cents = change * 100;
//   const quarters = parseInt(cents / 25);
//   const dimes = parseInt(cents % 25 / 10);
//   const nickels = parseInt(cents % 25 % 10 / 5);
//   const pennies = cents % 5;

//   return `Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
// }


// function coinCounterRecursion(change) {
//   const cents = change * 100;
//   if (cents >= 25) {
//     const numberOfQuarters = parseInt(cents / 25);
//     const value = numberOfQuarters * 25;
//     return numberOfQuarters;
//   }
//   if (cents >= 10) {
//     do this
//   }
//   if (cents >= 5) {
//     do this
//   }
//   return coinCounterRecursion(change - value);
// }

function coinCounterRec(change) {
  // if (isNan(change)) {
  //   return `Invalid input`;
  // }
  let cents = change * 100;
  if (cents < 5) {
    coinArray[3] = cents;
    sentence.concat(`, Dimes = ${cents}`)
    return sentence;
  } else if (cents < 10) {
    cents = cents % 5; = parseInt(cents / 5);
    return coinCounterRec(cents / 100);
  } else if (cents < 25) {
    cents = cents % 10;
    coinArray[1] = parseInt(cents / 10);
    return coinCounterRec(cents / 100);
  } else {
    cents = cents % 25;
    coinArray[0] = parseInt(cents / 25);
    return coinCounterRec(cents / 100);
  }
}

function coinCounterRecAgain(change) {
  if (isNaN(change)) {
    return ` Invalid input `;
  }
  const cents = change * 100;
  if (cents < 5) {
    return (cents != 0) ? `| Pennies: ${cents} |` : '';
  } else if (cents < 10) {
    const newChange = cents % 5 / 100;
    const nickels = parseInt(cents / 5);
    return coinCounterRecAgain(newChange) + `| Nickels: ${nickels} |`;
  } else if (cents < 25) {
    const newChange = cents % 10 / 100;
    const dimes = parseInt(cents / 10);
    return coinCounterRecAgain(newChange) + `| Dimes: ${dimes} |`;
  } else {
    const newChange = cents % 25 / 100;
    const quarters = parseInt(cents / 25);
    return coinCounterRecAgain(newChange) + `| Quarters: ${quarters} |`;
  }
}