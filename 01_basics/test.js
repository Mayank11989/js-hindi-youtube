const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 not allowed 

/*
prefer not to use var 
beacause of issue in block scope and functional scope
*/

accountEmail = "hcQhc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);