// 2:31

// and isi same file ko humne apne browser par khol
// rakha hai hum abhi console window par hai inspect karke
// and app.js ke andar ek bar aa jate hai

// yahan par hum apni normal si simple si object
// create karne wale hai student object
// object banane ke liye hum curly braces {} ka use karte hai

// const student = {

// }

// ab javascript ke andar object banane ke alag alag tarike hote hai
// iss tareh se (const student = {}) object banana ek tarika hai
// baad mei jaake jab hum classes ko padhenge isi chapter ke andar
// to hum ek aur tarika jaan rahe honge ki dusre tareh se hum
// objects ko kaise create kar sakte hai
// 3:09
// to yeh (const student = {}) hota hai direct way of creating an object

// iss sudent object mei kuch properties (variables) likh sakte hai

// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4 
// }

// yeh properties ho gayi ,
// par iske saath hum kuch methods ko bhi define kar sakte hai
// methods ko kaise define karte hai , 2 tarike hote hai
// ya to hum method ka naam likh sakte hai
// for eg ek method hai printMarks
// colon and uske baad function create kar sakte hai

// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4, 

//     printMarks: function(){

//     }
// }

// iss tareh se bhi function ko create kara jaa sakta hai
// nahi to hum chahein to ek arrow function bhi bana sakte hai yahan par
// hum likhenge console.log()

// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4, 

//     printMarks: function(){
//         console.log("marks =", marks);
//     }
// }

// to iss tareh se humari object create ho gayi jiske andar
// properties bhi hai , inn properties ko hum state bhi keh dete hai
// 4:19
// aur dusra iske andar functions bhi hai jinko hum apne methods kehte hai
// jisko hum apne object ka behaviour keh sakte hai
// ab iss object ko hum apne webpage ke upar access kar sakte hai

// (print student in browser console)
// student in browser console , enter
// jasie hi enter kiya humare pas object print hokar aa gayi (in browser console)
// dropdown open student object
// dropdown open printMarks

// hum chahein to student ke liye sirf uska fullname bhi print karwa sakte hai
// student.fullName in browser console and enter
// 'shradha khapra'
// student ke liye sirf marks bhi print karwa sakte hai
// student.marks in browser console and enter
// 94.4
// aur student ke liye apne function ko bhi call kar sakte hai
// student.printMarks() in browser console and enter
// yahan marks is not defined aa raha hai to hum kar lenge this.marks

// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4, 

//     printMarks: function(){
//         console.log("marks =", this.marks);
//     }
// }

// student.printMarks() in browser console and enter
// marks = 94.4
// undefined

// 5:04

// ab sabse pehli cheej humne ek naya this keyword use kara
// pehle hi bataya tha iss chapter ke andar hum bahut sare 
// naye keywords ko use karne wale hai

// this kya naya keyword hota hai
// this ka matlab hota hai jis bhi cheej ki hum baat kar rahe hai
// programming ke andar

// to javascript ke andar jab bhi kisi object ke andar
// hum this ko use kar rahe hai to yahan par this ka matlab hai
// wo hi object, to yahan par this.marks likhne ka basic matlab hai
// ki hum likhna chah rahe hai student.marks 

// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4, 

//     printMarks: function(){
//         console.log("marks =", this.marks); student.marks comment out
//     }
// }

// to jahan bhi humne this likh diya matlab hum iss object (const student = {})
// ki baat kar rahe hai uss object ke andar
// to hum marks wali property ko direct access nahi kar sakte hum marks
// property ko this ke through access kar sakte hai

// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4, 

//     printMarks: function(){
//         console.log("marks =", this.marks);
//     }
// }

// yeh tha normal object
// state -- properties (variables)
// behaviour -- methods (functions)

// par har object jo bhi javascript ke andar
// banti hai uske andar ek special property apne aap
// automatically created hoti hai

// jaise student in browser console and enter
// to student object ke andar ek special property hai which is
// called prototype (dropdown open and see both student and prototype)

// ab yeh prototype apne aap mei kya hai,
// prototype apne aap mei ek object hai
// [[Prototype]]: Object
// aur prototype ke andar kya hai (dropdown open [[Prototype]]: Object)
// kayi different methods different properties
// jaise isPrototypeOf , toString

// for eg toString ek function hai
// student.printMarks in browser console and enter
// ƒ (){
//         console.log("marks =", this.marks);
//     }
// jo humne function banaya tha wo print hokar aa jayega

// student.abc in browser console and enter
// undefined
// undefined kyuki abc humne student ke andar kabhi define hi nahi kiya

// but if i write student.toString and enter in browser console
// ƒ toString() { [native code] }
// is tareh se print karwaya to yahan ek function print hokar aa raha hai

// but humne student object ke andar kabhi toString wala function kabhi
// create hi nahi kiya,
// to student ko yeh toString naam ka function mil kahan se raha hai
// to student ko yeh toString naam ka function humari iss [[Prototype]]: Object
// se mil raha hai (dropdown open [[Prototype]]: Object and see)
// 7:07

// to jab bhi hum koi bhi javascript ki object create karte hai
// uske andar humesha ek special property hoti hai called prototype
// aur yeh jo prototype property hoti hai yeh apne aap mei ek Object hai
// yani ek object ke andar ek aur by default object aa rahi hai called prototype
// aur iske andar kuch special properties and methods honge yani behaviour honge

// ab prototype ka practical implementation batate hai
// for eg we create an array
// let arr = ["apple", "mango", "banana"] in browser console and enter
// undefined
// arr and enter in browser console
// (3) ['apple', 'mango', 'banana']

// ab jab bhi hum array ka type discuss karte hai
// typeOf arr in browser console and enter
// 'object'

// humne pehle baat ki thi ki humara jo typeOf array hota hai 
// wo array nahi hota , 
// wo numbers nahi hota , 
// wo strings nahi hota , 
// wo kya hota hai object hota hai
// (typeOf arr in browser console and enter
// 'object')

// to javascript ke andar array internally ek object hoti hai
// to agar mai apne array ko print karwata hu (arr in browser console and enter)
// to uske andar humare indices aate hai (dropdown open arr and see)
// length aati hai
// par saath ke saath array ke andar automatically ek prototype aata hai
// [[Prototype]]: Array(0) open and see
// aur yeh kya prototype hai yeh array type ka hi prototype hai
// jiske andar kaafi sare different methods and properties hote hai
// dropdown close arr

// ab jab bhi hum js ke andar kisi array ko define karte hai
// maine to array ke andar push karne ke liye koi function create nahi kiya
// pop ke liye function create nahi kiya
// par fir bhi array ke andar dot push karke if i write litchi
// arr.push("litchi"); in bc and enter
// 4
// arr in bc and enter

// to usse array ke andar ek aur naya element push ho jayega
// par iss push function ko maine kabhi define hi nahi kiya
// to yeh exactly aa kahan se raha hai
// to array object ke andar yeh jo push , pop hota hai
// ya different functions and properties hote hai jo by default
// ban jate hai jinko hum use kar rahe hote hai
// wo kahan se aate hai wo humare iss prototype object ([[Prototype]]: Array(0))
// se aate hai

// 8:48

// to actually humari jitni bhi sari ki sari objects hoti hai js ke andar
// wo apni ek basic prototype object se kuch methods
// and properties ko inherit karte hai

// to basically prototype pehle se bana hota hai
// jiske andar kuch properties and methods hote hai jo in general hote hai
// aur fir jab bhi koi object banti hai to
// uske andar prototype ke jo general methods general properties hoti hai
// wo by default inherit hokar aa jate hai
// 9:13

// to isliye jab bhi js ke andar koi object banti hai
// uske andar bydefault hume prototype object dekhne ko milta hai

// ab hum apne khud ke prototypes bhi bana sakte hai
// for eg humne ek nayi object banayi (in code editor)
// const employee = {}
// jiske andar ek function hai calculate tax

// const employee = {
//     calcTax(){

//     }
// }

// har employee ka apna ek tax deduct hota hai

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// employee.calTax() in browser console and enter
// tax rate is 10%
// undefined

// ab for eg company ke andar naye employee aate hai
// inka naam hai karanArjun
// to inke liye ek nayi object banayenge inka data store karane
// ke liye

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary
// }

// 10:14

// ek cheej aapne yahan par notice ki hogi
// jab maine calTax likha to yahan maine bina function
// ke naam se calTax ko directly likh diya
// to basically hum iss tareh se likhte (as follows)
//     (calcTax(){
//         console.log("tax rate is 10%");
//     })
// isko calTax1 agar mai kahun

// const employee = {
//     calcTax1(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary:
// }

// ya fir hum likhte calTax2: function(){} (as follows)

// const employee = {
//     calcTax1(){
//         console.log("tax rate is 10%");
//     },
//     calcTax2: function(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary:
// }

// to calTax1(){} and calTax2: function(){}
// dono hi sahi formats hai
// generally iss tareh ( calTax1(){} )
// se likhenge to avoid extra words

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary: 50000
// }

// koi bhi new employee ( const karanArjun = {} ) 
// aata hai to uske pas 
// calculate tax ( calTax(){} )
// karne ka function hona chahiye

// to abhi to hum karanArjun ko print karwayein
// (karanArjun in bc and enter)
// {salary: 50000}
// to unke pas (new employee) sirf yeh salary hai iske andar
// (dropdown open karanArjun in bc and see)
// aur prototype hai ( [[Prototype]]: Object , open and see)
// jiske andar bydefault jo har ek object
// ke andar functions aate hai wo sare functions hume yahan par
// dekhne ko mil jayenge
// par isme ( [[Prototype]]: Object , open and see) koi calTax
// naam ka function nahi hai

// 11:40

// to agar iss object ke (const employee = {})
// hum functions yani methods and properties ko
// iss object (const karanArjun = {}) ke andar use karna chahte
// hai to hum karanArjun (const karanArjun = {}) 
// ke andar prototype ki tareh
// apne employee (const employee = {}) ko likh sakte hai

// to uske liye humara syntax hota hai --- karanArjun
// karanArjun 
// yani apne object ka naam
// dot underscore underscore
// karanArjun.__
// proto underscore underscore
// karanArjun.__proto__

// to yeh __proto__ hota hai
// this is used to set a prototype
// iski help se hum apne prototype ko set kar sakte hai
// aur prototype ko set karne ka kya matlab hota hai ki
// wo jo dusri object hai jisko hum prototype bana rahe honge
// iss object (dusri obj) ke functions hum apni first obj ke andar use kar payenge
// (iss object (dusri obj) ke andar hum apni first object ke functions use kar payenge)
// 12:20

// karanArjun.__proto__
// obj2 dot prototype =
// karanArjun.__proto__ = 
// humari obj1
// karanArjun.__proto__ = employee (as follows)

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary: 50000
// }

// karanArjun.__proto__ = employee

// to jis object ke functions ko hum use karna chahte hai (employee)
// usko hum dusri object (karanArjun) ka prototype set kar denge

// iss bar hum karanArjun ko print karwayenge
// (karanArjun in bc and enter)
// to uske andar salary to hai hi
// (open karanArjun)
// but if we look at the prototype
// to prototype object ke andar (open prototype object)
// ab ek naya function aa gaya hai called calTax (see bc)

// aur hum chahein to karanArjun ke andar calTax ko use kar sakte hai
// karanArjun.calTax() in bc and enter
// tax rate is 10%
// undefined
// to humare pas tax rate aa jayega
// 12:52

// to jo functions humne employee ke liye
// banaye hai wo functions hume bar bar karanArjun ke liye nahi
// likhne padenge
// kal ko ho sakta hai company ke andar 5 aur naye employees
// aa jayein
// for eg karanArjun was our 1st employee
// karanArjun2 , karanArjun3, karanArjun4
// sabki alag salary ho sakti hai but abhi ke liye use change nahi kar rahe

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary: 50000
// }

// const karanArjun2 = {
//     salary: 50000
// }
// const karanArjun3 = {
//     salary: 50000
// }
// const karanArjun4 = {
//     salary: 50000
// }

// karanArjun.__proto__ = employee

// to yahan har kisi employee ke liye calTax function
// hona chahiye, par calTax function ko kya hume bar bar
// likhna padega objects (karanArjun2 , 3 , 4) ke andar
// nahi hume bar bar likhne ki jarurat nahi hai hum simply 
// kya kar sakte hai har ek object ke proto ke andar 
// assign kar sakte hai apni employee class ko
// as follows

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary: 50000
// }

// const karanArjun2 = {
//     salary: 50000
// }
// const karanArjun3 = {
//     salary: 50000
// }
// const karanArjun4 = {
//     salary: 50000
// }

// karanArjun.__proto__ = employee
// karanArjun2.__proto__ = employee
// karanArjun3.__proto__ = employee
// karanArjun4.__proto__ = employee

// to sabke andar calTax naam ka function aa gaya

// print karanArjun3 in bc
// karanArjun3 in bc and enter
// open prototype in bc
// calTax function aa gaya

// karanArjun3.calTax() in bc and enter
// tax rate is 10%
// undefined

// to prototype exactly kya hota hai
// prototype is a special property jo har ek js object ke andar
// hoti hai
// aur iss prototype ka agar type pochein to
// it is actually a reference to an object
// ya to yeh null hoga ki prototype hai hi nahi
// ya fir mostly cases mei yeh humara reference hoga
// ek object ka

// yani humne employee naam ki object banayi huyi hai
// hum koi karanArjun naya employee leke aa rahe hai 14:16
// aur uske andar prototype mei agar employee aa raha hai
// to wo employee ka regerence hoga address hoga directly
// hum emmployee ko ek tarike se access kar paa rahe honge
// apni nayi object ke andar

// kya exactly matlab hota hai object ka
// kya exactly matlab hota hai prototype ka
// kya exactly matlab hota hai classes ka
// class end tak samajh mei aa jayega
// hope prototype samajh mei aa gaya hai ki kya hai
// aur kaise object ke andar appear karta hai

// =======================================================================

// ab for eg humare pas apni karanArjun wali object thi

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary: 50000
// }

// karanArjun.__proto__ = employee

// aur kyuki karanArjun ki salary high hai to ho
// sakta hai inke liye (karanArjun ke liye) tax rate kuch aur ho
// normal employees ke liye tax rate 10% ho (calTax function)
// ho sakta hai karanArjun ke liye tax deduction 20% hona hai
// to hum kya kar sakte hai karanArjun ke liye ek aur function
// bana sakte hai tax rate is 20%

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

// ab humare dimag mei sawal aa sakta hai
// kyuki karanArjun ke proto mei employee hai
// (karanArjun.__proto__ = employee)
// to karanArjun ke pass prototype mei calTax naam ka function to tha hi
// (calcTax in employee)
// ab khud ka bhi calTax naam ka function hai

// to jab kisi object ke andar
// and uske prototype ke andar
// dono mei same naam hota hai kisi bhi method ka (calTax)
// karanArjun in bc and enter
// karanArjun ke andar calTax naam ka function hai
// aur iske prototype ke andar bhi calTax naam ka function

// to jab hum karanArjun.calTax() ko call karaenge
// karanArjun.calTax() in bc and enter
// tax rate is 20%
// undefined

// Note : If object and prototype have same method
// object's method will be used

// inherit kar sakte hai par
// clash mei object jeetegi
// kyuki object jada specific hai
// prototype se jada nazdeek object hai

// this was all about prototype in js

// ==========================================================================

// Classes in JS

// next hum baat karne wale hai apni classes ke bare mei
// 16:37

// ab ek tarika humne already dekh liya apne objects ko create karne ka
// ek aur tarika hota hai which is through classes

// Classes kya hoti hai js ke andar
// Class is a program code template for creating objects
// iske liye hum ek usecase yani scenario ko imagine karte hai
// for eg toyota hai jisne apni factory banayi huyi hai
// ab toyota ko agar koi bhi car hai jisko manufacture karna hai
// to toyota ke pas apna pora blueprint hoga
// use pata hai agar ek fortuner manufacture hogi to
// uske andar kis tareh engine use hoga
// kis tareh usko build karna hai

// yani sari ki sari jo cars hai wo kya hai ek single template ke
// upar bani huyi hai
// ya fir agar company ke software ke andar
// hume har ek naye employee ko register karna hai
// for eg company ke andar 50 employees hai
// to har ek employee ke liye 
// uski salary save hone wali hai
// uska address save hone wala hai
// uska PAN number save hone wala hai
// naam , email iss tareh ki sari ki sari information store hone wali hai

// 17:29

// ab agar hum 50 different objects ko yani 50
// different employee objects ko create karna chahte hai
// to uske liye bar bar wo sari ki sari information batana
// ki iss object ke liye yeh save karna hai
// iss object ke liye yeh save karna hai
// wo kya hoga wo repeatation ho jayegi

// to jab bhi hume bulk mei similar si objects
// ko create karna hota hai
// to unhe hum create karte hai using classes

// aur classes hume kya deti hai
// classes basically ek object ko banane ka
// ek template deti hai
// ya ise keh sakte hai ek blueprint hota hai

// jaise factory ke andar pata hota hai ki
// koi bhi car agar manufacture hogi
// to uska yeh blueprint hai to sari
// ki sari cars usi blueprint ki tareh bani hui hogi
// 18:06

// agar blueprint ke andar likha hai ki
// sari ki sari cars ka color blue hoga
// to sari manufactured cars ka blue color hone wala hai
// to humne kya kiya ek single template bana diya
// aur ab jitni bhi objects banengi 
// uss template ke through wo sari ki sari
// objects similar dikhegi
// 18:23

// to wo hi template ya wo hi blueprint
// humare programming ke andar js ke andar
// objects ko banane ka humare pas hota hai classes

// ab classes ke through jo bhi objects banti hai
// they will have some variables yani 
// humari jo state hoti hai
// humari jo properties hoti hai
// and they will also have some behaviour yani
// jo functions hote hai objects ke andar

// to humare pas humari jo class hoti hai wo
// actually object ke liye uska blueprint
// hoti hai
// to class ko create karne ke liye hum likhte hai apna 
// class keyword aur fir apni class ka naam
// and class ke andar curly braces ke baad
// hum kuch kuch methods ko 
// kuch kuch properties ko define kar sakte hai ( myMethod(){...} )

// abhi ke liye constructor kya hai isko ignore karna hai
// isko hum detail mei padhenge
// abhi ke liye class keyword fir uska naam
// fir apne methods and properties

// class MyClass{
//     constructor(){}
//     myMethod(){}
// }

// 19:05

// ab for eg mujhe banani hai ek toyota factory
// Toyota
// toyota factory ke andar har ek car ka blueprint hoga
// ya ise hum car keh dete hai ki mujhe ek class banani hai jiska naam
// hoga car
// class Car

// aur iss class ke andar sare ke sare car wale methods and properties
// honge jo har ek single car ke andar hone chahiye 
// jo bhi humare factory mei manufacture hongi

// class Car{

// }

// ab jo bhi car hoti hai
// ya jo bhi ToyotaCar hogi

// class ToyotaCar{

// }

// for eg humne toyota ki factory lagayi hui hai
// to jo bhi toyota ki car hogi har car
// start ho sakti hai
// har car stop ho sakti hai
// to har kisi ke andar hum ek start aur stop ka
// function bana denge

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// to iss tareh humne apni class bana di
// ab class ke andar jab hum do (2) different
// functions ko likhte hai to hume comma ,
// se unhe separate karne ki jarurat nahi hai
// wo already pata hai 
// this is one function (start)
// this is one function (stop)

// to object aur class mei difference hota hai
// class ek single template hoti hai jiske basis
// pe hum bahut sare different different objects 
// ko create kar sakte hai
// 20:19

// to yeh to ho gayi humari toyota car (just above code)
// ab iss template ( class ToyotaCar{} ) ke through
// yani agar (bc) hum apne code ke andar print karein
// if i print toyota car
// ToyotaCar in bc and enter
// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// to toyota car kya hogi it will be a class
// (see bc o/p -- class ToyotaCar{})
// it will not be an object

// 20:34

// ab agar hume iss car se (ToyotaCar) objects ko 
// create karna hai, iss template (ToyotaCar) se
// object ko create karna hai
// to hum kya likh sakte hai
// hum likh sakte hai let 
// let
// apne object ka naam
// let myObj
// =
// let myObj =
// new
// let myObj = new
// aur fir apni class ka naam
// let myObj = new MyClass
// fir ()
// let myObj = new MyClass()

// to yeh syntax (let myObj = new MyClass())
// hota hai kisi bhi class se ek object ko create karne ka
// to for eg hume ek fortuner naam ki ek object
// create karni hai 

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner

// ... to for eg hume ek fortuner naam ki ek object
// create karni hai 
// ek car create karni hai to iske liye
// hum likh sakte hai new
// let fortuner = new
// new humara keyword hota hai jo humare liye ek nayi object 
// ko create karta hai through classes
// aur yahan hum likh sakte hai ToyotaCar()
// let fortuner = new ToyotaCar()
// and iss tareh se apna function (new ToyotaCar())

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar();

// to fortuner kya ban gayi ,
// fortuner ek nayi car ban gayi jo iss template ( class ToyotaCar{} )
// ke upar bani hui hai

// and now if i try to print
// apni fortuner object
// fortuner in bc and enter
// ToyotaCar {}
// to yahan pe kya ayega...
// hume dikh raha hai fortuner ek object hai
// i can write typeOf fortuner in bc and enter
// 'object'

// aur iske andar (fortuner --- ToyotaCar {})
// prototype ke andar humare pas ek constructor aa gaya
// isko ignore karna hai
// start and stop functions aa gaye

// to basically ToyotaCar ( fortuner --- ToyotaCar {} ) 
// humari ek nayi object ban gayi ( fortuner --- ToyotaCar {} )
// jiske andar start and stop yeh functions available hai
// jinko hum use kar sakte hai

// even though yeh jo object hai
// (let fortuner = new ToyotaCar(); mei fortuner)
// isko humne koi function nahi diya
// koi properties nahi di
// par fir bhi agar hum apni car ko start karna chahein
// fortuner.start() in bc and enter
// start
// undefined
// 21:47
// to hum start kar sakte hai
// agar hum iss car ko stop karna chahein
// fortuner.stop() in bc and enter
// stop
// undefined
// to hum ise stop kar sakte hai
// 21:52

// aur jaise humne yeh ek object banayi
// ( let fortuner = new ToyotaCar(); )
// aise hi hum koi dusri object bhi bana sakte hai
// for eg i create a new car called lexus

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar();
// let lexus = new ToyotaCar();

// save
// and now if i go and see
// if i print fortuner
// fortuner in bc and enter
// ToyotaCar {}
// to 1st car (fortuner) ke andar bhi
// prototype ke andar we have start and stop function
// (dropdown open and see)
// fortuner.start() in bc and enter
// start
// undefined
// lexus.start() in bc and enter
// start
// undefined

// to even though humne lexus ke liye koi aur function nahi likha
// kuch aur nahi likha
// but kyuki simply lexus ko humne iss class ( class ToyotaCar{} )
// ko use karke banaya hai
// ( let lexus = new ToyotaCar(); )
// iss template ( class ToyotaCar{} )
// ko use karke banaya hai 
// to iss line ( let lexus = new ToyotaCar(); )
// ka matlab yeh hai ki iss class ( let lexus = new ToyotaCar(); mei ToyotaCar())
// se jo properties , methods hai 
// wo sare ke sare humare iss lexus object ke andar
// store ho jayein aur unhe hum use kar payenge

// hum variable bhi define kar sakte hai
// for eg hum likh sakte hai setBrand
// setBrand(){

// }

// hum ek nayi property bana sakte hai class ( class ToyotaCar{} ) ke andar
// jo bolegi ki iss class (class ToyotaCar{})
// ko use karke jitni bhi objects banti hai
// setBrand(){
//    this.
// }

// unke andar yeh ek function hoga ( setBrand(){} )
// jiske pass ek argument (parameter) ayega
// brand naam se
// setBrand(brand){
//    this.
// }

// and brand ke andar this.brand = brand
// setBrand(brand){
//    this.brand = brand
// }

// 23:00

// yani humari yeh jo value hai (parameter brand)
// jo parameter ayega iss function ke pas
// yeh humare ek aur naye parameter with the same name (this.brand)
// isko hum brandName bhi bol sakte hai (this.brandName)
// setBrand(brand){
//    this.brandName = brand
// }

// brandName ke andar (this.brandName) yeh wali
// value jakar save ho jayegi (this.brandName = brand , mei brand)
// aur wo this.something ban jayega (this.brandName = brand)
// this (this.brandName = brand) kehne ka matlab hai yahan par each
// individual object
// matlab jis bhi class (object) ke liye yeh setBrand call
// hoga yahan par this ( this.brandName = brand ) ka matlab hai wo hi object
// 23:24

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brandName = brand
//     }
// }

// let fortuner = new ToyotaCar();
// let lexus = new ToyotaCar();

// for eg if i do fortuner.setBrand() in code editor
// fortuner.setBrand()
// and brand ke andar hum set kar rahe hai fortuner ko hi
// as a brand
// fortuner.setBrand("fortuner")

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brandName = brand
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")
// let lexus = new ToyotaCar();

// save 
// fortuner print kara
// fortuner in bc and enter
// ToyotaCar {brandName: 'fortuner'}
// open and see
// to fortuner ke andar ab ek aur nayi property aa gayi hai
// brandName naam se jiske andar value store ho gayi hai fortuner
// ( brandName: "fortuner" , see in bc)

// to yahan par yeh jo this hai ( this.brandName = brand )
// this means the object (fortuner) jiske liye yeh function ( setBrand(brand){} )
// call kiya jaa raha hai
// (fortuner.setBrand("fortuner"))
// 23:52

// yehi hi same cheej we can do for lexus

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brandName = brand
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus")

// lexus ko print karwaye
// lexus in bc and enter
// ToyotaCar {brandName: 'lexus'}
// open and see in bc
// to this ka matlab ab lexus hoga
// to iske liye bhi humari brandName property aa gayi hai
// ( brandName: "lexus" , see in bc )

// 24:09

// but generally hum kya karte hai variable (this.brandName)
// and jo bhi humari property hoti hai 
// ( this.brandName = brand , mei brand )
// usko same naam de dete hai
// ( this.brand = brand )
// isme koi problem nahi hai
// dono brands alag alag variables hai ( this.brand = brand )

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

// right brand function ka parameter hai
// ( this.brand = brand )
// left brand ( this.brand = brand )
// iss class ( class ToyotaCar{} )
// se ban ne wali sari ki sari objects
// ke liye unki property hai
// 24:32

// but hum inko same naam bilkul de
// sakte hai ( this.brand = brand )
// ab dono mei ( this.brand = brand )
// difference kaise pata chalega
// difference aise pata chalega jo
// this ke saath likha hua hai
// ( this.brand = brand )
// wo kya hai wo object ki property hai
// aur jo dusra hai ( this.brand = brand )
// wo function ka parameter hai

// to iss tareh se ( class ToyotaCar{} )
// hum classes ka blueprint , 
// classes ka template use karke apne
// liye different different objects (as follows)

// ( let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus") )

// ko create kar sakte hai
// aur bar bar har object ke liye mujhe 
// same function same property (start, stop ,setBrand)
// define karne ki jarurat nahi padi
// to yeh fayeda hota hai classes ko
// create karne ka

// classes generally hum unn cases ke andar prefer karenge
// jab hume same template ke upar multiple
// objects banani hoti hai
// for eg hum ek bank ke liye unka software
// bana rahe hai 
// to bank ko apne employees ki information
// store karne ki jarurat hai

// to wahan par jab hum unka software , website
// build kar rahe hai , to internally
// har ek employee ka data store karne ke liye
// apni ek class bana sakte hai -- employee
// jiske andar blueprint hoga ki employee ke pas
// kya kya information honi chahiye

// aur fir uss template (employee) ko use karke
// har jo bhi bank ke sare ke sare employees
// honge unn sabke liye individual objects ko
// hum create kar rahe honge
// 25:30

// to yeh ho gaya basics about class

// ===========================================================

// Constructor

// ab hum focus karne wale hai upon this important
// thing called constructor (as follows)

// class MyClass{
//     constructor(){ ... }
//     myMethod(){ ... }
// }

// let myObj = new MyClass();

// ab constructor kya hota hai 
// constructor humari class ke andar 
// ek method (function) hi hota hai
// but yeh humara ek special method
// hota hai

// 25:44

// special method kyu hota hai kyuki
// iska naam to constructor hi hai
// constructor is a reserve keyword yani
// sirf constructor ka naam hi constructor
// hota hai js ke andar

// to yahan par (as follows) hum ek special
// method likh sakte hai called constructor

// class ToyotaCar{
//     constructor
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

// and infact agar hum constructor khud se create
// bhi nahi karte 
// (constructor backspace kar diya)

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

// for eg yahan iss class ( class ToyotaCar{} ) 
// ke andar maine koi constructor
// create nahi kiya
// to js kya karega
// automatically humare liye
// naya constructor create kar dega

// to constructor method aisa method hota hai
// class ke andar , which is automatically
// invoked by new (new keyword)

// jab bhi hum ek nayi object create
// karte hai
// for eg maine likha let obj = new
// let obj = new
// aur fir apni class ka naam hum likh sakte hai
// let obj = new MyClass();
// yeh jab hum format iss tareh ( let obj = new MyClass(); )
// se likh rahe hai apni
// object ko create karne ke liye

// to yahan par jaise hi humne iss new keyword ko use kiya
// ( let obj = new MyClass(); )
// new keyword kya karta hai
// new keyword constructor ko dhoondhta hai
// aur agar kisi class ke andar use constructor nahi mila
// (as follows)

// ( class MyClass{
//     constructor(){...} nahi mila
//     myMethod(){...}
// }

// let obj = new MyClass(); )

// to js kya karega
// automatically iss method ko
// iss constructor method ko
// create kar dega

// aur constructor method ka general
// kaam hota hai to initialize the object
// yani jab bhi koi nayi object create ho
// rahi ho , uss time pe creation ke time
// pe agar aap koi kaam karwana chahte hai (26:52)
// kuch properties ko set karna chahte hai
// initialize karna chahte hai to
// uske liye hum apne constructor ko use karte hai
// (as follows)

// ( class MyClass{
//     constructor(){...} use karte hai
//     myMethod(){...}
// }

// let obj = new MyClass(); )

// jaise abhi iss ToyotaCar class ( class ToyotaCar{} )
// ke andar koi constructor humne create nahi kiya (see code)
// but agar hum apni objects ko print karwayein
// lexus in bc and enter
// ToyotaCar {brand: 'lexus'}
// to objects ke andar kya dikhega prototype mei
// (dropdown open and see in bc)
// hume ek constructor dikhega
// (constructor: class ToyotaCar, see in bc)

// ab yeh constructor kiske liye create hua hai
// yeh constructor humara iss ToyotaCar naam ki
// class ke liye create hua hai
// (dropdown open constructor and see class ToyotaClass)

// to automatically js...
// js is really smart (27:16)
// to wo automatically humare liye
// constructor ko create kar degi
// ( constructor: class ToyotaCar , see in bc)

// similar ek constructor humare liye
// humari fortuner object ke andar create hua hai
// fortuner in bc and enter
// ToyotaCar {brand: 'fortuner'}
// yahan par bhi prototype mei jayenge
// to humare liye constructor create hua hai
// ( constructor: class ToyotaCar , see in bc)

// even though humne to sirf start stop aur setBrand
// (see in prototype of fortuner)
// 3 function banaye the, chautha (4th) (constructor)
// ( constructor: class ToyotaCar , see in bc)
// kahan se aya, chautha (4th) automatically js se aya

// 27:33

// but we can also create our own custom constructors
// jaise agar hum chahein to yahan par hum apna
// constructor bana sakte hai

// class ToyotaCar{
//     constructor(){
        
//     }
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

// aur constructor ka simply 
// kuch bhi kaam ho sakta hai
// let suppose constructor ko iss tareh (just above see code)
// se create karte hai , to function ka naam
// hi constructor hota hai ( constructor(){} , just above see code)
// constructor hota method hai but
// uska naam hi constructor hai
// 27:51

// aur yahan par ( inside constructor(){} )
// hum print karwa sakte hai
// "creating new objects"

// class ToyotaCar{
//     constructor(){
//         console.log("creating new objects");
//     }
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


// to jab bhi kisi bhi object ko
// iss ToyotaCar wale blueprint ( class ToyotaCar{} )
// ki help se agar create kiya jayega
// to sabse pehle constructor ( constructor(){} ) invoke hota hai (see just above code)

// yani jab bhi koi bhi object create hoti hai
// to automatically bina constructor ko call kiye hue
// automatically wo (constructor method) invoke ho jata hai
// automatically execute ho jata hai 
// 28:13

// so now whenever i will create a class ( create object using class ToyotaCar{} )
// mere pass print hokar ayega -- "creating new objects" (see just above code)
// jaise yahan par ise -- fortuner.setBrand("fortuner")
// and ise -- lexus.setBrand("lexus")
// hata dete hai

// class ToyotaCar{
//     constructor(){
//         console.log("creating new objects");
//     }
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
// let lexus = new ToyotaCar();

// jaise hi hum first time fortuner ( let fortuner = new ToyotaCar(); )
// ko create karenge , vaise hi kya ayega
// yahan par mera constructor invoke hoga
// (let fortuner = new ToyotaCar(); constructor, see code)
// and jo bhi constructor humare liye print karwa raha hai
// wo print hokar ayega

// and yahan par jab second car (object using class ToyotaCar{}) create kar rahe hai
// (let lexus = new ToyotaCar();)
// to yahan par bhi constructor invoke hoga
// (let lexus = new ToyotaCar(); constructor, see code)

// class ToyotaCar{
//     constructor(){
//         console.log("creating new objects");
//     }
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

// let fortuner = new ToyotaCar(); constructor
// let lexus = new ToyotaCar(); constructor

// save and referesh
// see in bc
// ( creating new objects
// creating new objects , see code)
// to 2 bar constructor invoke hua
// to 2 bar creating new objects print hokar aya in bc

// 28:44

// hum chahein to apne constructor function ko
// normal function ki tareh arguments (parameters)
// bhi pass kar sakte hai
// jaise yahan par ( let fortuner = new ToyotaCar(); // constructor )
// agar maine apni car ka jo brandName hai
// wo yahan pe pass kar diya
// ( let fortuner = new ToyotaCar("fortuner"); // constructor )
// to yahan (constructor(){}) use brand naam ke 
// ek variable (parameter) ke andar save kar sakte hai ( constructor(brand){} )
// and we can simply write -- this.brand = brand ( inside constructor(brand){} )

// class ToyotaCar{
//     constructor(brand){
//         console.log("creating new objects");
//         this.brand = brand
//     }
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

// let fortuner = new ToyotaCar("fortuner"); // constructor
// let lexus = new ToyotaCar(); // constructor

// to yeh wali line (this.brand = brand) 
// jo hum yahan ( setBrand(brand){} ) likh rahe the
// setBrand , wo hume yahan (setBrand(){}) likhne ki jarurat
// nahi hai (setBrand(){} ko backspace kar diya)

// class ToyotaCar{
//     constructor(brand){
//         console.log("creating new objects");
//         this.brand = brand
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotaCar("fortuner"); // constructor
// let lexus = new ToyotaCar(); // constructor

// ... wo hum initialization (constructor(brand){}) ke time par
// likh sakte hai
// initialization yani jab hum kisi bhi object (class) ko create kar rahe hai

// class ToyotaCar{
//     constructor(brand){
//         console.log("creating new objects");
//         this.brand = brand
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotaCar("fortuner"); // constructor
// let lexus = new ToyotaCar("lexus"); // constructor

// save 
// if i print fortuner
// fortuner in bc
// ToyotaCar {brand: 'fortuner'}
// open and see
// to fortuner ke andar kya hoga
// humara brand automatically create hokar aa jayega
// (brand: "fortuner" , see in bc)
// kyuki iss information ko humne pass on kiya hai
// 29:22

// similarly iss information ( let lexus = new ToyotaCar("lexus"); // constructor , mei "lexus" )
// ko humne pass on kiya hai
// agar hum nahi pass on karte information
// let lexus = new ToyotaCar(); // constructor
// to error nahi ayega humare pass
// 29:28

// class ToyotaCar{
//     constructor(brand){
//         console.log("creating new objects");
//         this.brand = brand
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }

// let fortuner = new ToyotaCar("fortuner"); // constructor
// let lexus = new ToyotaCar(); // constructor


// jaise humne fortuner ka brand name bheja
// (let fortuner = new ToyotaCar("fortuner"); // constructor)
// fortuner in bc and enter
// ToyotaCar {brand: 'fortuner'}
// open and see
// to brand mei yeh (brand: "fortuner", see in bc) aa gaya

// humne lexus ke liye kuch nahi bheja
// (let lexus = new ToyotaCar(); // constructor)
// lexus in bc and enter
// ToyotaCar {brand: undefined}
// open and see
// to brand name undefined ayega
// (brand: undefined, bc)

// kyuki at the end yahan ( constructor(brand){} )
// ek argument expect kiya jaa raha hai
// and if there is no argument
// to iss brand ( constructor(brand){} ) ke andar
// undefined aa jayega
// aur wo hi undefined yahan par (this.brand = brand) aake set ho jayega

// par isme koi pareshani ki baat nahi hai
// kyuki hum ise change kar sakte hai
// hum lexus.brand ko access kar sakte hai
// lexus.brand in bc
// aur ise baad mei jaake change kar sakte hai
// lexus.brand = "lexus" in bc
// 'lexus'
// i can make it lexus again
// aur lexus ko print kara
// lexus in bc and enter
// ToyotaCar {brand: 'lexus'}
// to brand value update ho gayi
// (brand: "lexus", open and see in bc)

// 30:00

// to objects ke andar changes to kiye hi jaa sakte hai
// but point is agar hume initialization ke time
// pe kuch kaam karwana hai yani
// first time jab object create ho rahi hai
// ( let fortuner = new ToyotaCar("fortuner"); // constructor )
// uss time pe kuch kaam karwana hai
// to wo kaam humare liye humara constructor (constructor(brand){})
// karta hai

// hum chahein to ise multiple arguments bhi bhej sakte hai
// jaise for eg hum apni mileage bhi send kar rahe hai
// iski (fortuner) mileage 10 le lete hai
// let fortuner = new ToyotaCar("fortuner", 10); // constructor
// yeh "lexus" ho gaya , iski mileage 12 le lete hai
// let lexus = new ToyotaCar("lexus", 12); // constructor
// and yahan ek variable (parameter) bana lete hai naya 
// mileage ke naam se ( constructor(brand, mileage){} )
// to yahan ( constructor(brand, mileage){} ) hum set
// kar sakte hai this.mileage = mileage;

// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("creating new objects");
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
// let lexus = new ToyotaCar("lexus", 12); // constructor

// save and come to bc type fortuner...
// ya in fact mai aapko dikhata hu (come to code editor)
// ki yahan par jaise hi fortuner car
// create ho rahi hai
// (let fortuner = new ToyotaCar("fortuner", 10); // constructor)
// uska (fortuner) constructor jo bhi print karwayega
// wo humare liye print hokar aa jayega
// saath ke saath i can console.log my fortuner
// console.log(fortuner)

// let fortuner = new ToyotaCar("fortuner", 10); // constructor
// console.log(fortuner);

// fir hum lexus ko create karenge
// ( let lexus = new ToyotaCar("lexus", 12); // constructor )
// and uske saath i can print my lexus object
// console.log(lexus)

// let lexus = new ToyotaCar("lexus", 12); // constructor
// console.log(lexus);






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

// save and refresh in bc
// creating new object
// ToyotaCar {brand: 'fortuner', mileage: 10}
// creating new object
// ToyotaCar {brand: 'lexus', mileage: 12}

// 30:57

// bc o/p explanation -- to yahan kya hua
// sabse pehle humne apni object ko create kiya
// konse object ko create kiya iss fortuner object ko
// create kiya
// uske baad kya kaam ho raha hai uske baad
// humare liye humari fortuner object jo hai
// wo print hokar aa rahi hai
// ab notice karenge jab bhi hum object ko print
// karwa rahe hai to wahan par ToyotaCar likha
// hua aa raha hai (see fortuner in bc)
// because this object (fortuner) is of type ToyotaCar
// 31:16
// kyuki class (ToyotaCar) se hi yeh object (fortuner) bani hai
// aur iski value (open and see in bc) mei humare pas 
// brand hai, mileage hai aur humare pas prototype mei
// different different functions hai (open in bc)

// same cheej humari lexus ke liye (see in bc)
// pehle constructor call hua
// and uske baad humare liye humari lexus print hokar aa gayi
// (open and see in bc)

// to diffrent different values hai jo hum initialization
// (constructor(brand, mileage){}) ke time par set
// kar sakte hai for any new object which is getting created
// using class
// 31:47

// to yeh ho gaya about constructor, iss tareh se hum class ka blueprint
// (class ToyotaCar{}) create karte hai
// hum constructor ke andar kuch kuch variables hote hai
// kuch kuch values hoti hai jinko initialize karte hai
// 31:55 in the constructor itself
// and iss taresh se (start and stop function) hum 
// apne properties and behaviour ko set karte hai
// class ke andar

// ==============================================================================

// Inheritance in JS

// Next hum ek aur important topic ko cover karenge related to classes and objects
// which is called inheritance

// Inheritance only JS mei hi nahi
// other prog lang (C++ , Java) mei agar aap objects and classes ko
// dekhoge, in languages ke andar bhi objects and classes
// hoti hai, 
// to wahan par bhi inheritance ka concept kaam karta hai
// yahan par bhi inheritance ka concept kaam karta hai
// 32:33

// to inheritance is a programming concept
// koi bhi achhi prog language hoti hai
// uske andar apko objects classes dekhne ko milti hai

// to inheritance ka matlab basically hota hai
// passing down of properties and methods 
// from parent class to child class

// yani humare pass agar koi class hai
// let suppose we have class 1
// and we have class 2
// agar class 1 ke andar humne kuch 
// property 1 define kar di p1
// property 2 define kar di p2
// method 1 define kar diya m1()
// method 2 define kar diya m2()
// agar hum chahte hai inn sari cheejon ko
// hum re-use kar payein
// apni class 2 ke andar

// to hum kya karte hai inn sari properties (p1, p2, m1(), m2())
// ko inherit kar lete hai
// inheritance ka matlab jab ek class se
// properties and methods dusri class mei pass down ho jate hai
// 33:20

// inherit karne ke liye hum use
// karte hai ek keyword ka which is called extends
// to hum generally kehte hai
// humari class 2 , class 1 ko extend kar rahi hai
// 33:30
// ya humari jo child class hai, jo extend karti hai 
// use child class keh lete hai
// wo apne parent class ki properties ko
// extend karti hai

// to hum koi bhi normal class bana sakte hai
// for eg humne parent class bana li
// aur jab bhi hum apni child class mei 
// parent (parent class) ko extend karna chahte hai
// to uske liye hum extends keyword ko use karte hai
// aur fir likhte hai Parent

// class Parent{

// }

// class Child extends Parent{

// }

// 33:49

// iska ek example dekhte hai
// for eg i create a class called Parent

// class Parent{

// }

// Parent class ko humne yahan create kar liya
// and parent class ke andar humare pas ek function hai hello

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// ab agar hum koi class bana rahe hai
// Child naam se aur uske

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child{

// }

// ...ab agar hum koi class bana rahe hai
// Child naam se aur uske andar hum apne hello function
// ko use karna chahte hai, 
// to ek tarika to hai ki hum hello function ko parent class
// se copy karke child class mei paste karein
// aur dusra tarika hai ki hum inherit kar lein cheejon ko

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }

// achha ek aur interesting cheej mai aapko batata hu
// koi bhi kaam jo hum classes se kar rahe hai
// jo hum classes se kar rahe hai ,
// constructor se kar rahe hai
// inheritance se kar rahe hai (34:29)
// yeh sare ke sare kaam sirf function
// se kar pana possible hai

// matlab as such hume classes, inheritance
// inn concepts ki core need nahi hoti hai
// but yeh sare ke sare jo concepts hai
// yeh programming ko karne ka ek better tarika hai
// 34:42

// for eg agar hume functions ki help se sari cheejein karni hoti 
// to isi function ko (hello(){}) har ek object
// ke andar hum bar bar bar bar likh rahe hote
// par class ne kya kiya
// class ne multiple objects ko
// ek saath create karne ka ek simple
// blueprint banane ka hume tarika de diya

// kehne ko to hum bar bar objects ko define kar sakte the
// bar bar apne functions methods ko likh sakte the
// par class ne uss cheej ko simplify kar diya
// better tarika de diya hume code ko likhne ka

// 35:02

// wo hi same kaam humare liye inheritance ( class Child extends Parent{} )
// kar raha hai
// matlab agar mujhe child class ke andar
// apna hello function use karna hota to
// kuch nahi karna tha copy karke paste karna hota
// hum use kar pate

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// 35:11

// but kyuki programming ke andar repeatation
// kharaab cheej hai
// hum bar bar usi same code ko copy paste kar rahe hai
// that is not a good way of writing code
// so we try to reduce our repeatations (typing) jiske liye
// object oriented programming mei yani jahan par
// hum objects and classes ko use karte hai code
// ke andar, wahan pe inheritance bahut humare kaam aata hai
// so that is why we are using inheritance
// ( class Child extends Parent{} )

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }

// ab humne inherit kar liya child class ke andar humne as such
// kuch nahi likha
// par agar mai ek object banau
// let obj = Child class ki ek object aayi
// let obj = Child();




// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }

// let obj = Child();

// bc mei aa gaye
// Uncaught TypeError: Class constructor Child cannot be invoked without 'new'
// to yahan -- Class constructor Child cannot be invoked without 'new'


// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }

// let obj = new Child();

// save
// bc mei aa gaye
// to yahan (bc) par jab hum apni object
// ko print karwayenge
// obj in bc and enter
// Child {}
// to yeh hai to child class ki object
// but agar hum likhein obj.hello()
// obj.hello() in bc and enter
// hello
// undefined
// to wo cheej humare liye work kar jayegi
// usne humare liye error nahi diya
// 36:00

// par agar maine obj.abc kiya hota
// kuch bhi random cheej humne likhi hoti
// obj.abc() in bc and enter
// Uncaught TypeError: obj.abc is not a function
//     at <anonymous>:1:5
// to wo work nahi karti wo humare liye
// error de deti
// but kyuki yeh cheej ( obj.hello() ) exist karti hai through
// inheritance, isliye yahan par humare liye
// error nahi aya

// to yeh kya ho raha hai (as follows)

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{

// }

// let obj = new Child();

// yeh humare liye inheritance work kar rahi hai
// iska ek aur better example dekhte hai

// =================================================================

// Inheritance (better example)

// 36:19

// for eg humne class banayi called Person

// class Person{

// }

// har jo insaan hota hai usko represent karne ke liye
// class banayi hai code ke andar
// har jo person hota hai 
// they can all eat
// they can all sleep
// to humne ek function bana diya eat(){}

// class Person{
//     eat(){
//         console.log("eat");
//     }
// }

// function for sleep

// class Person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// ab hum ek aur nayi class bana rahe hai called
// Engineer

// class Person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer{

// }

// ab hume pata hai har jo Engineer hai
// wo eat and sleep (see code) to kar hi sakta hai
// uske alawa Engineer ke pass alag
// properties hongi
// jaise for eg Engineer ke pas ek work
// naam ka function hoga

// class Person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// iss tareh ka work hota hai kisi bhi engineer ka
// to wo engineer ke pass work naam ka function hai
// to koi bhi agar hum ek engineer banate hai 
// (create object using class)

// class Person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let shradhaObj = new Engineer();

// nayi engineer object bana li humne
// bc mei aa gaye
// print shradhaObj
// shradhaObj in bc and enter
// Engineer {}
// yeh Engineer class ki object hai
// theek hai
// aur apni shradhaObj ke liye what i can do
// is hum work function ko call kar sakte hai
// shradhaObj.work() in bc and enter
// solve problems, build something
// undefined
// to yeh cheej humare liye print hokar aa gayi

// par kyuki har ek Engineer (class Engineer{})
// ek person bhi hota hai ek insaan bhi hota hai
// har ek doctor bhi ek insaan hota hai
// to Person (class Person{}) ki sari ki sari jo
// properties hai wo Engineer (class Engineer{})
// ko inherit karni chahiye
// 37:48

// to yahan (class Engineer{}) hum extend kar sakte hai
// unn properties (class Person{} ki properties) ko

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

// let shradhaObj = new Engineer();

// to isse kya hoga
// bc mei aa gaye
// agar hum shradhaObj ke liye
// if we call eat
// shradhaObj.eat() in bc and enter
// eat
// undefined
// now this function will work

// to sare ke sare yeh jo cheejein hai
// (eat(){}, sleep(){})
// yeh inherit ho jayengi iss class (class Engineer{})
// ke andar (38:07)

// vaise hi kal ko agar hume Engineer nahi
// agar hume Doctor naam ki class bhi banani hoti
// as follows

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

// ...vaise hi kal ko agar hume Engineer nahi
// agar hume Doctor naam ki class bhi banani hoti
// to uss case mei kya hoga , agar hum koi Doctor
// bhi create karte hai (create object using Doctor class)
// to uske pas bhi Person ki sari properties inherit hokar aa jayegi
// to multiple classes (Engineer Doctor) bhi same class (Person) se properties ko
// inherit kar sakti hai 
// 38:31

// ===================================================================================

// and yahan par ek aur cheej hai
// for eg har Person (class Person{}) ke liye
// agar generally humara jo work hai
// ek work function agar hum Person (class Person{})
// mei bhi define karte hai

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

// aur Engineer class ke andar bhi apna work function hai
// same naam ka work function

// to jab bhi humari Parent class and child class ke andar
// same function (same naam ke function) hote hai
// to uss case mei child class wala function invoke hota hai
// jaise for eg if i have my engineer object jiske andar
// hum work ko call karenge
// shradhaObj.work() in bc and enter
// solve problems, build something
// undefined
// to humesha humari child class wala function invoke hoga

// Note -- If child and parent have same method, child's
// method will be used [Method overriding]

// iss concept ko hum kehte hai method overriding
// override ka matlab hota hai kisi dusri cheej ko cover
// kar lena
// to basically child ka jo method hai wo strong ho jata hai
// wo parent wale method ko cover kar leta hai
// to basically overrides it

// ============================================================================

// Hum chahein to apni iss Person class ke andar ek
// constructor bhi create kar sakte hai

// constructor ke andar ek naya variable set kar denge
// this.species
// species kya hoti hai har Person ki species humare
// pas hoti hai -- "homo sapiens"
// to wo hi value hum store karne wale hai
// this.species = "homo sapiens";



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

// to jo bhi Person class banegi (class Person{})
// Person class ki agar koi bhi object banti hai
// 39:56
// for eg if i write let p1 = new Person(); in bc and enter
// undefined
// to jo humare pas p1 ayega
// p1 in bc and enter
// Person {species: 'homo sapiens'}
// (open and see in bc)
// p1 ke andar ek species aa jayegi ( species: "homo sapiens" )
// aur sare functions aa jayenge (open prototype and see in bc)
// kisi bhi person ke (40:12)

// but agar hum likhte hai e1
// let e1 in bc
// yani engineer ki banate hai ( class Engineer extends Person{} )
// let e1 = new Engineer(); in bc and enter
// undefined
// to engineer ke andar bhi... (e1 ke andar bhi)
// e1 in bc and enter
// Engineer {species: 'homo sapiens'}
// humare pas species wala jo property hai
// wo ayegi (open and see in bc) (species: "homo sapiens")
// 40:25

// ab Engineer (Engineer class) ke andar to as such humne
// species define nahi ki
// par kyuki hum Parent (Parent class -- Person lass) 
// ki sari ki sari properties and methods inherit kar rahe hai
// to jo properties Person (Parent class -- Person lass) ke pas hogi
// wo sari ki sari properties humari Engineer (Engineer class)
// ke pas bhi hogi
// to iss e1 object ( let e1 = new Engineer(); ) ke andar bhi 
// hume same properties dekhne ko milti hai
// 40:42

// ======================================================================================

// Super Keyword

// Next hum baat karne wale hai ek aur interesting and
// important keyword ke bare mei which is called the super keyword

// ab super keyword is used to call the constructor
// of its parent class to access the parent's properties and methods

// kabhi kabhar humare pas aisi condition aa jati hai
// jisme hume child class se kya karna padta hai
// parent class ki properties ko directly access karna padta hai
// ya fir parent ke constructor ko call karna padta hai

// to uss case mei parent ke constructor ko call karne ke liye
// hum super keyword ko use karte hai (41:10)
// super matlab humse jo ek level upar hai
// to parents ek level upar hote hai
// to super keyword ko we are going to use

// ab uske liye js ke andar kya hota hai
// wo mai ek bar aapko dikhata hu

// for eg yeh sleep (sleep function) yahan se hata dete hai
// work (work function) hata dete hai

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
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

// yeh simple si humne Person naam ki class banayi hui hai
// iss class ke andar constructor species naam ki value
// ko initialize kar raha hai aur ek eat function hai

// ab agar hum ne Engineer class banayi ( class Engineer extends Person{} )
// to iss Engineer class mei Person ki bhi sari ki sari
// properties aa jayengi 
// plus Engineer ke pas apni kuch additional
// properties ho sakti hai
// foe eg yahan se abhi ke liye yeh Doctor hata dete hai
// and yeh humari ek Engineer object ho gayi ( let shradhaObj = new Engineer(); )
// as follows

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let shradhaObj = new Engineer();

// ya ise engineer object (engObj) keh dete hai as follows




// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer();

// ab jaise Person class ke pas apna
// constructor hai, vaise hi Engineer class ke
// pas bhi apna ek constructor ho sakta hai
// to constructor mei ( constructor in Engineer class ) 
// koi bhi kaam ho sakta hai
// jaise for eg if i make a new variable branch 
// (this.branch in constructor of Engineer)
// to hum keh sakte hai har Engineer ne apni jo b.tech
// ki hogi wo kisi branch mei ki hogi
// koi chemical engineer hoga
// koi mechanical engineer hoga
// to har kisi ki apni branch hoti hai
// (branch in parameter of constructor of Engineer)

// to yahan par constructor kya karega
// apna ek variable le lega 
// (branch in parameter of constructor of Engineer)
// jisko hum kahenge this.branch
// this.branch = branch;
// yani har ek Engineer ke pas apni ek special
// property hogi branch naam se
// jisko hum save karwa sakte hai
// 42:34

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
//         this.branch = branch
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer();

// 42:34

// ab hum ek naya engineer create kar rahe hai
// ( let engObj = new Engineer(); )
// for eg this ( let engObj = new Engineer(); )
// is a chemical engineer
// ( let engObj = new Engineer("chemical"); )

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
//         this.branch = branch
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");

// chemical engineer hum create karne ki koshish kar rahe hai
// to yeh ( let engObj = new Engineer("chemical engg"); mei "chemical engg" ) 
// unki branch aa gayi
// ab iss code mei as such dekh ke hume koi problem dikhayi nahi de rahi
// this is a very normal code jisko humne likha hai

// par jaise hi isko save karke hum run karenge
// (save and run in bc)

// app.js:204 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // at new Engineer (app.js:204:9)
    // at app.js:211:14

// humare pas ek error ayega (see in bc)

// error kya keh raha hai -- Must call super constructor
// in derived class before accessing 'this' or returning from
// derived constructor

// ab yahan par yeh derived shabdh ka kya matlab hai (43:05)
// jab bhi hum inheritance ki baat karte hai
// humare pass ek parent class hoti hai
// aur usse humari child class kuch property inherit karti hai
// to yeh jo child class hai ise hum programming ke andar
// derived class kehte hai
// derived yani jo kisi se hokar ayi hai
// kisi se kuch lekar ayi hai
// (43:24)

// to basically yahan par (bc) kaha jaa raha hai ki hume
// super constructor ko call karna padta hai derived class mei
// before accessing (before accessing 'this') yani 'this' ko use
// karne se pehle ya derived ke constructor se return karne se
// pehle

// yani agar humari derived class mei 
// matlab iss child class ke andar
// agar hum koi constructor banate hai
// to wo constructor kya karega
// uss constructor ka jaruri hai ki wo super (super keyword)
// ko use karke parent class ke constructor ko pehle call kare
// (43:50)

// to agar hume iss error (see in bc)
// se bachna hai
// to har bar hum apne constructor (class Engineer constructor)
// ke andar kya karenge
// hum sabse pehli cheej jo kar rahe hote hai
// usually codes ke andar wo hum super keyword ko
// likhte hai (as follows)

    // constructor(branch){
    //     super
    //     this.branch = branch
    // }

//  and iss tareh se wahan paranthesis lagate hai (as follows)

    // constructor(branch){
    //     super()
    //     this.branch = branch
    // }

// to basically yeh tarika (just above) hota hai
// to invoke parent class constructor

    // constructor(branch){
    //     super() // to invoke parent class constructor
    //     this.branch = branch
    // }








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
//         super() // to invoke parent class constructor
//         this.branch = branch
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");



// to super yeh jo humne likha hai ( super() )
// yeh basically hum apne iss constructor ( parent class ke constructor )
    
    // constructor(){
    //     this.species = "homo sapiens";
    // }

// ko call karne ki koshish kar rahe hai (44:16)
// jaise hi iss constructor ( parent class ke constructor ) 
// ko hum call karenge , vaise hi humare liye this.species
// (this.species = "homo sapiens";) yeh jo cheej hai
// yeh set ho jayegi
// 44:21

// ab ise hum save kar sakte hai
// refresh in bc
// and now if i try to print my engineer Object
// ( let engObj = new Engineer("chemical engg"); )
// engObj in bc and enter
// Engineer {species: 'homo sapiens', branch: 'chemical engg'}
// to humare pas Engineer ke andar (dropdown open and see)
// branch bhi aa gayi
// (branch: "chemical engg" , in bc)
// species bhi aa gayi
// (species: "homo sapiens" , in bc)
// Person (parent class) ki sari ki sari humare pas
// functions aa gaye (open [[Prototype]]: Person and see)
// (open [[Prototype]]: Object and see)

// ab sequence hume exactly pata karna hai ki
// konsa constructor pehle call hua
// to uska best tarika yeh hai ki
// sabse pehle yahan pe (inside Engineer constructor)
// print karwa lo console.log("enter child constructor")

// copy (copy console.log("enter child constructor"))
// aur yahan (inside Person constructor)
// humne likh diya console.log("enter parent constructor")

// aur yahan (inside Engineer constructor) hum likh dete hai
// console.log("exit child constructor")





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

// save and refresh in bc
// enter child constructor
// enter parent constructor
// exit child constructor

// to basically kya sequence hai (45:08)
// sabse pehle to hum child constructor ke andar enter karenge
// (bc o/p)
// yani jaise hi hum kisi naye Engineer object ko create karte hai
// child class ke object ko create karte hai
// ( let engObj = new Engineer("chemical engg"); )
// to sabse pehle to hum isi constructor ( Engineer class constructor )

    // constructor(branch){
    //     console.log("enter child constructor");
    //     super(); // to invoke parent class constructor
    //     this.branch = branch
    //     console.log("exit child constructor");
    // }

// ke andar jate hai
// uske baad kya hota hai jaise hi super se ( super(), see code )
// hum apne parent ke constructor ko invoke karenge

    // constructor(){
    //     console.log("enter parent constructor");
    //     this.species = "homo sapiens";
    // }

// hum yahan par (as follows) aa jayenge

    // constructor(){
    //     console.log("enter parent constructor");
    //     this.species = "homo sapiens";
    // }

// to humare liye print hokar ayega 
// -- "enter parent constructor" (see 2nd line in bc o/p)
// fir hum parent constructor se sare ke sare
// kaam kar lenge (as follows)

        // console.log("enter parent constructor");
        // this.species = "homo sapiens";

// fir hum wapas yahan par (Engineer class constructor, this.branch = branch) 
// aa rahe honge
// and iss bar hum sare kaam kar lenge
// child constructor ke (as follows)

        // this.branch = branch
        // console.log("exit child constructor");

// and fir hum yahan se ( console.log("exit child constructor"); )
// exit kar jayenge

// to generally constructor (Engineer class constructor) 
// ke andar this ko ( this.branch = branch )
// use karne se pehle (45:40)
// ya fir exit karne se pehle ( console.log("exit child constructor"); )
// hume kya karna hota hai 
// hume apne super constructor ko call karna hota hai ( super() )
// agar hum iss line (super()) ko yahan se hata denge
// to humare pas ek error aa jayega

// =======================================================================================

// also ek aur interesting cheej hum kar sakte hai
// (45:50)
// yeh console ke jo statements hai inko ek bar
// yahan se hata lete hai

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
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer();

// for eg humari yeh jo Person ki class hai
// iss Person class ke andar hume pata hai 
// har ek Person ke pas apna naam to ho hi sakta hai
// to hum chahte hai ki Person class ki jab bhi object
// create ho (46:08)
// to uske andar constructor mei ek name naam ki cheej pas ho

    // constructor(name){
    //     this.species = "homo sapiens";
    // }

// and uske basis par hum ek property bana dein iske 
// liye this.name = name;

    // constructor(name){
    //     this.species = "homo sapiens";
    //     this.name = name;
    // }







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
//     constructor(branch){
//         super(); // to invoke parent class constructor
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer();

// to har Person ka apna ek naam hona chahiye
// to jab hum ek Engineer (Engineer class) 
// type ka person banayenge
// ( let engObj = new Engineer(); )
// yani jab hum ek naya Engineer banayenge to
// hum yahan par kya kar sakte hai, 
// uss Engineer ka naam (name, see code) set kar sakte hai
// for eg Engineer ka naam hai shradha
// let engObj = new Engineer("shradha");
// to yahan par (Engineer ke constructor ke parameter mei)
// humare pas ek variable aa jayega name

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
//         super(); // to invoke parent class constructor
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");

// 46:33

// ab iss name value (as follows) ko
// class Engineer extends Person{
//     constructor(name){
//         super(); // to invoke parent class constructor
//     }
// iss name value ki access humare pas iss Engineer (Engineer class)
// ke andar to hai hi

// par agar hume iss name value (as follows)
// class Engineer extends Person{
//     constructor(name){
//         super(); // to invoke parent class constructor
//     }
// ko constructor se (Engineer ke constructor se)
// iss constructor (Person ke constructor) (as follows)
// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

// ke andar pas karna hai , to same methods (variable/parameter)
// ko hum apne super ke andar pas kar sakte hai (as follows)
// class Engineer extends Person{
//     constructor(name){
//         super(name); // to invoke parent class constructor
//     }
// 46:47

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

// lets save it
// refresh in bc
// and iss bar hum apni Engineer object ko print karwate hai
// engObj in bc and enter
// Engineer {species: 'homo sapiens', name: 'shradha'}
// to yahan par (open and see in bc)
// name mei humare pas aa jayega shradha
// (name: "shradha" , in bc)
// 46:54

// but agar yahan par super ke andar humne name ko pass
// nahi kiya

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
//         super(); // to invoke parent class constructor
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");

// ...but agar yahan par super ke andar humne name ko pass
// nahi kiya, to uss case mei kya hoga
// engObj in bc and enter
// Engineer {species: 'homo sapiens', name: undefined}
// uss case mei humari jo 
// engineer object hogi (engObj in bc)
// uske andar name ke andar (dropdown open and see in bc)
// name ke andar humare pass undefined ayega
// (see in bc)
// (name: undefined)

// kyu kyuki name (as follows)
// class Engineer extends Person{
//     constructor(name){
//         super(); // to invoke parent class constructor
//     }
// humne Engineer ko to de hi diya
// but wo finally apne Parent class (as follows)
// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }

// }
// ko pass karne ke liye hume kya karna padega
// super ko call karna padega (super())
// aur super ke andar apne uss variable (parameter -- name)
// ko pass karna padega (super(name))

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

// to isiliye super keyword kaafi important
// hota hai jab bhi inheritance ho rahi hoti hai
// 47:19

// inheritance ke time pe agar child class ko parent class
// ke constructor ko kuch important information pass on
// karni hoti hai to wo pass on hoti hai through
// this super keyword

// =============================================================================

// iske alawa super ko hum apni jo parent class hoti hai
// uske kuch kuch methods ko invoke karne ke liye bhi use kar sakte hai

// for eg yeh jo work class hai (work method -- work(){} in Engineer class)
// har Engineer kya karta hai pehle eat (eat(){} in Person class)
// karta hai fir work karta hai for eg
// this is an example

// to yahan par (inside work(){}) agar mujhe sabse pehle
// super class ke 
// (super class means parent class, derived class means child class)
// eat method (eat(){}) ko call karna hai
// to uske liye hum likhenge -- super.eat();
// ( work(){} ke andar super.eat() isliye likha hai 
// kyuki har Engineer pehle eat karta hai fir work karta hai 
// to work method eat method pe depend karta hai )

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

// save and refresh in bc
// iss bar hum likhein engObj.work() in bc and enter
// eat
// solve problems, build something
// undefined
// to iss case mei pehle eat hoga (o/p in bc)
// uske baad humara work complete ho raha hoga (o/p in bc)

// but agar yahin par (inside work(){}) hum likhte sirf eat();

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
//         eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("shradha");

// save and refresh in bc
// engObj.work() in bc and enter
// app.js:296 Uncaught ReferenceError: eat is not defined
//     at Engineer.work (app.js:296:9)
//     at <anonymous>:1:8
// to iss case mei humare pas error aa jata 
// why because eat is not defined
// (kiska eat super ka eat)
// 48:07

// to isilye jo super class yani
// parent class ke methods and properties hote hai unko
// directly aise (eat()) access nahi kar sakte
// to uske liye hume super keyword ke through unko access karna hota hai
// (super.eat())

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

// so that is why this keyword (super) is really really
// important, interviews ke andar 
// Method overriding kya hoti hai
// super keyword kaise kaam karta hai
// inheritance kya hoti hai
// extends keyword kisliye use hota hai
// yeh sare ke sare aise sawaal hai jo humse
// js ke interviews ke andar pooche ja sakte hai

// =======================================================================================

// Ab next hum baat karne wale hai about our
// practice questions 
// practice questions ke andar (48:36)
// sabse pehla question hai :

// Q1. You are creating a website for your college
// Hume uske liye create karni hai class called User
// with 2 properties name and email
// har ek user ke liye name hoga
// har ek user ke liye email hoga
// It also has a method called viewData()
// that allows user to view website data.
// to iss case mei website ka kyuki data 
// to hai nahi to viewData ke liye hum
// sirf print karwa denge
// yani kuch console.log karwa denge iss method
// ke andar (viewData())
// to yeh ek viewData() naam ka hume method banana
// hai ki har jo user hai
// iss class (User class) ke jitne bhi object honge
// sare ke sare website ke data ko view kar payein
// dekh payein

// code editor

// hum ek class create karenge called User

// class User{

// }

// har class ke andar hum apna constructor bana
// sakte hai

// class User{
//     constructor(){

//     }
// }

// ab constructor ke andar har User ke liye uska 
// name and email hoga
// yeh jo name and email ki information hai ise hum le lenge
// in this constructor as an argument (parameter)

// class User{
//     constructor(name, email){

//     }
// }

// hum likh sakte hai this.name = name
// and this.email = email

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }
// }

// iske saath mei humare pas ek method hoga called
// viewData(){}

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){

//     }
// }

// viewData ke andar hum simply
// console.log kar sakte hai
// some data, yahan hum apne data
// ko print karwa sakte hai
// this is my website data

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("website data");
//     }
// }

// ya infact hum chahein to koi ek
// normal sa variable bana sakte hai
// let DATA = "secret information"
// iss tarike ka kuch DATA naam ka humne variable bana liya

// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("website data");
//     }
// }

// this is a very simple example 
// generally websites ke andar data iss tareh se
// store nahi hota hai
// yeh mai bahut basic cheej aapko dikha raha hu
// (50:32)
// par haa yahan par agar hum view data (method)
// karna chahte hai to DATA ko dikhane ke liye
// hum likh sakte hai
// console.log("data =", DATA)




// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }


// save
// and ab hum chahein to apne liye apne User object
// ko bana sakte hai (object using User class)
// let suppose humare pas student1 hai
// humare kyuki college ki website hai to student1
// ban sakta hai, student1 humara naya User hai
// let student1 = new User();




// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// let student1 = new User();

// iske baad student2 aya , student2 is also a new User
// let student2 = new User();
// humare pas student3 aya, do (2) students le lete hai
// (do (2) hi students le lete hai)

// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// let student1 = new User();
// let student2 = new User();

// har student ke liye uska name and email hona chahiye
// (this.name = name , this.email = email, see code)
// to yahan par ( student1 and student2 mei ) hum name
// (51:05) pas kar sakte hai
// let suppose the first student (student1) is "shradha" (name ka argument)
// the email is abc@email.com (email ka argument)
// some fake email
// and dusra (student2) we can write "aman" (name ka argument)
// email is aman@email.com (email ka argument)

// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// let student1 = new User("shradha", "abc@email.com");
// let student2 = new User("aman", "aman@email.com");

// yeh humare pas 2 emails aa gaye
// 2 users aa gaye
// ab inn users ka data print karne ke liye
// we can simply write humara jo student1 hai
// uska data print ho jaye humare liye
// student1 in bc and enter
// User {name: 'shradha', email: 'abc@email.com'}
// to yeh student1 aa gaya (open and see in bc)
// student1 ke pas email bhi hai , (email: "abc@email.com", in bc)
// name bhi hai (name: "shradha", in bc)
// saath ke saath function bhi hai ( open [[Prototype]]: Object , in bc)

// agar student1 chahe to data (viewData) ko view kar sakta hai
// student1.viewData() in bc and enter
// data = secret information
// undefined
// to kya hua data humare liye print hokar aa gaya

// aise hi student2 bhi data ko view kar sakta hai
// aur sirf students hi nahi honge (student1 , student2)
// college ki website hai agar to usme sirf
// students user hi nahi honge
// teachers bhi user ho sakte hai
// to let teacher1 = new User()
// aur teachers ke bhi kuch kuch name ho sakte hai
// jaise ho sakta hai college ke andar there is some "Dean" (name ka argument)
// and unki koi email ho dean@college.com (email ka argument)

// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// let student1 = new User("shradha", "abc@email.com");
// let student2 = new User("aman", "aman@email.com");

// let teacher1 = new User("Dean", "dean@college.com");

// save
// to humari jo teacher1 hogi
// agar teacher1 ko viewData karna hai (method)
// teacher1.viewData() in bc and enter
// data = secret information
// undefined
// to teacher bhi data ko view kar sakti hai 
// website ke upar
// agar student ko data view karna hai
// student1.viewData() in bc and enter
// data = secret information
// undefined
// to student bhi apna jo data hai use view kar sakte hai website ke upar
// 52:28
// It will work both ways
// to iss tareh se alag alag tarike ke jo Users hai (students , teachers)
// unko hum yahan create kar sakte hai

// =======================================================================================

// vaise aur ek better yani level up karne ka tarika hoga
// ki student naam ki ek aur class banayi jaye (in addition to User class)
// jisme student ke hisab se
// extra information ho 
// aur wo iss User class ko inherit (using extends keyword)
// kare , iski (User class) properties ko inherit kare

// fir ek teacher ki alag class banayi jaye (using extends keyword)
// (in addition to User class and student class)
// jo iski (User class ki) properties ko inherit kare
// fir teacher (teacher class) ke pass yeh sare functions (User class ke sare functions and properties)
// to honge hi
// plus extra functions honge 
// jaise marks ko update kar paane ki access

// student (student class) ke pass yeh sare functions (User class ke sare functions and properties)
// to honge hi
// plus extra functions honge
// jaise apna chahe to address update
// kar sakta hai student
// apna chahe to naam change
// kar sakta hai student
// to uss tarike se ek poora system hai 
// jo banaya ja sakta hai
// classes and objects ke around
// 53:06

// =============================================================================================================

// Next humare pas ek aur part hai isi practice
// question ka

// Q.2 Create a new class called Admin
// which inherits from User.
// Add a new method called editData
// to Admin that allows it to edit website data

// 53:18

// yani hume ek nayi class banani hai apne liye
// called Admin jo humare User class se
// inherit kare values ( properties and functions )
// to Class Admin extends User class
// class Admin extends User {}
// aur yahan par kya hoga extends ke baad
// we have to add a new method called
// editData

// iske ( class Admin extends User {} ) andar
// editData naam ka ek naya method hoga jo humare
// data ko edit kar payega
// jaise yeh jo DATA variable hai ( let DATA = "secret information" )
// ise basically edit kar payega

// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// class Admin extends User {
//     editData(){
//         DATA
//     }
// }

// let student1 = new User("shradha", "abc@email.com");
// let student2 = new User("aman", "aman@email.com");

// let teacher1 = new User("Dean", "dean@college.com");

// aur yahan par DATA ki value ko hum kuch bhi 
// kar sakte hai -- "some new value"
// class Admin extends User {
//     editData(){
//         DATA = "some new value"
//     }

// lets suppose this (as follows)
//     editData(){
//         DATA = "some new value"
//     }
// is the new edited value of DATA
// 53:52

// ab yeh cheej hume dhyaan rakhni hai ki
// humara jo User hai (User class)
// wo humne basic level ka
// ek User banaya hai (User class)
// jisko edit ( editData(){} ) access nahi de rakhi 

// 54:00

// par kyuki Admin hai ( class Admin extends User {} )
// Admin sari cheejein edit kar sakte hai ( editData(){} )
// to use ( class Admin extends User {} ) 
// humne edit access ( editData(){} ) di hai

// to wo yahan pe ( class Admin extends User {} )
// ek tarike se hum depict karne ki koshish
// kar rahe hai using classes and objects 

// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// class Admin extends User {
//     editData(){
//         DATA = "some new value"
//     }
// }

// let student1 = new User("shradha", "abc@email.com");
// let student2 = new User("aman", "aman@email.com");

// let teacher1 = new User("Dean", "dean@college.com");

// 54:09

// to ab hum ek naya user bana sakte hai 
// we can call this user admin1
// let admin1 = new Admin();
// ab yeh jo admin hai ( let admin1 = new Admin(); )
// agar hum ise simply iss tareh ( let admin1 = new Admin(); )
// se create karenge
// although iss tareh ( let admin1 = new Admin(); )
// se create karna possible hai

// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// class Admin extends User {
//     editData(){
//         DATA = "some new value"
//     }
// }

// let student1 = new User("shradha", "abc@email.com");
// let student2 = new User("aman", "aman@email.com");

// let teacher1 = new User("Dean", "dean@college.com");

// let admin1 = new Admin();

// save and refresh in bc
// no error in bc
// admin1 ko print karwayenge
// admin1 in bc and enter
// Admin {name: undefined, email: undefined}
// to bhi error nahi ayega
// but admin1 ke pas
// (dropdown open and see in bc)
// email and name nahi hai
// email: undefined in bc
// name: undefined in bc
// kyuki unn variables (email and name) ko humne pass hi nahi kiya

// to isiliye jab admin ko create kar rahe hai
// ( let admin1 = new Admin(); )
// to yahan pe ( let admin1 = new Admin(); mei in () )
// hume name and email pass karna padega
// to isko (name argument ko) keh dete hai -- admin
// isko (email argument ko) keh dete hai -- admin@college.com
// let admin1 = new Admin("admin", "admin@college.com");
// to yeh information aa gayi (just above line)

// par yeh information process karne ke liye 
// hume ek constructor chahiye, 
// to yahan ( class Admin extends User {} )
// hume uss constructor ko create karna padega (54:54)
// jiske pass kya aa raha hai
// jiske pass humara name (constructor mei name as parameter)
// and email aa raha hai (constructor mei email as parameter)

// aur jab bhi hum child class ( class Admin extends User {} )
// ke andar constructor ko create karte hai
// hume parent ke ( class User{ )
// constructor ko call karna padta hai
// 55:07

// aur parent ke constructor ko call karne ke liye
// hum apne super keyword ka use karte hai
// (super in Admin class constructor)
// jisme hum pass kar denge apna name and email 
// (-- super(name, email) in Admin class constructor)



// let DATA = "secret information"

// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     viewData(){
//         console.log("data =", DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email){
//         super(name, email)
//     }
//     editData(){
//         DATA = "some new value"
//     }
// }

// let student1 = new User("shradha", "abc@email.com");
// let student2 = new User("aman", "aman@email.com");

// let teacher1 = new User("Dean", "dean@college.com");

// let admin1 = new Admin("admin", "admin@college.com");

// ise ab save kar lete hai
// refresh in bc
// admin1 in bc and enter
// Admin {name: 'admin', email: 'admin@college.com'}
// ab admin ke andar
// name and email aa gaya hai
// (dropdown open and see in bc)
// email: "admin@college.com" in bc
// name: "admin" in bc

// saath ke saath admin chahe (admin1)
// jaise abhi DATA ki value kya hai
// DATA in bc and enter
// 'secret information'
// DATA ki value yeh hai ( 'secret information' )

// Lekin admin (admin1, admin class) data ko change
// kar sakta hai (editData(){})
// admin1 chahe to apne
// data ko edit kar sakta hai
// admin1.editData() in bc and enter
// undefined

// to ab agar hum DATA ki value ko check karenge
// DATA in bc and enter
// 'some new value'
// to it will be some new value
// (DATA variable ko new value assign kar di in editData(){} function)

// 55:36

// to iss tareh se humari classes and objects
// kaam karti hai logically js ke programs ke andar
// ab yeh to ho gaya humara practice questions and this was
// all about classes and objects jisme hum
// inheritance , super , new 
// bahut sare different different...
// extends keywords ko dekha
// different concepts ko dekha 
// jaise inheritance ho gaya
// jaise method overriding ho gaya

// =============================================================================

// Error Handling

// iske alawa ek aur programming ka
// ek general concept hota hai jo
// mai aapke saath share karna chah raha hu
// 56:00
// which is related to error handling

// jaise agar aapne js ke code
// mei notice kiya ho
// ki...
// vaise this topic is not related to
// classes and objects
// yeh alag hi topic hai related to error handling

// jaise agar hum apne code ke andar
// bahut sari lines of code likhte hai
// for eg pehle humne koi calculation kari
// ya ek variable bana diya let a = 5
// let a = 5

// fir humne ek variable bana diya let b = 10
// iss tareh se
// let a = 5
// let b = 10

// fir hum console.log karwa rahe hai
// a =
// yahan humne a ki value ko print karwa diya
// let a = 5
// let b = 10
// console.log("a = ", a)

// isi tareh se hum console.log
// karwa rahe hai b =
// aur humne b ki value ko print karwa diya
// let a = 5
// let b = 10
// console.log("a = ", a)
// console.log("b = ", b)

// fir hum console.log karwa rahe hai -- a+b = a+b
// let a = 5
// let b = 10
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("a+b = ", a+b)

// and isi tarike se bahut lamba code
// likha hua hai jiske andar bahut
// sari lines of code hai
// let a = 5
// let b = 10
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)

// and kayde se yeh sari ki sari lines of code
// humare liye print hokar aani chahiye (see in bc)
// a =  5
// b =  10
// a+b =  15
// a+b =  15
// a+b =  15
// a+b =  15
// a+b =  15
// a+b =  15
// a+b =  15

// but maan lete hai code ke beech mei
// humne kahin error kar diya line number 6 pe
// (2nd a+b) humse kuch error ho gaya

// let a = 5
// let b = 10
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b) // error
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)

// kya error ho gaya
// error basically ho gaya ki yahan (2nd a+b)
// maine a+c likh diya
// aur c kya hai c koi variable exist hi nahi karta

// let a = 5
// let b = 10
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+c) // error
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)

// to iss case mei kya hoga
// hum jaise hi refresh karenge (in bc)
// a =  5
// b =  10
// a+b =  15
// Uncaught ReferenceError: c is not defined
//     at app.js:393:25
// (open and see in bc)
// yahan par line number 6 par
// humare pas error aa jayega (57:10)
// error aa raha hai c is not defined

// theek hai humare pas error aa gaya
// but error aane ki vajeh se js ke andar
// jo baki ka sara ka sara code hota hai
// wo run karna band kar deta hai

// yani sirf shuruat ki teen lines hi print hui (see in bc)
// iske (error line a+c ke) baad wala jo code hai
// wo kabhi execute hi nahi hua
// even though inn lines (error line a+c ke baad ki lines)
// ke andar koi error nahi tha
// par fir bhi yeh lines (error line a+c ke baad ki lines) 
// kabhi execute nahi hoti
// 57:28

// to isiliye yeh jo error (error line a+c)
// aate hai,
// randomly code ke andar error aana possible hai
// errors aa sakte hai code ke andar
// to isiliye errors ko handle karna bhi bahut
// jada jaruri hota hai

// aur error handling ke liye js ke andar
// we have something called try-catch
// inhe hum try-catch blocks bhi kehte hai

// try-catch

// try {
//     ... normal code
// } catch (err) { // err is error object
//     ... handling error
// }

// jab bhi hume kisi code ke liye aisa lagta hai ki
// iss code ke andar koi error aa sakta hai
// hume nahi pata exactly ayega ya nahi ayega
// although hum to humesha hope karte hai ki
// humare code ke andar koi error na aye

// but agar hume kabhi aisa lagta hai ki
// iss code ke andar koi na koi error aa sakta hai
// ho sakta hai koi variable aisa ho jo initialize na hua ho
// ya kuch aur problem ho sakti hai

// to uss code ko jo humara normal code hota hai
// uss code ko hum ek try block ke andar likhte hai
// (58:10)
// to simply agar hume shak hai
// ki iss line (error line a+c) ke andar
// koi error aa sakta hai 
// to hum simply kya karenge
// ek try block banayenge (as follows)

// let a = 5
// let b = 10
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("a+b = ", a+b)
// try{
    
// }
// console.log("a+b = ", a+c) // error
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)
// console.log("a+b = ", a+b)


// yeh try humara ek keyword hai
// aur yeh hum ne ek block bana liya (try{})
// aur iske andar (try{} ke andar) hum apni iss line (error line a+c) 
// ko of code ko likhte hai
// 58:23

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a+b = ", a+b);
// try{
//     console.log("a+b = ", a+c); // error
// }

// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);

// ab jaise hi hum try block banayenge
// uske saath hume ek catch block banana padega
// aur catch block ke andar basically hum apne
// error ko catch kar lete hai

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a+b = ", a+b);
// try{
//     console.log("a+b = ", a+c); // error
// } catch() {
    
// }

// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);


// to try ke andar jitna bhi code hota hai
// agar uss code (try ke andar wale code) 
// ke andar error aa gaya
// to wahi se hum apne catch block 
// ke andar chale jate hai
// aur catch block ka kaam hota hai 
// to handle our errors (58:41)

// so catch block is basically
// to handle our errors
// aur catch block ke andar ek special
// argument (parameter) hum le sakte hai
// error argument (err) 
// jo humari error object hoti hai
// ki exactly kya error aya

// to iss bar yahan par ( catch() {} mei in () ) 
// hum ek argument (parameter)
// le sakte hai error (err)
// aur yahan ( inside catch(){} )
// console.log karwa sakte hai hum apne 
// error object ko

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a+b = ", a+b);
// try{
//     console.log("a+b = ", a+c); // error
// } catch(err) {
//     console.log(err);
// }

// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);
// console.log("a+b = ", a+b);

// to agar hume iss line (error line a+c) 
// ke upar shak hai ki yahan par error aa sakta hai
// to ise humne try ke andar likh diya (see code)
// aur catch ke andar hum error ko catch kar sakte hai (see code)
// 59:06

// although hum to yeh hope karenge
// ki try ke andar jitna bhi code likha hai (error line a+c, see code)
// uske andar koi error na aye
// catch ke andar hume kabhi jana na pade
// hume catch ki jarurat hi na pade (see code)
// par for some scenarios we do it in programming

// isko refresh kar lete hai (in bc)
// a =  5
// b =  10
// a+b =  15
// app.js:396 ReferenceError: c is not defined
//     at app.js:394:29
// a+b =  15
// a+b =  15
// a+b =  15
// a+b =  15
// a+b =  15

// iss bar refresh kiya to kya hua
// yahan par (in bc) humara error humare liye
// print hokar aa gaya (ReferenceError in bc)
// yeh (ReferenceError in bc) error nahi hai
// yeh (ReferenceError in bc) console.log ka statement hai
// jisne humare error ko print karwa diya hai
// par baki ka code (after RefrenceError in bc)
// vaise ki vaise chal raha hai
// 59:30

// iss bar humara code rukha nahi
// kyu, kyuki humne apne try catch block
// ko use kar liya (see code) 
// jahan hume shak tha ki yahan par
// koi error aa sakta hai
// 59:35

// So this was all about Classes Objects
// inheritance , error handling

// Class End
