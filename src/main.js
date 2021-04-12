// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

export function coinCounter(change) {
  // const cents = (isNaN(change)) ? 0 : (change * 100);
  const cents = change * 100;
  const nickels = parseInt(cents / 5);
  const pennies = cents % 5;

  return `Nickels: ${nickels}, Pennies: ${pennies}`;
}