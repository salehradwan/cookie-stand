let images = ['./image/cutter.jpeg', './image/family.jpg', './image/fish.jpg', './image/frosted-cookie.jpg', './image/shirt.jpg'];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

<<<<<<< HEAD
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

let dubai = new Cookies('Dubai', 11, 38, 3.7);
dubai.cookiesPerHour();
dubai.pushCustomerPerHourArr();
dubai.renderDubai();

let paris = new Cookies('Paris', 20, 38, 2.3);
paris.cookiesPerHour();
paris.pushCustomerPerHourArr();
paris.renderParis();

let lima = new Cookies('Lima', 2, 16, 4.6);
lima.cookiesPerHour();
lima.pushCustomerPerHourArr();
lima.renderLima();

// function to generate the header
function generateTableHeader() {
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
  thTotal.textContent = 'Daily location Total';
}
/*
*/
// function to generate the total
// function generateTableTotal() {
//   const trTotla = document.createElement('tr');
//   tableElement.appendChild(trTotla);

//   const tdTotal = document.createElement('td');
//   trTotla.appendChild(tdTotal);
//   tdTotal.textContent = 'Total';
//   let total = 0;
//   for (let i = 0; i < hourWork.length; i++) {
//     for (let j = 0; j < country.length; j++) {
//       total += seattle.cookiesPerHourArr[i];
//       const tdTotal = document.createElement('td');
//       trTotla.appendChild(tdTotal);
//       tdTotal.textContent = total;
//     }

//   }
// }
=======
function change() {
  imgElement.src = images[index];
  index > 1 ? index = 0 : index++;
}

window.onload = function () {
  setInterval(change, 2000);
};
>>>>>>> b9a4536b90670ef16b011f27998359e873a0d602
