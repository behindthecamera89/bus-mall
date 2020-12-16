'use strict';

//Global Variables 

var allProducts = [];
var renderQueue = [];
var maxClicksAllowed = 25;
var actualClicks = 0;


// DOM
var myContainer = document.getElementById('container');
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var resultsList = document.getElementById('results');
// Product Contsructor 

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
  // var productArray = [];
  while (renderQueue.length < 6) {
    var tempIndex = getRandomIndex(allProducts.length);
    while (renderQueue.includes(tempIndex)) {
      tempIndex = getRandomIndex(allProducts.length);
    }
    renderQueue.push(tempIndex);
  }
  var productOneIndex = renderQueue.shift();
  // console.log(productOneIndex);
  var productTwoIndex = renderQueue.shift();
  var productThreeIndex = renderQueue.shift();

  imageOneElement.src = allProducts[productOneIndex].src;
  imageOneElement.alt = allProducts[productOneIndex].name;
  imageOneElement.title = allProducts[productOneIndex].name;

  allProducts[productOneIndex].views++;

  imageTwoElement.src = allProducts[productTwoIndex].src;
  imageTwoElement.alt = allProducts[productTwoIndex].name;
  imageTwoElement.title = allProducts[productTwoIndex].name;

  allProducts[productTwoIndex].views++;

  imageThreeElement.src = allProducts[productThreeIndex].src;
  imageThreeElement.alt = allProducts[productThreeIndex].name;
  imageThreeElement.title = allProducts[productThreeIndex].name;

  allProducts[productTwoIndex].views++;
}

// Event Handler
function mouseClick(event) {
  actualClicks++;
  var clickedProduct = event.target.title;
  // console.log(clickedProduct);
  for (var i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  // function handleCLick
  renderProducts();
  if (actualClicks === maxClicksAllowed) {
    myContainer.removeEventListener('click', mouseClick);
    renderChart();
    for (var j = 0; j < allProducts.length; j++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allProducts[j].productName} was viewed ${allProducts[j].views} times and clicked ${allProducts[j].votes} times`;
      resultsList.appendChild(liElement);
    }
  }
}
renderProducts();

function renderChart() {
  var namesArray = [];
  var votesArray = [];
  var viewsArray = [];

  for (var i = 0; i < allProducts.length; i++) {
    namesArray.push(allProducts[i].productName);
    votesArray.push(allProducts[i].votes);
    viewsArray.push(allProducts[i].views);
  }


  // Chart 
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: 'Number of Votes',
        data: votesArray,
        backgroundColor: 'rgba(150, 50, 50, 0.2)',
        borderColor: 'rgba(150, 50, 50, 1)',
        borderWidth: 8
      },
      {
        label: 'Number of Views',
        data: viewsArray,
        backgroundColor: 'rgba(40, 50, 50, 0.2)',
        borderColor: 'rgba(40, 50, 50, 1)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

myContainer.addEventListener('click', mouseClick);
