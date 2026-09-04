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

class Person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treats patients");
    }
}

let shradhaObj = new Engineer();