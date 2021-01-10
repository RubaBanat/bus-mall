'use strict';


//  Global Variables:

var arrayOfProducts = [];
var leftProductImg = document.getElementById('left_product_img');
var rightProductImg = document.getElementById('right_product_img');
var middleProductImg = document.getElementById('middle_product_img');
var productSection = document.getElementById('all_products');
var trialsleft = 25;

var productOfList = document.getElementById('productList'); 
var button = document.getElementById('button');
button.style.display= 'none';
//=======================================

function Product(name, image) {
    this.image = image;
    this.name = name;
    this.url = 'images/' + image;
    this.counter = 0;
    this.timeShown = 0;

    arrayOfProducts.push(this);
}

function renderProduct(leftImage, middleImage, rightImage) {
    leftProductImg.setAttribute('src', arrayOfProducts[leftImage].url);
    arrayOfProducts[leftImage].timeShown++;
    rightProductImg.setAttribute('src', arrayOfProducts[rightImage].url);
    arrayOfProducts[rightImage].timeShown++;
    middleProductImg.setAttribute('src', arrayOfProducts[middleImage].url);
    arrayOfProducts[middleImage].timeShown++;
}

function pickAProduct() {
    var leftImage = Math.round(Math.random() * (arrayOfProducts.length - 1))

    do {
        var middleImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        } while (middleImage === leftImage);
        do {
            var rightImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
    } while (rightImage === middleImage || rightImage === leftImage);


    renderProduct(leftImage, rightImage, middleImage);

}

function checkProduct(objectIndicator) {
    for (var index = 0; index < arrayOfProducts.length; index++) {
        if (arrayOfProducts[index].url === objectIndicator) {
            arrayOfProducts[index].counter++;
            trialsleft--;
        }
    }
}

function countProduct(event) {
    
    var targetId = event.target.id;
    if (trialsleft !== 0) {
        if (targetId === 'left_product_img' || targetId === 'right_product_img' || targetId === 'middle_product_img') {
            var objectIndicator = event.target.getAttribute('src');
            checkProduct(objectIndicator);
            pickAProduct();
        }

    } else {
        productSection.removeEventListener('click', countProduct);
        console.log(arrayOfProducts);
        button.style.display = 'block';
      
    }
}


new Product('Bag', 'bag.jpg');
new Product('Banana', 'banana.jpg');
new Product('Bathroom', 'bathroom.jpg');
new Product('Boots', 'boots.jpg');
new Product('Breakfast', 'breakfast.jpg');
new Product('Bubblegum', 'bubblegum.jpg');
new Product('Chair', 'chair.jpg');
new Product('Cthulhu', 'cthulhu.jpg');
new Product('Dog-duck', 'dog-duck.jpg');
new Product('Dragon', 'dragon.jpg');
new Product('Pen', 'pen.jpg');
new Product('Pet Sweep', 'pet-sweep.jpg');
new Product('Scissors', 'scissors.jpg');
new Product('Shark', 'shark.jpg');
new Product('Sweep', 'sweep.png');
new Product('Tauntaun', 'tauntaun.jpg');
new Product('Unicorn', 'unicorn.jpg');
new Product('Usb', 'usb.gif');
new Product('Water Can', 'water-can.jpg');
new Product('Wine Glass', 'wine-glass.jpg');



pickAProduct();
productSection.addEventListener('click', countProduct);


function list(event){
    event.preventDefault();
    var ul = document.createElement("ul");
    productOfList.appendChild(ul);
    for (var j =0; j<arrayOfProducts.length; j++){
      var li = document.createElement("li");
      li.textContent = arrayOfProducts[j].name + " had "+arrayOfProducts[j].counter +" votes, and was seen "+ arrayOfProducts[j].timeShown +" times.";
      ul.appendChild(li);
    } 
  }
button.addEventListener('click', list);