// initializing counter

let count = 0;

const counter = document.querySelector('.count');
const startCount = document.querySelector('#btn1');
const reduceCount = document.querySelector('#btn2');
const resetCount = document.querySelector('#btn3');


// Add event listener to access the buttons
// and activate actions as intended.
// set counter display text to the current value of count.

startCount.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  if (count % 3 === 0) {
    counter.style.color = "#fe2";
  } else if (count % 4 === 0) {
    counter.style.color = "#4d11d9";
  } else {
    counter.style.color = "#fff";
  }
});

reduceCount.addEventListener('click', () => {
  count--;
  counter.textContent = count;
  if (count % 3 === 0) {
    counter.style.color = "#fe2";
  } else if (count % 4 === 0) {
    counter.style.color = "#4d11d9";
  } else {
    counter.style.color = "#fff";
  }
});
// set counter equal to zero to reset the counter

resetCount.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;

});


// Setting date and background color.

const date = document.querySelector('span');
date.textContent = new Date();
date.style.cssText = "font-size: 12px; color: #fff; font-family: helvetica;"

const body = document.querySelector('body');
body.style.background = "#fed871";