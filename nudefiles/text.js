// use map to modify records in some list of data 
var cars = [
    { model: "toyota", price: "cheap" }, // we have objects in the curly braces 
    { model: "benz", price: "expensive" },

]
var models = cars.map(function (car) {
    return car.model;
});
console.log(models);
//for prices

var prices = cars.map(function (car) {
    return car.price;
});
console.log(prices);



var products = [1, 2, 4, 5];
var filteredProducts = [];
// by for loops
for (let i = 0; i <= products.length; i++) {
    filteredProducts.push(products[i] * 2);
}
console.log(filteredProducts);
//  by use of the map array helper 
var doubledValues = products.map(function (number) {
    return number * 2;
})
console.log(doubledValues);
// another map example
var products = [
    { productName: "banana", type: "fruit" },
    { productName: "orange", type: "fruit" },
    { productName: "brocoli", type: "vegetable" },
    { productName: "onion", type: "vegetable" },
]
var filteredProducts = [];
// lets implement the use of filter

// products.forEach(function(product){
//     console.log(product);
// })
var vegetables = products.map(function (product) {
    if (product.type === "vegetable") {
        return console.log(product.type);
    } else {
        return null; // exception
    }
    
})
// products.filter(function (product) {
//     try {
//         if (product.type === "vegetable" && product.productName === "brocoli") {
//             return console.log(product.car);
//         }

//     } catch (e) {
//         console.log(e);
//     }
// })
// function hello() {
    
// }
// for(let i=0;i<=products.length;i++){
//     if (products[i].type==="vegetable"){
//     filteredProducts.push(products[i]);
    
// }
// }
// console.log(filteredProducts);







// say we wanna pluck only vegetables
// by for loops





















// we use the forech fn while calling a method multiple times passing a different argument each time
// var clothes=["trouser","shirt","boxer"];
// clothes.forEach(function(clothe){
//     console.log(clothe);
// });
// // or by for loop
// console.log("by using for loop");
// for(let i=0;i<=clothes.length;i++){
//     console.log(clothes[i]);
// }
// //initializing the sum
// var sum=0;
// // numbers.forEach(function(number){
// //     sum+=number;
// // })
// //console.log(sum);

// // by use of a new functiion
// function adder(number){
//     sum+=number;
// }
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color');

function pluck(array, property) {
    
}

// numbers.forEach(adder);
// console.log(sum);








