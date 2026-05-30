// to ab sabse pehli baat aati hai jo hum baat humari
// start karenge wo actually mei yeh hum Object Literal 
// se start karenge kyuki object literal actually mei hai kya

// dekhiye object literal hai kuch nahi, 
// literally ek object banana hai 
// jaise for eg aapne ek user naam ka ek object
// banaya 
// (chote u se banayiye ya kisi se bhi banayiye koi dikkat wali baat nahi hai)

// const user = {

// }

// yeh (const user = {}) aapka literally ek object hai 
// ab kya hai ki javascript mei isi ko hi base unit bola
// gaya hai ki aapka jo object hai wo hi object literal hai
// aur wo hi sabse basic unit hai jaise wahan pe (other prog languages mei)
// classes hoti hai , yahan pe (js mei) yeh (object literal) hai

// to ab uske (object literal) andar kar kya kya sakte hai
// ab user (const user = {}) hai to uske pas username
// bhi hoga to suppose kariye uske pas username hitesh hai
// theek hai ji koi dikkat nahi hai

// aur uske pas aur kya features honge 
// aa..., loginCount hoga suppose kariye kitni bar
// log in kar raha hai , suppose kariye ki 8 bar login
// kar chuke hai already

// aur kya options ho sakte hai, aa... signedIn ho sakta
// sakta hai , signedIn ki value true to 
// dekh sakte hai string values yeh sab ho sakte hai

// 11:24

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true
// }

// to yeh hi actually mei aapka object literal hai
// ab isko print kaise karayenge aapko pata hai koi bhi
// value lena hai to 2 tarike maine aapko bataye the
// square bracket se bhi le sakte ho
// aur dot notation se bhi acces kar sakte ho

// suppose kariye mujhe username print karna hai
// print karke as such humara koi fayeda hone wala hai nahi
// to par fir bhi kar lete hai print
// koi dikkat wali baat hi nahi hai

// node '.\10_classes_and_oop\oop.js'  in terminal 

// o/p hitesh

// print ho gaya hitesh

// 11:48

// ab object literal jab aap iss tareh se banate ho
// to maine aapse kaha tha ki object literal hote kya hai
// kuch bhi nahi uske andar collection hota hai (see md file)
// properties aur method

// yeh (as follows)

//     (username: "hitesh",
//     loginCount: 8,
//     signedIn: true)

//  sari aapki properties hai, jaise aapke array
// ke andar ek property di jati hai .length
// wo hi .length properties hai

// array ke andar aapko .map etc wo function
// bhi diye gaye hai taki wo kuch kaam bhi kar lein
// to wo kaam bhi hume yahan pe diye jate hai 
// jaise for eg getUserDetails

// to userDetails (getUserDetails) aapka yeh method hai
// to yeh lijiye aapne bana diya kaha ki function hai
// aur yeh function kya karta hai, aapko kuch return karta hai
// kya return karta hai , ya console.log hi kara lete hai 
// return to nahi karate, return bhi kara sakte hai vaise
// to hum

// ek comma , hum yahan ( signedIn: true ) lagana bhool gaye 
// theek hai ji laga diya as follows ( signedIn: true, )

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log();
//     }
// }

// console.log(user.username);

// likh liya

// console.log kara lete hai isko simply bol
// lete hai, "Got user details from database"
// theek hai ji kaise bhi karke gaya hoga
// leke aya hai database se detail, 
// hume kya farak padta hai

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);

// likh liya

// theek hai to iske saath hi ab aap chahte hai ki 
// isko mai access kar saku to bahut hi normal si baat hai
// getUserDetails ( console.log(user.getUserdetails()) )
// run karana padega ( () ) method hai sirf reference nahi de sakte hai

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// likh liya

// o/p hitesh
// Got user details from database
// undefined

// to -- Got user details from database aur undefined
// bhi aa gaya hai uske (undefined) bare mei bhi charcha karenge
// but theek hai abhi humara kaam ho gaya hai itna
// ki theek hai itni values aa gayi

// 13:04

// Lekin ab ek mudde ki baat yeh aati hai ki 
// jaise hi mai browser ke upar jata hu
// to browser ke upar chalte hai hum ek bar
// (browser mei new tab mei browser console open kar liya)

// aur mujhe pata hai ki iss tareh ki cheejein
// mujhe milti hai properties mei jaise suppose
// kariye console ke andar jaate hai clean karke
// let myArray = 
// aur hum kya karte hai isko literal values de dete hai kuch 1, 2, 3
// let myArray = [1, 2, 3] likha in browser console and enter

// to ab itna to mujhe samajh mei aa gaya hai ki
// myArray ke saath kuch properties attach hoti hai
// myArray in browser console and enter
// (3) [1, 2, 3] aya
// dropdown open karke dekha

// to properties mujhe pata hai length (length: 3)
// jo properties maine kari , 
// kuch method bhi assign hote hai
// (prototype dropdown open karke dekha)

// to method jaise yahan pe mujhe pata hai ki map
// yahan pe ek method available hai mujhe theek hai

// lekin uss map ko yeh kaise pata hai ki mujhe
// 1, 2, 3 ( let myArray = [1, 2, 3] ) pe hi loop
// karna hai, 
// kyuki ek aur bhi to ho sakta hai 
// (ek aur array bhi to ho sakta hai)
// ( both dropdown close kar diye )

// 13:53

// suppose kariye aapke pas kuch myArray2 yahan pe
// aa gaya aur yahan pe to 1 2 3 hi nahi 1 2 3 4 5 6
// aur bhi values hai
// let myArray2 = [1, 2, 3, 5, 6] and enter in browser console

// aa..., obvious si baat hai yeh lijiye 6 value
// let myArray2 = [1, 2, 3, 5, 6, 6] and enter in browser console
// to ab aapko kaise pata ki jo my yeh jo map hai
// yeh yahan pe ( let myArray2 = [1, 2, 3, 5, 6, 6] mei [1, 2, 3, 5, 6, 6] mei)
// agar baat karenge map ke andar kyuki map method to ek hi hai na
// (14:13)

// to ispe 1 2 3 pe ( let myArray = [1, 2, 3] ) loop
// lagana hai ya ispe ( let myArray2 = [1, 2, 3, 5, 6, 6] )
// loop lagana hai
// (14:17)
// to yeh jo difference ata hai ki kaise pata lagau ki mai
// current context ki baat kar raha hu

// context se matlab hai ki current cheejon ki baat kar raha hu
// kyuki dekhiye Monday, Monday hota hai
// iss week ka Monday alag hai,
// last week ka Monday alag tha
// alge week ka Monday alag ayega

// to aapko context batana padega ki kis
// Monday ki baat kar rahe hai aap

// to wahan pe hi exactly humara this keyword 
// kaam ata hai

// to abhi suppose kariye aapne user (const user = {})
// likha, lekin ho sakta hai aap ek aur user likh lete
// (means hum user naam ka ek aur object likh lete ,
// aisa possible hai same naam ke more than one objects likhe
// ja sakte hai)

// ab dono (dono user objects) ke andar method ka naam to same hai na map
// to map to prototype mei chala gaya hai wahan pe
// ab usko (map method ko) kaise pata lage ki 
// aap kispe loop lagana chahte hai,
// yeh function kahan pe run kar raha hai
// uske parameters kitne hai
// to unn sab kaamon ke liye this keyword use aata hai
// (14:51)

// achha this keyword se ghabrayiyega mat
// prototype ke andar yeh actually mei
// wahan jaake asli mei clear hota hai
// ki kya value hai

// abhi kya hai abhi ke liye sirf itna samajh lijiye
// ki abhi ke liye, baad mei bataunga,
// ki aap this keyword jab bhi use kar rahe hai to
// aap current context ki baat kar rahe hai (see const user = {})
// (means scope of {} of const user = {})

// isko (const user = {}) Monday samajh lijiye
// (means scope of {} of const user = {})
// to abhi iss Monday ki baat kar raha hu
// (const user = {}, means scope of {} of const user = {})
// to inn teeno cheejon 
// (username: "hitesh", loginCount: 8, signedIn: true,)
// ki baat karunga

// 15:10

// kahin aur ki baat karunga user ke andar
// (means same const user = {} naam ke dusre object ki
// baat karunga) to unke Monday ki baat karunga, 
// (means to unke i.e. dusre const user = {} ke username: loginCount: signedIn: ki baat karunga)

// to aapko yahan pe (const user = {}) details
// console.log ki jagah
// ( console.log("Got user details from database"); )
// agar maan lijiye kuch details print karani thi (15:18)
// jaise suppose kariye aapko karna tha console.log
// hi karna tha chaliye, console.log kar lete hai
// but back ticks mei karna tha (console.log(``))

// aur mujhe username dena tha , to `Username`
// aur colon -- `Username:`
// aur dollar -- `Username: ${}`
// (console.log(`Username: ${}`))

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         console.log(`Username: ${}`);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// likh liya

// ab yahan pe agar aap username likh lete hai directly
// console.log(`Username: ${username}`);
// to dekhte hai kya hota hai
// 15:33

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         console.log(`Username: ${username}`);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// likh liya

// pehle print karke dekhte hai ki maine to
// username yahan se liya aur likh diya

// o/p hitesh
// C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\oop.js:8
//         console.log(`Username: ${username}`);
//                                  ^

// ReferenceError: username is not defined
//     at Object.getUserDetails (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\oop.js:8:34)
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\oop.js:14:18)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0

// theek hai ji aapne username likha,
// isne kaha -- username is not defined (see o/p)

// 15:41

// kaise nahi hai yeh username to defined hai
// (username: "hitesh" , see code)
// lekin actually mei kya hai ki usko pata hi nahi hai
// konse username ki baat kar rahe ho

// kyuki yeh 
// ( (const user = {})
// console.log(user.username);
// console.log(user.getUserDetails()); )

// jo sab aap likhte ho
// actually mei yeh browser pe ya node ke kisi
// ke pass jata hai, aur wahan pe bataya tha na
// memory javascript engine ke andar sab rakha
// jata hai ek ek karke

// to jab rakha gaya to usne function 
// ( getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${username}`);        
    // } , see code)
// ki detail to le li

// yeh ( // console.log(`Username: ${username}`); ) sara 
// rakh to diya

// but usko pata hi nahi hai user variable kya hai
// kyuki uss function ke andar bhi to execution context 
// yaad aya... wo bana tha , (16:05)
// aapne ab bola hi nahi usko ki bahar se bhi kuch saamaan
// lena hai 

// to bahar se jab aapko saamaan lena hai 
// to uss execution context ko batana padta hai
// ki mai apne saamaan ki baat kar raha hu
// ( console.log(`Username: ${this.username}`); )
// tab hum yahan pe this keyword use karte hai

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// likh liya

// 16:17

// ab yeh this keyword yahan pe aa gaya
// to humne run kara

// o/p hitesh
// Username: hitesh
// undefined

// to abki bar mujhe pata hai ki
// username hitesh yahan pe aa gaya
// ( Username: hitesh )

// undefined (see o/p) ke bare mei baad mei baat karenge
// ki kyu ho raha hai kyuki function ( getUserDetails: function(){ ) 
// run kar rahe hai
// console.log ( console.log(`Username: ${this.username}`); ) 
// mei kuch aa nahi raha hai wahan pe
// console.log apne aap mei to empty print ho raha hai
// wo baad mei charcha karenge but theek hai abhi ke
// liye humare pas itni values hai
// (16:32) aur itna kar sakte hai

// achha ab ek interesting cheej mai aapko batata hu
// ki theek hai yahan pe to aapne kar diya hai 
// lekin kya hota agar mai iss username ko bhi
// comment ( comment out ) kara deta
// ( console.log(`Username: ${this.username}`); ko comment out kar diya)

// aur yahan pe ek console.log print karta ki mujhe 
// to ab this ki value batao -- console.log(this)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// likh liya

// ki yahan pe this ki value kya hai
// yeh bahut hi interesting cheej hai

// ab yahan pe agar mai this ki value print karta hu
// to ayega kya wo dekhiye

// run in terminal

// o/p hitesh
// {
//   username: 'hitesh',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }
// undefined

// to isne mujhe kaha ki are current context 
// jo ek word samajh mei nahi aata aksar logon
// ko ki kis current context ki baat kar rahe hai to dekhiye
// yeh raha aapka object (as follows)

// ( {
//   username: 'hitesh',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// } , 
// see o/p)

// yeh rahe current context (see object in o/p)
// to jitna humara memory ke andar jo bhi value
// tha wo sara ek hi saath rakha gaya aur isko (as follows)

// ( {
//   username: 'hitesh',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// } , 
// see o/p)

// sabke bare mei pata hai (17:09)

// to aapne function ( getUserDetails: [Function: getUserDetails], see o/p )
// ko bola ki yahan 

// ( {
//   username: 'hitesh',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// } , 
// see o/p 
// mei 
//   username: 'hitesh',
//   loginCount: 8,
//   signedIn: true,
// see o/p)

// se jaake values lo
// (17:12)

// theek hai ab ek interesting cheej kya aati hai ki 
// yeh to ho gaya aapka console.log ( console.log(this); )
// but isko ek minute ke liye hum yahan pe
// comment (comment out) kara dete hai
// ( console.log(user.getUserDetails()); ko comment out kar diya )

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username); 
// console.log(user.getUserDetails()); commented out

// likh liya

// achha ek badi interesting cheej aati hai jo ki i think
// sabhi logon ko pata honi chaiye but hoti nahi hai
// (17:25)
// wo yeh ki agar mai console.log yahan global context ke 
// andar this mai print karaun -- console.log(this)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// console.log(user.username);
// // console.log(user.getUserDetails()); commented out
// console.log(this);

// likh liya 

// kyuki abhi global context mei hai 
// (humara cursor global context mei hai)
// function context mei to nahi hai execution mei
// (17:33)
// yahan pe value kya aati hai, yeh bada interesting hai

// run in terminal

// o/p hitesh
// {}

// to yahan pe dekhiye value aapke pas aati hai
// empty paranthesis (empty curly braces {} , see o/p)
// matlab abhi global context mei kuch nahi hai
// (17:41)

// Lekin yeh global context change hota hai
// maine aapko bataya tha examples mei ki browser
// se nikaal ke humne leke aye hai 
// (js engine ko browser se nikaal ke leke aye hai)

// yeh value (empty curly braces {} , see o/p) 
// actually mei change hoti rehti hai
// (browser console mei aa gaye and clear kar liya)
// kyuki browser ke andar dekhiye bahut sari API access hai
// fetch hai, browser request hai, DOM hai
// bahut sari 50 cheejein hai yahan pe

// (17:56)

// to yahan pe (browser console mei) jab aap console.log karte hai
// to actually mei aapke pass already log
// ke andar bahut sara context hota hai

// to yahan pe (browser console mei) jab aap
// console.log(this) karoge (and press enter)
// to aapko window object milta hai jo ki global object hai
// (console.log(this) in browser console and enter)
// (18:07)

// aur uske (window object) andar humari 50 hajaar cheejein ho rahi hai
// (18:10) (dropdown open and close window object)
// jitna bhi cancelAnimationFrame, caches,
// aa... 75 cheejein ho rahi hai ( dropdown open window object and see )

// to by default browser mei jab run hota hai
// tab aapka this ka value (console.log(this))
// yani current context global context mei bahut sari cheejein
// rakhi hui hai 

// (18:20)

// Lekin jab yahan pe (code editor mei) aa jate hai 
// node environment ke andar tab humare pas kum (less) hai
// (kum cheejein hai console.log(this) ke o/p mei means empty {}, see o/p)

// achha ab ek problem pata hai kya aati hai
// ki agar dekhiye yeh to maine user bana liya ek 
// (const user = {}, see code)
// aur kaam bhi apna achhe se kar liya hai
// theek hai ji koi dikkat wali baat hai nahi usme
// console.log(this) ko comment out kar diya

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// console.log(user.username);
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out

// likh liya 

// (18:34)

// Lekin agar mere ko user two banana hai
// to kya karna padega
// koi aur option hi nahi hai
// yeh (const user = {}) poora ka poora lena padega
// (const user = {} ko copy and paste kar diya const user = {} ke neeche)
// aur user two banana padega (const user2 = {})
// (18:44)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// const user2 = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); 
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);

// likh liya 

// obvious si baat hai user2 (const user2 = {}) jab banega
// to uske andar alag values dalegi
// to har bar repeat karna possible nahi hai

// suppose kariye mai ek structure bana raha tha data
// ka database mei daalne ke liye ki username, loginCount
// signedIn (see const user2 = {}) yeh sab mai daal dunga
// method (getUserDetails: function(){} in const user2 = {})
// chaliye nahi dalta hu, 
// but har bar itna sara kaam (username, loginCount signedIn)
// karna padega to uss kaam ko rokne ke liye
// actually mei humare pas constructor functions aur yeh
// sab aate hai

// (19:03)

// theek hai yeh to ho gaya basic
// theek hai to yeh kaam ab aapko pata lag raha hai
// kyu problem de raha hai hume
// (const user2 = {} ko backspace kar diya)
// theek hai

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// console.log(user.username);
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out

// likh liya

// ab aage chalte hai humare constructor function ke upar
// kyuki humne notes mei dekha tha ki mai kuch cheejon ki baat
// karunga, yeh cheejein to abhi humne object literal (see md file)
// ke bare mei baat kari ki kya object hai literal humare pas
// pehle bhi humne kari thi,

// this keyword kya hota hai (console.log(this) in getUserDetails of const user = {})
// alag alag context mei kya hota hai 
// to object literal (see md file) ki sirf humne baat kari hai

// ab baat karte hai av=ctually mei constructor function (see md file) ki
// constructor function actually mei kya kya kar raha hai
// kyu kar raha hai kaise kar raha hai

// ab aapne constructor function kayi bar actually mei dekha hai
// ab mai console.log hata deta hu sara kyuki jarurat nahi hai ab iski
// (console.log(user.username) ko comment out kar diya)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out

// likh liya

// to aapne agar yaad ho to humne kuch iss tareh
// ka code bhi likha tha , humne bola tha ki 
// promiseOne hai humare pas , to suppose kariye promiseOne
// const promiseOne
// aur bola tha new
// const promiseOne = new
// aur yeh Promise
// const promiseOne = new Promise()
// theek hai ji yeh promise iss tareh se likha tha

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out


// const promiseOne = new Promise()

// likh liya 

// 19:53

// ab kya baat thi humari yahan pe ki yeh jo
// new keyword hai ( const promiseOne = new Promise() ) 
// yeh actually mei aya kahan se aur yeh kya kaam kar raha hai
// aur sirf yahin pe ( const promiseOne = new Promise() ) hi nahi
// aapke pas aur bhi examples hai aise

// jaise suppose kariye aap date lete hai tab bhi aap yu
// bolte hai new date iss tareh se mujhe date do
// const date = new Date()

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out


// const promiseOne = new Promise()
// const date = new Date()

// likh liya 

// 20:05

// to yahan pe (const date = new Date()) bhi aata hai
// yeh actually mei jo new keyword hai yeh actually mei
// constructor function hai 

// ab yeh constructor function karta kya hai, 
// yeh sirf aapko allow karta hai ki aap matlab ek hi
// object se, ek hi object literal se aap multiple instances
// bana sako

// dekhiye agar ek hi instance hoga to obvious si baat hai
// mai to khush hu ki memory ke andar jada jagah nahi jaa rahi hai
// sara kaam ho raha hai 

// Lekin kayi aisi situation hoti hai especially jaise promise date
// wahan pe hume naya instance hi chahiye, purani values ko
// affect mat karo, this etc jo bol raha hu to apna apna context
// rakho aap wahan pe, jo execution context hota hai

// to yeh jo new keyword hai (const date = new Date())
// yeh actually mei naya executional..., executional to nahi
// but naya context banane ke liye humare pas kaam aata hai
// aur isi ko ( const date = new Date() mei new ko )
// hum constructor function bolte hai

// 20:47

// ab yeh constructor function kaam kaise aata hai
// actually mei kaafi jagah aap iske saath interesting cheejein
// kar sakte hai, batate hai jaise aapko
// objects ke andar hi batate hai classes mei to abhi gaye nahi hai hum

// ( following lines ko backspace kar diya
// const promiseOne = new Promise()
// const date = new Date()  )


// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out

// likh liya 

// to kya hai suppose kariye ki aap ek function bana rahe hai
// theek hai ji function bana rahe hai
// ab yeh function ka naam hai User
// function User

// ab dekhiye interestingly classes to bana hi nahi raha hu
// function bana raha hu, object bhi nahi bana raha ,
// function bana raha hu , 

// ab function hume pata hai
// User banaya to function to ek hi bar run hota hai
// uska to ek hi global execution context hota hai
// wahin pe ho jata hai (21:15)

// par suppose kariye agar maine ek User naam ka
// function banaya, uske andar maine kaha ki aap mujhe
// kya kya do username do

// function User(username){}

// aur kya do, aa..., aur kya hote hai loginCount de do
// function User(username, loginCount){}

// aur kya de do isLoggedIn
// function User(username, loginCount, isLoggedIn){}

// theek hai 3 values hi le lete hai isLoggedIn
// yeh aapne 3 values le li

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out


// function User(username, loginCount, isLoggedIn){

// }

// likh liya 

// (21:35)

// ab maine kaha ki inn 3 values (username, loginCount, isLoggedIn)
// ko name mei set karna hai, 
// theek hai to maine kaha ki mere pas ek already variable
// hai username
// function User(username, loginCount, isLoggedIn){
//    username  
// }

// aur usme (jo username likha hai) aap assign kar do
// ya fir myUsername , usme assign kar do yeh 
// aap upar wala username (function ke parameter wala username)

// function User(username, loginCount, isLoggedIn){
//    username = username
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out


// function User(username, loginCount, isLoggedIn){
//    username = username
// }

// likh liya 

// ab problem kya aati hai ki hume nahi pata ki yar yeh jo
// aap mujhe pass kar rahe ho 
// (function User(username, loginCount, isLoggedIn){} mei username)
// yeh konsa wala username hai

// aur yeh (username = username , mei left wala username) konsa,
// kisme kya assign ho raha hai

// to agar mai yahan pe likh du myusername (as follows)

// function User(username, loginCount, isLoggedIn){
//    myusername = username
// }

// to bada easily pata lag jayega ki haa theek hai
// yeh wala username (myusername = username , mei myusername) aapka variable hai
// yeh wala user (myusername = username , mei username) jo 
// humare pass parameter pass hua uski value hai, argument hai
// to kaam ho jayega

// (22:05)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out


// function User(username, loginCount, isLoggedIn){
//    myusername = username
// }

// likh liya 

// Lekin aksar coding practice mei yeh dekha gaya hai ki
// yeh dono ke naam hum same hi rakhte hai

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out


// function User(username, loginCount, isLoggedIn){
//    username = username
// }

// likh liya 

// (22:09)

// Lekin batayenge kaise ki mere andar ki variable konse
// hai aur aap konse de rahe ho , 
// to wapas se wo hi this keyword
// (22:14)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database"); commented out
//         // console.log(`Username: ${this.username}`); commented out
//         console.log(this);
//     }
// }

// // console.log(user.username); commented out
// // console.log(user.getUserDetails()); commented out
// // console.log(this); commented out


// function User(username, loginCount, isLoggedIn){
//    this.username = username
// }

// likh liya 

// 22:14

// to yeh syntax aap kaafi dekhoge -- this.username
// yeh jo left hand side wali value hai
// ( this.username )
// yeh humara variable hai

// aur jo right hand side wali value hai
// ( username )
// jo aap pass karke de rahe ho 
// ( means jo function ka parameter aap pass karke de rahe ho )

// (22:23)

// theek hai to bada hi basic aap chaho to variable
// ke naam alag likh do but fir bhi yeh this ka concept
// to ayega

// to actually mei this kya hai humne dekha bhi
// ek object hai , object ke andar values daale
// ja rahe hai tabhi to this.username, this.yeh ...
// (object mei dot access method hota hai isliye this object hai)
// (22:33)

// abhi agar aapko yaad ho to just humne dekha tha na 
// ek blank object hi to hai 
// (pehle terminal mei o/p mei {} aa raha tha , humne dekha tha)
// (22:36)
// object ke andar jo bhi daalna hai this.yeh ... ,
// this.wo ... karke daale jao , kya dikkat hai
// (this.username = username)

// theek hai to yeh ho gaya humara basic 
// to loginCount bhi daal dete hai
// this.loginCount =
// yeh naya humne banaya hai , iske andar 
// inject kar diya jo bhi aapne loginCount diya
// this.loginCount = loginCount

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
// }

// likh liya

// theek hai koi dikkat nahi hai
// this.isLoggedIn , yeh aapne diya
// this.isLoggedIn =
// aur jo aap pass kar rahe ho wo bhi maine
// kar diya
// this.isLoggedIn = isLoggedIn

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn
// }

// likh liya

// achha ab ek interesting cheej aapko batata hu
// yahan se aap chaho to isko -- return this 
// kar sakte ho

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// likh liya

// return this karte hi kya hua, wo jo
// object tha na ({}) aapne pass on kar diya ab

// ab jo bhi iske saath (function User(username, loginCount, isLoggedIn){}) 
// kuch khelega wo aaraam se iss poori values 

// ( function User(username, loginCount, isLoggedIn){} /
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn ) 

// ko access kar sakta hai

// (23:11)

// achha ab ek interesting cheej yeh hai
// ki ab hum new keyword ka use karte hai

// to isko bolte hai hum humara userOne
// const userOne =
// ab userOne kya kar raha hai hum jadatar 
// abhi tak yeh hi khelte aye the User()
// const userOne = User()
// iss tareh se humne khela tha
// (23:23)

// aur values lete hai chaliye isi tareh se khelete hai
// ek bar jo abhi tak hum samajhte aye hai seekhte aye hai
// const userOne = User("hitesh",)
// (username ki value "hitesh" le li, 
// compare with previous function User(username, loginCount, isLoggedIn))
// aa..., loginCount kitna hai 12 hai
// const userOne = User("hitesh", 12,)
// aur yeh isLoggedIn true hai
// const userOne = User("hitesh", 12, true)


// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// const userOne = User("hitesh", 12, true)

// likh liya

// theek hai ji userOne print karein
// bilkul karenge, isme kya dikkat hai
// console.log(userOne)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// const userOne = User("hitesh", 12, true)

// console.log(userOne);

// likh liya

// yeh lijiye print kiya
// (run in terminal)
// value kya ayi, wo sabse interesting hai

// o/p <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   username: 'hitesh',
//   loginCount: 12,
//   isLoggedIn: true
// }

// value ayi humare pas ki poora ka poora yeh this 
// print ho raha hai, kyuki usne return humare pas 
// this kiya hai actually mei values to poora values
// humare pas print ho gayi hai (see o/p)

// dekhiye baki values jo aa rahi hai na
// crypto getter setters fetch(see o/p)

// ( atob: [Getter/Setter],
// btoa: [Getter/Setter],
// performance: [Getter/Setter],
// fetch: [Function: fetch],
// crypto: [Getter], see o/p)

// yeh maine aapko bataya tha aati hai 
// aap jaise hi node ke andar jaate hai to fetch
// yahan pe (fetch: [Function: fetch], see o/p)
// milta hi hai aapko

// to inn sabko 

// (atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter], see o/p)

// hum ignore kar dete hai ek minute ke liye
// hum sirf ispe jaate hai username, loginCount
// issLoggedIn
// (username: 'hitesh',
//   loginCount: 12,
//   isLoggedIn: true
// } see o/p)

// theek hai ji koi dikkat nahi hai itna to hume pata
// hi tha ki isi ke andar yeh aane wale hai 
// aur mai sari properties access bhi kar sakta hu
// jaise .isLoggedIn, .loginCount, .username
// ( console.log(userOne.isLoggedIn), 
// console.log(userOne.loginCount), 
// console.log(userOne.username) ) 
// yehn basic hai koi dikkat wali baat nahi hai

// (24:17)

// achha problem kab aati hai ki suppose kariye
// maine bola const userTwo =
// aur userTwo ko bola ki aap bhi kya kariye
// User se baniye
// const userTwo = User()
// Lekin iss bar "ChaiAurCode"
// const userTwo = User("ChaiAurCode")
// theek hai ji 
// aur bola aap 11 ho (loginCount)
// aur aap false ho (isLoggedIn)

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)

// console.log(userOne);

// likh liya

// theek hai ji ab wapas se hum userOne ki
// values print kara ke dekhte hai ki ab
// kya hota hai (console.log(userOne))

// run in terminal

// o/p <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   username: 'ChaiAurCode',
//   loginCount: 11,
//   isLoggedIn: false
// }

// theek hai to isko run karaya 
// are yeh kya ho gaya, yeh to expected hi nahi tha
// ki username ke andar ChaiAurCode aa gaya hai 
// kyuki dekhiye userTwo to aapne kabhi print hi nahi karaya
// (see code -- console.log(userOne))

// but userTwo ne kya kara values overwrite kar di
// sari ki sari (see o/p)
// ha ji sari ki sari value aapki over write kar di (see o/p)

// ab ek baat batayiye kya yeh values jab over write ho rahi
// hai achha lag raha hai (25:04)
// yeh to poora ka poora code hi humara band baja dega agar
// iss tareh se karne lage to

// imagine kariye 10 - 15 programmer jab code
// karte hai aur iss tareh se values over write karoge
// to kya hoga, haa bahut problem ho jayegi

// isiliye jo promises wala video tha usme mai
// bar bar new keyword use kar raha tha bina aapko
// samjhaye, ab samajh mei aya kya kahani hai (25:22)

// chaliye ab agar aapke kahani samajh mei aa gayi hai
// ki yeh sab 

// (  atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   username: 'ChaiAurCode',
//   loginCount: 11,
//   isLoggedIn: false , see o/p )

// kyu ho raha hai tab aapko samajh mei aa gaya
// ki actually mei jo mai baat kar raha tha
// constructor function ki (see md file)

// constructor function kya karta hai aapko har
// baar ek naya instance de deta hai , ek nayi
// copy de deta hai

// uss copy ke saath jo bhi aap kheloge , 
// wo aapke hawale hai , aap jo likh rahe
// ho wo aapke hawale hai,
// original ya fir dusre usse effect nahi hote hai

// (25:44)

// to karna kuch nahi hai, bas yahan pe ek ek 
// keyword add kar dena hai, itna jada bada bhari
// keyword bhi nahi hai, sirf yahan pe ayiye aur bol
// dijiye ki mujhe ( const userOne = User("hitesh", 12, true) )
// to naya instance do bhai

// const userOne = new User("hitesh", 12, true)

// purana wala aap apne pas rakho, 
// mujhe ( const userOne = User("hitesh", 12, true) )
// naya do

// mujhe ( const userTwo = User("ChaiAurCode", 11, false) ) 
// bhi naya do

// const userTwo = new User("ChaiAurCode", 11, false)

// 25:55


// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)

// console.log(userOne);

// likh liya

// theek hai ab aapne sirf dekhiye, achha humne kuch object
// nahi likha hai, class nahi likhi hai, bas hum sirf new 
// keyword ka importance yahan pe jaan rahe hai

// theek hai ji wapas se print kara lete hai
// ( run in terminal )

// o/p User { username: 'hitesh', loginCount: 12, isLoggedIn: true }

// to abki baar kya hai User dekhiye (see o/p)
// kaafi clean ho gaya hai, new keyword use kara to
// wo faltu ka jo mess hai wo bhi nahi aa raha hai
// kyuki usko pata hai nahi dena hai wo

// Lekin username humare pass "hitesh" hai (see o/p)
// aur yahin ki yahin aap dekh sakte hai
// ki jo aap userTwo likh rahe hai (console.log(userTwo))
// uski alag copy hai apne pas 
// wo apna alag jo bhi usko khelna hai
// wo apna alag khel raha hai

// 26:21


// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)

// console.log(userOne);
// console.log(userTwo);

// likh liya

// ( run in terminal )

// o/p User { username: 'hitesh', loginCount: 12, isLoggedIn: true }
// User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }

// 26:21

// to koi dikkat wali baat hi nahi hai yahan pe
// to alag alag..., 
// to hume yeh pata laga ki actually mei
// constructor function (see md file)
// kya karta hai 
// yeh aapko har bar ek naya instance deta hai

// achha ek cheej aur batata hu yahan pe
// suppose kariye agar mai -- return this
// nahi karta, tab kya hota


// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     // return this commented out
// }

// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)

// console.log(userOne);
// console.log(userTwo);

// likh liya

// ... tab kya hota,
// tab kya values milti nahi milti
// haa ji yeh bada interesting hai yeh bhi jaan na
// jaruri hai aapko

// 26:42

// (run in terminal)

// o/p User { username: 'hitesh', loginCount: 12, isLoggedIn: true }
// User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }

// dekhiye abhi bhi aapko mil raha hai (see o/p)
// to aap -- return this
// likhein ya nahi likhein , yeh explicitly...
// nahi implicitly bolenge usko , 
// theek hai to implicitly aapka define hota hi hai 

// aapko karne ki jarurat nahi hai return hota hi hai
// by default maan lo ki as such koi jarurat nahi hai
// implicitly define hota hai 
// but theek hai (27:00)