// Immediately Invoked Function Expression

// Ek bada hi interesting concept hai JS k
// andar jisko bolte hai iife

// but mudde ki baat yeh hai ki jaise hi aapne
// function likha usko turant hi execute karwana
// hai

// ab isko karwane k to kaafi tarike ho sakte hai aur
// kyu hume aisa function chahiye jo immediately
// execute ho jaye

// to dekhiye kayi bar aap yeh cheejein karenge
// especially kayi bar hum ek file likhte hai
// jiske andar sirf database connection hai
// aur hum chahte hai ki humari application jaise hi
// start ho vaise hi uss file k andar humara database
// ka connection start ho jaye

// sirf itna hi nahi , kayi bar kya hota hai ki hum
// global scope jo hai abhi humne kaafi discussion
// kiya tha scope k andar , kayi bar jo scope k andar
// kuch variables declare hote hai aur kayi bar ho sakta
// hai hum uss function k andar kuch likh rahe hai , hum
// nahi chahte hai ki uss function k andar wo global
// variable kuch problem kare kyuki wo (global variable) to available
// hai , bacche to jaake bado se maang sakte hai , to
// usi tareh se jo bhi aap function mei declare kar rahe
// hai wo kayi bar global scope se pollute ho jate hai

// to yeh 2 main reason hote hai ki global scope se pollution
// hume nahi chahiye pollution bilkul bhi to hum humara
// alag ek poora scope bana lete hai kyuki function mei
// to scope ban hi jata hai,
// aur plus mai chahta hu ki immediately execute ho jaye
// wahin pe

// ab dekhiye problem kya hai ki jab aap function likhte hai to
// suppose kariye function chai as follows

// function chai(){

// }

// iss function k andar humne likha console.log

// function chai(){
//     console.log();
// }

// console.log k andar humne likhte hai 'DB CONNECTED'
// as follows

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// to yeh ho gaya aapka database connected

// aur aapne turant hi kar diya chai as follows

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

// o/p DB CONNECTED

// ab iss tareh se jab aap function likhte hai to uske
// andar problem kuch bhi nahi hai, aapka database
// turant hi connect ho gaya

// to humari itni badi to problem nahi hai , hum jaise hi
// function likhenge (jo above likha hai) uske baad yeh
// li jiye ek line bhi hata di humne (line b/w function
// and chai() i.e. line 66) as follows aur uske turant baad
// hi execute kar diya (i.e. chai()) as follows

// function chai () {
//     console.log(`DB CONNECTED`);
// }
// chai()

// o/p DB CONNECTED

// to immediately invoked fnuction waha pe ho gaya hai
// lekin uss cheej ka kya karein jab humara global scope
// hai wahan se cheejein pollute hoti hai kayi bar aur hume
// lagta hai ki yeh pollution atleast iss function k andar
// to nahi hona chahiye, to uss karan se hum humesha likh dete
// hai uske liye iife likhte hai

// ab iife likhna bahut easy hai, abhi to humne likha hai
// yeh chai() iss tareh se (just above)

// lekin suppose kariye yeh chai() iss tareh se -- chai()
// nahi likhte hai hume immediately hi invoked karna hai
// iss function ko to kya karte, aap aake sochte ki yahan
// pe (after last curly brace of function) yeh laga dete
// hai paranthesis as follows

// function chai () {
//     console.log(`DB CONNECTED`);
// }()

// aur aap dekh rahe hai ki yahan pe red line aa gayi hai
// (paranthesis pe jo humne lagaya hai) , bole ki yeh to hume
// nahi pata yeh kaise kiya jata hai, yeh jo syntax hai yeh to
// aap pehli bar hi bata rahe hai naya yeh to mai execute nahi
// karunga

// o/p }()
//   ^

//   SyntaxError: Unexpected token ')'

// ===================================================================

// Lekin abhi humne jana scope k andar ki actually mei jab
// last hi video k andar humne dekha tha arrows k andar ki humne
// bada hi achha ek discussion kiya tha iss iss paranthesis k
// upar -- jab humne object ko arrow function mei return karwaya
// tha as follows (jis paranthesis k andar humne object ko wrap
// kiya hai)

// const addTwo = (num1, num2) => ({username: "hitesh"})

// ki yeh paranthesis laga do to automatically ek block ban jata hai
// (block -- ({username: "hitesh"}) ) aur uske andar bhi kaam kiya
// ja sakta hai

// to aap kya karo yahan pe aao i.e. iss function chai pe aao
// aur yeh jo function ki poori definition vagerah likhi hai aapne
// iske upar bhi ek paranthesis laga do as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// to ab kya hoga , ab aapka problem solve ho gaya, ab aap
// syntaxtically sahi ho ek dum

// ab agar aap isko run karoge to yeh run ho jayega (terminal mei)

// o/p DB CONNECTED

// dekhoye itna sa hi kaam tha

// ab agar apko iska syntax dubara se samajhna ho, to yeh first
// paranthesis jo hai humare pas wo to hai humara jahan pe hum
// function ki definition likhne wale hai as follows
// (jo () function k baad mei likha hai)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ()

// aur yeh second wala iske baad (first () k baad) iska ho gaya execution,
// execution call, jaise ki hum yahan pe chai k baad bhi to laag rahe the
// execution call -- chai() (chai k baad wala paranthesis execution call hai)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ()() yeh nahi likhna hai yeh samjhane k liye bola hai

// chai() yeh nahi likhna hai yeh samjhane k liye bola hai

// to iss bar chai k aage lagane ki jagah humne uss function ko
// hi (function chai ko hi) wrap kar diya ek paranthesis mei
// ( ()() mei first wala paranthesis ) aur yeh laga diya
// ( ()() mei second wala paranthesis ) , bas yeh hi kaam hai

// ===================================================================

// aap se koi bhi iife pooche to ek cheej yaad rakhiyega sirf
// yeh nahi bolna hai ki jo function immediately execute ho jaye
// kyuki yeh bolenge to theek hai but interview mei nahi hoga
// selection

// interview mei selection k liye aapko yeh bhi bolna padega
// ki global scope k pollution se problem hoti hai kayi bar
// to uss global scope k jo variables hai ya jo bhi wahan
// declaration hai uske pollution ko hatane k liye humne
// iife ka use kiya , yeh bolenge to pakka selection hoga
// aapka

// theek hai ab kya karna hai ab yahan pe bhi dekhiye ek
// problem ayegi batate hai apko


// to suppose kariye sir ne bola apko ek function (as follows)
// iss tareh se likha hai

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ()()

// ab iss function ko hum arrow function k tarike se likh sakte the,
// haa ji bilkul likh sakte the, thodi si space kar dete hai yahan pe
// as follows (baad wale 2 paranthesis k first bracket mei)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// (  )()

// aur hum iss baad wale 2 paranthesis mei se first paranthesis mei
// arrow function likh denge as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ( () => {} )()

// ab enter denge as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ( () => {

// } )()

// aur bolte hai yahan pe console.log kar dijiye

// console.log kya karna hai wo hi same DB CONNECTED TWO

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()

// ab isko jab hum execute karte hai to yahan pe aa raha hai
// error

// ( () => {
//     ^
    
//     TypeError: (intermediate value)(...) is not a function

// ab aap kahenge ki iife (jo starting mei likha hai) as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// k andar humesha iss tareh as follows

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// k function (jo starting mei iife k andar function likhe hai) 
// hi likhne chahiye (jo likhe hai starting mei)
// yeh arrow functions as follows (jo above mei likha hai)

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()

// problem karte hai -- nahi aisi baat nahi hai,
// iss function (jo iife k andar arrow function likha hai) as follows

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()

// ko hum wapas se agar ek function mei convert karte hai
// suppose kariye as follows

// ( function() => {
//     console.log(`DB CONNECTED TWO`);
// } )()

// iss bar aurcode likh dete hai iska naam as follows

// ( function aurcode() => {
//     console.log(`DB CONNECTED TWO`);
// } )()

// yeh arrows humne hata diye as follows

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )()

// to abhi to yeh chalna chahiye
// dekhte hai yahan pe ki kyu nahi chal
// raha hai yeh

// (to humne wapas se type kiya dono ko
// pehle wala iife and baad wala iife jisme arrow function ko
// function mei convert kiya hai , dono ko type karte hai
// as follows just for understanding)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )()

// o/p ( function aurcode() {
//     ^
    
//     TypeError: (intermediate value)(...) is not a function

// wapas se problem aa gayi to haan yeh to badi dekhne ki baat hai
// ki abhi tak upar (pehle wale iife mei) as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// likha tha yahan pe (pehle wale iife mei) sab kuch chal raha tha

// yahan pe (second iife mei) as follows

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )()

// humne likha yeh ka yehi kaam (jo kaam pehle wale iife mei likha hai) yeh
// (second wala iife ) kyu nahi chal raha hai, to dekhiye yahan pe kayi bar apko bhi isi
// tareh ki problem face hogi

// yeh jo immediately invoked function hai yeh invoke to
// ho gaya hai but isko pata nahi hai ki actually mei context
// rokna kahan hai to aisi situation pe JavaScript mei apko
// usko end karna padta hai uss line ko aur usko end karne k liye
// ek semicolon ki jarurat hai as follows (jo semicolon ; humne
// first iife k baad lagaya as follows)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )()

// usually code editor apke liye laga dega (semicolon ;)
// but iss special case mei humare liye nahi laga raha hai
// to apko pata hona chahiye ki actually mei wo error aa kyu raha
// hai, to error humara uss code (first and second iife) k liye
// nahi aa raha hai wo error sirf semicolon k liye aa raha hai

// to ab run karte hai terminal mei

// o/p DB CONNECTED
// DB CONNECTED TWO

// to yeh dekhiye ab database connect ho gaya hai (see o/p)

// =========================================================================

// ab isi k through apko ek aur cheej pata lagegi ki yeh
// function (second wale iife mei) ko agar hum hata dete hai
// as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )()

// aur yahan pe (second wale iife mei) ek bina naam ka
// arrow function likh dete hai dubara se as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  () => {
//     console.log(`DB CONNECTED TWO`);
// } )()

// to problem kahan thi uss semicolon ki problem thi
// (jo first iife k baad lagaya hai)

// problem function ki ya arrow function ki nahi thi
// wo (function / arrow function) to abhi bhi run karega

// to abhi bhi run karega

// to run karke dekhte hai terminal mei

// o/p DB CONNECTED
// DB CONNECTED TWO

// to yaad rakhiye kayi bar aisi problems mei bhi aap
// fasenge yeh sirf ek example tha (1st and 2nd iife) ki jahan pe actually
// mei first code (eg - 1st iife) ko end hona chahiye wahan pe aur dusra
// code (eg 2nd iife) run hona chahiye to yeh code (first iife as follows)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// end karne k liye sir ne ek explicitly yahan pe semicolon ; lagaya
// hai (as above) jo ki directly nahi lagta hai

// to yeh to ho gaya humara basic ki kis tareh se kaam karna hai

// ==================================================================================

// Ab suppose kariye ki yeh jo console.log hai 2nd wale iife mei
// yeh (2nd wala console.log) ek variable bhi expect karta hai

// to aapne yahan pe dollar lagaya (2nd wale iife k console.log mei)
// as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  () => {
//     console.log(`DB CONNECTED TWO ${}`);
// } )()

// aur uske andar bola -- name likha yahan pe jo bhi as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  () => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )()

// to ab aap kahenge ki yeh name (jo humne likha hai)
// yahan pe i.e. 2nd iife k => se before wale paranthesis ()
// mei kaise jayega, koi baat nahi name ko expect kar lijiye
// as follows (i.e. 2nd iife k => se before wale () mei name likh diya)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )()

// theek hai name ho gaya , lekin isme
// pass kaise karein yeh name (jo name => se before wale () mei likha hai)

// pass karne k liye aap kya kariye yahan pe aayiye (i.e.
// 2nd iife k last wale paranthesis mei ayiye) aur apna name de
// dijiye as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

// yeh lijiye de diya bas
// isko as a function hi dekhna hai (2nd iife ko)

// yeh (2nd iife k last wala () jisme 'hitesh' likha hai i.e. ('hitesh'))
// isko (2nd iife k andar wala arrow function) execute kar raha hai

// to agar suppose kariye chai() agar hum yahan par execute karte
// as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

// chai()

// tab yahan par ( chai() k paranthesis k andar) bhi to aake likhte
// as follows

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// (  (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

// chai('hitesh')

// to wo hi same kaam kiya hai

// ab yahan par (chai('hitesh')) nahi likh paa raha to
// humne kya kara jo bhi isko (2nd iife ko) execute
// kar raha hai (i.e. 2nd iife k last wala () jisme
// 'hitesh' likha hai) humne usko parameter (argument) de diya
// (i.e. 2nd iife k last wale () mei 'hitesh' likh diya)

// isne (i.e. 2nd iife k => se before wale () ne i.e. (name)
// ne) usko (i.e. ('hitesh') ko) as an argument (parameter)
// le liya hai aur pass kar diya has bas

// to bada hi aasaan tha isko bhi run karke dekh lete hai

// to hum dono iife dubara likhte hai just for understanding

(function chai(){
    console.log(`DB CONNECTED`);
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// o/p DB CONNECTED
// DB CONNECTED TWO hitesh

// itni hi kahani hoti hai humare iife k andar
// named iife bhi hote hai jaise ki humne yahan pe
// (1st iife mei dekha) ki yeh jo function hai chai
// (inside 1st iife) yeh actually mei named iife hai

// isko (1st iife ko) agar aap bolenge to yeh yahan pe ek named
// iife hai kyuki iska (1st iife ka) naam hai as follows

// (function chai(){
//     named IIFE commented out
//     console.log(`DB CONNECTED`);
// })();

// (  (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

// yahan pe (2nd iife mei) iska koi naam nahi hai to yeh
// (2nd iife) ek simple iife hai

// to yeh kayi bar pocha jata hai ki named iife kaise likhna hai
// jo bahut aasaan hai jaisa humne 1st iife ko named iife likha
// hai function ki tareh

// aur apko unnamed iife likhna hai to yeh lijiye (2nd iife)
// arrow function iss tareh se likh diya hai

// parameter pass karne hai to kaise karnege yeh lijiye
// (2nd iife mei) => se before (name) likha hai
// to yeh lijiye parameter bhi pass kar diye hai

// 2 iife ek saath kaise likhoge to 2 iife jab ek saath
// likhne ho to log semicolon ki mistake hi karte hai
// jo semicolon 1st iife k baad lagaya hai jo lagana
// bhi hai

// ====================== LECTURE END ========================================================