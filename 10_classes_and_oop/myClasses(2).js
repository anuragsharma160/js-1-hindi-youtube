// Class 45

// 1:26

// Ek cheej dhyan rakhiyega ki yeh sara sab kuch
// ho raha hai ES6 ke baad
// aap jo bhi js use kar rahe ho wo ES6 ke baad hi kar rahe ho
// abhi to bahut dhoor aa gaye ho aap actually mei
// but yeh sara ES6 ke baad ki kahani hai
// aur yeh syntactical sugar hi hai abhi bhi
// sara kaam aapka new keyword aur wo sab wahin se
// ho raha hai but theek hai internally abhi hume pata 
// lag gaya hai to theek hai ab use karte hai

// sabse achha jo syntax hai yahan pe
// jo aapko milta hai wo kuch aapko constructor base hi milta hai
// jo ki new keyword andar behind the scene
// wo kar raha tha itna sab 
// ab actually mei aap usko control kar sakte ho
// to haa ji class ek keyword hai ab js ke andar
// class

// color bhi change hua hai (2:02)
// (class keyword ka color bhi change hua hai)
// to matlab hai yahan pe keyword
// aur iske baad aap class bana sakte ho
// to jaise suppose karo aapko ek User banana hai
// class User

// theek hai ji humare pas User yeh ek class ho gayi hai
// directly aap aa jayiye seedha curly braces likh dijiye
// class user {

// }

// haa ji to ab aapko wo object banana , function banane
// ki jarurat nahi hai , seedha class likhiye ( class User {} )
// aur actually mei valid syntax hai

// ab class ke andar aapke pas aur bhi bahut sari
// cheejein ho sakti hai,
// aap iske ( class ke ) andar properties bhi add kar sakte hai,
// functions bhi add kar sakte hai
// hum karenge bhi (2:24)

// sabse important hai aapka constructor yahan pe
// class User{
//     constructor
// }

// constructor kab call hota hai 
// jaise hi class se ek object initialize hoga
// yani ki wo jo new keyword hai na
// wo jaise hi kaam mei loge
// vaise hi constructor apne aap call ho jata hai
// bas itni si hi to baat hai
// class User{
//     constructor()
// }

// ab aap User bana rahe ho to obvious si baat hai
// isse (User se) username bhi loge
// aur suppose kariye email bhi le rahe hai
// class User{
//     constructor(username, email)
// }

// aur bhi cheejein le sakte hai
// email bhi le lete hai
// password bhi le rahe honge ho sakta hai
// chaliye 3 cheejon ke saath chal lete hai
// jada to nahi chalenge
// class User{
//     constructor(username, email, password)
// }

// to iske (constructor) saath karna kya hai
// wo hi teeno cheejon ko set kar do variable mei
// taki har koi access kar paye
// to this.username jo hoga wo set kar do username pe
// (this.username = username)
// ha ji context likhna padega
// context ke bina kaam nahi chalega
// isliye (context ke liye) to this keyword use kar rahe hai
// 3:03

// to this.email bhi le lete hai
// aur usko bhi bol dete hai ki yeh lijiye email
// pe set kar diya
// this.email = email

// ek aur bacha hua hai
// this.password 
// aur isko set kar diya password pe

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
// }

// theek hai yeh to aapka basic constructor ho gaya
// vaise constructor har bar likhna jaruri nahi hai
// but theek hai power mil rahi hai opportunity
// mil rahi hai to le lete hai

// ab iske baad ek method bhi hai encryptPassword
// kyuki ho sakta hai password clear text format mei
// to nahi rakhoge to encrypt kar do
// to seedha hi aap likh lijiye yeh lijiye
// encryptPassword(){}
// aur yeh lijiye
// encryptPassword(){

// }
// direct hi , haa isme (class) aisa syntax hai
// aapko function etc sab use nahi karna padta
// hai dekhiye yeh function hi (encryptPassword(){})
// but kyuki class ke andar aa gaye hai to iska naam
// badal denge hum, 
// kyu badlenge, programmers hai badalne mei maja aata hai
// naam etc ko, to ab isko method bolne lag gaye hai

// jaise yahan pe bhi to hai (username, email, password )
// yeh parameters hai inko hi bahut sare naam se bhi jana jata hai
// alag alag syntax hai aapke pas yahan pe parameters hai iske
// references hai bahut sare naam
// but abhi wapas aate hai yahan pe

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){

//     }
// }

// to yahan pe kya kar rahe hai to hum isko return kar dete hai
// iss method ko jo bhi call karega usko bol dete hai hum ki
// aapko vapas kya denge this.password
// return this.password
// aur ya fir hum kya karte hai usko return kar dete hai
// actually mei ek string return kar dete hai add karke
// return ``
// to ek variable le lete hai , yeh lijiye variable le liya
// return `${}`
// variable ke andar this.password
// return `${this.password}`
// aur uske saath hi hum usko add kar dete hai kuch abc
// return `${this.password}`abc
// to theek hai, yeh hi humara password hai , jada kuch creative
// to humne kiya nahi hai but samajh gaye aap bhavnao ko ki kya
// karna chah rahe hai

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// to yeh save
// ab isse ek user bana lete hai
// to theek hai wo hi humara favourite user chai
// const chai
// ab new keyword use kariye 
// aur new keyword use karke ek User aapne create kar liya
// const chai = new User()
// ab User create karte hi 3 cheejein aapse maang raha hai
// username, email aur password de do
// const chai = new User("chai", "chai@gmail.com", "123")
// password humne diya "123", to abc wo khud hi add kar dega

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// ab usko console.log bhi kara ke dekh lete hai ki
// password encrypt kara do humara
// jo chai hai uske andar se encrypt password ko le auo
// aur usko encrypt kar do
// console.log(chai.encryptPassword());

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());


// save and run
// o/p 123abc

// usne kaha 123abc , theek hai ji ho gaya password encrypt
// ab password to encrypt ho gaya but kya behind the scene iska bhi
// jaan na chahoge
// yes
// aur bhi methods add karein iske (class) andar
// chaliye karte hai
// username le rahe hai to username suppose kariye hume
// sab kuch lower letter mei mila hai but
// hum isko capitalize karna chahte hai

// to iska (new method) naam de dete hai
// changeUsername(){}
// return kar dete hai value ko wo hi back ticks ke andar
// return `${this.username}`
// aur iske baad aap ispe method bhi laga sakte ho
// to kya method lagayein
// to suppose kariye ki aap iske andar method laga dete hai
// toUpperCase()
// return `${this.username.toUpperCase()}`
// pata nahi kyu kar rahe hai but haa yahan par case


// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());

// kya iss method (changeUsername(){) ko bhi use kar sakte hai hum
// haa ji test kar lete hai
// console.log(chai.changeUsername());



// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());

// console.log(chai.changeUsername());

// save and run
// o/p 123abc
// CHAI

// sab upper case mei ho gaya
// capitalize bhi kar sakte the but theek hai

// ab aate hai iske under the hood ki actually mei kaam 
// ho kaise raha tha
// agar yeh mujhe class ka syntax nahi mila hota ( class User{} )
// to mai kaise kar raha hota

// to iska likh lete hai hum behind the scene 
// behind the scene 
// kyuki aapko bhi achha lagega behind the scene  likha hai humne
// to kya kara hai sabse pehle ek function create hota
// iss function ka naam hota User
// (class ka naam User hi liya hai)

// behind the scene 
// function User(){

// }

// parameter same hote to parameter same le lete hai
// username , password aur email ko

// behind the scene 
// function User(username, email, password){

// }

// yeh parameter le liye 
// ab yeh parameter lete ,
// to yeh wala kaam (this. username = username etc)
// to same hi karte iske andar

// behind the scene 
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// to aapne ek function call kiya (7:16)
// theek hai ji yeh hi kaam waha pe bhi hota
// ab iss function ke andar aur bhi hume kuch properties
// etc ya kuch bhi inject karni padti
// to User dot
// bahut sare tarike hai vaise to
// User.prototype.
// aur naam humne kya kya likhe hai yahan pe
// encryptPassword
// to theek hai ji yeh hi naam same hum yahan pe likh lete hai
// kyuki behind the scene likh rahe hai hum
// User.prototype.encryptPassword
// to encryptPassword aap kuch iss tareh se likhte (just above)

// aur isko bolte ki aap kya ban jayiye ek function ban jayiye
// User.prototype.encryptPassword = function(){

// }
// theek hai ji function ban jate hai

// behind the scene 
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){

// }

// ab iss function ke andar kya karna padta 
// kyuki isi ( User.prototype.encryptPassword = function(){ ) ke andar
// directly injected hai (7:48)
// to aapka baki ka sara code same hi hota
// ki return `${this.password}abc`
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// to yeh lijiye 1st method ban gaya
// isi tareh se 2nd method bhi ban jata
// koi dikkat wali baat hi nahi thi

// behind the scene 
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
    // return `${this.password}abc`
// }

// ab iska usecase kaise hota jaise yeh usecase hua hai
// as follows

// ( const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername()); , see code)

// exactly same vaise ka vaisa hi usecase aapke pas aata

// behind the scene 
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// theek hai to yahan chai ki jagah tea likh lete hai
// 2nd method changeUsername bhi likh lete hai

// behind the scene 
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsernamme = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// to humne exactly uska behind the scene bana liya hai ki agar
// mujhe yeh functionality class wali ( class User{} )
// nahi available hoti
// to aisi koi dikkat wali baat nahi thi
// pehle hum isi tareh se kaam kar rahe the as follows
// ( behind the scene 
// function User(username, email, password){ )

// kyuki ab maine dekh liya hai ki yeh jo
// User hai actually mei
// ( behind the scene 
// function User(username, email, password){ )
// yeh function hai but yeh object ki tareh bhi behave karta hai
// (8:42)

// isilye mai jaa ke iske andar se prototype (as follows)
// ( User.prototype.encryptPassword = function(){
// User.prototype.changeUsernamme = function(){ )
// aur yeh sare kaam yahan pe inject kar sakta hu (just above)

// to ab agar itna sara kaam mai kar raha hu to 
// agar mai // behind the scene , 
// ke pehle ka sara code comment out kar du
// to bhi yeh sara kaam to hona chahiye technically
// aur hoga bhi


// // class User{
// //     constructor(username, email, password){
// //         this.username = username
// //         this.email = email
// //         this.password = password
// //     }

// //     encryptPassword(){
// //         return `${this.password}abc`
// //     }

// //     changeUsername(){
// //         return `${this.username.toUpperCase()}`
// //     }
// // }

// // const chai = new User("chai", "chai@gmail.com", "123")

// // console.log(chai.encryptPassword());
// // console.log(chai.changeUsername());


// // behind the scene 

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// save and run
// o/p 123abc
// TEA

// to baki humara kaam ho raha hai exactly
// // behind the scene, ke pehle ka sara code comment on kar liya
// chaliye aapko behind the scene bhi sare pata lag gaye
// ki kaise kaise hota hai aur chaliye itna


// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// // behind the scene 

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// ab chalte hai hum thodi si aur aage ki baat pe
// nayi file hi bana lete hai
// uske liye thode se inheritance ki bhi baat kar lete hai
// ab pata to lag gaya hai prototype se inheritance aa jata hai
// prototypal feature to nahi kahunga
// prototypal behaviour hai js ka
// to wo behaviour agar aapko forcefully karana ho
// to bhi aap kara sakte hai
// ab to syntax available hai

// to inheritance.js file bana li 10_classes_and_oop folder ke andar
// 10:13