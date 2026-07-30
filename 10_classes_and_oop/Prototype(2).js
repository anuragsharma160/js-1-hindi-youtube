// 26:40

// abhi tak jo example liya
// wo humne kis liye liya tha
// object ko samajhne ke liye
// object ke andar new keyword kya
// hota hai usko samajhne ke liye
// to wo to aapko samajh mei aa gaya hai

// prototype mai maanta hu thoda sa
// 10-15% ki kami reh gayi hogi ki
// thoda aur detail mei agar hum le sakein
// aur samjha sakein to kaise karenge

// 26:56

// uske liye yeh portion hai please koi
// timestamp yahan pe add kar dijiyega
// aa..., ki yahan se humara prototype wala
// section shuru ho raha hai
// abhi tak humara new keyword wala section tha
// to please add kar dijiyega timestamp
// aap mei se kuch log, kaafi log kar dijiyega
// isme kya hai, paise thodi lag rahe hai
// 27:10

// theek hai, to chaliye ab mera goal kya hai
// aa..., pehle hum goal ke bare mei dekh lete hai
// kyuki uss goal ke through mai aapko samjhata hua uss goal
// pe leke aaunga yahan pe

// theek hai to mujhe kya karna hai
// aa..., mere pas ek goal hai
// ki mere pas ek string hai let
// let
// myName
// let myName =
// aur yeh string hai "hitesh"
// let myName = "hitesh"
// 27:28

// ab mujhe pata hai ki iss hitesh ( let myName = "hitesh" )
// ke andar mai kuch console.log kar sakta hu
// let myName = "hitesh"

// console.log()

// kuch properties mere ko by default milti hai 
// kyuki yeh ( let myName = "hitesh" ) string hai
// aa..., dot length property mere ko milti hai
// let myName = "hitesh"

// console.log(myName.length)

// to length kitni aa rahi hai mere pas
// achha specific usecase le raha hu
// taki aapko future mei samajh mei aaye
// ki kis tareh se libraries banti hai
// frameworks banti hai
// kaise aur functionalities add hoti hai
// low dash etc yeh kaafi popular frameworks
// libraries hai
// 27:50
// yeh kaise banti hai

// to hum chalte hai node ke andar (in terminal)
// aur humara 10_classes_and_oop ke andar ek prototype hai (prototype.js)

// o/p 6

// to mujhe pata hai 6 (see o/p)
// letter word hai
// mujhe pata hai mera naam (sir ka naam)
// 6 letter ka hai

// Lekin one two three four five
// (five bar space de diya after last h of "hitesh" in let myName = "hitesh")

// let myName = "hitesh     "

// console.log(myName.length)

// yeh five (five spaces) humne de diya hai
// ab yeh five humne yahan pe aur add kar diya hai
// to ab meri length kya hai yahan pe 
// run in terminal

// o/p 11

// ... to ab meri length kya hai yahan pe 11 (see o/p)
// jo ki galat baat hai
// 28:09

// to mai chahta hu ki dot length ( console.log(myName.length) ) 
// ki tareh hi yahan pe ek property ho jo ki ho
// truelength

// let myName = "hitesh     "

// console.log(myName.truelength)

// likh liya

// trim vrim nahi
// haa mujhe pata hai aap trim se hi kaam kar sakte ho
// but aap fir obvious si baat hai fir aapne
// wo low IQ wali baatein mat karna ki nahi nahi
// mai to isse kar dunga usse 

// are aap kuch cheej samajhna chah rahe ho aap
// hai na ...
// mujhe pata hai yahan pe koi nahi hai iss channel pe 
// jo ki low IQ wala hai
// 28:28

// to yeh truelength ( console.log(myName.truelength) )
// ek property mai chahta hu
// yeh ( console.log(myName.truelength) , mei truelength ) property 
// kya kare ki mujhe console.log de poora 
// aur poora poora word likh ke de ki 
// -- truelength of string is 
// aur uske baad proper value de
// aur last mei se jitni values hai 
// yeh sare extra spaces etc
// ( let myName = "hitesh     " mei hitesh ke last h ke baad ki extra five spaces )
// hai wo mujhe nikaal ke de
// 28:43

// ab mai chahta hu yeh sara kaam truelength 
// ( console.log(myName.truelength) ) se hi ho
// mere ko dus (10) function call karne hi nahi hai
// kaise karunga to abhi to mai nahi kar sakta
// abhi mere pas wo capability hai hi nahi
// 28:52

// but mera user chah raha hai ki mujhe to aisa hi do
// ki aap iss tareh se hi kaam karwao mujh se
// truelength ( console.log(myName.truelength) )
// ab isne kaha (run kara in terminal)
// truelength to kuch hai hi nahi (see o/p)

// o/p undefined

// ... ab isne kaha (run kara in terminal)
// truelength to kuch hai hi nahi (see o/p , undefined)
// yeh to undefined hai (see o/p , undefined)

// ab kuch log kahenge ki sir yeh (ek) kaam karo
// yeh kaam to aap aise kar sakte the
// ki aap kar do ek kaam karo pehle iske saath 
// laga do aap ek trim function

// let myName = "hitesh     "

// console.log(myName.trim())

// likh liya

// aur uske baad ek laga do aap length

// let myName = "hitesh     "

// console.log(myName.trim().length)

// likh liya

// 29:07

// theek hai yeh ( console.log(myName.trim().length) ) 
// lagane se kaam hoga kya
// are bilkul hoga yeh kaam to
// run in terminal

// o/p 6

// ... are bilkul hoga yeh kaam to
// run in terminal
// Lekin wo low IQ wali baat ho jayegi
// ki samjhana chah raha hu aapko
// ki yeh functionality aap by default
// bake in kaise kar sakte ho har string
// ke saath (29:19)

// kyuki yeh ( let myName = "hitesh     " ) 
// to abhi yahan pe 
// ( console.log(myName.trim().length) ) aya hai
// ( see code )

// Lekin suppose kariye agar iske saath saath ek aur
// hota yahan pe aur yahan pe hota aapka kuch iss
// tareh se ---- "chai     "
// let myName = "chai     "
// aur yahan pe de dete hai -- mychannel
// let mychannel = "chai     "
// 29:31

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trim().length)

// likh liya

// theek hai to agar iss tareh se hota
// tab kya karte , wapas se yeh itna bada
// likhte yeh trim().length
// ( console.log(myName.trim().length) i.e. console.log(mychannel.trim().length) )

// nahi nahi , mujhe to chahiye
// ki jahan pe bhi yeh string ho (as follows)

// ( let myName = "hitesh     "
// let mychannel = "chai     " , see code)

// sari string ke saath by default ek property aa jaye
// jiska naam ho trueLength
// console.log(myName.trueLength)

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength)

// likh liya

// theek hai
// ab kya hum kar sakte hai iss tareh se
// hmm... bada hi interesting hai ki kar sakte
// hai ki nahi , wo dekhne ke liye hume bahut
// sari kahani padhni padegi, theek hai
// to aapko challenge samajh mei aa gaya 
// humare pas kya hai
// 29:53

// iss challenge ko hum rakh lete hai ki
// theek hai iss tareh se hum isko rakh dete hai
// yahan pe ki hume ek method banana hai
// yaad rakhiyega , yeh property ( console.log(myName.trueLength) mei trueLength )
// nahi method chahta hu mai

// to property ( console.log(myName.trueLength) )
// method ( console.log(myName.trueLength()) )
// antar samajhte hai na, haa ji

// to chaliye isko (as follows code ko)
// kar dete hai comment (comment out)

// let myName = "hitesh     " comment out
// let mychannel = "chai     " comment out

// console.log(myName.trueLength) comment out

// likh liya

// 30:05

// ab chalte hai humari ek bahut hi lambi kahani pe
// haa ji yeh kahani thodi si lambi hogi yahan
// par dhairya rakhiye
// aa..., kaafi kuch samjhenge aap iss kahani
// ke andar
// 30:12

// aapki bhi chai rakhiyega saath mei
// kaafi kaam ayegi
// theek hai

// to ab kya karte hai pehle ek array se
// aapki kahani ko shuruaat karte hai
// kyuki array se hi humne dekha tha
// to suppose kariye wo hi myHeros aapke
// pas kahani hai
// let myHeros = []

// aur myHeros humare pas iss bar
// badal gaye hai thode se
// to suppose kariye "thor" le liya
// let myHeros = ["thor"]
// aur, aur kya le sakte hai
// "spiderman" le lete hai
// let myHeros = ["thor", "spiderman"]

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength)


// let myHeros = ["thor", "spiderman"]

// likh liya

// theek hai ji do (2) aapne heros le liye
// aur bhi heros aap le sakte hai
// 30:39

// ab suppose kariye ki mai ek yahan pe
// object bana raha hu, object kaise
// banate hai, isko le lete hai hum heroPower
// let heroPower
// to yeh lijiye ek object bhi bana diya hai
// let heroPower = {

// }

// theek hai abhi tak koi mamla aisa bigda nahi hai
// thor humne liya

// let heroPower = {
//     thor:
// }

// thor ki property hai ki "hammer"

// let heroPower = {
//     thor: "hammer"
// }

// ( thor khud ek property hai jiski value hai hammer )
// theek hai key value pair hai basic si baat hai
// to iss tareh ke objects aap bhi declare kar sakte ho
// koi problem usme hai nahi

// let heroPower = {
//     thor: "hammer",
// }

// spiderman ke saath agar mujhe power attach karni
// hogi to kya karunga "sling" ki power attach kar di

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
// }

// 31:05

// theek hai ji abhi tak koi dikkat wali baat
// hi nahi hai yahan tak to hume sab samajh mei aa raha hai
// ab ek method (function) agar mujhe define karna hai 
// jaise suppose kariye getSpiderPower:
// yeh kaise kar sakta hu

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower:
// }

// to key to mere pas ho gayi hai getSpiderPower
// ab key ki jo value hogi wahan pe mai 
// string ya number kuch inject karne ki jagah
// mai directly wahan pe ek function inject kar sakta hu
// 31:26

// theek hai koi problem nahi hai kar sakte hai
// abhi tak hume allowed hai yeh sab karna

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){

//     }
// }

// aur iske andar maine simply ek console.log
// likh diya hai

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log();
//     }
// }

// ki aur back ticks ke saath likh deta hu
// ki -- Spidy power is 

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is`);
//     }
// }

// aur spiderman ki power access karne ke liye
// kya dena padega -- ${}
// ki spiderman bol dijiye yahan se seedha
// -- ${spiderman}
// ( jaise hi -- ${spiderman} likha to -- ${this.spiderman}
// likha hua aa gaya )

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// spiderman... but iss function ( getSpiderPower: function(){} / let heroPower = {} )
// ko kaise pata ki mai isi ( let heroPower = {} )
// ke bare mei baat kar raha hu
// 31:50

// to jab mai isi ( let heroPower = {} ) ke bare mei baat karunga to
// yahan pe ${this.spiderman} this lagana padega
// 31:54

// theek hai yeh to mamla samajh mei aa chuka hai
// sabhi ko
// theek hai ji ab itna to aapko aa gaya hai
// samajh mei ki theek hai aap iss tareh se
// kar sakte hai
// 32:00



// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// likh liya

// 32:00

// Lekin ab mai chahta hu ki yeh jo heroPower ( let heroPower = {} ) hai
// kya mai kuch aisa kar sakta hu
// ki yeh jo hero hai ( let heroPower = {} )
// suppose kariye heroPower
// heroPower

// kya mere pas koi aisa method access available hai
// heroPower.hitesh()
// 32:14
// ki mat dot hitesh ( heroPower.hitesh() ) kar saku


// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// heroPower.hitesh() 

// likh liya

// hmmm..., bada hi interesting hai yeh to
// question, ki yahan pe agar dot hitesh ( heroPower.hitesh() )
// karoge to kya kuch result ayega
// chaliye ek bar chalke dekh lete hai ki
// jab hum iss tareh se koi bhi object ( let heroPower = {} )
// declare karte hai to yahan pe (browser console) chalte hai

// yeh object humne declare kara 
// ( in browser console yeh array newHero humne declare kara )
// ek object bhi declare kar lete hai
// 32:30
// aa..., suppose kariye isko ( newHero.map ) to hata dete hai
// const test object
// const testObj
// aur yeh lijiye object -- {}
// const testObj = {}
// ( const testObj = {} likh in browser console )

// iske andar ek daal dete hai username
// const testObj = {username}
// ek value dali (username), hazaar value dali
// kya farak padta hai
// const testObj = {username: "hitesh"}
// ek value daal ke

// const testObj = {username: "hitesh"} likh ke enter kiya in browser console
// undefined aya

// to iske ( testObj = {username: "hitesh"} ) andar aapko kuch
// testObj jo hai
// testObj likh ke enter kiya in browser console
// iske andar (testObj dropdown open kiya) koi
// aisa hitesh naam ka koi function hai kya
// yahan pe available
// (testObj dropdown open kiya and check kiya)
// username hai bas ek sirf ( username: "hitesh" )
// 32:50

// iske ( testObj ) prototype (  [[Prototype]]: Object  )
// mei kuch hitesh naam ka available hai kya
// (  [[Prototype]]: Object , open kiya  )
// hmmm..., yahan pe to kuch available hai nahi
// 32:55

// but kya mai meri taraf se inject kar sakta hu
// (but kya mai meri taraf se hitesh naam ka function
// testObj ke andar inject kar sakta hu)
// just humne dekha , kar sakte ho aap directly
// (code editor mei aa gaye)

// to... kar ke dekhein...
// chaliye ji karke dekhte hai aisa ho sakta hai kya
// 33:04

// to iss bar aapne abhi tak dekha tha ki hum har
// cheej kya kar rahe the heroPower.prototype

// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// heroPower.prototype

// heroPower.hitesh()

// likh liya

// nahi nahi nahi nahi
// heroPower.prototype ko backspace kar diya
// mai to chahta hu ki kabhi bhi koi bhi
// agar object bhi declare ho
// to kya karo base uss object ke andar hi declare kar do

// ( browser console mei aa gaye )
// to suppose karo hum yahan pe aye 
// (function array string object null diagram mei aye)
// humne uss object (object , see diagram) ke andar hi 
// kuch extra super power agar daal di to
// function array string (see diagram)
// sab object se hote huye hi to guzar rahe hai (see diagram)
// sabke pas (function array string , see diagram) power aa jani chahiye
// 33:25

// hmmm..., technically to aani chahiye
// chaliye dekhte hai karke
// (code editor mei aa gaye)

// ki agar mai kya karu mujhe pata hai ki
// Object datatype aise access kar sakta hu mai
// Object


// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object

// heroPower.hitesh()

// likh liya

// 33:32

// ... ki agar mai kya karu mujhe pata hai ki
// Object datatype aise access kar sakta hu mai
// Object 
// 33:32
// aa..., mere pas available hai (Object datatype mere pas available hai)

// factory functions bhi available hai yahan pe
// jaise dot create etc yeh sab hote hai
// Object.create
// haa factory functions bolte hai inko ( Object.create mei create ko )
// isse jada kuch bhi nahi hai isme
// factory function matlab uska ( Object.create mei Object ka )
// by default function jisko create karne ke liye use aata hai
// (hover over create in Object.create)
// 33:44

// (Object.create mei .create ko backspace kar diya)
// Object
// theek hai to Object hai mere pas
// Object
// iska (Object ka) prototype bhi access hai mere pas
// Object.prototype
// theek hai ji hota hi hai aapke pas
// 33:49
// aur uske andar aap laga do ek method hitesh
// Object.prototype.hitesh

// theek hai ji ab yeh function kya kehta hai ki
// yeh lijiye function aa gaya hai humare pas
// aur yeh lijiye
// Object.prototype.hitesh = function(){

// }

// ab yeh function karta kya hai kuch nahi
// -- hitesh is present in all object
// theek hai ji yeh bhi dekh lete hai
// to bolta hai -- hitesh is present in all objects
// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }



// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// heroPower.hitesh()

// likh liya

// theek hai ji
// to ab to technically kyuki heroPower 
// ( heroPower.hitesh() , mei heroPower )
// bhi kya hai kahan se aya hai
// object se hi to aya hai
// yeh ( let heroPower = {} ) object hi to hai
// (34:18)

// to technically iske pas ( let heroPower = {} )
// available hona chahiye
// ( technically iske pas ( let heroPower = {} ) 
// hitesh function ( Object.prototype.hitesh = function(){} ) hona chahiye )
// haa ji hona to chahiye
// dekh lete hai, hai ki nahi
// wo abhi pata lag jayega

// run in terminal

// o/p hitesh is present in all objects

// to haa ji -- hitesh is present in all objects
// (see o/p)
// badi interesting baat hai yeh to
// 34:34
// achha abhi maine just ek diagram mei bataya
// (see diagram -- function array string object null)
// ki almost sabhi cheejein object se hoti hui jati hai
// (see diagram)
// aur fir object ka koi aur super prototype
// nahi hota hai wahan pe (see null in diagram)

// but array (see diagram) bhi to abhi aapne bola tha ki
// yeh (array, see diagram) bhi to object se hi jayega (see diagram)
// aisa hai kya... , dekh lete hai
// (code editor mei aa gaye)

// to yahan pe ek array declare kar hi rakha hai aapne
// myHeros naam ka ( let myHeros = ["thor", "spiderman"] )
// to..., theory ke hisab se to
// ( let heroPower = {} dropdown close kar diya )
// aapke myHeros ( let myHeros = ["thor", "spiderman"] )
// ke pas bhi yeh hitesh
// ( heroPower.hitesh() / Object.prototype.hitesh = function(){} )
// wali power honi chahiye
// 34:58

// to dekh lete hai
// isko ( heroPower.hitesh() ) to kar dete hai comment
// ( comment out ) kyuki iska ( heroPower.hitesh() )
// to pata lag gaya hai
// aur yeh jo myHeros hai ( let myHeros = ["thor", "spiderman"] )
// myHeros
// dekh lete hai iske pas bhi yeh hitesh wali power available hai kya
// ya function available hai kya ( Object.prototype.hitesh = function(){} )
// myHeros.hitesh()
// yeh bhi dekh lete hai koi problem hi nahi hai
// 35:09

// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// heroPower.hitesh() commented out
// myHeros.hitesh()

// likh liya

// abhi ek bar aur check kar lete hai clean karte
// hai (terminal clean) , run karte hai

// o/p hitesh is present in all objects

// haa ji yeh to baat sahi nikli (see o/p)
// ki aapne prototype... ( Object.prototype.hitesh = function(){} )
// to aapne kiya kya yahan pe 
// (function array string object null diagram mei aa gaye)
// aapne bada hi interesting kaam kiya
// aapne seedha top level ki heirarchy access kar li (object in diagram)
// aur bola ki -- object, aapke andar (object ko bola ki aapke ke andar)
// ek kaam karta hu ek nayi property add kar deta hu
// aur iss property ko aap access kar sakte hai
// (35:29)

// theek hai to array (see diagram) ke pas bhi property chali gayi
// string (see diagram) ke pas bhi property chali gayi
// sabke pas hi chali gayi
// (code editor mei aa gaye)

// haa ji theory mei to yeh hi hai
// aur hai bhi yeh hi actually mei
// ki aapne sabhi ko yeh power de di
// theek hai ji yahan tak to baat theek hai

// Lekin ab mai kya chahta hu ek aur test karna chahta hu
// ki agar mai power ( Object.prototype.hitesh = function(){} ) 
// sirf array ( let myHeros = ["thor", "spiderman"] ) ko du
// to kya yeh power ( Object.prototype.hitesh = function(){} ) 
// object (see function array string object null)
// ke pass bhi by default chali jati hai

// hmmm..., dekhiye prototype ka kya hai yahan (see array in diagram)
// power milegi to theek hai
// nahi to usko (power ko) yahan (see object in diagram)
// check karega (prototype check karega)
// theek hai agar nahi mili to aur upar (see null in diagram)
// check karta jayega

// but agar power aapne inject hi yahin (see array in diagram)
// kari hai, to kya wo power object (see object in diagram)
// ke pas bhi honi chahiye
// 36:03
// yeh bada interesting question hai chaliye
// karke dekh lete hai
// (code editor mei aa gaye)

// array ke andar kuch bhi inject karna hai to aapko
// pata hai aap kya kar sakte ho -- Array
// Array
// dot prototype
// Array.prototype
// aur dot isko (new power / function example) heyHitesh de dete hai
// Array.prototype.heyHitesh
// arrayHitesh de dete hai
// ya heyHitesh de dete hai
// Array.prototype.heyHitesh

// isko bhi ek function de dete hai
// Array.prototype.heyHitesh = function(){

// }
// aur isko function ko bol dete hai kuch aur
// to console.log() kar lete hai yahan pe
// Array.prototype.heyHitesh = function(){
//     console.log();
// }
// aur console.log bol dete hai -- ``
// suppose kariye ki -- `Hitesh says hello`
// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }
// 36:29


// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// heroPower.hitesh() commented out
// myHeros.hitesh()

// likh liya




// theek hai ji yeh bol diya hai
// ab technically to kya hai ki aapka jo
// yeh myHeros hai ( let myHeros = ["thor", "spiderman"] )
// myHeros
// iske pas to access hona chahiye heyHitesh ka
// myHeros.heyHitesh()
// theek hai ji

// Lekin jo humara heroPower hai ( let heroPower = {} )
// myHeros.heyHitesh()
// heroPower
// uske pas yeh heyHitesh ka access nahi hona chahiye
// myHeros.heyHitesh()
// heroPower.heyHitesh()
// theory mei to atleast
// kyuki obvious si baat hai
// aa..., down the line (see diagram) chain
// neeche wale (see diagram) ko to access de diya hai
// upar wale (see diagram) ko apne aap thodi na mil jata hai
// Lekin agar (36:51) top level (see diagram) pe hi de diya hai
// to sab wahin se pas hoke jaa rahe hai (see diagram)
// to unko sabko mil jata hai (see diagram)



// let myName = "hitesh     " commented out
// let mychannel = "chai     " commented out

// console.log(myName.trueLength) commented out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// heroPower.hitesh() commented out
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// likh liya


// chaliye run karke dekh lete hai
// abhi errors se pata lag jayega kya kya ho raha hai
// ( run in terminal )

// o/p hitesh is present in all objects
// Hitesh says hello
// C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\Prototype.js:30
// heroPower.heyHitesh()
//           ^

// TypeError: heroPower.heyHitesh is not a function
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\Prototype.js:30:11)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0

// haa ek error jo expected thi
// ki yeh jo heroPower hai ( TypeError: heroPower.heyHitesh is not a function , see o/p )
// ( let heroPower = {} ) ( heroPower.heyHitesh() , see o/p and see code)
// iske pas hitesh (heyHitesh) ( Array.prototype.heyHitesh = function(){} )
// ka access to nahi hai , heyHitesh ka access to nahi hai
// theek hai ji maan li aapki baat
// 37:07

// yahan pe ( heroPower.heyHitesh() ) 
// aapka code fail ho gaya hai 
// ( heroPower.heyHitesh() ko comment out kar diya )
// to isko humne save karke rakh liya hai
// sorry comment (comment out) karke rakh liya hai



// let myName = "hitesh     " comment out
// let mychannel = "chai     " comment out

// console.log(myName.trueLength) comment out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// heroPower.hitesh() comment out
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() comment out

// likh liya

// run in terminal

// o/p hitesh is present in all objects
// Hitesh says hello

// ab yahan pe -- Hitesh says hello (see o/p)
// haa ji array ke pas to power hai
// ( Array.prototype.heyHitesh = function(){} )
// ( let myHeros = ["thor", "spiderman"] )
// ( myHeros.heyHitesh() )

// Lekin yeh dhyan rakhiyega ki aapne
// array ( let myHeros = ["thor", "spiderman"] ) 
// ko hi power ( Array.prototype.heyHitesh = function(){} ) di hai
// (function array string object null diagram mei aa gaye)
// aise function (see diagram) string (see diagram)
// inn sabke pas power ( Array.prototype.heyHitesh = function(){} )
// nahi ayi hai (see diagram)
// yeh bhai bhai (function , array , string see diagram) hai 
// aise aapas mei share nahi karte
// (aise apas mei power share nahi karte)

// Lekin haa jis path (Array ---> Object---> Null , see diagram) se hote huye jayenge
// uss path ko hi power de denge
// to obvious si baat hai yeh sab hoga
// (37:26)
// (code editor mei aa gaye)

// achha ab yahan pe humne path ki power
// ki baat to kar li hai
// ek choti si baat aur kar lete hai hum yahan pe
// thodi si inheritance ki
// inheritance
// yeh bhi bada hi basic sa easy sa topic hai
// inheritance comment out

// aapke thoda sa share kar deta hu to aapko
// thoda sa aur idea mil jayega
// aa..., bada hi basic hai aisa kuch khaas isme hai nahi
// but aapko ek hi bar mei samajh mei aa jayega

// to suppose kariye maine ek teacher liya
// const Teacher
// yeh lijiye ek object hai teacher
// const Teacher = {

// }
// aur isko ek power di ya functionality de di
// ki aap teacher ho to video bana sakte ho 
// vaise jaruri nahi ki sare teacher hai to video hi
// bana sakein
// ya jo sare log video banate hai wo bhi teacher ho
// to but theek hai
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// aapne diya makeVideo , aur true usko de diya
// 38:02
// ab aapko chahiye ki ek teaching assistant bhi ho
// kyuki usually lagta hai agar professional level mei
// padha rahe ho to teaching support lagta hai
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport

// yeh lijiye teaching support
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {

// }

// iska ( const TeachingSupport = {} ) kaam hai
// ki mujhe pehle batao ki aap ho
// ki nahi ho yahan pe
// to available ho gaya,  
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable:
// }

// theek hai isAvailable: abhi kya hai
// abhi to hire hi nahi hua ( isAvailable: false )
// theek hai to false hai
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// 38:18

// aur bhi do (2) properties hume lagegi iss example ko
// samajhne ke liye but isi tareh ki hum banate jayenge
// to... TA Support bhi chahiye hota hai jo questions etc
// ke answer kare, to TASupport , yeh lijiye
// support ( TASupport ) bhi ek object le liya
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {

// }

// ab pehle ke time mei aise hi hota tha
// koi classes etc to hoti nahi thi
// to object hi banate the har cheej ka
// aur aise hi object ke andar hi
// properties (variables i.e. key value pair)  ,
// functions (methods) add karte the
// to yeh thoda purane style ka code hai
// to kum (less) jagah milega aapko
// 38:42

// to TASupport ka kaam kya hai
// ek to assignment banana
// makeAssignment:
// theek hai aur mere (sir ke) saath mei hai to 
// JS ke assignment banane padenge
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment'
// }

// theek hai ji aur kya kya property de sakte hai
// fullTime hai ki nahi yeh bhi pooch lete hai
// ki aap fullTime ho ya partTime ho
// to abhi to mere pas fullTime true hai
// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true
// }

// theek hai
// ab kya hai itna kaam to theek tha
// Lekin jaise ki maine aapko bataya
// har object apne aap mei ek alag instance hai
// to aisa nahi hai ki aapas mei koi cheejein
// share kar rahe hai
// sabki alag alag properties (variables i.e. key value pair) hai
// default properties to sabke pas hai object ki
// jaise dot length (Object.length)
// ya jo bhi properties hoti hai
// 39:14
// aa..., proto etc (Object.prototype)

// Lekin humne yeh dekha abhi bhi
// ki kuch default properties to hai humare pas
// (browser console mei aa gaye testObj example)
// (see default properties in [[Prototype]]: Object , dropdown)
// but aisa to nahi hai na ki aapne
// ( [[Prototype]]: Object , dropdown close kar diya)
// kisi testObj ke andar abhi yeh rakha hitesh
// ( {username: 'hitesh'} in testObj dropdown )
// 39:25
// to ab sare object ko hitesh mil gaya hai wahan pe
// username mei
// (means sare object ke username mei hitesh nahi mila)
// nahi nahi aisa to nahi hua sabko alag alag milta hai

// (code editor mei aa gaye)
// Lekin koi aisi situation hai
// jahan pe aap information exchange karna chahte ho ki
// inn dono object ko aapas mei hum link karte hai
// 39:36

// to abhi humne dekha aisi cheejein link karne ke liye
// humare pas prototype hai 
// ( Object.prototype.hitesh = function(){} / Array.prototype.heyHitesh = function(){} , see code)
// to haa ji prototype hai
// 39:40

// ab pehle ke time pe kya hota tha
// ki actually mei isko hum ek property
// hi maante the
// abhi bhi yeh property hi hai
// (browser console mei aa gaye testObj example)
// agar aap isko open karke dekhoge
// ( [[Prototype]]: Object , dropdown open kar liya)
// to aapko dikh jayegi yahan pe
// actually mei array mei jada...
// yeh rahi (scroll down and see)
// yeh jo aapke pas property hai
// underscore underscore proto i.e. __proto
// ( __proto__: (...) , see under [[Prototype]]: Object , dropdown )
// yeh actually mei yeh hi same property hai jo yahan pe
// (browser console mei under any Object dropdown / [[Prototype]]: Object , dropdown) 
// available hoti hai
// 39:56

// to isko
// ( __proto__: (...) , see under [[Prototype]]: Object , dropdown , testObj example, see browser console)
// aap directly access kar sakte ho
// dot notation se bhi (Object.__proto__)
// (code edito mei aa gaye)
// aur chaho to ek special keyword hai
// to usi ko (dot notation ko) over write karne wala hai
// but thoda sa difficult hai dekhiye
// yeh mai maanta hu ki yeh jo syntax hai
// bahut hi weird hai
// underscore underscore
// __
// fir proto
// __proto
// fir underscore underscore
// __proto__

// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true
//     __proto__
// }

// pata nahi kyu rakha gaya hai
// (pata nahi kyu rakha gaya hai naya syntax i.e. __proto__)
// kaise rakha gaya (40:13)
// samajhne mei difficult hota hai
// koi sirf agar dekh hi raha hai to
// usko yeh hi yaad nahi rehta ki
// do (2) underscore hai ( __proto__ )
// to yeh thoda sa problem hai

// to yahan pe ( __proto__ ) aap colon laga ke
// __proto__:
// aur bol sakte ho ki dekho ek kaam karo
// aapka jo prototype ( __proto__: ) hai na
// (40:24)
// usko reference kar do humare teaching support se bhi
// ( const TeachingSupport = {} )
// kyuki jo yeh TASupport hai na yeh TeachingSupport
// jitna iski (TeachingSupport) yeh sari properties bhi aap (TASupport) borrow kar lo
// (means aap yani TASupport, TeachingSupport ki properties bhi 
// borrow kar lo)
// __proto__: TeachingSupport
// (40:30)

// to jaise hi ab aapne yeh ( __proto__: TeachingSupport ) kara
// bas ho gaya aapka kaam 
// ab aap TASupport ( const TASupport = {} ) se jo bhi aap further
// new karke jaise bhi object banaoge
// to uske (jo new object banayenge) pas aapko yeh ( const TASupport = {} / const TeachingSupport = {} )
// mil jayega access
// ( kyuki humne __proto__: TeachingSupport kiya hai to const TASupport = {} / const TeachingSupport = {}
// ka access hume mil jayega )

// achha aisa itna hi nahi hai ki aisa nahi hai ki 
// har bar andar hi jake karna hai , 
// ( means har bar const TASupport = {} (or any object) ke andar hi jake karna hai )
// aap iska (TASupport / TeachingSupport / any object) access bahar bhi le sakte ho
// ( const TASupport = {} ke bahar bhi access le sakte ho )
// jaise humare pas yeh Teacher bhi to hai
// ( const Teacher = {} )
// 40:47

// inheritance comment out


// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher

// to Teacher ke bhi aap wapas se dot laga ke
// Teacher.
// wo hi fir , fir se same kahani underscore underscore
// Teacher.__
// proto
// Teacher.__proto
// underscore underscore
// Teacher.__proto__

// aur isko ( Teacher.__proto__ ) bana ke aap
// Teacher.__proto__ = 
// aur bhi access etc properties ka de sakte ho
// to suppose kariye ek user bhi bana hi lete hai
// kyuki har ek aadmi ek user to hoga hi hoga
// 41:01
// to const User = { }

// inheritance comment out

// const User = {

// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ =


// aur user ke andar kuch properties daal dete hai
// kyuki login etc ke liye to name isko (const User = {}) bhi chahiyega
// to isko bol dete hai jo bhi username
// chai de dete hai iska naam, sabka naam chai hai aaj

// const User = {
//     name: "chai",
// }

// theek hai aur email bhi de dete hai
// to yeh lijiye email hai iska chai@google.com
// haa ji humare chai wale log google mei kaam kar rahe hai

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// theek hai ji lo to yeh ho gaya
// to teacher ko bhi mujhe prototype
// yahan pe assign karna hai
// ( Teacher.__proto__ = i.e. const Teacher = {} ko )
// to Teacher bhi User ( const User = {} ) 
// ki sari properties access kar sakta hai
// Teacher.__proto__ = User
// 41:27


// inheritance comment out

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// theek hai ji , yeh hi inheritance hai
// yeh hi prototypal inheritance hai
// ki aap kaise kisi aur ki properties ko
// access kar sakte ho
// to yeh hi humara prototypal inheritance hai
// 41:37

// achha yeh wala jo approach hai na yeh thoda sa
// outdated hai, aapko naye code bases mei yeh aisi
// approaches nahi milegi ( Teacher.__proto__ = User , __proto__: TeachingSupport , see code)
// but aisa nahi hai ki hoti hi nahi hai
// approaches milti hai
// aisa bhi (just above code jaisa) kayi jagah
// aapko codebase etc mei milega

// 41:49



// let myName = "hitesh     " comment out
// let mychannel = "chai     " comment out

// console.log(myName.trueLength) comment out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// heroPower.hitesh() comment out
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() comment out

// inheritance comment out

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// likh liya




// Lekin hume jo nayi approach hai
// hume jo naye object ke andar code mei (ke) andar milegi
// wo hai humara modern syntax
// modern syntax comment out

// yeh wala (modern syntax) abhi sab log yeh hi use karte hai
// mai bhi yeh hi use karta hu
// (41:58)
// seedha access karo aapke Object ko
// modern syntax comment out
// Object

// Object ke andar aapko dikhega 
// (browser console mei aa gaye testObj example, [[Prototype]]: Object dropdown mei)
// yahan pe ab nayi properties aapke pas aa gayi hai
// propertyIsEnumerable
// ( propertyIsEnumerable: ƒ propertyIsEnumerable() )
// isPrototypeOf
// ( isPrototypeOf: ƒ isPrototypeOf() )
// hasOwnProperty
// ( hasOwnProperty: ƒ hasOwnProperty() )
// yeh sara ka sara ( [[Prototype]]: Object , dropdown mei of testObj example in browser console)
// aapka modern structure hi hai yahan pe (modern syntax)

// theek hai jitni bhi aapko mil rahi hai
// aapke pas setters 
// (set __proto__: ƒ __proto__())
// getters
// (get __proto__: ƒ __proto__())
// sab kuch hai

// (code editor mei aa gaye)
// to ek special hume yahan pe method diya gaya hai
// jiska naam hai setPrototypeOf
// modern syntax comment out
// Object.setPrototypeOf

// yeh ( setPrototypeOf method ) kya karta hai (hover over setPrototypeOf)
// sets the prototype of a specified object o (alphabet letter)
// to object proto or null.
// Basically behind the scene wo hi underscore underscore proto
// ( __proto__: TeachingSupport / Teacher.__proto__ = User ) chal raha hai
// but yeh ( setPrototypeOf method ) thoda sa syntax achha hai
// isliye use karte hai
// 42:30
// aur (ab) aapko internal detail bhi pata hai
// modern syntax comment out
// Object.setPrototypeOf()

// to yahan pe ( Object.setPrototypeOf() mei in () )
// do (2) aapse leta hai ki (2 arguments leta hai, hover and see)
// ki kiski property kiske andar hume inject karni hai
// to obvious si baat hai lijiye hum kya karte hai
// TeachingSupport ko access de dete hai
// ki aap ( TeachingSupport ) sari property access kar lo
// modern syntax comment out
// Object.setPrototypeOf(TeachingSupport,)
// Teacher ki bhi
// modern syntax comment out
// Object.setPrototypeOf(TeachingSupport, Teacher)
// 42:42

// theek hai to Teacher 
// ( Object.setPrototypeOf(TeachingSupport, Teacher) mei Teacher )
// ki property yeh 
// ( Object.setPrototypeOf(TeachingSupport, Teacher) mei TeachingSupport ) 
// access kar leta hai
// 42:45
// to theek hai yeh hi aapka prototypal inheritance hai
// ki kis tareh ( Object.setPrototypeOf(TeachingSupport, Teacher) ) 
// se aap khud bhi inheritance karwa sakte ho

// classes ke andar thode se keyword alag ho jate hai
// extend etc but behind the scene wo hi prototype hi
// chal raha hai , syntactic sugar hai , 
// aur jadatar senior developers ko bhi nahi pata hai ki aisa kuch
// ho raha hai, bade bade code likh rahe hai wo bhi
// aur chal bhi rahe hai achhe, par koi dikkat wali
// baat hi nahi hai
// 43:03

// ab jisko andar ghus ke itna PHD karna hai wo to
// kare baki kyu hi dekhe itna sab



// let myName = "hitesh     " comment out
// let mychannel = "chai     " comment out

// console.log(myName.trueLength) comment out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// heroPower.hitesh() comment out
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() comment out

// inheritance comment out

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// modern syntax comment out
// Object.setPrototypeOf(TeachingSupport, Teacher)

// likh liya

// chaliye yeh hi sab to aapko aa gaya
// samajh mei , 
// ab yeh sara jab maine inheritance bataya 
// ( inheritance comment out and below content under inheritance heading )
// usse ( inheritance comment out ) pehle
// hi shayad aapko idea lag gaya hoga
// ki hum jo problem solve karna chah
// rahe the yahan pe wo kaise kar sakte hai
// 43:16 

// to basically mai chah kya raha tha ki
// string (as follows)
// ( let myName = "hitesh     "
//   let mychannel = "chai     "  , see code)
// ke andar mujhe ek property mil jaye direct
// hi truelength ( console.log(myName.trueLength) , see code )
// method (function) actually mei property (variable i.e. key value pair)
// nahi method

// property bhi le sakte hai ki ek property bhi add kar do
// method bhi add kar do
// method wo uss property ko update kar de
// 43:27
// theek hai wo bhi ho sakta hai
// but mai chahta hu directly mujhe method mil jaye
// yahan pe ( console.log(myName.trueLength) )

// to abhi aapko shayad idea lag gaya hoga kaise kare
// to sari strings (as follows)
// ( let myName = "hitesh     "
//   let mychannel = "chai     " , see code )
// ko wo sari superpower dene ke liye
// kya karna padega

// to suppose kariye let yahan pe ek hum le lete hai
// anotherUsername
// let anotherUsername =
// aur isko le lete hai iss bar "ChaiAurCode"
// let anotherUsername = "ChaiAurCode"
// aur bahut sare spaces ke saath
// let anotherUsername = "ChaiAurCode     "
// theek hai ji
// ab iske ( let anotherUsername = "ChaiAurCode     " )
// hi saath hume karna hai
// ( means let anotherUsername = "ChaiAurCode     " string hai
// aur iske saath hi hume truelength type method jaisa kuch karna hai )

// to yeh lijiye seedha uthayiye string ko
// let anotherUsername = "ChaiAurCode     "

// String
// ki theek hai ji string aapki seedhe prototype ko access
// hum kar sakte hai
// kyuki knowledge hai ab hume
// let anotherUsername = "ChaiAurCode     "

// String.prototype
// aur iske ( String.prototype ) baad ek aur property (method i.e. function) 
// inject kar dete hai
// iske andar trueLength
// property nahi , method hi inject karenge
// yeh lijiye kar diya
// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength

// ab to aapko pata hi hai kya karna hai 
// uske ( String.prototype.trueLength ) andar
// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function
// basic andar ( String.prototype.trueLength = function , mei function ke andar ) 
// functionality to jo bhi hogi
// wo hogi hi usko to avoid nahi kar sakte 
// but abstraction to de hi sakte hai
// 44:15

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){

// }
// to sabse important cheej, ab yahan pe jinko thoda bahut
// this (this keyword) ke andar abhi bhi confusion tha na
// wo yahan ( String.prototype.trueLength = function(){} mei inside function ke {} )
// se dhoor kar lo
// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log();
// }

// seedha bolo ki actually mei yeh back ticks diye
// console.log(``)
// dollar sign lo
// console.log(`${}`)
// aur bolo this
// console.log(`${this}`)
// dot
// console.log(`${this.}`)
// aur yahan pe access kar lo 
// seedha ki this.name actually mei hai kya
// kyuki name property wahan pe aa rahi hai 
// ( let anotherUsername = "ChaiAurCode     " ) 
// to this.name hum yahan pe le lete hai by default
// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this.name}`);
// }

// baki aap chaho to ek aur console.log
// bhi kar sakte ho ki sirf this batao
// mujhe yahan pe ( i.e. console.log(`${this}`) )
// this ka reference kya hai
// to pehle this ka reference le lenge ( i.e. console.log(`${this}`) )
// fir this.name le lenge ( console.log(`${this.name}`); )
// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
// }

// 44:45
// theek hai actually mei yeh name ( console.log(`${this.name}`); ) 
// bhi kayi bar aapne dekha hoga
// aapke browser's editor mei cut hoke aata hai to
// wo bhi mai batata hu kaise aata hai
// 44:51

// theek hai ab main kaam bhi to kar le
// console.log() ke andar
// console.log()
// to back ticks le lete hai
// console.log(``)
// aur mai chahta tha ki -- True Length is
// mere ko poora message chahiye tha
// -- True Length is:
// console.log(`True Length is:`)
// aur uske baad kaam to dekhiye wo hi hoga
// jo pehle humne declare kiya tha
// console.log(`True Length is: ${}`)
// ki yeh this se access kar lo jo bhi aa raha hai
// console.log(`True Length is: ${this}`)
// (means this se access kar lo jo bhi this se aa raha hai 
// -- console.log(`True Length is: ${this}`))

// usko (jo bhi this se aa raha hai) pehle trim kar do
// -- console.log(`True Length is: ${this.trim}`))
// jo bhi call kar raha hai
// -- console.log(`True Length is: ${this.trim()}`))
// uske baad yeh dot length wali property access kar lo
// -- console.log(`True Length is: ${this.trim().length}`))

// 45:15
// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`True Length is: ${this.trim().length}`)
// }

// theek hai
// 45:16
// to karke dekh lete hai ab
// to yeh humara jo anotherUsername hai
// anotherUsername
// iske andar
// anotherUsername.
// trueLength wali property (property nahi method / function)
// aa jani chahiye
// yeh lijiye trueLength
// anotherUsername.trueLength
// aur yeh run karaya
// anotherUsername.trueLength()
// ( trueLength function hai to usko run / execute karaya -- trueLength() )
// 45:27

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`True Length is: ${this.trim().length}`)
// }

// anotherUsername.trueLength()

// to theek hai aa..., 
// kahin kuch print kara rahe hai kya hum aur kuch bhi
// console.log yahan pe 
// ( myHeros.hitesh()
// myHeros.heyHitesh() , see code)
// print ho rahe hai
// inko bhi hata dete hai

// to as follows
// ( myHeros.hitesh()
// myHeros.heyHitesh() , see code)
// ko comment out kar diya
// taki actually mei ek hi response aye
// humare pas yeh ( anotherUsername.trueLength() , see code)




// let myName = "hitesh     " comment out
// let mychannel = "chai     " comment out

// console.log(myName.trueLength) comment out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// heroPower.hitesh() comment out
// myHeros.hitesh() comment out
// myHeros.heyHitesh() comment out
// heroPower.heyHitesh() comment out

// inheritance comment out

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// modern syntax comment out
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`True Length is: ${this.trim().length}`)
// }

// anotherUsername.trueLength()

// likh liya

// theek hai ji chaliye isko run karke dekhte hai ab
// kya mamla aa raha hai humare saamne
// (run in terminal)

// o/p ChaiAurCode     
// undefined
// True Length is: 11

// to humne kaha -- True Length is: 11 (see o/p)
// humare pas aa raha hai
// theek hai
// 45:44

// achha ab ek cheej aap dekhiyega
// aa..., yahan pe mere pas aa raha hai
// undefined (see o/p) 
// aur yeh bhi ( ChaiAurCode , see o/p )

// achha kaafi cheejein aur bhi aa rahi hai 
// to obvious si baat hai isko ( console.log(`${this}`); )
// ek bar comment (comment out) kar lete hai
// aur ek ek karke cheejon ko samajhte hai
// kya kya aa raha hai

// let myName = "hitesh     " comment out
// let mychannel = "chai     " comment out

// console.log(myName.trueLength) comment out


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// heroPower.hitesh() comment out
// myHeros.hitesh() comment out
// myHeros.heyHitesh() comment out
// heroPower.heyHitesh() comment out

// inheritance comment out

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// modern syntax comment out
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`); comment out
//     console.log(`${this.name}`);
//     console.log(`True Length is: ${this.trim().length}`)
// }

// anotherUsername.trueLength()

// likh liya

// (run in terminal)

// o/p undefined
// True Length is: 11

// to yahan pe dekhiye mere pas aya undefined (see o/p)
// obvious si baat hai this.name ( console.log(`${this.name}`); )
// ka humare pas access nahi tha isliye
// pehle ke time pe hota tha
// abhi isko ( console.log(`${this.name}`); ) chord
// dijiye, chaliye mai isko ( console.log(`${this.name}`); )
// hata hi deta hu , ispe charcha nahi karenge
// ( console.log(`${this.name}`); ko backspace kar diya )
// obsolete property hai vaise bhi
// 46:04