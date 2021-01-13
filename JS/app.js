'use strict';


//  Global Variables:

var arrayOfProducts = [];
var leftProductImg = document.getElementById('left_product_img');
var rightProductImg = document.getElementById('right_product_img');
var middleProductImg = document.getElementById('middle_product_img');
var productSection = document.getElementById('all_products');
var trialsleft = 25;

var shownImages = [];
var productOfList = document.getElementById('productList');
var productCanvas = document.getElementById('productChart').getContext('2d');
var button = document.getElementById('button');
var clearDataBtn = document.getElementById('clearLocalStorage')
button.style.display = 'none';
clearDataBtn.style.display = 'none';
//=======================================

function Product(name, image) { // the main constructer
    this.image = image;
    this.name = name;
    this.url = 'images/' + image;
    this.counter = 0;
    this.timeShown = 0;

    arrayOfProducts.push(this);
}

function storeData() { // to store data 

    localStorage.setItem('product', JSON.stringify(arrayOfProducts));

}

function renderProduct(leftImage, middleImage, rightImage) {
    leftProductImg.setAttribute('src', arrayOfProducts[leftImage].url);
    arrayOfProducts[leftImage].timeShown++;
    rightProductImg.setAttribute('src', arrayOfProducts[rightImage].url);
    arrayOfProducts[rightImage].timeShown++;
    middleProductImg.setAttribute('src', arrayOfProducts[middleImage].url);
    arrayOfProducts[middleImage].timeShown++;
}

function clearLocalStorage() { // to clear storage 

    localStorage.clear();

    arrayOfProducts = [];

}

function checkAndRestore() { 

    if (localStorage.length > 0) {  // check if the local storage has any values in it
        arrayOfProducts = JSON.parse(localStorage.getItem('product')); // restore the data from the local storage

    }
}

function renderChart() {

    var arrayOfProductNames = [];
    var arrayOfProductCount = [];
    var arrayOfProductsShown = [];


    for (var i = 0; i < arrayOfProducts.length; i++) {
        arrayOfProductNames.push(arrayOfProducts[i].name);
        arrayOfProductCount.push(arrayOfProducts[i].counter);
        arrayOfProductsShown.push(arrayOfProducts[i].timeShown);

    }

    var myChart = new Chart(productCanvas, {
        type: 'bar',
        data: {
            labels: arrayOfProductNames,
            datasets: [
                {
                    label: '# of Product Clicks',
                    data: arrayOfProductCount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'


                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Product Times Shown',
                    data: arrayOfProductsShown,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
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

function checkAva(selectedProductName) { 

    for (var index = 0; index < shownImages.length; index++) {
        if (shownImages[index].name === selectedProductName) {
            return true;
        }
    }
    return false;
}

function pickAProduct() {
    do {
        var leftImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        var leftProductImgName = arrayOfProducts[leftImage].name;

    } while (checkAva(leftProductImgName));

    do {
        var middleImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        var middleProductImgName = arrayOfProducts[middleImage].name;
    } while (middleImage === leftImage || checkAva(middleProductImgName));
    do {
        var rightImage = Math.round(Math.random() * (arrayOfProducts.length - 1))
        var rightProductImgName = arrayOfProducts[rightImage].name;
    } while (rightImage === middleImage || rightImage === leftImage || checkAva(rightProductImgName));

    shownImages = [];

    shownImages.push(
        arrayOfProducts[leftImage],
        arrayOfProducts[rightImage],
        arrayOfProducts[middleImage]
    )

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
        clearDataBtn.style.display = 'block';

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
clearDataBtn.addEventListener('click', clearLocalStorage);


function list(event) { 
    event.preventDefault();
    renderChart();
    storeData();
    // var ul = document.createElement("ul");
    // productOfList.appendChild(ul);
    // for (var j = 0; j < arrayOfProducts.length; j++) {
    //     var li = document.createElement("li");
    //     li.textContent = arrayOfProducts[j].name + " had " + arrayOfProducts[j].counter + " votes, and was seen " + arrayOfProducts[j].timeShown + " times.";
    //     ul.appendChild(li);
    // }
}
button.addEventListener('click', list);
checkAndRestore();