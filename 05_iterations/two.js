// while loop

// while loop hai na , wo bahut hi aasaan hai

// while (condition) {
    
// }

// ========================================================

// haa bilkul if else jaisa hi kuch loop hai

// iske andar kya hota hai yahan pe ( while (condition) {} ) aap condition check karte hai
// aur jo kuch iske andar ( while (condition) {} mei {} k andar ) likhenge wo uss tareh se
// chalti jayegi

// ===========================================================

// Ab condition aap kya kar sakte hai , condition aap kar skate hai
// 2==2, obvious si baat hai yeh likh sakte hai aur, aur bhi bahut
// sari conditions likh sakte hai aur uss hisab se print ho sakti hai

// but iske andar (while loop k andar) kya hai thoda sa syntax alag yeh hota hai ki kyuki
// aap sirf condition (2==2) hi check karte ho yahan pe (2==2) while k andar,
// usko execute hi karte ho har bar, to condition ka initialization,
// increment wo bhi to likhna hi padega

// dekhiye loop koi bhi ho process wo hi rahega ki kuch value initialize karo,
// uski condition check karo, fir uss value ko constantly increment ya decrement
// karo, change laao kuch uske andar , taki kahin jaake to terminate kar de hum loop
// ko, to bas utni hi baat hai

// but yahan pe structure thoda sa alag hota hai

// jaise suppose kariye pehle hum let ko jo i likh rahe the ya index
// likh rahe the (for loop mei) to uss index ko hum pehle ek hi saath likh rahe
// the , abhi hum uss index ko likh dete hai yahan pe (let index = 0) as follows

// let index = 0
// while (2==2) {
    
// }

// theek hai index likh diya humne zero

// Ab iss index ko kab tak chalana hai hume, to suppose kariye iss index ko
// chalana hai jab ki less than equal to 10 ho ( while (index <= 10) {} ) as follows

// let index = 0
// while (index <= 10) {
    
// }

// to yeh condition ( while (index <= 10) {} ) ho gayi

// Ab kya karna hai , print karwana hai to console.log() bhi
// print karwa lete hai hum yahah pe , wo hi back ticks use karte hai,
// aur likh dete hai `Value of index is`

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is`);
    
// }

// Aur variable inject kar dete hai humara ${index} as follows

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
    
// }

// Ab variable aapne to inject kar diya, lekin ab kahani ek aur
// kya aati hai increment , decrement kuch to karna padega na
// varna wo loop wapas se infinite mei chala jayega

// to kuch aisi condition likhiye jaruri nahi hai ki aap
// humesha hi increment hi likhe ya fir humesha decrement hi likhe

// aisa ki koi na koi condition ho ki jo terminate karti ho uss loop ko,
// exit aata ho loop se , varna constant infinite ho jayega , wo bilkul
// sahi baat nahi hai

// to hum kya karte hai uss index ko kya karte hai , index = index + 2
// as follows

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

// jaruri thodi naa hai har baar index++ hi ho, variation change hona chahiye
// Ab hum seedha 200 badha de to theek hai 200 badha dijiye

// sav and run

// o/p value of index is 0
// value of index is 2
// value of index is 4
// value of index is 6
// value of index is 8
// value of index is 10

// ===================================================================================

// Achha aapko kisi array ko bhi iss while loop se karna ho to bhi
// asaan hai

// wo hi same array le lete hai humare as follows

// let myArray = ["flash", "batman", "superman"]

// Ab while kaise check karnege theek hai wo hi same while as follows

// let myArray = ["flash", "batman", "superman"]

// while (condition) {
    
// }

// Ab condition check karo aur print karate jao , theek hai ji

// Ab sabse pehle to ek variable to chahiye ga hi kyuki kuch na kuch
// inrement decrement to karna hi padega, to isko le lete hai let
// aur variable ka naam le lete hai arr as follows (let arr)

// let myArray = ["flash", "batman", "superman"]s

// let arr

// while (condition) {
    
// }

// hum isko (let arr) shuru kahan se karayein, zero se hi karayenge
// (let arr = 0) kyuki index jo hai wo zero se hi start hone wala
// hai (array ka index zero se start hota hai)

// let myArray = ["flash", "batman", "superman"]s

// let arr = 0

// while (condition) {
    
// }

// to check kar lijiye kya aapka arr jo hai wo less than hai (less than equal to,
// to hum karenge nahi kyuki array ki length se hum compare karne wale hai)

// let myArray = ["flash", "batman", "superman"]s

// let arr = 0

// while (arr <) {
    
// }

// to yeh jo myArray hai , iski length calculate kar lete hai as follows
// myArray.length -- yeh lijiye length calculate ho gayi

// let myArray = ["flash", "batman", "superman"]

// let arr = 0

// while (arr < myArray.length) {
    
// }

// means kya arr less than hai myArray ki length se (as above condition)

// Ab iske andar mujhe length calculate ho jayegi to automatically usme
// increment decrement kuch khaas karne ki jarurat hai nahi, mere ko bas
// iske andar loop karna hai

// to yeh humne loop kar diya hai (means console.log() kar diya hai as follows)

// let myArray = ["flash", "batman", "superman"]

// let arr = 0

// while (arr < myArray.length) {
//     console.log();
    
// }

// Aur print kara lete hai value, to back ticks use kar lete hai
// `Value is ${}` 

// let myArray = ["flash", "batman", "superman"]

// let arr = 0

// while (arr < myArray.length) {
//     console.log(`Value is ${}`);
    
// }

// Ab iske andar hum kya karte hai iss value k andar (${} k andar)
// myArray lete hai 

// let myArray = ["flash", "batman", "superman"]

// let arr = 0

// while (arr < myArray.length) {
//     console.log(`Value is ${myArray}`);
    
// }

// Aur uski (myArray ki) wo wali index print kara lete hai, to arr pe
// humara index hai as follows

// let myArray = ["flash", "batman", "superman"]

// let arr = 0

// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
    
// }

// 5:21

// Achha ek cheej to humari reh hi gayi hai yahan pe
// jo arr hai uski value badhani bhi to hai varna humesha
// zero wali value print hogi

// to uske liye hum kya karte hai arr ko kya bol dete hai
// ki arr = arr + 1 ya chahe aap arr++ boliye ek hi baat hai

// dekhiye code k andar short likhne se jada jaruri yeh hona
// chahiye ki code samajh mei aye, samajh mei aana readability code
// ki yeh sabse top most priority hoti hai, smart banne k liye aap aadhi
// line mei ya ek line mei kariye but code samajh mei aana chahiye

// let myArray = ["flash", "batman", "superman"]

// let arr = 0

// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
    
// }

// o/p Value is flash
// Value is batman
// Value is superman

// to dekhiye value is flash, batman, superman sari values
// humare pas aa gayi hai

// to wo hi kaam humne for loop se kiya tha, wo hi kaam while loop se
// kar diya hai, koi dikkat wali baat hi nahi hai dekhiye programming
// mei kuch galat sahi nahi hai, end of the day aapko jo output bola
// gaya hai ya jo resukt bola gaya hai wo aana chahiye, ab aap for loop
// se layiye, while loop se layiye, do while loop se layiye, map se layiye ,
// ya kisi se bhi layiye, kaam hona chahiye bas

// theek hai nested loops bhi aap isi tareh se likh sakte hai

// =======================================================================================

// to hum ab aate hai dusre loop pe , yeh while loop to ho gaya

// Ab isi tareh se ek aur humare pas loop hota hai jo ki hai
// do while loop, ab yeh jo do while loop hai na yeh thoda sa interesting hai
// kaise

// do {
    
// } while (condition);

// kaise, yahan pe aap dekh sakte hai yeh while jo hai (see syntax of do while loop)
// yahan pe condition end mei hai (while (condition) see syntax of do while loop)
// to yeh loop kya hai specialization karta hai ki condition apki sabse end mei
// check hogi, pehle apka kaam hoga, pehle do hai (see syntax of do while loop)
// yani ki kaam hoga aur uske baad condition check hogi (while (condition) see syntax of do while loop)

// to ek chota sa example lete hai iska bhi hum yahan pe

// to yahan pe ek value lete hai score as follows

// let score

// do {
    
// } while (condition);

// ab score value kahan se start ho rahi hai -- one se start ho rahi hai (suppose)
// as follows

// let score = 1

// do {
    
// } while (condition);

// theek hai ji, ab yahan pe console.log karate hai aur isme back tick leke
// aur isko bolte hai -- `Score is` aur humne value inject kara di using
// dollar sign -- `Score is ${}` aur iske andar bola score ko print
// kara do -- `Score is ${score}` as follows

// let score = 1

// do {
//     console.log(`Score is ${score}`);
    
// } while (condition);

// thek hai ji, ab condition kya (see do while loop syntax) hai kab tak score
// ko print karana hai, theek hai ji, tab tak print karaiye score ko jab tak
// ki yeh jo score hai yeh less than equal to 10 na ho jaye as follows

// let score = 1

// do {
//     console.log(`Score is ${score}`);
    
// } while (score <= 10);

// ab obvious si baat hai less than equal to 10 ( (score <= 10); ) score kabhi
// aapne badhaya hi nahi hai, kabhi change hi nahi kara (score ko) , to yeh (do while loop)
// to continuously run hota rahega

// to score ko kahin na kahin change to karna hi chahiye, to theek hai ji
// score ko change kar dete hai , isko score++ kar dete hai yahan pe as follows

// let score = 1

// do {
//     console.log(`Score is ${score}`);
//     score++
    
// } while (score <= 10);

// theek hai ji ab apko code actually mei sammajh mei aa raha hai
// sirf aise aankh band karke likh nahi rahe hai aap kuch bhi
// hum har line pe discuss kar rahe hai

// save and run

// o/p Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5
// Score is 6
// Score is 7
// Score is 8
// Score is 9
// Score is 10

// ====================================================================================

// Achha score ko run kariye tab tak jab tak ki uski value 10 se choti ho
// ( while (score <= 10); ) 8:12

// kya ho agar aapka score ki value seedhe hi 11 ho yahan pe as follows
// tab kya hoga

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
    
} while (score <= 10);

// save and run

// o/p Score is 11

// yahin pe do while loop ka ek special case hai
// special case kya hai ki score ki value 11 aa gayi hai
// (see o/p) , kyu 11 aa gayi hai, kyuki aap gaur se dekhiyega
// do while loop k andar kya hota hai kaam as follows

// do {
//     console.log(`Score is ${score}`);
//     score++
    
// }

// pehle hota hai, condition as follows

// while (score <= 10);

// baad mei check hoti hai

// yeh kuch udhaari wala system hai ki aaj udhaar de do kal wapas
// de denge, to dekhiye udhaar dene k time pe kya hua score 11 (let score = 11)
// to udhari as follows

// do {
//     console.log(`Score is ${score}`);
//     score++
    
// }

// to de hi chuke the, ab usne bola ki are mere pas to paise as follows

// while (score <= 10);

// hi nahi hai to theek hai, apka score to ek bar print ho gaya ( console.log(`Score is ${score}`); )
// chala gaya (score), ab uske baad aapne baad mei condition check kari
// ( while (score <= 10); )

// to haa aise cases bhi hite hai kayi bar ki apko ek bar loop chalana hi hai
// aur especially bahut sare cases hote hai aage jake jab hum projects banayenge
// wahan pe but bahut hi rare case hai ki aap do while loop ko use karnege
// bahut hi ikka dukka case hote hai, jahan pe apko aisa kuch karna tha
// usually hum prefer karte hai ki condition ko pehle hi check kar le
// regular flows mei but haa exception sab jagah hai

// =============================================================================================================

// yeh ho gaya humara basic

// ==================================================

// Ab humare pas kya hai loops hote hai jo ki specialized hai array pe
// loop lagane k liye, array pe loop lagana itna jada common hai na ki
// database se jab bhi aap kuch values fetch karoge dus (10) values, 5 values
// wo humesha array ki format mei aati hai, APIs jadatar kuch values apko array
// ki format mei dene hai, to array pe loop lagana itna common syntax hai na
// ki uske liye kuch specialized loops bhi banaye gaye hai aur kuch array ki
// direct properties bhi hoti hai uspe loops k liye aapke pas available

// nested loops bhi humne padh liye

// ===================== LECTURE END =======================================================