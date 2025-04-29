// Ab kyuki charcha kar hi rahe the object ki to ab
// object ek bana hi lete hai

// to suppose kariye yeh object ho gaya const aur wapas
// se le lete hai myObject

// const myObject =

// ab iske andar values kya kya li jaye, aa... languages ki
// lete hai

// to humne bola ki js: jo hai wo likha jata hai 'javascript'
// k liye

// aur cpp: likhte hai hum 'C++' k liye

// rb: jo hai wo hum likhte hai ''ruby'' k liye

// swift: jo hai wo hum likhte hai "swift by apple" ,
// thoda bada naam likh lete hai as follows

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// ab problem yeh hai ki abhi tak humne dekha hai ki humara jo
// for of loop hai wo to bilkul kaam hi nahi kar raha tha humare
// uske object k liye, maps pe kar raha tha, lekin objects pe
// nahi kar raha tha

// to objects pe bhi to loop lagana hi hai aisa thodi na hai
// ki chord denge isko, to wo kaise kara jaye

// dekhiye uske liye humare pas ek naya loop hota hai jisko bolte
// hai for in loop

// ab aisa nahi hai ki for in loop apka humesha objects k liye hi hota
// hai , nahi nahi aur bhi jagah kaam aata hai aisi baat nahi hai wo
// bhi practical karke dekhenge

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// is for in loop ko dekh k itna jada tension lene ki jarurat hi nahi
// hai , iss if statement (see inside for in loop) ko poora hi hata do
// hume koi matlab hi nahi hai isse (if statement se) as follows

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in object) {
    
// }

// humne dekha for key in object ( for (const key in object) {} )
// theek hai ji key in object ( for (const key in object) {} )
// object humara kya hai -- myObject , theek hai ji

// yeh myObject laga diya as follows

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
    
// }

// ab sabse pehle print karke dekhte hai iss key ko ki actually
// mei key k andar humare pas value kya aati hai
// console.log(key)

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(key);
    
// }

// save and run

// o/p js
// cpp
// rb
// swift

// to humare pas keys to saari aa gayi (o/p mei -- js cpp rb swift)

// ==================================================================

// to yeh to sabse basic tha ki keys apke pas sari aa gayi hai,
// but keys se kaam thodi na chalega , keys k saath saath apko
// object bhi chahiye ga

// to object kaise nikale

// dekhiye agar aapke pas keys aa gayi hai na, to object nikalne ka tarika
// bahut hi aasaan hai

// aap kya kar sakte hai iss console.log() ( console.log(key) ) mei key
// ki jagah aap uss object ko lijiye (myObject in this case / eg)
// as follows

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(myObject);
    
// }

// aur bol dijiye, aur myObject k andar boliye ki

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(myObject[]);
    
// }

// aur bol dijiye, aur myObject k andar boliye ki yeh jo key aayi hai
// iski value mere ko de do yahan pe -- console.log(myObject[key])

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }

// tp aapke pas key bhi aa gayi aur object bhi aa gaya

// save and run

// o/p javascript
// C++
// ruby
// swift by apple

// to aapke pas yeh sari values bhi aa gayi hai (see o/p)

// ====================================================================

// Ab agar aapko isko run karna tha to aap kya kar sakte hai
// syntax hai back ticks use kar sakte hai -- console.log(``);

// aur isko bol sakte hai seedha, aa... seedha hi variable inject kar
// dete hai, aur isko bolte hai ${} -- console.log(`${}`);

// aur isko bolte hai ` ${key} shortcut is for ` (ya fir filename is for),
// jo bhi aapka variable dusra hai yeh inject kar dete hai hum yahan pe
// ( following commented out line mei 2nd wala ${} )

// to yeh dusra variable inject kar diya -- console.log(`${key} shortcut is for ${}`)

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${}`);
    
// }

// to yeh dusra variable inject kar diya aur bol diya isko --
// myObject lo as follows

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject}`);
    
// }

// aur uske andar yeh key print kara do -- ${myObject[key]}
// as follows

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

// theek hai bahut hi basic sa tha itna jada koi difficult wali
// baat hi nahi thi iske andar

// save and run

// o/p js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

// 16:49

// to dekhiye js shortcut is for javascript (see o/p),......
// cpp shortcut is for C++,... to sari values, key value pair
// iske andar aa gaye bahut hi basic sa hai

// =======================================================================

// Achha theek hai yeh to ho gaya kaam but ab aapke dimag mei question aa raha hoga
// nahi aa raha hoga to sir daal dete hai ki kya yeh for in jo loop hai kya hum
// arrays pe bhi kaam mei le sakte hai

// ab yeh baat to dekhiye practical karke hi pata lagegi 17:07

// to chaliye ek le lete hai hum yahan pe

// to yahan pe likh lete hai const programming

// const programming =

// aur programming ka array le lete hai

// const programming = []

// theek hai to "js" ho gaya iske andar , ruby "rb" ho gaya ,
// python "py" ho gaya, "jawa" ho gaya , "cpp" ho gaya iss array k andar
// as follows

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// ab for in loop se hum array k andar print karke dekhte hai

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// aur wo hi wapas se yeh if (for in loop k andar wala if) hum
// backspace kar dete hai

// (for in loop k andar wale if mei Object k bare mei hum baad mei baat karenge)

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// for (const key in object) {
    
// }

// aur programming array k andar loop lagana hai , to theek hai ji

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// for (const key in programming) {
    
// }

// ab yeh key hai ( for (const key in programming) {} , mei key ) isko
// hi print karke dekh lete hai, yeh console.log() ho gaya humara
// aur ek bar key hi print kar do ( console.log(key) ) kya aap isme (array mei) print karte ho kya

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// for (const key in programming) {
//     console.log(key);
    
// }

// ab dekhte hai kya humara for in loop yahan pe bhi (array pe) kaam karta hai kya

// save and run

// o/p 0
// 1
// 2
// 3
// 4

// to yeh to kaam kar raha hai, lekin keys aayi hai aapke pas saari

// haa ji yeh for in loop ka sabse bada ek hai

// for of loop mei to aapne dekha tha ki seedhe hi value utha deta hai yahan pe
// to humne jab print kara tha (for of loop mei) to dekha tha humne aisi
// kuch dikkat thi hi nahi humare pas seedhe hi value aa rahi thi aap value
// hi dump kar rahe the seedhe seedhe (greeting eg in for of loop),
// humne num jab print kara tha (for of loop mei)
// yaad hai aapko seedhe hi value print ho gayi thi

// aur map k andar bhi jab kar rahe the (for of loop mei) to keys k andar
// seedha keys aa gayi thi

// lekin yeh jo loop hai for in loop , iske andar keys aayi hai (see o/p -- 0, 1, 2, 3, 4, 5)
// ab array ki keys kya hoti, haa ji array ki bhi keys hoti hai jab aap
// documentation padhenge tab aapko pata lagega ki actually mei object ka
// design hi isliye hua tha kyuki arrays ki jo keys hai wo zero se start
// hoti hai aur by default number hi hoti hai

// but object mei aap jo marji aye wo key daal sakte hai

// to keys aa gayi (see o/p -- 0, 1, 2, 3, 4, 5) ab keys se hum
// programming ki (programming array ki) values kaise nikale

// are bahut aasaan hai, programming hai -- console.log(programming)
// as follows (means array ka naam programming hai)

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// for (const key in programming) {
//     console.log(programming);
    
// }

// (array ka naam programming hai) keys aapko pata hi hai
// to yeh lijiye -- console.log(programming[]);

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// for (const key in programming) {
//     console.log(programming[]);
    
// }

// yeh ho gayi humari key -- console.log(programming[key]);

// const programming = ["js", "rb", "py", "jawa", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }

// yeh ho gayi apki value

// save and run

// o/p js
// rb
// py
// jawa
// cpp

// to dono loop k andar (for of loop & for in loop) bas yehi
// ek major difference hai ki aapke pas kiske andar values (js rb py jawa cpp)
// aati hai , kiske andar keys (0, 1, 2, 3, 4, 5) aati hai, bas itna hi major aapke
// pas syntax hai

// ====================================================================================

// Achha ab ek aur cheej , ab aap kayi log soch rahe honge ki hume yeh bhi
// batao vapas se ki kya aapne yeh jo map liya tha (for of loop mei) ispe
// wapas se hum for in loop bhi laga sakte hai kya , dekhiye karke to sir aapko
// bata dete hai 19:07 but sir think most logo k pas yeh jawab hona chahiye
// jis error ayi thi jo humare pas uss error se aapke pas yeh jawab hona
// chahiye vaise to but fir bhi chaliye aapko nahi samajh mei aya to
// dubara se ek bar batate hai

// yeh humne wapas se new map liya (copy paste from three.js file) as follows

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// aur map aya humare pas, ab wapas se hum yeh for in loop lete hai

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// isko ( jo if, for in loop, k andar likha hai ) sabko hataya

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const key in object) {
    
// }

// aur bola ki humare pas map k upar iteration karna hai to theek hai ji
// yeh lijiye map k upar iteration kar dijiye as follows
// for (const key in map) {}

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const key in map) {
    
// }

// aur wapas se console.log() kariye iss key ko -- console.log(key)

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const key in map) {
//     console.log(key);
    
// }

// result hume pata hi hai kya aane wala hai
// (kya yeh loop possible hoga ya nahi hoga)

// humne map k upar chalaya key aur yeh map k upar chahiye

// save and run

// o/p kuch nahi aya

// haa ji yeh jo map hai na , yeh actually mei agar aapko
// error pata ho yeh iterable nahi hai, agar koi cheej
// iterable nahi hai , to usko iss tareh se loop mei nahi
// likha jaa sakta, tarike hai aage jake hum wo bhi padhenge
// maps k bare mei kuch aap documentation etc dekh sakte hai
// 20:16 ki kis tareh se maps hote hai, kya iske andar keys
// hoti hai, kis tareh se securities hai, aur bhi constructor ,
// yeh bahut saare examples bhi hai yahan pe (right side mei)
// ki kis tareh se keys ko liya jata hai, kis tareh se values
// hoti hai map hote hai

// to dekhiye (in mdn) -- Using NaN as Map keys , bahut detail mei
// jayenge hum aage jaake maps k bare mei jab bhi hum padhenge
// abhi k liye itna hi apke liye jaan na jaruri hai ki iske andar
// (map k andar) bhi iss tareh se humare pas map k upar iteration
// nahi kiya jaa sakta

// theek hai yeh basic ho gaya

// ==============================================================================

// to yeh to ho gaya aapka basic for of loop aur for in loop, dono
// hi aapko samajh mei aa chuke hai kaise kaise kaam mei lena hai

// aur objects k andar loop lagana hai jab obvious si baat hai hum
// har bar kya use karenge for in loop laga denge fataak se (20:58)

// arrays k upar lagana ho to hum kya kar denge for of loop laga
// lenge

// lekin aisa nahi hai arrays k upar aur bhi kaafi loops hai

// ====================================================================================

// Ab ek interesting loops k bare mei hum baat karte hai jo
// aap sabse jada use karoge

// jab bhi kabhi array ayega to aap dono mei se ek hi loop
// use karoge, ek map bhi hota hai wo aage jaake sir next
// video mei batayenge but ek loop sir yahin pe lena
// chahenge jo hai for each loop

// to chaliye ek nayi file yahan pe bana lete hai -- five.js