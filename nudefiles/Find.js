var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;
admin=users.find((user)=>{
  return user.admin===true;
})
//console.log(admin);
//chalenge 2
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;
account=accounts.find((account)=>{
  return account.balance===12;
})
//console.log(account);
//challenge 3
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];
function findWhere(array, criteria) {
  return array.find((Object)=>{
    return Object[criteria];
  })
}
//console.log(var done=console.log(findWhere(ladders,))
//);