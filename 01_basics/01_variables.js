const accountId = 144553
let accountEmail = "ammy3108@gmail.com"
var accountPassword = "12345"
accountCity = "Patiala"
let accountState;
// accountId = 2 // not allowed 

accountEmail = "xyz@yt.com"
accountPassword = "7890"
accountCity = "Chandigarh"
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and fucntional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 