// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

export function coinCounter(change) {

  const cents = change * 100;
  const nickels = cents / 5;
  return (cents < 5) ? cents : nickels;
}