
function sayHello(name) {
return "Hi, Qianqian"
}

function sayHelloEverybody(threeNames) {
  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
return "Bobby, Bruce, Jessy";
}

function getClasses() {
  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
  return ["Computer Science", "Music History", "Musicianship"];
}

function labelOrder(fiveNumbers) {
var numberList = [" 1", " 2", " 3", " 4", " 5"]
numberList[0] = "First" + numberList [0];
numberList[1] = "First" + numberList [1];
numberList[2] = "First" + numberList [2];
numberList[3] = "First" + numberList [3];
numberList[4] = "First" + numberList [4];
return numberList;
}

function calculateVolume(w, l, h) {
var w = 10;
var l = 10;
var h = 20;
var volume = w * l * h;
return volume;

}

function isOdd(n) {
var number = 3;
var remainder = number % 2;
if (remainder > 0){
  return "odd";} else {return "even";}
}
  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {
  var salePrice = 5.99;
  var discount = salePrice * saleAmount;
  return discount;
  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)
}

function getSalePrices(threeOriginalPrices) {
var priceList = [20.50; 60.50; 100.50];
priceList[0] = priceList[0] * saleAmount;
priceList[1] = priceList[1] * saleAmount;
priceList[2] = priceList[2] * saleAmount;
  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter() {
  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!
}
function showCounter() {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}
