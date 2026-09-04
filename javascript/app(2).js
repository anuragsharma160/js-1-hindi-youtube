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