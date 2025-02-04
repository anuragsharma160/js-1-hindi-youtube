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

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
//     function addnum(){

//     }
// }

// iss ttareh se to ek aur scope ( {} ) aa gaya hai
// (i.e. curly braces {} of addnum)
// to jitni bar curly braces ayega utni bar scope ayega
// tab kahani kaise hoti hai

// =========================================================================

// SCOPE SECOND VIDEO

// AB HUM BAAT KARTE HAI NESTED SCOPES K BARE MEI

// Ab nested scopes kaise kaam karte hai suppose kariye
// ek function as follows

// function one(){
    
// }

// function one(){
//     const username = "hitesh"
// }

// Ab iske baad aapne function k andar ek aur function likh
// diya as follows

// function one(){
//     const username = "hitesh"

//     function two(){

//     }
// }

// Ab jaruri nahi hai ki function k andar hi
// function ho, if else k andar bhi function ho
// sakta hai, loop k andar bhi function ho sakte hai
// bahut sare use case ho sakte hai

// baat hai ki aap gaur farmaiye iss curly braces se
// (curly braces of function one), saari kahani wahin se hai

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//     }
// }

// Ab hum kya chahte hai yeh jo console.log hai
// yeh console.log hona chahiye username ka
// as follows

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
// }

// Ab username ka kyu hona chahiye console.log
// kyu ki hum iss function k andar hai (function two 
// k andar), to hum dekhna chahte hai ki kya hum iss
// function (function two) k andar hai

// to kya hum iss username ko access kar sakte hai
// (const username = "hitesh") , yeh bahut hi
// interesting baat hai

// Achha ek aur hum yahan pe console.log karte hai
// aur yeh hum console.log kar rahe hai website ko
// as follows

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);


// }

// Aur hum kya kar rahe hai jaise hi hum
// aa rahe hai line number 562 pe dhyan se dekhna
// hum function one mei hi hai, function one se
// bahar nahi gaye hai, but hum function two se
// bahar aa chuke hai

// theek hai function two se bahar aake hi humne
// function two ko execute kar diya -- two() as follows

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);

//     two()
// }

// theek hai aur yahan pe aake humne function one ko
// execute kar diya -- one() as follows

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);

//     two()
// }

// one()


// to kaafi kuch execution ho raha hai ek saath
// ab gaur se dekhiyega jada difficult nahi hai

// Ab ek cheej samajhna, yeh Sir humesha isi tareh
// samjhate hai, yeh kuch ice-cream lene jaisa hai

// dekhiye chote bachhe bado se ice - cream cheen
// sakte hai, maang sakte hai, lekin bade agar choto
// se ice-cream maange ya cheen le to bahut hi kharaab
// lagta hai, to yeh kuch rule yahan pe bhi apply hota
// hai

// Yahan pe sabse bada kaun hai -- function one hai
// theek hai aur yeh jo function two hai , yeh chota hai

// to yeh function two kya kar sakta hai , function one
// se ice - cream maang sakta hai

// to iske andar (function one) k andar jitne bhi variable
// hai (jaise, const username = "hitesh") yeh (function two)
// sab access kar sakta hai, uske liye (function two) to
// wo hi (function one) hi global hai, to usko (function one)
// ko access kar sakta hai

// Lekin jaise hi aap yahan pe ( console.log(website); ) aa gaye
// ab kya hai, iska (function two) ka scope to iske first curly
// brace se leke iske last curly brace tak hi hai, to jo bhi
// aapne variable andar declare kare hai (function two k andar)
// wo bas andar hi khatam ho gaye hai

// aur yahan pe humne iss tareh se run kiya hai means
// humne console.log(website); kiya hai

// Ab jab function two ko jab humne run kiya ( two() )
// to hum dekhna chahte hai ki humare pas yeh console.log
// i.e. const website = "youtube"
// console.log(username); (inside function two)
// hota hai ya nahi hota

// theek hai , uske alawa hum yahan pe (console.log(website);) 
// bhi dekhenge ki humare pas yahan pe (console.log(website);)
// (after function two) bhi error ati hai ya fir yeh
// print kar pata hai

// Aur jab function one execute hota hai ( one() ) , tab actually
// mei kya kya uske andar execute hota hai

// to wo bhi hum sab dekhna chahte hai, to save and run karke
//  dekhte hai


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);

//     two()
// }

// one()

// o/p error -     console.log(website);
// ^

// ReferenceError: website is not defined

// to dekhiye error hai, but error se ghabrayiye nahi
// dekhiye kahan kahan error aya

// Sabse phela error aya wo line 662 i.e.
// console.log(website) mei aya hai, isne kaha hai
// ki yeh website ko kahan access kar rahe ho sir...

// yeh website ( (console.log(website)) ) to andar tha
// i.e. yeh website to function two k andar tha ( as
// function two k andar -- const website = "youtube" 
// likha hai)

// Iska scope (function two ka scope) to yahin
// ( console.log(website) k just ek line phele
// i.e. line 661) khatam ho gaya hai curly braces
// k saath

// to isko (console.log(website)) ko yahan (line 662)
// mei access karoge (i.e. outside scope of function two
// mei access karoge) to obvious si baat hai problem ayegi 
// hi ayegi, theek hai

// Lekin aapne gaur farmaya hoga ki line by line
// execution hota hai

// yeh ( console.log(website) ) yahin pe (means line 662)
// pe hi error de gaya hai isliye yeh -- two() kabhi
// execute hua hi nahi

// isne error de diya yahan pe ki -- wesite is not defined
// to yeh hume samajh mei aa gaya

// to ab hum isko ( console.log(website) ) ko kar dete hai
// comment out as follows kyuki ab hume yeh nahi chalana hai
// kyuki ab hum dekhte hai ki aage kis tareh se kahani hoti
// hai , kyuki error se hi sabse jada seekha jata hai

// jitne errors k saath aap famaliar honge utna hi achha
// development aap kar payenge

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website); isko comment out kar diya hai baki poora function as it is hai

//     two()
// }

// one()

// Ab run kiya terminal mei

// o/p hitesh

// Ab usne yahan pe (o/p) mei kaha hitesh,
// kyu kaha hitesh kyu ki function two() jaise
// hi execute hua, to uske andar kya aya ki
// aapne kya kara function two k andar --- console.log(username)
// kiya (see inside function two)

// aur username hitesh tha , (see in function one
// i.e. const username = "hitesh") to wo execute
// ho gaya

// Ab yeh function one aapne execute kara i.e. one()

// Achha ab ek interesting cheej dekhiyega, function one
// jaise hi execute hota hai i.e. one(), uske baad function
// two bhi yahan execute ho raha hai (i.e. two() , see inside
// function)

// Agar hum yahan pe two() ko comment out kar de
// aur baki function as it is hi rehne de as follows

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website); isko comment out kar diya hai baki poora function as it is hai

//     two() isko comment out kar diya hai baki poora function as it is hai
// }

// one()

// To agar hum two() ko iss tareh se comment out
// kar de (as above) to iss function two(){} ko
// to kisi ne call hi nahi kara

// to ab agar hum isko run karenge (terminal mei)
// to yeh execute nahi hoga (i.e. terminal mei koi
// o/p nahi ayega)

// Theek hai yeh baat to ayegi humko samajh mei

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website); isko comment out kar diya hai baki poora function as it is hai

//     two()
// }

// one()

// Ab kya hai iske andar thodi si kahani aur hoti hai
// kya hota hai jitni baar bhi function aap iss tareh
// se declare karte hai (see function two(){} inside
// this function) aur call karte hai (i.e. see two()
// inside this function) unke liye alag ek call stack
// banta hai, yani ki alag ek scope banta hai

// Jitni bar apka function aya wo scope banega uske andar
// stack mei rakha jata hai

// Iske bare mei hum aur discuss karenge ki kaise yeh
// ( function two(){} ) memory k andar jata hai, kaise
// hota hai, uske liye diagrams banayenge achhe se, lekin
// abhi k liye basic hai yeh

// Isi ko kaafi hadd tak closure bhi kaha jata hai ki
// apka jo andar ka function hai ( function two(){} )
// wo bahar k variables (i.e. const username = "hitesh" in function one(){})
// ko access kar pata hai, but sirf itna hi nahi hai uske
// peeche aur bhi kaafi detail hai

// Abhi ke liye apko detail itna hai ki nested function jab
// hote hai to apke jo child function hai (function two(){})
// wo parent function (function one(){}) k variable 
// (i.e. const username = "hitesh" in function one(){}) ko
// access kar pate hai, usually log itna hi jaante hai

// (see closure video in english channel if in hurry
// otherwise yahan hindi channel mei bhi discuss karenge)

// Theek hai yeh ho gaya basic

// Ab isi tareh se yeh jo hum kar rahe hai na, yehi kaam
// if else k andar bhi hota hai, dekhiye apko example
// batate hai yahan pe, kyuki if else k andar bhi to
// kya hai wo scope hi hai

// to yeh if else hua as follows

// if(){

// }

// Agar aap yahan pe true likh dete hai to if k andar
// humko aana hi aana hai as follows

// if(true){

// }

// Ab if k andar humne variable declare kara to humne
// wo hi same username liya aur usko naam de diya hitesh
// as follows -- const username = "hitesh"

if(true){
    const username = "hitesh"
}

// Theek hai, ab uske aapne kaha ek aur if le lete hai
// as follows

// if(true){
//     const username = "hitesh"
//     if(){

//     }
// }

// iss andar wale if mei bhi hum jayenge hi,
// to hum kya karte hai isko (andar wale if ko) bol
// dete hai ki agar username jo hai uski value hai "hitesh"
// i.e. username === "hitesh" , to obvious si baat hai aap
// har bar jaoge hi (andar wale if k andar), (chaho to direct true
// likh do username === "hitesh ki jagah") as follows

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){

//     }
// }

// theek hai yeh hum andar aa gaye (andar wale if ke)

// Ab kya chahte hai hum, ki koshish karte hai ek interesting
// cheej dekhiyega, hum iske andar kya karte hai console.log
// karke dekhte hai ya fir ek naya website declare kar lete hai
// const website = " youtube" (ek space deke youtube likh diya
// kyuki dono ko add karne wale hai) and uske baad hum console.log
// karte hai as follows

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log();
//     }
// }

// To console.log kaise karenge, hum karte hai username aur
// plus kar dete hai iske andar website as follows
// i.e. username + website

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log(username + website);
//     }
// }

// to ab kya yeh add ho jayega , bilkul hoga
// dekhte hai kaise hoga

// Achha yahan pe hum thoda sa errors bhi le lete hai
// kyu ki errors bhi lene jaruri hai

// iske (andar wale if k) hum bahar ate hai aur sabse
// phele console.log karte hai hum iss website ko
// kyuki errors dekhna to jaruri hai , sabse jada jaruri
// wohi hai as follows

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     console.log(website);
// }

// to yeh to humne dekh liya ki kis tareh se website
// aa rahi hai

// Aur yahan pe (outside if function) hum kya karte hai
// ki username bhi print karwa lete hai as follows
// yeh console.log hai aur yeh username (outside if function)
// as follows

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     console.log(website);
// }

// console.log(username);

// Agar apko yeh cheej samajh aa rahi hai to matlab
// apko yeh scope ka concept, thoda thoda closure ka
// concept bhi kaafi hadd tak aa gaya ki kahan kahan
// error aane wali hai

// gaur se dekhiyega yahan (inside if) first line mei
// humne username declare kara (const username = "hitesh")
// if statement k andar

// uske andar baad wapas se ek if statement hai (andar wala
// if statement) uske andar humne ek website declare kari
// const website = " youtube"

// Ab uss andar wale if statement k bahar aake hum keh rahe
// hai ki website ka access do ( console.log(website); )

// Aur iss poore if (bahar wala if statement) k bahar aake
// hum keh rahe hai ki username ka access do ( console.log(username); )

// to isko run karke dekhte hai aur dekhte hai error kahan
// kahan pe pe ayegi, jitna hum error se famaliar honge
// utna hi humko coding mei aasaani hogi

// o/p     console.log(website);
// ^

// ReferenceError: website is not defined

// dekhte hai phela error kahan pe aya, phela error aya
// ki website (console.log(website) see in error), yeh jo
// access karne ki koshish kar rahe hai na Sir aap yeh website
// (console.log(website); just outside andar wala if statement)
// yeh nahi access hoga, kyu nahi hoga kyuki iska to (website
// ka) scope hi andar wale if statement k andar tak tha ({}
// hi to scope hai) to phela error humne remove kar diya
// means humne console.log(website); jo just outside hai andar
// wale if statement k isko comment out kar diya as follows

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     console.log(website); commented out, rest as it is
// }

// console.log(username);

// Ab dubara run karte hai iss just above function ko

// o/p console.log(username);
// ^

// ReferenceError: username is not defined

// Isne kaha yeh jo username aap access karne ki koshish
// kar rahe hai (console.log(username); see in error) yeh nahi
// hoga access kyu, kyuki username ka scope bahar wale if statement
// k andar hai , jabki hum console.log(username) bahar wale if
// statement k bahar likh rahe hai isliye, that's why hum iss
// console.log(username) jo humne bahar wale if statement k bahar
// likha hai isko remove kar dete hai means isko comment out kar
// dete hai as follows

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     console.log(website); commented out, rest as it is
// }

// console.log(username); commented out rest as it is

// Ab hum just above function ko run karte hai

// o/p hitesh youtube

// =====================================================================

// Ab ek final ek chota sa example bhi Sir dikhate hai
// yahan pe, abhi yeh -- hitesh youtube print ho raha
// hai to Sir iss if function mei iss line -- console.log(username + website);
// ko comment out kar dete hai as follows taki hume easy rahe

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log(username + website); commented out, rest as it is
//     }
//     console.log(website); commented out, rest as it is
// }

// Abhi humare pas file mei kuch bhi run nahi ho raha hai,
// means terminal mei kuch bhi o/p nahi aa raha hai

// Ek chota sa eg Sir yahan pe bhi denge, yeh bada hi interesting
// eg hai as follows, iske bare mei hum detail discussion
// aur karnege

// ++++++++++++++++++++++++++++ interesting example +++++++++++++++++++++

// Ab kya hai bada hi interesting question Sir dete hai, question to kya
// hai ek concept hai yahan pe

// Suppose kariye ki aapke pas ek function hai, aur yeh
// function kya karta hai sirf apko ek console.log karta hai
// ya kuch iss tareh se karta hai, dhyan se dekhiyega ki yeh
// actually mei ho kaise raha hai, bada hi aasaan hai har bar code
// chalega iss bar, to itni koi dikkat wali baat nahi hai

// isko hum bolte hai addone as follows, to jo bhi value
// aa rahi hai uske andar hum one add kar rahe hai as follows

// function addone(){

// }

// theek hai to aapne kya kara, yeh value li as follows

// function addone(value){

// }

// value ki jagah hum num likh dete hai taki easy rahega
// dekhne mei humare pas num aa gaya as follows

// function addone(num){

// }

// Aur jab bhi hum return karenge, to kya karenge wo jo
// num hai uske andar hum plus one kar denge as follows

// function addone(num){
//     return num + 1
// }

// theek hai bada hi aasaan sa ek function humne banaya
// hai yahan pe

// Ab iss addone ko humne yahan pe iss tareh se call kiya
// as follows

// addone()

// Aur uske andar humne value de di 5 as follows

// addone(5)

// o/p kuch nahi aya kyuki only return and not print
// print ke liye console.log

// Ab isi cheej ko , exactly isi cheej ko aap kai jagah
// dusri tareh se hote hue dekhenge, kaise wo bhi batate
// hai apko

// dekhiye aap kya karenge kai log, Sir bhi karte hi hai
// to humne naam de diya const aur bol diya addTwo as follows
// iss bar yeh add two karega as follows

// const addTwo 

// Aur yahan pe equals likh ke kaha humne function as follows

// const addTwo = function()

// Aur iss function k andar humne wo hi value le li hai num
// as follows

// const addTwo = function(num){

// }

// Ab hum kya kar rahe hai return, aur jo bhi apke pas num
// value aa rahi hai, uske andar ho raha hai add two (+ 2)
// as follows

// const addTwo = function(num){
//     return num + 2
// }

// aur yahan pe humne likh diya ki yeh jo addTwo hai (const addTwo)
// iske andar value de di hai, suppose kariye 5 hi humne wapas se
// de di hai

// addTwo(5)

// to apko pata hai dono k andar kya hoga (both functions k andar)
// lekin kya hai ki dono ko bolne ka tarika kya hai (likhne ka tarika)

// yeh basic function hai (previous example function addone(num)), yeh bhi
// function hi hai function(num) ( function(num) in const addTwo = function(num)
// this example), lekin isko addTwo (addTwo in const addTwo = function(num))
// ko kabhi kabhar expression bhi bol diya jata hai, yeh (addTwo) ek variable
// ki tareh hai, JavaScript k andar variables bahut jada powerful hai,
// yeh (variables) kuch bhi hold kar sakte hai -- JSON values ho gayi,
// functions ho gaya, bahut kuch , kuch bhi hold kar sakte aap variable
// k andar

// to yeh 2 technique hai , apko iss tareh se bhi functions dikhai
// denge bante hue (first eg ki tareh -- addone), aur apko iss atreh se
// bhi functions dikhai denge (const addTwo)

// aage jake aur bhi techniques batayenge apko ki kis tareh se arrow functions
// hote hai kya , hote hai , but isme koi ghabraane wali baat nahi hai, dono
// tareh se apko functions bante hue najar ayenge, iss tareh se values hoti
// najar ayegi

// Achha ab ek interesting cheej , hum inn dono methods ko run karte hai
// (inn dono functions addone and addTwo ko), haan value hum kuch bhi
// return nahi karenge to obvious si baat hai print nahi hoga, but
// dekhiye kya hota hai ki humne isko run kara koi error nahi aya
// (terminal mei) (koi o/p bhi nahi aya as only return and not print)

// Achha ab kya karte hum yahan pe, yeh jo first humara addone hai
// ( addone(5) ) isko hum leke jate hai iss function (addone) k declaration 
// se phele as follows

// addone(5)

// function addone(num){
//     return num + 1
// }

// const addTwo = function(num){
//     return num + 2
// }

// addTwo(5)

// Ab dekhte hai ki kya run hota hai aur kya value ati hai
// in terminal

// o/p -- koi error nahi aya terminal o/p mei

// to isne kaha koi problem nahi hai aap addone(5) iss tareh
// se likh sakte hai (function addone se phele) aur koi error
// nahi di usne

// aur obvious si baat hai yeh (addone(5)) execute ho hi gaya
// hoga, chahe to hum ise (addone(5)) ko console.log karke dekh
// hi sakte hai as follows

// console.log(addone(5));
// o/p 6

// function addone(num){
//     return num + 1
// }

// const addTwo = function(num){
//     return num + 2
// }

// addTwo(5)

// to humne dekha ki o/p mei value 6 aa gayi hai
// (first function ka o/p)

// Ab isko bhi (addTwo(5)) ko bhi hum function declaration se
// phele le jate hai , (yeh function dusri tareh se declare hua hai)
// aur isko (addTwo) ko run karke dekhte hai ki actually mei ab kya
// hota hai as follows

console.log(addone(5));
// o/p 6

function addone(num){
    return num + 1
}

addTwo(5)
// o/p addTwo(5)
// ^

// ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

// to ab error aa gaya, haan yeh bada interesting hai, yeh apko
// pata bhi hona chahiye ki isne bola ki addTwo ko to mai access
// hi nahi kar sakta (see error)

// Lekin yahan (first eg i.e. addone) mei to access kar liya tha

// to haan ji yeh problem ati hai jab aap functions ko
// kis tareh se declare karte hai

// yahan first eg mei as follows

// function addone(num){
//     return num + 1
// }

// to humne sirf declaration diya hai

// yahan pe second eg mei as follows

// const addTwo = function(num){
//     return num + 2
// }

// humne declare (Right Hand Side) karne k saath usko ek variable
// (addTwo) mei hold bhi kar diya hai

// (addTwo variable ka naam hai , function ka nahi, jiske andar
// humne second function ko hold kiya hai)

// (addone function ka naam hai)

// to yeh aage jake ek consept aata hai JavaScript k andar jisko
// bolte hai hoisting, ki function kaise declare hote hai, kahan
// unko rakha jata hai, kya unka execution context hai, ya fir kis
// tareh se variables ko JavaScript treat karti hai
// kaise ek final tree banati hai jahan pe saare variables rakhe jate hain,
// saare functions rakhe jate hai, detail mei discussion karenge

// But abhi k liye aap dekhiye dono (both examples) mei antar kya hai

// Abhi hume dono mei difference pata hai ki accha yeh syntax (first eg)
// bhi hota hai and yeh syntax (second example) bhi hota hai

// Ab hume iss tareh ki koi error dikhegi (Cannot access 'addTwo' before initialization)
// to aap humesha se uska pata layenge ki shayad hum kahin koi
// iss tareh se as follows

// addTwo(5)

// const addTwo = function(num){
//     return num + 2
// }

// function declare kar rahe hai and usko phele access kar rahe hai
// (addTwo(5)), uske declaration se phele

// to yehi ek hoisting hota hai jahan execution context banta hai
// ki aap declaration se phele usko use nahi kar sakte but iss case
// (first example) mei hum use kar paa rahe hai, iss case (second example)
// mei hum nahi kar paa rahe use

// aage hum aur in depth jayenge, abhi hum sirf overview dekh rahe hai

// Next videos mei hum execution context and hoisting words se famaliar
// rahenge