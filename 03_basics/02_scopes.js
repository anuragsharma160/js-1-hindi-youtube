// Sabse pheli baat jo ati hai scope ki
// aur yeh jo kahani hai , yeh start hi hoti hai
// inn 3 keyword se, yeh aapne sune honge let, var
// const

// to suppose kariye yeh apke pas hai let as follows

// let 

// iske andar aapne diya variable a as follows

// let a = 10

// uske baad aapne diya const b = 20 as follows

// const b = 20

// aur uske baad aapne ek classic variable use kara
// var as follows aur uski value di c aur value di 30
// as follows

// var c = 30

// aur uske baad jab aap console.log karenge to aap
// bahut hi aasaani se kar lenge as follows

// console.log(a);
// console.log(b);
// console.log(c);

// o/p 10
// 20
// 30

// Humare pas o/p aya 10, 20 and 30

// Ab jab teeno variable kaam kar rahe hai to
// jarurat hi kya thi iss let aur const ko laane ki
// (let a = 10 and const b = 20)

// jab var hi kaam kar raha tha (var c = 30)
// variable k liye to isko (let aur const) kyu
// leke aye

// isko (let aur const) leke isliye aye kyuki
// yeh jo cheej hai yeh actually mei humare
// block scope ko jo ki hona chahiye tha uski
// tareh kaam nahi karta hai , kaise uske
// peeche reason kya hai chaliye apko batate hai

// yahan tak ( console.log(a) , console.log(b)
// console.log(c) ) hume koi dikkat nahi hogi
// hum easily kaam kar payenge

// kahani mei dikkat kahan ati hai jab apke pas ata
// hai curly braces as follows

// {}

// isi ( curly braces {} ) ko bolte hai scope,
// curly braces hi almost har programming language k
// andar scope hai

// let a = 10
// const b = 20
// var c = 30

// {}

// console.log(a);
// console.log(b);
// console.log(c);

// yeh curly braces apko function mei bhi dikha tha
// yeh apko if else mei bhi dikhega aur bhi kai jagah dikhega

// Ab objects ko isse galat (confuse) mat samjhiyega,
// objects mei bhi curly braces hote hai lekin wo
// object deceleration hai

// Yeh jab kisi function k saath ata hai, ya fir kisi
// if else k saath ata hai, tab vahan pe isko bola jata
// hai scope, ya fir scope of that program, ya fir uss
// function ka scope, ya fir uss if else ka scope

// ====================================================================

// Ab problem kab ati hai jab dekhiye humne thoda sa
// if padha tha , jada nahi padha tha, but itna to hume
// pata hai ki agar iske andar hum true likh de to ab
// hum iske andar jayenge hi jayenge 100% as follows
// if (true){} as follows

// let a = 10
// const b = 20
// var c = 30

// if (true) {

// }

// console.log(a);
// console.log(b);
// console.log(c);

// achha ab problem kya ati hai ki suppose kariye
// yahan pe (inside curly braces of if) humare pas
// jo values ayi hai yeh jo scope hai (scope hai
// means curly braces of if) yeh kya honi chahiye

// chaliye theek hai apko batate hai yahan pe ki yeh
// scope (curly braces of if) hai yahan pe yeh kis
// tareh se hone chahiye the

// ab suppose kariye inn teeno variables (i.e. let a = 10
// const b = 20, var c = 30 ko humne kiya cut and le gaye
// inside if k curly braces k andar as follows)

// ===========================================================

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// Ab humne yeh declare kahan pe kare hai iss
// if else k andar as above

// to obvious si baat hai humara kaam if else
// k andar hi pad raha hai (if k curly braces
// k andar hi pad raha hai)

// Ab yeh jo variable hai yeh jo memory humne
// allocate kari hai (inside curly braces of if)
// iska jo scope hai wo yahan se (if k first curly
// bracket se) , yahan tak hi hai (if k last curly bracket tak)
// yani ki iska jo kaam hai wo yahan se (if k first curly
// bracket se) yahan tak (if k last curly bracket tak hi hai)

// yeh agar line number 126 tak pahuch gaya (i.e. if k last curly
// bracket k very next line tak pahuch gaya) to problem hai

// problem kaise hai, jaise kai bar suppose kariye loop k andar
// aapne ek i variable use kara to 4 loop likhe charo (all 4)
// k andar aapne i use kar liya to problem hai

// jab programmers code kar rahe hai, 10 programmer code kar rahe hai
// suppose kariye sabhi variable a hi use kar rahe hai (if k andar
// wala let a = 10) lekin sab apna apna method bana rahe hai
// apna apna function bana rahe hai, to sabko banane ka allow
// hona chahiye , to yahin pe problem ati hai apki yeh a , b aur c ki

// ab dekhiye Sir batate hai kahan pe wo problem start hui thi
// to hum isko run karte hai as follows

// console.log(a);
// console.log(b);
// console.log(c);

// o/p Error - console.log(a);
            // ^

            // ReferenceError: a is not defined

// Ab dekhiye problem kya hai ki console.log(a)
// k andar isne kya bol diya ki a defined nahi hai
// jo ki achhi baat hai ki haa a defined nahi hona chahiye
// kyuki humne iske (if k curly braces k andar) andar isko (a)
// use kara hai , bahar nahi aana chahiye tha yeh (a)

// to a ki ho gayi kahani khatam to humne console.log(a) ko
// kar diya comment out as and console.log(b) and follows
// console.log(c) ko nahi kiya comment out and fir run kiya

// console.log(a); isko kar diya comment out
// console.log(b); isko nahi kiya comment out 
// console.log(c); isko nahi kiya comment out  

// o/p aya -- b is not defined
// isne o/p mei kaha b nahi hai available
// aur hona bhi nahi chahiye kyuki iska (b)
// ka kaam to if k curly braces k andar khatam ho
// gaya hai aur humne return kiya nahi hai isko (b)
// theek hai to b ko bhi hum comment out kar dete hai
// as follows

// console.log(a); isko kar diya comment out 
// console.log(b); isko kar diya comment out
// console.log(c); isko nahi kiya comment out

// o/p 30
// Ab dekhiye o/p mei 30 print ho gaya hai, yeh hai
// sabse badi problem ki baat, kyuki yeh 30 bahar
// aana hi nahi chahiye tha (if k curly braces k bahar
// aana hi nahi chahiye tha)

// isliye Sir ne jab starting mei kaha tha ki var to
// Sir padhayenge bhi nahi wo isi din k liye, uss din
// log comment mei peeche pad gaye ki nahi var to padhana
// chahiye tha , uss time Sir hume scope samjhate, tab hum
// language se famaliar nahi the to kaise samajh mei aata
// padhaane ka tarika hota hai

// ===========================================================

// Iska Sir impact batate hai , ek programmer hai wo
// yahan pe code kar raha tha before if in line 211
// aur usne likh diya var and c ki value hai 300 as follows

// aapne wapas se c declare kar diya 300 , ab kya hoga iss
// scene k andar, ab iss scene k andar ayegi problem

// var c = 300


// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a); comment out
// console.log(b); comment out
// console.log(c); not comment out 
// o/p 30
// usne kaha 30 (o/p mei) lekin
// yeh programmer to pareshan ho jayega ki
// maine to 300 value declare kari thi
// ab yeh method as follows

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// ho sakta hai ya fir yeh if else (as above) ho
// sakta hai ki kisi dusri file k andar se import
// ho raha ho (iss file k andar), to problem ho jayegi

// wo to humesha pareshaan hi rahega , code ko debug
// hi karta rahega ki yar yeh to 300 value likhi thi
// yahan 300 aani chahiye (o/p mei), iss function
// as follows

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// k bare mei to use pata hi nahi hai ki kab import ho
// gaya hai, jab 10 log code karte hai programming k
// andar ek saath to yeh problems ati hai

// ==============================================================

// Lekin yehi agar usne bola hota ki chaliye mai c iss
// tareh se nahi likh raha hu mai let likh raha hu
// tab yeh problem thodi si theek ho jati (i.e.
// instead of var c = 300 , let c =300)

// =================================================================

// Achha  problem ek aur hai yahan aap inside if mei
// var c = 30 likhe, ya c = 30 likhe tab bhi aapke
// pas problem ayegi as follows

var c = 300

if (true) {
    let a = 10
    const b = 20
    c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); isko comment out nahi kiya
// o/p 30 yeh console.log(c) ka o/p hai (6:00 - 7:00)

// isliye var ko jadatar log avoid hi karte hai
// aur yahin se actually mei scope ki aapki
// kahani shuru hoti hai ki scope kya hai,
// kahan hai, kaise kaam mei aana chahiye,
// kaise nahi aana chahiye

// Ab yeh jo Sir ne if k andar likha hai as follows

// if (true) {
//     let a = 10
//     const b = 20
//     c = 30
// }

// yeh hai pora block scope , iske (if k curly braces)
// bahar jo bhi hum likh rahe hai wo hai global scope

// Global scope mei jo bhi aap likhenge wo value apke
// liye yahan (if k curly braces k andar) available 
// hoti hai scope (block scope) k andar

// Lekin scope (block scope) k andar jo value likhte
// hai wo bahar nahi jani chahiye , yehi simple si
// kahani hai

// =============================================================

// Theek hai abhi Sir aur thoda sa example batate hai
// isko modify karke, to var k bare mei ab baat nahi
// karenge kyuki hume samajh mei aa gaya kyu nahi karenge
// (to iss example mei var c = 300 ko comment out kar diya
// as follows) and if k andar c = 30 ko bhi remove kar diya
// as follows

// var c = 300 isko comment out kar diya

// if (true) {
//     let a = 10
//     const b = 20
// }

// Ab dekhiye kahani kya hai ki aap yahan pe jate hai
// aur bolte hai kabhi ki let a = 300 as follows

// var c = 300 isko comment out kar diya
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
// }

// Ab a ka jo value hai (let a = 300)
// iss function as follows 

// if (true) {
//     let a = 10
//     const b = 20
// }

// se totally totally independent hai

// Ab hum a ko print karke dekhte hai as follows

// console.log(a);
// o/p 300

// to a ka value yahan pe (if wale function k andar) to 10
// hai i.e. if k andar jab tak rahenge tab tak 10 k tareh hi
// use karnege

// yahan pe jaise hi aap global scope k andar aa gaye i.e.
// (if else k bahar aa gaye) tab a ka value 300 hai aur 300
// hi rahega aur yehi hume bahut sare programming bugs se bachata
// hai

// ===================================================================

// Lekin suppose kariye hume to yahan (if k andar) print karna
// hai console.log as follows

// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     console.log();
// }

// to theek hai aap print kariye hum likh dete hai
// as follows

// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }

// aur uske baad agar aap print karte hai ki mujhe
// to yahan print karwao a as above

// to yeh jo line 379 (console.log("INNER: ", a);) mei
// a print hoga to uske andar kaise print hoga
// to hum print karwate hai as follows

// console.log(a);
// o/p INNER:  10
// 300

// to dekhiye INNER k andar to value 10 hi hai
// aur outside mei value 300 hai
// to isi ko bolte hai block scope aur global scope
// ki apke pas kya cheej global scope mei honi chahiye
// aur kya cheej block scope mei

// ================================================================

// Ab sirf itna hi nahi aage jake hum for loop seekhenge
// ki for loop actually mei hota kaisa hai as follows

// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// to aapne suppose kariye ki index variable use kara
// ya fir i variable use kara (inside for loop), ab 
// yahan pe aap chahenge ki i ki value yahan (for loop
// k curly braces k andar) pe available ho

// lekin kisi karanvash agar aapne uss value ko
// i ki jagah kuch aur naam le liya to aap nahi chahenge
// kabhi bhi ki wo global scope mei bhi apke pora
// rayeta failaye to aisa nahi karna hai hume

// to theek hai yeh thodi si kahani ho gayi ki
// actually mei let var kya hota hai global scope
// kya hote hai

// ab yeh cheej aage jake aur samajh mei ayegi
// ek aur video Sir banayenge ki scope k bare
// mei aur hum jangenge ki node k andar global
// scope kya hota hai, windows k andar global
// scope kya hota hai

// chaliye Sir bata hi dete hai ki scope kaise
// use karte hai

// to windows k andar jo hota hai , yeh sir aur practically
// bhi karke batayenge ek keyword k through , uss keyword
// ko hum baad mei discuss karenge DOM mei but keyword
// k through

// Jab aap apne browser k andar jaate hai suppose
// hum right click karke inspect karte hai
// to browser console k andar mei jake jab aap
// scope dekhenge , batayenge sir kaise check karte hai core
// scope ko bhi agle videos k andar, to yahan (browser console)
// mei jo check karenge wo alag hai

// aur jab aap code environment (code editor) mei node
// k through example ko run karte hai (terminal mei)
// to aapka global scope alag hai yeh yaad rakhna

// next video mei scope k andar aur depth mei leke jayenge
// abhi to humne sirf ek yahan pe if declare kara hai
// (iss for loop ko bhi hata diya), thode se functions
// k andar functions aur declare karnege hum aur dekhenge
// ki wahan pe yeh scope kaise kaam karta hai

// kyuki abhi to humne sirf yeh ek level ka curly braces
// (if wala curly braces) dekha hai , ho sakta hai aap
// if k andar kuch ek aur function declare kar rahe ho
// as follows

let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    function addnum(){

    }
}

// iss ttareh se to ek aur scope ( {} ) aa gaya hai
// (i.e. curly braces {} of addnum)
// to jitni bar curly braces ayega utni bar scope ayega
// tab kahani kaise hoti hai