'use strict';
const cookies = document.getElementById('cookies');
let hourWork = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
function Cookies(name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.cookiesPerHour = [];
  this.customerPerHour = [];
  this.total = 0;
  Cookies.allCity.push(this);
}

Cookies.allCity = [];
// const parentElement = document.getElementById('salmon-cookies');
const tableElement = document.getElementById('pats-cookies');
// this function to generate random customer
function randomCustomer(min, max) {
  // return getRandomIntInclusive(min, max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Cookies.prototype.customersPerHour = function () {
  for (let i = 0; i < hourWork.length; i++) {
    let cookies = Math.ceil(randomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookies);
    this.cookiesPerHour.push(cookies);
    this.total = this.total + cookies;
    //console.log(`${hourWork[i]} : ${this.cookiesPerHour[i]}`);

  }
};
Cookies.prototype.render = function () {
  this.customersPerHour();
  const trCity = document.createElement('tr');
  tableElement.appendChild(trCity);

  let tdCustomer = document.createElement('td');
  trCity.appendChild(tdCustomer);
  tdCustomer.textContent = this.name;

  for (let i = 0; i < hourWork.length; i++) {
    let tContent = document.createElement('td');
    trCity.appendChild(tContent);
    tContent.textContent = this.cookiesPerHour[i];
  }

  let tdTT = document.createElement('td');
  trCity.appendChild(tdTT);
  tdTT.textContent = this.total;
};
function tableHead() {
  const trHeader = document.createElement('tr');
  tableElement.appendChild(trHeader);

  const thHeader = document.createElement('th');
  trHeader.appendChild(thHeader);
  thHeader.textContent = '';

  for (let i = 0; i < hourWork.length; i++) {
    let thHeader = document.createElement('th');
    trHeader.appendChild(thHeader);
    thHeader.textContent = hourWork[i];
  }

  let thTotal = document.createElement('th');
  trHeader.appendChild(thTotal);
  thTotal.textContent = 'Total daily location';
}
function renderCity() {
  for (let i = 0; i < Cookies.allCity.length; i++) {
    Cookies.allCity[i].render();
  }
}
function tableTotal() {
  const trTotal = document.createElement('tr');
  tableElement.appendChild(trTotal);

  const thTotal = document.createElement('th');
  trTotal.appendChild(thTotal);
  thTotal.textContent = 'Total';

  let totalOfTotal = 0;
  for (let i = 0; i < hourWork.length; i++) {
    let thTotalCol = document.createElement('th');
    let hourTotal = 0;
    for (let j = 0; j < Cookies.allCity.length; j++) {
      hourTotal += Cookies.allCity[j].cookiesPerHour[i];
      totalOfTotal += Cookies.allCity[j].cookiesPerHour[i];
    }
    thTotalCol.textContent = hourTotal;
    trTotal.appendChild(thTotalCol);
  }

  let thAllTotal = document.createElement('th');
  trTotal.appendChild(thAllTotal);
  thAllTotal.textContent = totalOfTotal;
}
cookies.addEventListener('submit', eventButton);
function eventButton(event) {
  event.preventDefault();
  const name = event.target.cityName.value;
  const minCustomer = event.target.minCustomer.value;
  const maxCustomer = event.target.maxCustomer.value;
  const avgCookies = event.target.avgCookies.value;

  new Cookies(name, minCustomer, maxCustomer, avgCookies);
  tableHead();

  renderCity();

  tableTotal();
  cookies.reset();
}
new Cookies('Seattle', 23, 65, 6.3);
new Cookies('Tokyo', 3, 24, 1.2);
new Cookies('Dubai', 11, 38, 3.7);
new Cookies('Paris', 20, 38, 2.3);
new Cookies('Lima', 2, 16, 4.6);

console.log(Cookies.allCity);
