console.log(`Welcome to the Burger Shop`);

let toppingsList = [
  { name: `cheese`, price: 0.5 },
  { name: `salad`, price: 0.5 },
  { name: `jalapeno`, price: 0.5 }
];

let saucesList = [
  { name: `nacho cheese`, price: 0.3, quantity: 4 },
  { name: `bbq`, price: 0.3, quantity: 6 },
  { name: `sweet chilli`, price: 0.3, quantity: 3 }
];

function total(myList) {
  var totalPrice = 0;
  // take an array, iterate over that array and add up the price, return the price

  for (var i = 0; i < myList.length; i++) {
    totalPrice += myList[i].price * myList[i].quantity;
  }
  return totalPrice.toFixed(2);
}

var result = total(saucesList);
console.log(result);
