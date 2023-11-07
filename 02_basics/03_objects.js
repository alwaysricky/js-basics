// singleton
//

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name" : "Akshay GHai", // to print this you can't use dot notation . you nedd to use square bracket notation
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello jS user");
}
JsUser.greetingtwo = function() {
    console.log(`Hello JS user ${this.name}`);
}
    console.log(JsUser.greeting());
    console.log(JsUser.greetingtwo());
