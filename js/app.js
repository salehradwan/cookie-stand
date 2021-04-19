'use strict';
let hourWork = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let country = ['seattel', 'tokyo', 'dubai', 'paris', 'lima'];

function Cookies(name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.cookiesPerHourArr = [];
  // this.cookiesPerHourArr = [];
}
Cookies.prototype.customersPerHour = function (min, max) {
  // return getRandomIntInclusive(min, max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};
Cookies.prototype.cookiesPerHour = function () {
  return Math.ceil(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
};
Cookies.prototype.pushCustomerPerHourArr = function () {
  this.cookiesPerHourArr.push(this.cookiesPerHour());
};
const parentElement = document.getElementById('salmon-cookies');
//create a table
let tableElement = document.createElement('table');
parentElement.appendChild(tableElement);
Cookies.prototype.renderSeattle = function () {
  // call the header function to create a header
  generateTableHeader(tableElement);
  // create a row
  const trSeattle = document.createElement('tr');
  tableElement.appendChild(trSeattle);

  //create a data
  const tdSeattle = document.createElement('td');
  trSeattle.appendChild(tdSeattle);
  tdSeattle.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < hourWork.length; i++) {
    this.pushCustomerPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdSeattle = document.createElement('td');
    trSeattle.appendChild(tdSeattle);
    tdSeattle.textContent = this.cookiesPerHourArr[i];
  }

  const tdDailyLocTotal = document.createElement('td');
  trSeattle.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;

  // call the Total function to create a total
  //generateTableTotal(tableElement);

};
Cookies.prototype.renderTokyo = function () {
  // create a row
  const trTokyo = document.createElement('tr');
  tableElement.appendChild(trTokyo);

  //create a data
  const tdTokyo = document.createElement('td');
  trTokyo.appendChild(tdTokyo);
  tdTokyo.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < hourWork.length; i++) {
    this.pushCustomerPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdTokyo = document.createElement('td');
    trTokyo.appendChild(tdTokyo);
    tdTokyo.textContent = this.cookiesPerHourArr[i];
  }

  const tdDailyLocTotal = document.createElement('td');
  trTokyo.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;

  // call the Total function to create a total
  //generateTableTotal(tableElement);

};

Cookies.prototype.renderDubai = function () {
  // create a row
  const trDubai = document.createElement('tr');
  tableElement.appendChild(trDubai);

  //create a data
  const tdDubai = document.createElement('td');
  trDubai.appendChild(tdDubai);
  tdDubai.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < hourWork.length; i++) {
    this.pushCustomerPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdDubai = document.createElement('td');
    trDubai.appendChild(tdDubai);
    tdDubai.textContent = this.cookiesPerHourArr[i];
  }

  const tdDailyLocTotal = document.createElement('td');
  trDubai.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;

  // call the Total function to create a total
  //generateTableTotal(tableElement);

};

Cookies.prototype.renderParis = function () {
  // create a row
  const trParis = document.createElement('tr');
  tableElement.appendChild(trParis);

  //create a data
  const tdParis = document.createElement('td');
  trParis.appendChild(tdParis);
  tdParis.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < hourWork.length; i++) {
    this.pushCustomerPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdParis = document.createElement('td');
    trParis.appendChild(tdParis);
    tdParis.textContent = this.cookiesPerHourArr[i];
  }

  const tdDailyLocTotal = document.createElement('td');
  trParis.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;

  // call the Total function to create a total
  //generateTableTotal(tableElement);

};

Cookies.prototype.renderLima = function () {
  // create a row
  const trLima = document.createElement('tr');
  tableElement.appendChild(trLima);

  //create a data
  const tdLima = document.createElement('td');
  trLima.appendChild(tdLima);
  tdLima.textContent = this.name;
  let Total = 0;
  for (let i = 0; i < hourWork.length; i++) {
    this.pushCustomerPerHourArr();
    Total += this.cookiesPerHourArr[i];
    const tdLima = document.createElement('td');
    trLima.appendChild(tdLima);
    tdLima.textContent = this.cookiesPerHourArr[i];
  }

  const tdDailyLocTotal = document.createElement('td');
  trLima.appendChild(tdDailyLocTotal);
  tdDailyLocTotal.textContent = Total;

  // call the Total function to create a total
  //generateTableTotal(tableElement);

};
let seattle = new Cookies('Seattle', 23, 65, 6.3);

seattle.cookiesPerHour();
seattle.pushCustomerPerHourArr();
seattle.renderSeattle();
let tokyo = new Cookies('Tokyo', 3, 24, 1.2);

tokyo.cookiesPerHour();
tokyo.pushCustomerPerHourArr();
tokyo.renderTokyo();

let dubai = new Cookies('Dubai', 3, 24, 1.2);

dubai.cookiesPerHour();
dubai.pushCustomerPerHourArr();
dubai.renderDubai();

let paris = new Cookies('Paris', 3, 24, 1.2);

paris.cookiesPerHour();
paris.pushCustomerPerHourArr();
paris.renderParis();

let lima = new Cookies('Lima', 3, 24, 1.2);
lima.cookiesPerHour();
lima.pushCustomerPerHourArr();
lima.renderLima();

// function to generate the header
function generateTableHeader(parentElement) {
  const trHeader = document.createElement('tr');
  parentElement.appendChild(trHeader);

  const thHeader = document.createElement('th');
  trHeader.appendChild(thHeader);
  thHeader.textContent = '##';
  for (let i = 0; i < hourWork.length; i++) {
    let thHeader = document.createElement('th');
    trHeader.appendChild(thHeader);
    thHeader.textContent = hourWork[i];
  }
  let thTotal = document.createElement('th');
  trHeader.appendChild(thTotal);
  thTotal.textContent = 'Daily location Total';
}

// function to generate the total
// function generateTableTotal(parentElement) {
//   const trTotla = document.createElement('tr');
//   parentElement.appendChild(trTotla);

//   const tdTotal = document.createElement('td');
//   trTotla.appendChild(tdTotal);
//   tdTotal.textContent = 'Total';
//   let total = 0;
//   for (let i = 0; i < hourWork.length; i++) {
//     // seattle.pushCustomerPerHourArr();
//     total += seattle.cookiesPerHourArr[i];
//     const tdTotal = document.createElement('td');
//     trTotla.appendChild(tdTotal);
//     tdTotal.textContent = total;
//   }
// }


