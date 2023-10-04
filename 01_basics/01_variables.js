const accountId = 144443
let accountEmail = "himanshu@email.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState; // by default it is undefined

// accountId = 2 // not allowed

/*
do not use var often 
because it has probelm with block scope
*/

console.log(accountId);

console.table([accountEmail, accountPassword, accountId, accountCity, accountState])