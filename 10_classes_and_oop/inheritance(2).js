// 10:13

// haa ji bada chota sa eg lenge aur
// inheritance bhi hume samajh mei aa jayega

// to inheritance mei hai kya
// suppose kariye wapas se ek class likhte hai
// class

// iss class ke andar mai User hi le leta hu wapas se
// kyuki Users bahut banane wale ho abhi aage jake hum
// bahut sare backends etc
// bahut kuch banayenge saath mei
// agar aap kahenge to
// class User {

// }

// to suppose kariye iske andar bhi aapne ek
// constructor liya
// constructor ke andar aap User ka username le lete ho (parameter)
// aur kaha ki iss username ko set kar do
// class User {
//     constructor(username){
//         this.username = username
//     }
// }

// to bada hi basic si ek class hai jo ki sirf
// ek username create kar leti hai
// aur ek method bhi hai iske andar
// jisko bol dete hai logMe(){}

// theek hai ji ab yeh logMe kya karta hai
// yeh kuch nahi yeh jo bhi aapne
// username set kara hai uska username ka value de deta hai
// directly
// to isko bol dete hai console.log()
// aur console.log() mei aapko mil jata hai
// console.log(`USERNAME is `)
// yeh lijiye variable inject kar diya
// console.log(`USERNAME is ${}`)
// aur variable ke andar bol diya this.username
// console.log(`USERNAME is ${this.username}`)
// kyuki uske pas current context to hai hi
// class ke pas , to this aapke pas har class mei
// poori sab jagah available hai


// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// 11:12

// to yeh to ho gayi basic class
// basic class aapke pas ayegi
// Lekin ab iss User ko agar aapko koi LMS bana rahe hai
// ya koi ecommerce bana rahe hai 
// to kabhi iss User (class User) ko admin bhi banana padega
// kabhi iss User (class User) ko teacher banana padega
// kabhi student banana padega
// aur username to sabhi ka set karoge hi
// to class lo
// class
// aur usko bolo ki suppose karo ek Teacher class bana rahe hai
// class Teacher
// ki hum uske liye Teacher bana rahe hai
// owner bana rahe hai ya
// Lms bana rahe hai ya jo bhi kar rahe hai

// ab keyword available hai aapke pas extends

// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends

// jaise wahan pe wo prototype hota tha
// aur sab kuch kar dete the,
// ab extends uske upar ek sugar laga diya aapne
// aur isko bola User
// class Teacher extends User{}

// theek hai ji to User laga diya
// that's it ab aapke pas sari functionality uski available hai
// (class User ki functionality class Teacher ke pas available hai)

// ab kya hai ki yeh constructor (class User ka constructor/ Parent Class ka constructor)
// aap overwrite karna hi chahoge
// vaise marji hai to mat karo
// koi dikkat nahi hai 
// but aap over write karna hi chahoge
// kyuki Teacher (class Teacher) ka alag hi
// constructor hona chahiye
// technically to hona chahiye

// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(){}
// }

// to kya kya values loge aap (child ke constructor ke parameter mei)
// ab Teacher ban raha hai to obvious si baat
// hai aap usse username to lenge hi lenge
// constructor(username){}
// kyuki extend kar rahe hai to username pass karke
// set to kar hi denge
// 12:06

// aur uska email bhi le rahe ho aap
// password bhi le lete hai
// constructor hote hi username se aap email, password
// sab le rahe ho
// ( constructor hote hi Teacher se aap username, email, password
// sab le rahe ho )
// ab dekhiye email set karna koi dikkat wali baat hi nahi
// hai
// this.email = email
// this.password = password



// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             this.username = username
//             this.email = email
//             this.password = password
//         }
// }


// ab username ka kya kiya jaye (parameter of child constructor)
// abhi humne kahani padhi thi wo call etc karna padega (call function)
// fir this bhi pass karna padega
// ha ji karna padta tha
// maine kiye hai hajaro bar kiye hai
// ab nahi karta
// kyuki ab class ka syntax hai to kyu hi karu

// ab seedha sa ek keyword call karta hu
// ki yeh lijiye super keyword
// aur super keyword call kiya
// aur bola ki aap ek kaam karo
// yeh jo username hai na
// aap le jao
// super(username)


// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }
// }


// to automatically kya karega yeh super keyword
// refer karega ki bhaisahab konsi class extend kar rahe the
// theek hai ji iss class (class User) ko kar rahe the
// to iss class (class User) ke andar jata hu
// iss constructor ke andar jata hu 
// (parent ke constructor ke andar jata hu)
// saath mei mai automatically aap kuch mat bolo
// mai (super) this apne aap behind the scene apne aap le jaunga
// (this.username = username)
// 13:09

// wahan pe jaake username set kar dunga  (this.username = username , LHS)
// uss username ki value yahan pe ho jayegi (this.username = username , RHS)
// aur aap (Teacher) directly uska (username)
// access bhi yahan pe (Teacher class) le paoge
// 13:16

// to dekha isliye kehta hu behind the scene bhi seekho
// ab aage chalte hai
// 14:00
// ab parent mei logMe function tha
// child mei kya bolenge
// teacher bol lete hai ya fir
// addCourse ka feature de dete hai
// ki teacher addCourses ko add kar sakta hai
// to yeh lijiye teacher ne course add kar diya 
// addCourses(){}

// aur console.log kar lete hai usko
// aur to kya hi karenge
// console.log(`A new course was added by`);
// aur yahan pe variable inject kar lete hai
// console.log(`A new course was added by ${}`);

// theek hai to this.username hi kar lete hai 
// taki wo testing bhi ho jayegi ki hai bhi
// ya nahi access username ka
// console.log(`A new course was added by ${this.username}`);

// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }

//         addCourse(){
//             console.log(`A new course was added by ${this.username}`);
            
//         }
// }

// to chaliye ek object bana lete hai ab iss Teacher se
// kyuki kaafi ho gaya hai 
// vaise aap chaho to aur bhi iske andar values etc kar sakte ho
// but theek hai ek bana lete hai
// const chai
// chai hi humara 1st user hota hai

// Teacher se humne bana liya
// const chai = Teacher()
// ab teacher se banate usne
// kya kaha ki mujhe kya kya do
// ek mistake kari hai (new keyword nahi likha)

// const chai = Teacher("chai", "chai@teacher.com", "123")
// console.log karke dekhte hai
// console.log bhi karne ki jarurat nahi hai
// kyuki direct method hai wahan pe addCourse console.log
// hi kar raha hai
// to theek hai ji
// chai dot
// chai.
// aur aapke pas hai addCourse
// chai.addCourse()



// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }

//         addCourse(){
//             console.log(`A new course was added by ${this.username}`);
            
//         }
// }

// const chai = Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse()

// save and run
// o/p C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\inheritance.js:19
// const chai = Teacher("chai", "chai@teacher.com", "123")
//              ^

// TypeError: Class constructor Teacher cannot be invoked without 'new'
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\inheritance.js:19:14)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0

// new keyword use kara as follows




// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }

//         addCourse(){
//             console.log(`A new course was added by ${this.username}`);
//         }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse()

// save and run
// o/p A new course was added by chai

// A new course was added by chai (see o/p)
// to dekhiye username bhi jaa raha hai
// pass hoke bhi aa raha hai
// koi call use nahi ho raha hai (call method)
// but iska matlab yeh nahi ki call padhenge hi nahi

// abhi use nahi ho raha hai theek hai lekin
// use to ho hi raha hai
// 16:21

// achha ab ek cheej aur dekh lete hai yahan pe
// ki theek hai ab ek user , User (class User) se bhi bana lein
// to theek hai tea bana lete hai
// const tea
// masalaChai bana lete hai
// const masalaChai = new User()

// ab User ko kya chahiye
// User ko sirf ek username chahiye
// (see constructor of parent class)
// username de dete hai isko
// const masalaChai = new User("masalaChai")

// ab kya mere pas important question yeh hai
// ki yeh jo masalaChai hai
// kya iske pas bhi addCourse ka access hai ya nahi
// const masalaChai = new User("masalaChai")
// masalaChai.addCourse()



// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }

//         addCourse(){
//             console.log(`A new course was added by ${this.username}`);
//         }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse()

// const masalaChai = new User("masalaChai")

// masalaChai.addCourse()


// save and run

// o/p A new course was added by chai
// C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\inheritance.js:29
// masalaChai.addCourse()
//            ^

// TypeError: masalaChai.addCourse is not a function
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\inheritance.js:29:12)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0

// theek hai humare masalaChai ke pas acces kya hai
// logMe ka access hai

// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }

//         addCourse(){
//             console.log(`A new course was added by ${this.username}`);
//         }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse()

// const masalaChai = new User("masalaChai")

// masalaChai.logMe()


// o/p A new course was added by chai
// USERNAME is masalaChai

// achha yeh jo logMe hai
// kya chai ke pas bhi available hai


// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }

//         addCourse(){
//             console.log(`A new course was added by ${this.username}`);
//         }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")

// // chai.addCourse()
// chai.logMe()

// const masalaChai = new User("masalaChai")

// masalaChai.logMe()

// o/p USERNAME is chai
// USERNAME is masalaChai

// kyuki inherit kar rahe hai
// to chai ke pas bhi logMe available hai
// achha ji ab dono (logMe , addCourse) alag alag classes se
// banke aye hai 
// to kya mai agar console.log karu
// console.log();

// ki yeh jo chai hai
// console.log(chai);
// kya yeh equal hai
// console.log(chai ===);
// masalaChai ke
// console.log(chai === masalaChai);
// ha ji yeh bada interesting sawal poch
// liya aapne
// poch liya to karke bata dete hai

// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//         constructor(username, email, password){
//             super(username)
//             this.email = email
//             this.password = password
//         }

//         addCourse(){
//             console.log(`A new course was added by ${this.username}`);
//         }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")

// // chai.addCourse()
// chai.logMe()

// const masalaChai = new User("masalaChai")

// masalaChai.logMe()

// console.log(chai === masalaChai);

// o/p USERNAME is chai
// USERNAME is masalaChai
// false

// to isne kaha false
// dono ek nahi hai
// (17:58)

