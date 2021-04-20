let images = ['./image/cutter.jpeg', './image/family.jpg', './image/fish.jpg', './image/frosted-cookie.jpg', './image/shirt.jpg'];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
  imgElement.src = images[index];
  index > 1 ? index = 0 : index++;
}

window.onload = function () {
  setInterval(change, 2000);
};
