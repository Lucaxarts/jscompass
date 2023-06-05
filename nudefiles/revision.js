function car(model){
  this.model;
}
var cars=[
  new car("toyota"),
  new car("benz"),
  new car("bmw"),

]
var sortedCar=[];
for(let i = 0; i <= cars.length; i++){
  if(cars[i].model==="benz"){
    sortedCar.push(cars[i]);
  }
}
console.log(sortedCar);


cars.find(function(car){
  return car.model==="bmw";
})
console.log(car.model);



















var products = [
  { productName: "banana", type: "fruit",quantity:100,price:20 },
  { productName: "orange", type: "fruit",quantity:30,price:10 },
  { productName: "brocoli", type: "vegetable" ,quantity:105,price:20},
  { productName: "onion", type: "vegetable",quantity:100,price:14 },
]
products.filter(function(product){
  if(product.type==="vegetable"&&product.quantity>50){
    return console.log(product.productName+"is a vegetable and is in stock");
  }
})



