// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
//     printFullName: function(){
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

// name.printFullName()
// o/p Akshay Saini

// =================================================================

// Repeatation

// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
//     printFullName: function(){
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

// name.printFullName()

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
//     printFullName: function(){
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

// name2.printFullName()
// o/p Sachin Tendulkar
// ==========================================================================

// To avoid repeatation call method comes into picture
// using call method we can do function borrowing
// we can borrow functions from other objects and 
// use it with the data of some other objects

// First take the function whcih needs to be called

// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
//     printFullName: function(){
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

// name.printFullName()

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }

// name.printFullName.call(name2)
// o/p Sachin Tendulkar

// Its quite useful like we can borrow functions from other methods
// and thats how we do it

// ==========================================================================

// However in general case we don't keep our methods inside
// these objects like this if we want to reuse them
// Rather we just take them off and keep it somewhere outside like this as follows

// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
// }

// let printFullName = function(){
//         console.log(this.firstname + " " + this.lastname);
//     }

// printFullName.call(name)
// // o/p Akshay Saini

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }

// printFullName.call(name2)
// // o/p Sachin Tendulkar

// ====================================================================================

// What if we had more parameters into this function ( let printFullName = function(){ )
// hometown
// parameter hometown as it is pass kar diya

// first parameter will always be the reference to the this keyword
// and the later arguments will be the arguments of the function's parameter (hometown in this case)

// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
// }

// let printFullName = function(hometown){
//         console.log(this.firstname + " " + this.lastname + " from " + hometown);
//     }

// printFullName.call(name, "Dehradun")
// // o/p Akshay Saini from Dehradun

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }

// printFullName.call(name2, "Mumbai")
// // o/p Sachin Tendulkar from Mumbai

// ================================================================================================

// Now our printFullName method had more parameters

// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
// }

// let printFullName = function(hometown, state){
//         console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
//     }

// printFullName.call(name, "Dehradun", "Uttarakhand")
// // o/p Akshay Saini from Dehradun , Uttarakhand

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }

// printFullName.call(name2, "Mumbai", "Maharashtra")
// // o/p Sachin Tendulkar from Mumbai , Maharashtra

// =============================================================================================================

// More parameters as many as you want comma , separated

// ==============================================================================================================

// Apply method

// Now lets talk about the apply method
// The only difference between the call and apply method 
// is the way we pass arguments

// The first argument will always be the reference to the this keyword
// The second argument is list to the arguments what we have to pass in the function
// So instead of passing these arguments individually ("Mumbai", "Maharashtra") in the call method
// in apply method we pass these arguments in a array list ( ["Mumbai", "maharashta"] )

// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
// }

// let printFullName = function(hometown, state){
//         console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
//     }

// printFullName.call(name, "Dehradun", "Uttarakhand")
// // o/p Akshay Saini from Dehradun , Uttarakhand

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }

// // Function borrowing
// printFullName.call(name2, "Mumbai", "Maharashtra")
// // o/p Sachin Tendulkar from Mumbai , Maharashtra

// printFullName.apply(name2, ["Mumbai", "Maharashtra"])
// // o/p Sachin Tendulkar from Mumbai , Maharashtra

// // In call method, we pass these arguments 
// // individually comma , separated ("Mumbai", "Maharashtra")

// // In apply method, we will pass it as a second argument
// // as an array list ( ["Mumbai", "Maharashtra"] )

// ===================================================================================

// Bind method

// 7:27

// The bind method looks exactly the same as the call method
// but the only difference is instead of directly calling this method
// over here ( printFullName.call(name2, "Mumbai", "Maharashtra") )
// the bind method binds this method printFullName with a object (let name = {})
// and returns as the copy of that method ( printFullName ) for future invoke
// of the copy of that method ( printFullName )
// lets see how it does that

let name = {
    firstname: "Akshay",
    lastname: "Saini",
}

let printFullName = function(hometown, state){
        console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
    }

printFullName.call(name, "Dehradun", "Uttarakhand")
// o/p Akshay Saini from Dehradun , Uttarakhand

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}

// Function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra")
// o/p Sachin Tendulkar from Mumbai , Maharashtra

printFullName.apply(name2, ["Mumbai", "Maharashtra"])
// o/p Sachin Tendulkar from Mumbai , Maharashtra

// Bind Method
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra")
console.log(printMyName);
// o/p ƒ (hometown, state){
    //     console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
    // }

// This ( printMyName ) is a function which can be invoked later whenever we want
// If we have to invoke this method, we can do it as follows

printMyName()
// o/p Sachin Tendulkar from Mumbai , Maharashtra






// So what it ( bind ) will do is, 
// it will create a copy of printFullName
// and it will bind that to name2 object
// and will return a function

// So there is a catch over here 
// that it ( bind ) doesn't directly
// calls that method 
// like we called it directly (in call method) 
// and prints it to the console
// rather than it will returns us a method
// which can be called later
// So we can see this by logging this printMyName method
// console.log(printMyName)

// So this is basically used to just bind and keep a copy of that method
// and use it later
// The only difference between call and bind is like
// it ( bind ) gives you a copy but which can be
// invoked later, 
// rather than (as in call method) directly
// invoking it where ever we are writing this line of code
// ( printFullName.call(name2, "Mumbai", "Maharashtra") )

// Class End

// =====================================================