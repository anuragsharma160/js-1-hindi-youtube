// This keyword kya karta hai current context
// ke bare mei batata hai

// Arrow functions samajhne k liye this samajhna
// padega, this samajhne k liye hume wapas thoda
// sa object mei jana padega

// to arrow functions ko hum detail mei jaante hai
// ki kaise arrow functions kaam karte hai aur kaise
// inko use kiya jata

// yeh humne nayi file bana li hai, ab iss file k
// andar basic sa object banate hai

// Suppose kariye aap apni website par ek user ko
// register kar rahe hai, uske liye yeh object
// aapne banaya as follows

// const user = {

// }

// Ab uska ek username bhi hoga, to suppose kariye
// apne uska username de diya hitesh as follows
// ya jo bhi username apke pas tha

// const user = {
//     username: "hitesh",
// }

// aap usse kuch paise bhi le rahe the apni
// website pe register hone k liye, suppose
// kariye aap Rs 999 le rahe the as follows

// const user = {
//     username: "hitesh",
//     price: 999,
// }

// Aur uske baad aap usko kya bol rahe the ki aap
// log in bhi kariye to log in karte time ek method
// bhi run kar rahe the, to jiske andar naam tha uska
// welcome, to welcomeMessage aap usko iss tareh se
// de rahe the as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: 
// }

// Yeh welcomeMessage aapne diya, aapne kaha, yeh welcomeMessage
// na ek function hona chahiye as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){

//     }
// }

// theek hai yeh function humne bana liya iss tareh se
// aur yahan pe store kar liya as above

// ab aap chahte hai ki jo bhi user iss function (object) k andar
// aaye, usko hi mai yeh message pass karu

// ab yahan pe to dekhiye username "hitesh" hai, lekin aage jake
// yeh badal bhi sakta hai, ho sakta hai kisi aur ne iss object
// ko kaam mei liya ho, iss method (username, welcomeMessage) ka
// name change kar diya ho, to waha pe hum chahte hai ki yeh
// welcomemessage thoda sa alag ho jaye, to theek hai chahliye
// dekhte hai kaise karenge

// to hum yahan pe console.log simply print kar dete hai (in function),
// back ticks use karte hai as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(``);
        
//     }
// }

// aur yahan pe hum laga dete hai humara variable i.e. ${} as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${}`);
        
//     }
// }

// aur isko bolte hai -- welcome to website

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${} welcome to website`);
        
//     }
// }

// theek hai yahan pe hum comma bhi add kar dete hai as follows
// (${} k just baad mei ,)

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${} , welcome to website`);
        
//     }
// }

// ab yahan pe (${} mei  curly braces k andar) kya hai ki agar hume  
// iss variable (i.e. username , see in object) ko refer karna hai
// to isko hum direct aise nahi bol sakte ki -- ${username} as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${username} , welcome to website`);
        
//     }
// }

// just above ki jaise hum nahi bol sakte

// theek hai yahan pe yeh (just above) kaam kar raha hai but 
// aise (${username}) nahi kiya jata

// apko jab bhi current context ko refer karna hai, abhi current
// context kya hai humara jaisa ki humne scope mei padh hi liya
// tha, abhi humara current context sirf itna hai (i.e. const user = {}
// k first curly brace se leke const user = {} k last curly brace tak),
// iss curly braces k andar, iske bahar jo bhi hai usse humara koi vasta
// nahi hai

// to jab aap current context ko refer kar rahe hai, chahe username ko,
// chahe price ko, to uske saath hum lagate hai this keyword as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }

// to yeh this hai cureent context banata hai

// to ab sabse bada jo sawaal ata hai ki yahan pe to chaliye hume
// samajh mei aa gaya ki this ka matlab hai current context yani
// ki iss scope (const user = {} k first curly brace se leke, 
// const user = {} k last curly brace tak) k andar jitne bhi
// variables hai unko access karne k liye hum this laga denge
// this. yeh, this. wo (this.username, this.price)

// Lekin agar hum yahan pe (outside scope of const user = {}) aake this
// likhte hai as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }

// this

// to yahan pe (outside scope of const user = {}, jahan this likha hai)
// bhi to kuch current context hoga, to wo current context hai kya
// sabse phele to hum wo samjhenge, theek hai to yeh ho gayi humari basic
// baat

// aur iske baad sir kuch humko run bhi karke
// dikhayenge this k andar code etc to kaafi humare myths
// dhur honge kyuki bahut saari rati ratayi baatein hoti hai
// jaise yeh sabne rat liya hai ki arrow function k andar this nahi
// hota hai, haa theek hai maan li apki baat ki nahi hota hai bahut logo
// ne rat bhi liya hai usko lekin kyu nahi hota hai agar hota hai to kya
// usko refer karta hai wo sab hume this se samajh ayega

// to this samajh mei aa gaya hai bada hi basic sa hai current context
// (for eg -- const user = {} k scope) ko refer karta hai 3:50

// theek hai to ab isko run bhi karke dekhte hai as follows

// to humne kya bola ki yeh jo user hai (const = user{}) iske andar se
// hum kya karte hai . (user.) yeh welcomeMessage run karke dekhte hai
// as follows (user.welcomeMessage)

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }

// user.welcomeMessage

// achha abhi hum isko as it is aise hi run karte hai -- user.welcomeMessage

// to isko run karte hai terminal mei

// o/p -- kuch nahi aya terminal mei

// ab kya hua run k baad koi value to ayi nahi

// welcomeMessage obvious si baat hai ek method hai (function hai)
// to iss tareh se hum run karte hai isko -- welcomeMessage() as follows

// (phele bhi sir ne method bola tha before 4:36 wo sahi tha shayad)

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }

// user.welcomeMessage()

// wapas se run karke dekhte hai

// o/p hitesh , welcome to website

// =================================================================

// Lekin agar kisi ne yahan pe aane k baad ( user.welcomeMessage() )
// yeh ( user.welcomeMessage() ) to sir ne default value di thi

// Agar koi username ko iss tareh se change kar deta i.e.
// user.username = "sam" aur bol deta ki username ab "sam" hai
// (aur fir hum user.welcomeMessage() likhte user.username = "sam"
// k liye) as follows to hum kya karte

// (phele jo user.welcomeMessage() likha hai wo default value
// hai , baad mei jo user.welcomeMessage() likha hai wo
// user.username = "sam" k liye likha hai)

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()


// to hum kya karte, to abhi jo first humare pas
// welcomeMessage hai i.e. user.welcomeMessage() wo obvious
// si baat hai hitesh k liye hoga (as wo default hai)

// Lekin yahan pe aapne value change kar di (user.username = "sam")
// to kis tareh se wo run karega , (to run karte hai terminal mei)

// o/p hitesh , welcome to website
// sam , welcome to website

// to usne kaha (o/p mei) sam (sam , welcome to website)
// yeh sam ho kyu paya kyuki humne value yahan pe (i.e.
// console.log(`${this.username} , welcome to website`);)
// hardcode nahi kari thi

// Humne kaha tha jo bhi current context hai (i.e. scope
// of const user = {}) uss current context k andar jo uss
// username ki value hai (username: "hitesh") usko print
// karo

// to abhi jo current context tha yahan tak ( i.e.
// phele jo humne user.welcomeMessage() likha hai) to wo (current context)
// same tha

// yahan pe (user.username = "sam") humne context change kar diya
// context ka matlab hai simple values, uske (context) andar
// jo jo apke variables hai wo kya hold kar rahe hai, to wo context
// humne yahan pe (user.username = "sam") change kar diya, "sam"
// likh diya, ab hum "sam" ki baat kar rahe hai, context matlab kiske
// bare mei baat ho rahi hai

// jaise dekhte hai na kayi bar iss movie ka context nahi samajh aa raha
// yani ki hume pata nahi ki yeh movie hai kis bare mei robbery ki hai,
// comedy ki hai, konsi movie hai

// to abhi humne yeh context dekha hai (user.username = "sam")
// to yeh "sam" ho gaya humara context 
// aur context ho gaya change ab (i.e. baad mei humne jo
// user.welcomeMesage()) likha hai

// ===============================================================

// Achha ab pata hai mudde ki baat kya aati hai ki suppose
// kariye yeh cheejein as follows

// user.welcomeMessage() jo phele likha hai

// user.username = "sam"

// user.welcomeMessage() jo baad mei likha hai

// to hume aa gayi samajh mei, to inn teeno lines
// ko hum comment out bhi kar dete hai as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }

// user.welcomeMessage() commented out

// user.username = "sam" commented out

// user.welcomeMessage() commented out

// Lekin agar hum simple sa ek console.log bhi karte hai
// aur yahan pe this hi print karke dekhte hai as follows

// console.log(this);

// to hume pata to lagna chahiye ya fir uss se bhi phele hum
// kya karte hai ki yeh console.log jo hai, agar hum iss tareh
// se yahan pe aake (inside const user = {} mei welcomeMessage:
// wale function mei aake) ek console.log print karte hai aur
// uske andar sirf this print kar dete hai as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// to yahan pe (console.log(`${this.username} , welcome to website`);) 
// kya print hoga, phele bahar wale console.log(this) ko hata dete hai

// aur as follows three lines comment on kar dete hai (jaisa above kiya hai)

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// ab run karte hai terminal mei

// o/p hitesh , welcome to website
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
//   sam , welcome to website
//   {
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// o/p description -- Ab dekhiye current context uss this
// ne bataya apko current context

// Yeh (see o/p) as follows
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// tha phela context jo humne line number 377 (phele
// jo user.welcomeMessage() likha hai) k andar print kara
// to aaya, to abhi current context k andar kya hai (see o/p)
// username: 'hitesh' hai, price: 999 hai, yeh welcomeMessage: [Function: welcomeMessage]
// jo ki ek function hai [Function: welcomeMessage] uska usne
// reference de diya

// Fir humne current context change kar diya sam (see o/p
// sam , welcome to website) aur ab humne yahan pe print
// kara to dekhiye context change ho gaya hai as follows

// {
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// (see o/p)

// theek hai yeh to aa gaya humko samajh mei ki achha
// this current context ki baat karta hai 
// yani current values jo bhi hai variables unki baat
// karta hai

// ===========================================================

// Ab hum inn teeno lines as follows

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// ko comment out karte hai (run hi nahi karna hai) aur
// jo bahar humne console.log(this) likha hai isko
// run karte hai as follows

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage() commented out

// user.username = "sam" commented out

// user.welcomeMessage() commented out

// console.log(this);
// (just above ko run karte hai terminal mei)

// to ab kya baat hogi (ab kya o/p ayega)
// jab hum yahan pe ate hai to curent context
// ab humare pass kya hai

// o/p {}

// to dekhiye , current context kya hai apke pass
// empty object ( {} see o/p ) , yeh yaad rakhiyega kyuki
// hum node environment k andar hai, jab aap node
// environment k andar hai to aapka (jo this hai
// jo this humne bahar wale console.log k andar likha hai
// i.e. console.log(this)) wo (this) refer kar raha hai kis
// cheej ko ek empty object ko ({} see o/p) kyuki abhi koi
// global k andar context hi nahi hai isliye empty

// Lekin yahin pe dikkat ati jab log actually mei thoda sa
// kum dhyan dete hai

// browser mei right click karte hai , to phele jadatar log browser
// mei hi JavaScript seekh rahe the to unko badi problem ati hai

// to browser console mei jaate hai and console.log(this)
// karke dekhte hai to wahan pe hume window dikhai de raha hai,
// but yahan (code editor mei node environment k andar) pe jab
// hum the to hume empty paranthesis ({} see o/p) dhikai de rahe
// hai, to yeh sab aa kyu raha hai

// Dekhiye phele k time pe kya hota tha, JavaScript ko execute
// karne ka ek hi tarika tha browser k andar, jo engine hai, jo
// JavaScript ko execute karta tha, wo simply engine ek hi jagah
// paya jata tha -- browser k andar

// Abhi humne uss engine ko nikala, usko alag alag naam diye,
// kuch ne usko node naam diya, kuch ne usko deno naam diya,
// kuch ne usko bun naam diya, to abhi humare pas engine standalone
// hai

// to browser k andar jab bhi wo engine run karta hai to sabse
// jada jo global object hai wo kya hai window object hai
// (ab Sir ne dropdown kiya window object ko browser console mei)

// to browser k andar jo global object hai wo hai window object
// tabhi to aap windows k saare events capture kar paate hai,
// click ho gaya, form submit hua, jitne bhi saare hai yeh DOM
// k andar hum kaam mei lenge hi

// Aur yahan pe (code editor mei node environment k andar) humare
// pas jo value hai wo kya hai ek empty object ({} see o/p)

// to yeh jaanna humare liye bahut hi jada interesting hai
// aur bahut hi jada jaruri hai ki this ki value kya aati hai
// theek hai itna samajh mei aa gaya hai

// to yeh tha humara pre requisite, asli baat to ab shuru hogi
// kyuki video ka topic jo hai wo arrow function hai

// to ab apko actually mei run karke samajh mei aya
// humne kahi suni baat pe vishwas nahi kiya hai, humne actually
// mei code ko run karke dekha hai

// ===================================================================

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }

// theek hai to ab hum aate hai humare ek function k andar

// theek hai ab ek function likhte hai hum yahan pe jiska naam
// lete hai one ya fir iska naam hum chai rakhte hai iss bar
// as follows

// function chai(){

// }

// aur iss function k andar humne console.log kara hai this
// ka as follows

// function chai(){
//     console.log(this);
// }

// aur iss function ko hum call kar lete hai

// chai()

// to dekhte hai chai agar chalegi to uske andar value kya ayegi
// (terminal mei run karte hai)

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
//   crypto: [Getter]
// }

// to dekhiye abhi humne run kara hai to humare pas bahut sari
// value aayi hai (in o/p)

// jab bahar kara tha (previous example mei object k bahar
// console.log(this) kara tha) to theek hai, lekin agar kisi
// function k andar aap this ko print karte hai (console.log(this)
// karte hai) node environment k andar to dekhiye aapke pas ek
// global value bhi aati hai ( global: <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },) see o/p,

// aa... kuch micro task bhi aate hai -- structured clone
// (structuredClone: [Function: structuredClone], see o/p),
// bahut saari performance valuation (yeh sir k o/p mei aya hai,
// mere o/p mei nahi aya) ideal time kya hai, fetch kya hai (see o/p)
// to kaafi sari values hume milti hai, to this k andar kuch to rakha
// hua hai, aur aap cheejo ko access kar sakte hai wahan pe

// =======================================================================

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }

// Agar suppose kariye yahan pe hum ek aur value likh dete hai
// let username = "hitesh" as follows

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// ab this (console.log(this);) k andar kya value ayegi
// yeh bhi jaanna jaruri hai, interesting bhi hai

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
//   crypto: [Getter]
// }

// ab yahan pe (o/p) mei hume jo values mil rahi hai
// wapas se wo hi global values hai (see o/p), yeh sari cheej hai
// (see o/p), sara access mil raha hai, ek dum almost same jaisa hi dikh
// raha hai (prvious o/p jaisa)

// ==========================================================================

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }

// Lekin kya hum yahan pe this.username isko print kar sakte hai
// ( i.e. console.log(this.username); ) as follows

// kya yeh ( i.e. console.log(this.username); ) print hoga,
// kyuki abhi hum ek function k andar hai

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// o/p undefined

// to isne kaha undefined (see o/p), to aapne dekha
// yeh jo humara context hai yeh actually mei object
// (for eg const user = {}) k andar hi kaam kar raha hai,
// aise functions k andar aake hum this use nahi kar paa
// rahe hai iss tareh se as follows
// let username = "hitesh"
// ( console.log(this.username) )

// theek hai aur bhi tarike hote hai, but abhi sir sirf hume batana
// chahte hai kyukki aage jake jab hum DOM mei manipulation
// etc karenge tab yeh sab humare kaam mei ayega

// to inn chejo ka dhyan rakhiyega log aksar inn cheejo ko discuss
// hi nahi karte, to yaad to kaise rakhenge

// to aage chalte hai iss function chai ko hum kar dete hai
// comment out as iske bare mei discussion ho gaya hai

// ===========================================================

// Ab hum baat karte hai ki actually mei functions ko aur kaise
// declare kar sakte hai especially arrow functions k through

// to wapas se hum kya karte hai ek liya humne const aur uska naam
// bhi de diya chai as follows

// const chai

// Lekin iss bar hum , jaise phele aap dekhte the ki functions ko
// hum declare karte the iss tareh se as follows

// const chai = function () {

// }

// yeh values ho gayi as follows

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// o/p undefined

// o/p undefined -- nahi pata ji isko ki aap yeh kya
// this.username (console.log(this.username);) ki baat
// kar rahe hai isko bhi (const chai = function () {})
// nahi pata hai

// ===========================================================

// to actually mei ek aur tarika hume ES6 k andar mila tha
// ki aap kya kariye yeh function key word (jo following
// k RHS mei likha hai i.e. function () {}) hata dijiye

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// to function keyword hatane k baad aise ho gaya as follows

// const chai = () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// aur yeh jo paranthesis hai ( RHS mei i.e. () ), yahan pe
// aap arrow laga dijiye as follows

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// aur bas ban gaya aapka arrow function

// haan ji itna hi kaam hai ki aap ne jo bhi function keyword
// tha usko hata dijiye, aapke jo parameter the unko aap
// yahan pe ( i.e. paranthesis jo RHS mei hai equals to k) hi
// lenge, baki sab function definition to as it is hai
// (i.e. let username = "hitesh", console.log(this.username);)

// to ab interestingly jo baat hume jaanni hai wo yeh hai ki kya
// arrow function k andar hum iss tareh se kaam mei le sakte hai
// yeh cheejein as follows
// let username = "hitesh"
// console.log(this.username);
// chaliye run karke dekhte hai ikko bhi

// chai()
// o/p undefined

// =================================================================

// Aur hum yahan pe sirf this (console.log(this.username)) ko use
// karke dekhte hai, to bhi humare pas kya ata hai as follows

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// o/p {}

// to humare pas yeh empty paranthesis hi aa raha hai (see o/p)

// theek hai, to yeh cheej aap dhyaan rakhiyega ki jo log aankh
// band karke kehte rehte hai interview mei ki iss function k andar 
// (jo phele likhe hai i.e. function chai(){} and const chai = function () {}) 
// aur arrow function mei difference kya hai to log kehte hai
// arrow function k andar aap yeh this (console.log(this) , console.log(this.username))
// use nahi kar sakte aur regular function mei aap kar sakte hai

// wo yeh difference jaan na hi nahi chah raha interviewer (video edited)

// but apko kya hai wahan pe ek concept hai apka ki aap
// inn cheejo ko khud karke dekhiye kyuki actually mei agar aap
// khud nahi karenge to apko problem ayegi aur aap sirf aankh band
// karke unhi baaton ko dekhte jayenge jo kaafi blogs mei
// seekhe hai jo outdated ho gaye hai to inka dhyan rakhna

// ====================================================================

// Ab karte hai hum pure arrow functions pe charcha

// Dekhiye arrow functions ka basic jo syntax hai wo kuch iss
// tareh se hai ki aapne likha paranthesis as follows

// ()

// fir arrow as follows

// () =>

// aur yeh ho gaya basic aapka arrow function as follows

// () => {}

// ab iss arrow function k andar aap isko ek name
// k andar bhi hold kar sakte hai , ek variable k andar,
// to suppose humne kaha addTwo aur yeh equals as follows

// const addTwo = () => {}

// aur yeh humara arrow function ho gaya

// ab iske andar (RHS mei () k andar) apko parameters lene the
// to aapne kaha sir le lete hai yahan pe num1 aur num2
// as follows

// const addTwo = (num1, num2) => {

// }

// to yahan pe num1 aur num2 le liya aur {} mei enter kiya
// aur humne kaha return aur return kya karna hai num1 kar do
// aur num2 ko add kar do as follows

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// ab addTwo karenge to aapko pata hi hai kya aapne
// wala hai as follows

// addTwo()

// argument pass karte hai 3 aur 4 as follows

// addTwo(3, 4)

// only return and not console.log

// console.log(addTwo(3, 4));
// o/p 7

// ============================================================

// ab yeh to ho gaya sabse basics lekin apko kai
// aur tareh se bhi dikhayi dega

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// yeh to ho gaya humara basic arrow function lekin isko
// ek tareh se aur use kiya jata hai jisko bola jata hai
// implict return, uss implicit return mei kya hota hai
// ki apko yeh paranthesis ( {} jo => k baad hai ) use nahi
// karne hote hai

// to yeh paranthesis hata dete hai as follows

// const addTwo = (num1, num2) => 
//     return num1 + num2

// aur yeh return wali line same line k andar le jate hai
// as follows

// const addTwo = (num1, num2) => return num1 + num2

// jo implicit return hai uska matlab hai, implicit ka matlab
// hai mai maan leta hu, apko likhne ki jarurat nahi hai,
// humne maan liya ki apko yeh return keyword (return num1 + num2)
// likhne ki jarurat nahi hai kyuki aapka ek hi line ka
// statement hai as follows

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 4));

// to iss tareh se bhi run hota hai, aur obvious si baat hai jab
// hum run karenge to as it is run karega

// o/p 7

// ===================================================================

// Achha sirf itna hi nahi iske andar aap aur bhi interesting cheejein
// kar sakte hai

// Agar yeh (const addTwo = (num1, num2) => num1 + num2) apko confuse
// lag raha hai, to next line mei dikha dete hai jo apke liye kum
// confusing hoga , wo kuch iss tareh se hai ki aap inko (num1 + num2)
// ko bhi ek paranthesis k andar wrap kar dijiye as follows

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3, 4));

// o/p 7


// curly braces {} mei wrap kara (num1 + num2 ko) jaisa phele kara tha as follows

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// to return keyword (return num1 + num2) likhna padega

// Agar inn paranthesis ( () i.e. const addTwo = (num1, num2) => (num1 + num2) )
// k andar wrap kara (num1 + num2 ko) to return keyword nahi likhna padega

// Achha yahan pe kai logo ne focus kho diya hai, hai na abhi unko
// samajh mei hi nahi aya hai ki kya hua i.e. curly braces mei wrap
// kiya hai to return keyword likhna padega and paranthesis mei wrap kiya
// hai to return keyword nahi likhna padega

// Ab isse hoga kya jab aap react seekhenge tab iss technique ka ati ati
// (bahut jada) kaam mei liya jata hai, theek hai to yaad rakhiyega
// yeh technique react mei bahut jada kaam mei ayegi , uss time sir
// nahi batayenge jab react padhayenge ki are yeh kaise ho gaya arrow
// function k baad isne return likha hi nahi (paranthesis wale mei)
// aur kai log iski jagah (paranthesis ki jagah) curly braces {} use
// kar lenge unka code chalega hi nahi kyuki unn logo ne dhyan se
// suna hi nahi tha

// to yeh (const addTwo = (num1, num2) => ( num1 + num2 ) ) ho gaya aapka
// implicit return

// explicit return kya hota hai jab aap return keyword use karte hai
// as follows

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// matlab explicitly lagana padd raha hai

// explicit implicit english k words hai bas aur kuch bhi nahi hai isse
// jada

// ==========================================================================

// Achha ab yeh paranthesis i.e. () lagane se fayeda kya hota hai
// ( i.e. const addTwo = (num1, num2) => ( num1 + num2 ) )
// suppose kariye abhi to aap num1 aur num2 return kar rahe the (num1 + num2)
// (implicit wale mei) lekin agar aapko ek object return karna ho to kaise return karenge

// const addTwo = (num1, num2) => ( num1 + num2 )

// ab object agar apko return karna hai, to agar yeh
// ( i.e. ( num1 + num2 ) jo => k baad likha hai ) nahi hota humare pas
// paranthesis , to iss tareh (as follows) se object return karna padta

// const addTwo = (num1, num2) => {}

// aur uske andar hum dalte suppose kariye username aur usko bolte hitesh
// as follows

// const addTwo = (num1, num2) => {username: "hitesh"}

// console.log(addTwo(3, 4));

// to ab humare pas addTwo k andar kya value ati hai
// ab theek hai 3, 4 humne de diya hai argument mei but theek hai
// uska koi use nahi kar rahe hai hum abhi

// to isko hum run karte hai terminal mei

// o/p undefined

// to o/p aya undefined, kyu aya undefined kyuki iss tareh
// ( {username: "hitesh"} ) se aap object return hi nahi kar sakte ho

// object ko return karne k liye usko (i.e. object ko i.e. {username: "hitesh"} ko)
// paranthesis i.e. () mei wrap karna hi padega as follows

// const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(3, 4));

// o/p { username: 'hitesh' }

// ab isko aap run karoge to apke pas values aa gayi hai as above o/p

// to yeh choti choti cheejein hoti hai jo aage jake JavaScript mei apko
// problem karti hai

// (17:03)

// ========================================================================

// achha iss tareh k yeh jo arrow functions etc hai yeh apko kai jagah
// aage bhi kaam mei lenge jab hum loops etc padhenge tab wahan pe bhi bahut
// kaam mei ata hai , ek chota sa example sir bata hi dete hai as follows

// jaise aapne likha const myArray

// const myArray 

// Aur uske andar likha iss tareh ki values as follows

const myArray = [2, 5, 3, 7, 8]

// suppose 2, 5, 3, 7, 8 yeh values humne likh di hai iske andar

// to kayi bar kya hoga jaise suppose kariye myArray hai as follows

// myArray

// uske andar methods hote hai (to dot lagaya as follows)

// myArray.

// loop k bare mei bhi hum kaafi discuss karnege, to jaise yahan pe
// aapne forEach jaise loop liya as follows

// myArray.forEach()

// to yahan pe ( forEach k () k andar ) kayi bar aap arrow function likhte
// ho, kayi bar aap classic function likhte ho

// to iss tareh (as follows) jaise humne function likh diya

// myArray.forEach(function () {})

// iss tareh se values bhi kayi bar hoti hai, to yeh bhi ek
// correct syntax hai

// =============================================================================

// ya fir kayi bar aap iski jagah kya karoge -- arrow functions likh
// doge

// myArray.forEach(() => {})

// to yeh ho gaya humara yahan pe arrow functions (as above)
// to yeh bhi likhte hai

// aur kayi bar ho sakta hai iss tareh se bhi likh de as follows

// myArray.forEach(() => ())

// but ab apko saare syntax pata hai ki actually mei values kya hai
// kaise hai, konsi kaam karegi, konsi nahi karegi, kya reason hai
// khud return karne ka

// iske ( myArray.forEach() ) bare mei bhi hum nahi dekhenge kyuki
// yeh to loop k andar jab ayega tab hum achhe se isme aur discuss
// karnege kyuki discussion in depth hi hona chahiye

// to ab aap rati ratayi baatein bhi nahi karenge ki normal
// function mei this use hota hai aur baki mei nahi hota hai
// wo global object hai,.......

// ================ LECTURE END ======================================


