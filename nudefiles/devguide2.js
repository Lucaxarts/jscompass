// var images = [
//   { height: 10, width: 30 },
//   { height: 20, width: 90 },
//   { height: 54, width: 32 }
// ];
// var areas = [];
// var area;
// //lets create a function to handle the area
// // function areaFinder(height , width ){
// //   height=images.height;
// //   width=images.width;
// //   var area=height*width;
// // }
// //console.log(area);
// images.forEach(function(image){
//   area = image.height * image.width;
//   areas.push(area);
// });
// //console.log(areas);
// //challenge 3
// var images = [
//   { height: '34px', width: '39px' },
//   { height: '54px', width: '19px' },
//   { height: '83px', width: '75px' },
// ];

// var heights;
// //use map to create new array of heights 
// heights= images.map(function(image){
//   return image.height;
// });
// //console.log(heights);
// //callenge 4
// var trips = [
//   { distance: 34, time: 10 },
//   { distance: 90, time: 50 },
//   { distance: 59, time: 25 }
// ];

// var speeds;
// speeds= trips.map(function(trip){
//   return trip.distance/trip.time;
// }); 
// //console.log(speeds);
// //chalenge 5
// var paints = [ { color: 'red',code:0000},
//     { color: 'blue' ,code:100011},
//     { color: 'yellow',code:1100653}];

// //console.log(paints.color);
// function pluck(array,property){
//   return array.map((item)=>{
//       return item[property];//as we see na just parameter we dey pass e no mean the name
//   });
// }
// console.log(pluck(paints,'code'));
// // challenge 6
// var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// var filteredNumbers=[];
// numbers.filter((number)=>{
//   if(number>50){
//     return filteredNumbers.push(number);
//   }
// })
// console.log(filteredNumbers);
// // challnge 7
// var users = [
//   { id: 1, admin: true },  
//   { id: 2, admin: false },
//   { id: 3, admin: false },
//   { id: 4, admin: false },
//   { id: 5, admin: true },
// ];

// var filteredUsers=[];
// users.filter((user)=>{
//   if(user.admin===true){
//     return filteredUsers.push(user);
//   }
// })
// console.log(filteredUsers);
//challenge 8
var numbers = [10, 20, 30];
function reject(array, iteratorFunction) {
  return array.filter((number)=>{
    
      return number<15;

  })
}
var lessthan15=(reject(numbers, (number) => {
  //return number >15;
}));
console.log(lessthan15);


