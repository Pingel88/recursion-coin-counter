// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

export function coinCounter(change) {
  // const cents = (isNaN(change)) ? 0 : (change * 100);
  const cents = change * 100;
  const dimes = parseInt(cents / 10);
  const nickels = parseInt(cents % 10 / 5);
  const pennies = cents % 5;

  return `Quarters: 0, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
}