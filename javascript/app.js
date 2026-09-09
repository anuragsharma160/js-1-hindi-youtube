// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4, 

//     printMarks: function(){
//         console.log("marks =", this.marks);
//     }
// }

// =====================================================

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary: 50000,
//     calcTax(){
//         console.log("tax rate is 20%");
//     }
// }

// karanArjun.__proto__ = employee

// ================================================================

// Class

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand = brand
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus")

// ==================================================================

// Constructor

// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand
//         this.mileage = mileage
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotaCar("fortuner", 10); // constructor
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12); // constructor
// console.log(lexus);

// ==========================================================================

// Inheritance in JS

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }

// let obj = new Child();

// ===============================================================================

// Inheritance in JS (better example)

// class Person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treats patients");
//     }
// }

// let shradhaObj = new Engineer();

// ==========================================================================

// Method Overriding

// class Person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treats patients");
//     }
// }

// let shradhaObj = new Engineer();

// ============================================================================

// Constructor in Person class (Parent class)

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treats patients");
//     }
// }

// let shradhaObj = new Engineer();

// ==========================================================================

// Super keyword

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     constructor(branch){
//         super(); // to invoke parent class constructor
//         this.branch = branch
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");

// ===================================================================================

// ab sequence hume exactly pata karna hai ki
// konsa constructor pehle call hua
// to uska best tarika yeh hai ki

// class Person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super(); // to invoke parent class constructor
//         this.branch = branch
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");

// ===================================================================================

//  interesting cheej (super(name))

// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     constructor(name){
//         super(name); // to invoke parent class constructor
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");

// ================================================================================

// iske alawa super ko hum apni jo parent class hoti hai
// uske kuch kuch methods ko invoke karne ke liye bhi use kar sakte hai
// for eg -- har Engineer pehle eat karta hai fir work karta hai

// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     constructor(name){
//         super(name); // to invoke parent class constructor
//     }
//     work(){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");

// ====================================================================================================

// Ab next hum baat karne wale hai about our
// practice questions 

