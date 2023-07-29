'use strict';
// ARROWICON
const iconArrow = document.querySelector('.icon-arrow');

//INPUT FIELD
const monthField = document.querySelector('.month');
const yearField =document.querySelector('.year');
const dayField = document.querySelector('.day');
const input = document.querySelectorAll("input");


// CALC RESULTS VALUE
const yearValue = document.querySelector('.yearvalue');
const monthValue = document.querySelector('.monthvalue');
const daysValue = document.querySelector('.daysvalue');
// ERROR MESSAGE
const hiddenBar = document.querySelector('.hidden');
//LABEL NAME
const inputName = document.querySelectorAll('.input-name');



// DAY, MONTH, YEAR INFO
const currentDate = new Date();
const preDay = currentDate.getDate();
const preMonth = currentDate.getMonth() + 1;
const preYear = currentDate.getFullYear();

let curDay;
let curMonth;
let curYear;

// EVENT LISTENER
iconArrow.addEventListener('click', () => {
  let inputField = document.querySelectorAll('.fill-in')
  const calcDate = new Date(0);
  const calcDateYear = calcDate.getFullYear()
  curDay = Number(dayField.value)
  curMonth = Number(monthField.value)

  curYear = Number(yearField.value)

  const prevDate = new Date(`${curMonth, curDay, curYear}`)


  //WORKING ON CLACULATION
  const calcDiff = function(day, month, year) {
    const calcDay = Math.abs(preDay-day);
    const calcMonth = Math.abs(preMonth - month);
    const calcYear = preYear - year
    console.log(calcDay, calcMonth, calcYear)

    daysValue.textContent = `${calcDay}`.padStart(2,0);
    monthValue.textContent = `${calcMonth}`.padStart(2, 0);
    yearValue.textContent = `${calcYear}`.padStart(2,0);
  }

  // WORKING WITH EMPTY DATE FIELD
  let error1 = document.querySelector('.error1');
  let error2 = document.querySelector('.error2');
  let error3 = document.querySelector('.error3');
  let error = document.querySelectorAll('.error')
  


  // WORKING ON FILLED FIELD
  if(dayField.value && monthField.value && yearField.value) {
    if(yearField.value <= preYear && yearField.value >= calcDate) {
      calcDiff(curDay, curMonth, curYear);
    } else {
      daysValue.textContent = '--';
      monthValue.textContent = '--';
      yearValue.textContent = '--';
      inputField.forEach(el =>{
      el.style.borderColor = 'rgb(240, 240, 240)';
      el.style.borderWidth = '1px';

    })
    };
  }

  //CREATE A FUNCTION FOR ERROR
  const errSignal = function() {
    daysValue.textContent = '--';
    monthValue.textContent = '--';
    yearValue.textContent = '--';
    inputField.forEach(el =>{
      el.style.borderColor = 'red';
      el.style.borderWidth = '1px';
    })
    inputName.forEach(x => {
      x.style.color = 'red'
    })
  }
  
  // CREATE FUNCTION FOR REMOVAL OF ERROR MESSAGE
  const errSignalRemoval = function(){
    inputField.forEach(el =>{
      el.style.border = '1px solid red'
    })
    inputName.forEach(x => {
      x.style.color = 'red'
    })
    error.forEach(errors => {
      errors.textContent = 'Field Empty'
    })
    daysValue.textContent = '--';
    monthValue.textContent = '--';
    yearValue.textContent = '--';
  }


  // WORKING ON DAYS OF THE YEAR

  if([4, 6, 11].includes(curMonth) && curDay > 30) {
    errSignal();
    error1.textContent = 'Month has 30 days'
  } else if([1, 3, 5, 7, 8, 9,10, 12].includes(curMonth) && curDay > 31) {
    errSignal();
    error1.textContent = 'Month has 31 days'
  }else if(curMonth === 2 && curDay > 28) {
    errSignal();
    error1.textContent ='We have 28 for Feb'
  }else {
    error1.textContent = ''
  }


  //Working on years greater than Current Year
  if(yearField.value > preYear ) {
    errSignal();
    error3.textContent = 'No Child born yet'
  } else {
    error3.textContent = ''
  }
  

  //Working on Months Greater than 12
  if(monthField.value > 12) {
    errSignal();
    error2.textContent = 'We have 1-12 month'
  } else {
    error2.textContent = ''

  }

  //Working on Empty Input field

  if(!curDay && !curMonth && !curYear) {
    errSignalRemoval();
  } else {
    inputField.forEach(el =>{
      el.style.border = '1px solid grey'
    })

    inputName.forEach(x => {
      x.style.color = 'black'
    })
  }
})
