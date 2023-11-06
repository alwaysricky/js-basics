const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2

accountEmail = "a@gmail.com"

accountPassword = 123

accountCity = "Delhi" /* not a good practice*/
/*
Prefer not to use var becuase of issue in blockscope & functional scope.
*/
// block scope {}
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])