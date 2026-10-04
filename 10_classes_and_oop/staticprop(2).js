// 19:19

// actually mei hai kuch nahi
// prop ka matlab properties hi hai
// cool short lagne ke liye bol dete hai

// theek hai to chaliye wapas se aate hai hum
// yahan pe class
// class

// aur hum kya chahte hai
// wapas se ek User banana chahte hai
// class User{}

// chaliye User bahut bana rahe hai hum
// kyuki sara khel hi User ka hai
// jiske pas jada User , uski company jada powerful

// theek hai to constructor ek banaya
// aur humne yahan pe le liya
// User ke saath username le lete hai
// class User{
//     constructor(username){}
// }

// ab iss username ka kya karna padega
// this.username = username

// class User{
//     constructor(username){
//         this.username = username
//     }
// }

// ab iske andar ho sakta hai ki aap
// kuch method bhi lagana chahe
// ek method mai kya lagana chahta hu
// ki yeh username hai aur
// ek method laga lete hai
// usko bol dete hai
// logMe(){}
// wo hi same

// logMe simply console.log karta hai
// console.log()
// aur aap this.username ka access le lo
// console.log(`Username: ${this.username}`)

// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }
// }

// ab kya hoga kayi bar aap kuch methods ya fir
// kuch properties iss tareh ki bana sakte ho
// mai chahta hu ki jaise hi ek user bane...
// yeh hota bhi hai actually mei...
// vaise hi uss user ko ek unique id mil jaye
// 20:44

// jab aap database etc mei save karoge na to
// mongodb automatically jaise hi aap ek user
// banate ho wahan se ,
// to uske saath ek underscore id attach kar deta hai
// 20:51
// to suppose kariye wo hi functionality
// hum yahan pe kar rahe hai
// 20:54

// to aa..., uska (uss functionality ka) naam hum
// likh dete hai createId
// createId(){}
// theek hai ji createId de di
// aur yeh ho gaya humara createId
// createId(){

// }

// aur har bar jab bhi hum kar rahe hai
// to ek return kar rahe hai,
// vaise mai Math.random() etc
// use nahi karna chah raha yahan pe
// to hum kya kar rahe hai ek return kar rahe hai ki
// ek back ticks ke saath 123
// return `123`

// to har bar assume kar lijiye har bar unique
// ho raha hai but yeh kara ( return `123` )
// 21:12

// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     createId(){
//         return `123`
//     }
// }

// ab mai kya chahta hu ki iss jo id hai
// abhi kya hai ki koi bhi agar user banaoge
// to suppose kariye hitesh hi bana lete hai
// const hitesh
// aur agar wo ek new User hai
// const hitesh = new User()
// aur usne ek username bhi pas kar rakha hai hitesh
// const hitesh = new User("hitesh")

// to abhi aisa kuch nahi hai jo isko (const hitesh) yeh
// Ids bar bar generate karne se koi rok raha hai
// 21:28
// to hitesh.createId() mai bana sakta hu
// aur yeh lijiye createId ban gaya
// to kuch aisa hai hi nahi jo mujhe rok raha hai

// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// hitesh.createId()

// save and run
// aur dekhiye code mei kaam hone se jada kaam
// ko rokna jada jaruri hota hai
// yeh maine kaafi saal ke experience se dekha
// ki sab cheej access mat do
// roko cheejo ko

// humne usko print nahi karaya actually mei
// to console.log yahin kar lete hai chaliye

// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// console.log(hitesh.createId());

// save and run
// o/p 123

// to 123 humare pas aa gaya
// ab kayi bar aisi bahut sari situation hogi jahan pe
// aap iss method ( createId(){} ) ka access har uss object
// ko nahi dena chahte hai jo
// iss class (User) se instantiate hua hai

// theek hai to uske liye kuch mat karo
// static laga do ek keyword aage

// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     static createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// console.log(hitesh.createId());


// static kya karta hai
// uss method ko ya uss property ko
// access hone se rok deta hai
// yeh jo bhi aap inko (const hitesh)
// karaoge

// aur aapko usecase to samajh hi aa gaya
// jadatar log kya hai sirf aise samjhate hai
// ki iss property (as follows)
    // ( static createId(){
    //     return `123`
    // } )

// ka access nahi dena chahte
// are kyu nahi dena chahte
// are bahut sare aise kaam hote hai jaise
// ek kaam yeh hi hua na
// Id ( static createId(){} ) ka access
// sabko nahi dena chahta na mai
// ki har bar ek unique
// Id banane ki functionality
// aapko bhi mil jaye
// kayi bar dena chahta hu
// kayi bar nahi dena chahta
// bahut sare aise cases hai

// 22:36

// to ab iss case mei agar mai jata hu 
// wahan pe

// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     static createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// console.log(hitesh.createId());

// save and run
// o/p C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\staticprop.js:16
// console.log(hitesh.createId());
//                    ^

// TypeError: hitesh.createId is not a function
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\staticprop.js:16:20)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0

// ...to ab iss case mei agar mai jata hu 
// wahan pe
// to yeh seedha bol dega ki dekho aisa hai
// yeh jo method hai na createId
// hai, aapke ( const hitesh = new User("hitesh") ) liye nahi hai

// mere (User) ko jo kaam karna hai
// mujhe karne do
// aap (const hitesh) isse (createId)
// kuch bhi kaam mat lo
// 22:48

// achha iske andar fayeda kya hai
// ki aap iss tareh ki aur bhi values
// etc karna chahte ho to
// iska (User) koi aap extend etc bhi karoge na
// wahan pe bhi kuch itna problem nahi aata hai

// suppose kariye ki abhi hum yeh User
// bana rahe the ( const hitesh = new User("hitesh") )
// ab suppose kariye
// ek aur class bana lete hai saath ki saath
// ek Teacher class aapne bana li
// jo ki extends kar rahi hai
// humare User ko
// class Teacher extends User{}

// theek hai ji to obvious si baat hai constructor yahan
// pe bhi hai
// class Teacher extends User{
//     constructor(){}
// }

// yeh constructor hai
// aur yeh constructor kya le raha hai yahan pe
// sirf ek email le raha hai
// class Teacher extends User{
//     constructor(email){}
// }

// class Teacher extends User{
//     constructor(email){
//         this.email = email
// }
// }

// ab kyuki yahan pe super constructor bhi call
// ho sakta hai to theek hai
// usko bhi kara hi dete hai
// par super constructor ke liye
// pehle values (parameters) bhi to leni padegi
// to hum username le rahe the (see Parent class)
// chaliye username le lete hai

// class Teacher extends User{
//     constructor(username, email){
//         this.email = email
//     }
// }

// order yahan pe
// class Teacher extends User{
//     constructor(username, email){
// depend nahi karta , order kuch bhi ho sakta hai

// theek hai ji to super call kar dete hai
// aur aapko pata hi hai super kya kya leke jayega apne saath
// this call , haa ab aap bhi expert ho hi gaye hai
// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// ab kyuki isne extend kiya hai
// to ek bana lete hai
// const iphone = 
// aur iphone Teacher se hi banega
// const iphone = new Teacher()
// username - iphone
// email - i@phone.com
// const iphone = new Teacher("iphone", "i@phone.com")
// ab mere ko pata hai ki mai console.log
// agar karta hu iss iphone ka 
// console.log(iphone)


// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     static createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// console.log(hitesh.createId());

// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone)


// ...ab mere ko pata hai ki mai console.log
// agar karta hu iss iphone ka 
// console.log(iphone)

// to mujhe pata hai basic mere pas
// methods etc yahan (child class) mai koi
// method declare karta hu to wo method hoga
// access (iphone ke pas)

// suppose karo isme (Teacher) method hi nahi hai
// to ek method mere pas logMe hai
// to logMe to aana chahiye na
// ha ji aana chahiye
// console.log(iphone.logMe())
// logMe ko console.log ki need nahi hai
// kyuki logMe mei hi console.log ho raha hai
// iphone.logMe()


// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     static createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// // console.log(hitesh.createId());

// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// // console.log(iphone)
// iphone.logMe()



// save and run
// o/p Username: iphone

// to yahan pe username iphone aa gaya
// lekin lekin baat thi createId ki ( static createId(){} )
// yehi to mudda tha asli ki createId ho raha hai kya
// yahan pe
// iphone.createId()
// isko ( iphone.createId() ) wrap karna padega console.log mei
// kyuki yeh to sirf return kar raha hai bas Id
// print nahi kar raha
// console.log(iphone.createId());



// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`)
//     }

//     static createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// // console.log(hitesh.createId());

// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// // console.log(iphone)
// // iphone.logMe()
// console.log(iphone.createId());


// save and run
// o/p C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\staticprop.js:28
// console.log(iphone.createId());
//                    ^

// TypeError: iphone.createId is not a function
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\staticprop.js:28:20)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0


// to static jaise hi aapne kar diya
// wo aapke kisi bhi aapke child ko bhi
// access nahi karne de raha
// ya koi class ko inherit karne ki koshish
// kar raha hai to usko bhi access
// nahi de raha

// to yeh bada hi interesting mamla hai humare pas classes
// mei aur syntactical sugar to ab aapko
// har jagah dikh rahi hai ki haa classes
// jaise hi hai
// ab aap classes nahi dekh rahe hai
// ab aap actually mei cheejon ko dekh rahe hai
// 25:42

// jaise jaise aapki aur practice hogi
// fir brain mei ek imagination
// chalegi
// jaise abhi behind the scene ki imagination
// chal rahi hai na super likhte hi

// vaise hi mere brain mei imagination chalti hai
// ki jaise hi mai kuch bhi karta hu
// to mere brain mei execution context chalta hai
// function likhte hi context upar aa jata hai

// uske andar ek aur function call karte hi automatically
// mere brain mei ek aur context aa jata hai
// this ki baat hone lag jati hai
// to aapke bhi hone lag jayegi
// 26:05

// Class End