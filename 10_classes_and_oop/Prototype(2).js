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
// Lekin agar (36:51)

