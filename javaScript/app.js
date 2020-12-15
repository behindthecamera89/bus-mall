'use strict';

//Global Variables 

var allProducts = [];
var maxClicksAllowed = 5;
var actualClicks = 0;


// DOM
var myContainer = document.getElementById('container');
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var resultsList = document.getElementById('results');
// Product Contrusctor 

function Product(productName, src = 'jpg' || '.png' || '.gif') {
  this.productName = productName;
  this.src = `img/${productName}.${src}`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);

}


// instantiations 

new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulhu', 'jpg');
new Product('dog-duck', 'jpg');
new Product('dragon', 'jpg');
new Product('pen', 'jpg');
new Product('pet-sweep', 'jpg');
new Product('scissors', 'jpg');
new Product('shark', 'jpg');
new Product('sweep', 'png');
new Product('tauntaun', 'jpg');
new Product('unicorn', 'jpg');
new Product('usb', 'gif');
new Product('water-can', 'jpg');
new Product('wine-glass', 'jpg');

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function renderProducts() {
  var productArray = [];
  while (productArray.length < 3) {
    var tempIndex = getRandomIndex(allProducts.length);
    while (productArray.includes(tempIndex)) {
      tempIndex = getRandomIndex(allProducts.length);
    }
    productArray.push(tempIndex);
  }
  // console.log(tempIndex);
  //  console.log(productArray);

  var productOneIndex = productArray.pop();
  // console.log(productOneIndex);
  var productTwoIndex = productArray.pop();
  var productThreeIndex = productArray.pop();
  // console.log(allProducts);
  //array here or something 
  // console.log(productTwoIndex);
  //Assign info to Products
  imageOneElement.src = allProducts[productOneIndex].src;
  imageOneElement.alt = allProducts[productOneIndex].name;
  imageOneElement.title = allProducts[productOneIndex].name;
  //Log Views
  allProducts[productOneIndex].views++;
  // console.log(productTwoIndex);
  // Product Two
  imageTwoElement.src = allProducts[productTwoIndex].src;
  imageTwoElement.alt = allProducts[productTwoIndex].name;
  imageTwoElement.title = allProducts[productTwoIndex].name;
  allProducts[productTwoIndex].views++;

  imageThreeElement.src = allProducts[productThreeIndex].src;
  imageThreeElement.alt = allProducts[productThreeIndex].name;
  imageThreeElement.title = allProducts[productThreeIndex].name;
  allProducts[productTwoIndex].views++;
}




// function handleCLick

renderProducts();

renderProducts();
