'use strict';

let Seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  hourWork: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],

  customerPerHourArr: [],
  customersPerHour: function (min, max) {
    // return getRandomIntInclusive(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
  purchasedEachHour: function () {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
  },
  pushCustomerPerHourArr: function () {
    this.customerPerHourArr.push(this.purchasedEachHour());
  },
  renderSeattle: function () {
    const parentElement = document.getElementById('salmon-cookies');

    const pElement = document.createElement('p');
    pElement.textContent = 'Seattle';
    parentElement.appendChild(pElement);

    let ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let total = 0;
    for (let i = 0; i < this.hourWork.length; i++) {
      this.pushCustomerPerHourArr();
      total = total + this.customerPerHourArr[i];
      const liElement = document.createElement('li');
      liElement.textContent = this.hourWork[i] + ' ' + this.customerPerHourArr[i] + ' cookies ';
      ulElement.appendChild(liElement);
    }
    const liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + total + ' cookies ';
    ulElement.appendChild(liElement);
  },

};

let Tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  hourWork: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
  customerPerHourArr: [],
  customersPerHour: function (min, max) {
    // return getRandomIntInclusive(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
  purchasedEachHour: function () {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
  },
  pushCustomerPerHourArr: function () {
    this.customerPerHourArr.push(this.purchasedEachHour());
  },
  renderTokyo: function () {
    const parentElement = document.getElementById('salmon-cookies');

    const pElement = document.createElement('p');
    pElement.textContent = 'Tokyo';
    parentElement.appendChild(pElement);

    let ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let total = 0;
    for (let i = 0; i < this.hourWork.length; i++) {
      this.pushCustomerPerHourArr();
      total = total + this.customerPerHourArr[i];
      const liElement = document.createElement('li');
      liElement.textContent = this.hourWork[i] + ' ' + this.customerPerHourArr[i] + ' cookies ';
      ulElement.appendChild(liElement);
    }
    const liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + total + ' cookies ';
    ulElement.appendChild(liElement);
  },

};

let Dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  hourWork: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],

  customerPerHourArr: [],
  customersPerHour: function (min, max) {
    // return getRandomIntInclusive(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
  purchasedEachHour: function () {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
  },
  pushCustomerPerHourArr: function () {
    this.customerPerHourArr.push(this.purchasedEachHour());
  },
  renderDubai: function () {
    const parentElement = document.getElementById('salmon-cookies');

    const pElement = document.createElement('p');
    pElement.textContent = 'Dubai';
    parentElement.appendChild(pElement);

    let ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let total = 0;
    for (let i = 0; i < this.hourWork.length; i++) {
      this.pushCustomerPerHourArr();
      total = total + this.customerPerHourArr[i];
      const liElement = document.createElement('li');
      liElement.textContent = this.hourWork[i] + ' ' + this.customerPerHourArr[i] + ' cookies ';
      ulElement.appendChild(liElement);
    }
    const liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + total + ' cookies ';
    ulElement.appendChild(liElement);
  },

};

let Paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  hourWork: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],

  customerPerHourArr: [],
  customersPerHour: function (min, max) {
    // return getRandomIntInclusive(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
  purchasedEachHour: function () {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
  },
  pushCustomerPerHourArr: function () {
    this.customerPerHourArr.push(this.purchasedEachHour());
  },
  renderParis: function () {
    const parentElement = document.getElementById('salmon-cookies');

    const pElement = document.createElement('p');
    pElement.textContent = 'Paris';
    parentElement.appendChild(pElement);

    let ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let total = 0;
    for (let i = 0; i < this.hourWork.length; i++) {
      this.pushCustomerPerHourArr();
      total = total + this.customerPerHourArr[i];
      const liElement = document.createElement('li');
      liElement.textContent = this.hourWork[i] + ' ' + this.customerPerHourArr[i] + ' cookies ';
      ulElement.appendChild(liElement);
    }
    const liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + total + ' cookies ';
    ulElement.appendChild(liElement);
  },

};

let Lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  hourWork: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],

  customerPerHourArr: [],
  customersPerHour: function (min, max) {
    // return getRandomIntInclusive(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
  purchasedEachHour: function () {
    return Math.floor(this.customersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies);
  },
  pushCustomerPerHourArr: function () {
    this.customerPerHourArr.push(this.purchasedEachHour());
  },
  renderLima: function () {
    const parentElement = document.getElementById('salmon-cookies');

    const pElement = document.createElement('p');
    pElement.textContent = 'Lima';
    parentElement.appendChild(pElement);

    let ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let total = 0;
    for (let i = 0; i < this.hourWork.length; i++) {
      this.pushCustomerPerHourArr();
      total = total + this.customerPerHourArr[i];
      const liElement = document.createElement('li');
      liElement.textContent = this.hourWork[i] + ' ' + this.customerPerHourArr[i] + ' cookies ';
      ulElement.appendChild(liElement);
    }
    const liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + total + ' cookies ';
    ulElement.appendChild(liElement);
  },

};
let seattleArray = [];
let tokyoArray = [];
let dubaiArray = [];
let parisArray = [];
let limaArray = [];

seattleArray.push(Seattle);
tokyoArray.push(Tokyo);
dubaiArray.push(Dubai);
parisArray.push(Paris);
limaArray.push(Lima);
console.log(seattleArray);
console.log(tokyoArray);
console.log(dubaiArray);
console.log(parisArray);
console.log(limaArray);
// console.log(Seattle.customersPerHour(23, 65));
Seattle.renderSeattle();
Tokyo.renderTokyo();
Dubai.renderDubai();
Paris.renderParis();
Lima.renderLima();

