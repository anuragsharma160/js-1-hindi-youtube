// 6:06

// ab mai aapko kayi tareh ke yahan pe promises bana ke
// dikhaunga ki kis tareh se hote hai

// achha jadatar aap kya dekhenge ki promises aap consume
// hi kar rahe hai, banate bhi hai promises create bhi hote
// hai , lekin jadatar operation mei aap dekhenge ki promises
// sirf aap consume karte hai

// jaise ki sabse hi common example mai delete kar dunga
// isko , isko hum baad mei padhenge ki fetch kara aapne

// fetch()

// likh liya promises(2).js file mei

// ...jaise ki sabse hi common example mai delete kar dunga
// isko , isko hum baad mei padhenge ki fetch kara aapne koi
// web request hai to url hai jaise suppose karo
// -- https://something.com

// fetch('https://something.com')

// likh liya promises(2).js file mei

// jo bhi aap wahan pe (fetch() mei) access kar rahe the (6:33)
// ( fetch('https://somthjing.com') )

// uske baad aapko seedha hi bata dete hai ki agar response
// ayega to dot then (.then()) mei aa jayega

// fetch('https://something.com').then()

// likh liya promises(2).js file mei

// aur agar koi error hoga to dot catch (.catch())
// mei aa jayega

// fetch('https://something.com').then().catch()

// likh liya promises(2).js file mei

// aur thoda achha tutorial hai to bol dega ki
// dot finally (.finallay()) mei sab kuch aa jata hai

// fetch('https://something.com').then().catch().finally()

// likh liya promises(2).js file mei

// final to run hota hi hota hai
// 6:45

// aur yeh hi aapke fetch hai, yeh hi aapke promises hai
// aa... nahi aisa nahi hota hai , actually mei promises
// ko consume karne se pehle aapko samajhna padega ki
// promises ko consume nahi , promises ko actually mei
// banaya kaise jaata hai 

// jab tak aap banana nahi seekhoge tab tak achhe se promises
// nahi ayega (7:03)

// to isko ( fetch('https://something.com').then().catch().finally() )
// karte hai remove 
// (isko ( fetch('https://something.com').then().catch().finally() )
// backspace kar diya )

// to ab hum kayi tareh ke promises banayenge to mai
// saare variables ke naam promiseOne, promiseTwo
// iss tareh se deta jaunga taki aapko samajhne mei
// aasaani rahe

// to ab aa gaye humare pas promise number one
// const promiseOne

// const promiseOne 

// likh liya promises(2).js file mei

// 7:13

// achha to promises bante kaise hai, to jaisa ki humne 
// dekha yahan pe (promise mdn), promises banne ke liye
// kya chahiye, 

// achha yeh diagram 
// (white background block diagram in promise mdn)
// bahut achha hai ki 
// promise ya to fulfill hota hai (see block diagram arrow)
// ya reject hota hai (see block diagram arrow)
// yeh mai pehle aapko samjha du uske baad aapko
// jada easily samajh mei ayega, 

// to promise hota kya hai ki actually mei apne aap
// mei ek object hai (see first line under Promise heading)

// yahan pe bol raha hai use promises (Using promises) yeh
// padh lijiye (see second line under Promise heading)
// to aapko samajh mei ayega, 
// (click on Using promises link)


// yahan pe ( Using promises link webpage ) aapko jada nahi padhna hai
// sirf itna sa dekhna hai ki -- promise jo hai ek object hai
// (read first line under Using promises heading)
// ( A Promise is an object representing the eventual completion )
// representing eventual completion,
// to yahan pe yeh jo object word likha hua hai na
// (read first line under Using promises heading)
// ( A Promise is an object representing the eventual completion )
// yeh hi (object word) sabse humare liye important hai ki
// object hai yeh (promise) (7:43)

// achha ab javascript mei agar aapko object ka ek aur instance
// chahiye to wo same hai almost jaise aap class ka instance
// lete hai to new keyword se aapko ek naya instance mil jata hai

// const promiseOne = new

// likh liya promises(2).js file mei

// ab classes to hai nahi yahan pe, 
// aa... classes hai keyword hai but uska (classes keyword ka)
// bhi bataunga aapko internal ki behind the scene kya chalta hai
// javascript mei classes ka but theek hai yeh new keyword humne
// dekh liya ( const promiseOne = new )

// ab promise aapko directly ek object milta hai 
// (const promiseOne = new Promise)
// jaise aapko pata hai ki aap new Array
// ( const promiseOne = new Array) bhi kar sakte ho
// vaise hi usi tareh se aapko new Promise 
// (const promiseOne = new Promise) bhi milta hai
// javascript ke andar (8:08)

// const promiseOne = new Promise

// likh liya promises(2).js file mei

// achha yeh Promises (Promise) 
// ( const promiseOne = new Promise )
// humesha nahi milta tha, yeh abhi hi milne laga hai
// especially i think ES6 ke andar yeh achhe se introduce
// hua tha,

// ES5 mei to nahi tha i think ES4 ka to mujhe achhe se 
// pata nahi tha, to iske bare mei thodi si
// history aap obvious si baat hai jaan na chaoge to aapko
// leke jata hu purane daur pe (promise mdn pe aa gaye)
// (wapas code editor mei aa gaye) 
// ki haa chaliye ek bar isko complete to kar hi lete hai
// ki yeh aapka promise ho gaya that's it ( new Promise() )

// const promiseOne = new Promise()

// likh liya promises(2).js file mei

// itna hi kaam hai yeh aapne paranthesis
// ( const promiseOne = new Promise() )
// lagaya that's it promise aapka ban gaya hai

// lekin ab chalte hai hum thodi si history pe kyuki
// asli knowledge to wahin milne wali hai
// (promise mdn pe aa gaye -- Using promises webpage pe) (8:37)

// to dekhiye kya hota tha ki aap dekhiye ek stackoverflow ka
// bada hi achha article hai yahan pe
// ( Are there still reasons to use promise libraries 
// like Q or BlueBird now that we have ES6 promises? stackoverflow [closed] 
// -- in google search and enter)
// Are there still reasons to use promise libraries like Q or BlueBird 
// achha ji promises ke andar yeh Q or BlueBird -- yeh konsi chidiya
// ka naam hai, yeh aap kis cheej ki baat kar rahe hai , aisa bhi
// kuch hota hai kya

// (8:51)

// haa ji aisa bhi hota hai, jab promises humare pas available nahi
// the direct javascript ke andar , tab bhi humara bahut sara kaam
// to asynchronous hota hi tha, aisa to hai nahi ki database
// abhi ES6 ke baad aye hai wo pehle bhi the, to pehle bhi hume
// use karne padte the,

// to uss time pe ya to aap by default async await etc use karte raho
// but promises ka syntax bahut achha tha , bahut saare aur feature 
// milte the (9:12)
// to developers ko lagta tha isko (promise) use karo

// to kuch libraries hoti thi jaise Q aur BlueBird, 
// BlueBird maine (sir ne) bahut use kara hai , mera one of the
// favourite libraries hai, uske through aap core javascript ke andar
// wo saari functionality use kar sakte ho jo bhi aap 
// dot fetch (.fetch()) then (.then()) catch (.catch()) yeh sab use
// karte ho

// to uss time pe imagine kariye ki jab yeh sab tha hi nahi tab aap
// wo functionality use kar sakte the kyuki kisi ne ek aisi library
// bana di

// eventually library bahut appreciate hui aur isko finally integrate
// kar liya gaya pure javascript ke andar ki ab aapko kuch install
// karne ki jarurat nahi hai, yeh library by default aati hai (9:40)

// to yaad rakhiyega thoda sa aisa nahi hai ki har cheej by default
// hi milti hai , ab yahan pe hai,
// to ab inhone khud ne kaha hai ki nahi
// (scroll down in stackoverflow website , just after skyblue box) 
// aa... After Node.js added native support for promises, are there 
// still reasons to use libraries like Q or BlueBird?

// to usne kaha ki nahi nahi ab koi jarurat nahi hai ab nodejs
// ne jab direct hi aapko support de diya hai, aa... to as such koi
// nahi hai 
// (means koi jarurat nahi hai libraries like Q or BlueBird ki after nodejs)

// baki outdated information hai aapko jada jaan ne ki jarurat nahi hai
// ki top 6 reasons (scroll down in stackoverflow website)
// ( So, here are my top 6 reasons to use a more capable Promise library )
// ab sab kuch hai yeh polyfill se leke sab kuch hai aapko koi chinta ki
// jarurat nahi hai (Polyfill point 4 see stackoverflow website)
// (10:05)

// ( https://blog.kuzzle.io/bluebird-vs-native-vs-async/await-state-of-promises-performances-in-2019
// link open kar liya google search bar mei )

// but ab kyuki iski baat aa hi gayi hai BlueBird ki aur Q library
// ki to kayi bar log kya hai performance ko abhi bhi evaluate karte
// hai ki performance kaisa hai BlueBird library kahin abhi bhi
// jada powerful to nahi hai , to as such nahi hai aapne 
// Doxbee etc kayiyon ke benchmark etc dekhoge 
// (see Doxbee benchmark heading in website) 
// (see Promises performances graph)
// to nodejs ke andar (see x axis) jo 
// native promises (Promise Native in graph) lage huye hai 
// unka performance (see tall red bar) abhi bhi
// aa... performance kaafi high hai (10:24)

// memory consumption bhi high hai but 
// (see Promises memory consumption graph) abhi yeh Node.js10,
// 11 bahut purani baatein hum kar rahe hai yahan pe
// (see Node.js 10 heading etc)

// Lekin asli baat to yeh hi hai ki ab aapko inn libraries ki
// jarurat nahi hai (BlueBird aur Q ki)

// agar fir bhi aapko BlueBird inn libraries ka agar dekhna hai
// to github pe abhi bhi available hai 
// (bluebird promise github in google search bar)
// (click on src folder then click on bluebird.js)
// aap chahein to ek bar source code etc check kar sakte hai
// ki kis tareh se pehle inko then ables banaya jaata tha (10:42)
// ( "use strict"; )
// aur inke saath hum libraries etc use karte the 
// (var old to last line)

// 10:45

// aapko yeh code jaan ne ki samajhne ki jarurat nahi hai but
// aapko sirf batana chahta hu ki haa kya kya features hume available
// the , 
// (bluebirdjs.com/docs/getting-started.html open kar liya google mei)
// haa hum npm install ( npm install bluebird ) karke bluebird 
// install kar lete the, require karke ( var Promise = require("bluebird"); )
// aur uske baad hume features milte the

// API Reference bluebird open kar liya google mei
// ( http://bluebirdjs.com/docs/api-reference.html )
// yeh humare kuch feature library thi , hum .then bhi use karte the
// (see .then under Core), spread (.spread), catch (.catch) yeh sab
// aa... bind (.bind) etc ab to bind kum use aata hai (11:03)

// aa... but yeh sab (under Core) hum use karte the 
// aur uss time pe yeh sab chalta tha, abhi bhi kar sakte hai
// but ab jarurat nahi hai kyuki humari library 
// khud itni powerful hai ab, theek hai to yeh to rahi humari history
// ki baat, ab chalte hai humare code ke upar

// 11:13

// mujhe pata hai aapko history mei aur inn sab mei bada interest
// aata hai jab mai aapse purani baatein karta hu ki haa aise bhi
// kabhi hota tha, language ka achha knowledge milta hai ki haa
// hum purane time se use kar rahe hai aur pehle kya use karte the
// wo bhi pata hona chahiye

// (code editor mei aa gaye)

// const promiseOne = new Promise()

// likh liya promises(2).js file mei

// to yahan pe dekhiye promises jo hai na 
// ( const promiseOne = new Promise() mei new Promise() )
// isi tareh se bante hai ab aap promise banana seekh rahe hai

// do (2) part hote hai 
// ek consume karna promise ko,
// ek promises ko create karna

// ab koi usko consume kar raha hai to kisi ne to create
// kara hoga na, to wo hi hum jaan na chah rahe hai ki actually
// mei creation samajh mei aa jayega , to consumption bhi hume
// samajh mei aa jayega aur next video mei hum jab fetch ke bare
// mei baat karenge, tab aapko detail pata lagegi ki achha
// behind the scene itna kuch hota hai fetch ke andar (11:46)

// to prmoise hum yahan pe ( const promiseOne = new Promise() ) 
// jaate hai, yeh Promise ( new Promise() ) jo hai na 
// yeh apne aap ke andar ek callback leta hai, 

// aur infact aage jaake aap dekhenge ki promise ( new Promise() )
// ek tareh se callback hell jo ho jaata hai, ki
// callback ke andar callback hai , uske andar bhi ek callback hai,
// uske andar bhi ek callback hai, usko bhi reduce karta hai (11:59)

// actually mei yeh jo promise hai ( new Promise() ) , iske andar aap
// dete ho ek function , ab aap arrow function do, basic function do
// aapke upar hai koi dikkat wali baat hai nahi

// const promiseOne = new Promise(function())

// likh liya promises(2).js file mei

// iss function ( new Promise(function(){}) ) ke do (2) part hote hai
// aa... pehla part hota hai resolve

// const promiseOne = new Promise(function(resolve))

// likh liya promises(2).js file mei

// aur dusre part ko bola jaata hai reject

// const promiseOne = new Promise(function(resolve, reject))

// likh liya promises(2).js file mei

// dekhiye promise ya to poora hoga ya nahi hoga jaise aapne
// kaha ki Hitesh Sir videos leke ayiye javascript ke
// ya to uss din mai (Sir) launga ya to ek hafte baad launga

// 12:21

// to ya to eventually resolve hoga ya fir maine (Sir ne)
// series (JS playlist) banani hi band kar di, vaise to
// hoga nahi but ho sakta hai, chances hai ki band kar dein
// series banana (JS playlist) ki nahi students subscribe etc
// nahi kar rahe hai, koi share kar nahi raha ,to kyu hi itni
// mehnat karni, chalo isko chord dete hai
// to aisa bhi ho sakta hai rejection bhi aa sakta hai

// but promises ke do (2) hi part hai -- resolve aur rejection

// const promiseOne = new Promise(function(resolve, reject){

// })

// likh liya promises(2).js file mei

// abhi hum pehle yaad karte hai ki kya kya aise kaam ho sakte hai
// to yahan pe (inside function) aake aap saare ke saare simply
// Do an async task

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
// })

// likh liya promises(2).js file mei

// 12:49

// ab async task aapke kya kya ho sakte hai,
// aa... aapke pas DB calls ho sakte hai 
// (database call kiya, connect kiya, kuch data inject kiya,
// receive kiya , kuch bhi kar sakte hai)

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls
// })

// likh liya promises(2).js file mei

// ya fir aapke crypto ke kuch task ho sakte hai 
// cryptography related

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography
// })

// likh liya promises(2).js file mei

// 13:04

// graphy ( cryptography ) poora likh du varna log
// crypto kuch aur samajh lenge

// theek hai to cryptography related ho gaya

// aur kya ho sakte hai network call ho sakte hai aapke,
// to network related jo bhi aapko kaam karna hai
// wo kar sakte hai , 

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
// })

// likh liya promises(2).js file mei

// abhi hum yahan pe koi network call
// wo sab nahi karenge , aap chahein to laga sakte hai
// wo same code yahin pe, but abhi hum yahan pe ek dusra
// function use kar lete hai jisko humne kaafi use kara 
// setTimeout()

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout()
// })

// likh liya promises(2).js file mei

// 13:21

// setTimeout() se kya hoga koi function hai
// jo ki execute hoga, 

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(,)
// })

// likh liya promises(2).js file mei

// (means setTimeout(,) mei comma , ke pehle koi function
// ha jo ki execute hoga)

// kitne time baad, suppose kariye
// ek second baad (1000 ms)

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(, 1000)
// })

// likh liya promises(2).js file mei

// to humne yahan pe milliseconds mei de diya (13:29)

// ab kya execute karana chahte ho, mai chahta hu
// yahan pe ( setTimeout(, 1000) ) ek function ho
// yeh iss tareh se

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    // 
    // }, 1000)
// })

// likh liya promises(2).js file mei

// aur yeh function (setTimeout ke andra wala function)
// simply bole ki aap kya kariye console.log() kariye
// aur console.log kya kariye , koi bhi jo bhi
// humara Async task tha (jo upar commented out likhe hai)
// -- console.log('Aynnc task is complete') (13:43)

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)
// })

// likh liya promises(2).js file mei

// yeh lijiye aapka task complete ho gaya

// achha ab ek cheej agar aapke dimag mei nahi aa rahi hai
// to aani chahiye thi , kya cheej hai,
// theek hai humne iss promise ke andar 
// ( new Promise(function(resolve, reject){ ) bol diya
// ki resolve aur reject hai 
// ek second baad humara kaam ho gaya
// ( console.log('Aynnc task is complete') )

// iss resolve aur reject ne kiya kya
// ( new Promise(function(resolve, reject){ )

// aisa kar kya raha hai yeh resolve aur reject
// ( new Promise(function(resolve, reject){ )
// ki hum isko (resolve aur reject ko) use kar
// rahe hai
// (14:03)

// haa yeh badi sochne ki interesting baat hai
// ab dekhiye aapne promiseOne 
// ( const promiseOne = new Promise(function(resolve, reject){ )
// kiya, ab isko promise ko ( const promiseOne ) consume bhi karna hoga

// promise actually mei jo create ho raha hai na
// ( ( new Promise(function(resolve, reject){ ) )
// isko (promise ko) humne ek variable mei hold kar
// rakha hai, 
// ( const promiseOne = new Promise(function(resolve, reject){ )
// aapko jarurat nahi hai 
// (variable mei hold karne ki jarurat nahi hai promise ko)

// aap chahein to direct aise bhi likh sakte the as follows

//   new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)
// })

// wo bhi syntax abhi bataunga

// 14:16

// but abhi mai isko (promise ko) ek variable mei hold kar raha
// hu,

// ab kyuki promise create ho gaya hai to isko consume
// karna hai, 
// ab consumption kasie hota hai yeh -- promiseOne
// ya jo bhi aapne variable mei usko hold kara hai

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)
// })

// promiseOne

// likh liya promises(2).js file mei

// uske (jo promiseOne likha hai) baad hum laga sakte hai
// dot then (.then)

// promiseOne.then()

// .then() ka jo hai seedha relation hai aapke resolve ke saath
// ( const promiseOne = new Promise(function(resolve, reject){ )
// kisi aur ke saath nahi hai, seedha connection hai resolve ke saath
// ab kaise hai kya hai yeh agle video mei mai aapko
// aur samjhaunga aur indepth ki actually mei behind the
// scene kya hota hai but abhi ke liye itna samajh lete hai
// ki resolve ( const promiseOne = new Promise(function(resolve, reject){ )
// ka connection hai .then() ke saath ( promiseOne.then() )

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)
// })

// promiseOne.then()

// likh liya promises(2).js file mei

// theek hai ji .then() ke andar kya milta hai aapko
// 14:46
// ek callback milta hai yani ki ek function milta hai
// jiske saath aap jo bhi kaam kar sakte hai

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)
// })

// promiseOne.then(function)

// likh liya promises(2).js file mei

// yeh function ( promiseOne.then(function) ) automatically
// ek argument (parameter) receive karta hai jiska kaam hai
// ki jo bhi yahan se as follows

// setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)

// se kaam hoke hua hai (14:56), jo bhi aapko values 
// deni hai wo value return hoti hai yahan pe 
// inside following function as follows

// promiseOne.then(function(){

// })

// 14:59

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)
// })

// promiseOne.then(function(){

// })

// likh liya promises(2).js file mei

// achha ab kya karte hai yeh value return karte hai
// to console.log karte hai aur isko bolte hai
// -- "Promise consumed"
// console.log("Promise consumed")

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)
// })

// promiseOne.then(function(){
        // console.log("Promise consumed")
// })

// likh liya promises(2).js file mei

// 15:10

// theeh hai ji promise consume bhi kar liya, ab isko
// run bhi karke dekhte hai file ko, aa... node se hi run
// kar lete hai hum yahan pe
// node ke andar 09_advance_one ke andar promises(2).js
// naam se humari file hai

// (type -- node '.\09_advance_one\promises(2).js' in terminal)

// humne wait kara 1 second baad seedha isne bola -- Async task is completed
// (o/p in terminal)
// 15:26
// achha Async task aapka ho gaya hai complete lekin kya aapne actually mei
// properly iss promise ( const promiseOne = new Promise(function(resolve, reject){ )
// ko create kara ya nahi kara kyuki yeh setTimeout (as follows)

    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000)

// to kya hai ek second baad execute ho gaya hai aapka actually mei
// agar isko (promise ko) 
// ( const promiseOne = new Promise(function(resolve, reject){ )
// aapko properly consume karna hi tha yahan pe...

// achha aapne yahan pe dekha promise is consumed ( "Promise consumed" )

// ( // promiseOne.then(function(){
        // console.log("Promise consumed")
// }) )

// yeh ( console.log("Promise consumed") ) aya kya kabhi bhi

// node '.\09_advance_one\promises(2).js' in terminal and enter
// o/p Async task is completed

// dekhiye yeh to abhi tak aya hi nahi (see terminal)
// to aapne async task (i.e. setTimeout)

// ( // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    // }, 1000) )

// to complete kara diya lekin yeh jo promise hai 
// ( console.log("Promise consumed") ) as follows

// ( promiseOne.then(function(){
        // console.log("Promise consumed")
// }) )

// yeh kabhi poora hi nahi kara

// kehne ka yeh matlab hai ki aapne yeh jo resolve hai
// ( const promiseOne = new Promise(function(resolve, reject){ )
// aur yeh .then() hai

// ( // promiseOne.then(function(){
        // console.log("Promise consumed")
// }) )

// inko (resolve and .then() ko) kabhi connect hi nahi kara
// aapas mei

// agar inko (resolve and .then() ko) connect karna chahte hai
// kya karna padega isresolve ek method hai yeh, 
// aa... iss method ko aapko call karna padega,
// yeh bada hi interesting method hai iske andar bahut sari
// cheejein hoti hai parameters etc , yeh kuch cheejon ko set
// bhi karta hai behind the scene, theek hai to yeh aapne
// resolve connect kar diya -- resolve()

// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (commented out)
    // DB calls, cryptography, network (commented out)
    // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    //     resolve() 
    // }, 1000)
// })

// promiseOne.then(function(){
        // console.log("Promise consumed")
// })

// likh liya promises(2).js file mei

// 16:09

// ab yeh jab resolve (resolve()) execute hoga, (jo resolve() likha hai)
// jaise hi resolve() execute hoga, aap isme values bhi
// pas kar sakte hai wo bhi karke dekhenge, tab yeh (resolve() / setTimeout) /
// ( const promiseOne = new Promise(function(resolve, reject){ mei resolve )
// actually mei connect hua hai .then() se

// ( // promiseOne.then(function(){
        // console.log("Promise consumed")
// }) )

// 16:18

// ab kya hoga ab jaise hi mai isko save karta hu aur run karte hai
// isko run karte hai dubara, 

// node '.\09_advance_one\promises(2).js' in terminal
// o/p Async task is completed
// Promise consumed

// to dekhiye Async task is completed aur Promise consumed (see o/p in terminal)

// achha Promise consumed ( console.log("Promise consumed") )
// kabhi bhi pehle nahi ayega 
// (see o/p serial order / chronology)

// kyuki pehle yeh task (as follows)

// ( // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    //     resolve() 
    // }, 1000) )

// complete hua hai (16:32)
// jo bhi aapka Aysnc tha ( console.log('Aynnc task is complete') )
// fir aapne jaise hi yeh resolve() kiya (as follows)

// ( // setTimeout(function(){
    //     console.log('Aynnc task is complete')
    //     resolve() 
    // }, 1000) )

// uske (resolve() ke) baad usne (as follows)

// ( // promiseOne.then(function(){
        // console.log("Promise consumed")
// }) )

// kaha ki achha ab mai resolve
// ho gaya hu matlab mera ( ( // promiseOne.then(function(){ mei .then() as .then() ka link resolve() se hai) 
// time aa gaya hai chalne ka tab yeh
// Promise consumed part ( // console.log("Promise consumed") )
// aapka run karega

// 16:41

// theek hai yeh basic aapko samajh mei aa gaya hai ab
// kis tareh se hoti hai

// theek hai ab hum thoda sa aur aage chalte hai ki yeh saara
// kaam to humne ek ek variable mei step by step kiya

// aapko kayi jagah yeh kaam iss tareh se (as follows) bhi hota milega
// ki suppose kariye aapne kya kara ki mujhe ek promise banana hai
// to yeh lijiye -- new Promise()

// new Promise() 

// likh liya promises(2).js file mei

// maine aapko bataya tha ki variable mei store karna usko ( new Promise() )
// jaruri nahi hai

// ab hume yeh bhi pata hai ki Promise ( new Promise() )
// ke andar ek function hota hai

// new Promise(function()) 

// likh liya promises(2).js file mei

// iska ( new Promise(function()) mei function() ka )
// part hota hai ek resolve aur ek part hota hai reject

// new Promise(function(resolve, reject)) 

// likh liya promises(2).js file mei

// reject pe bhi baat karenge , chinta mat kijiye
// uspe bhi karenge, to yeh ho gaya humara resolve aur reject
// achha theek hai, ab yeh aa gaya hai humare pas method

// new Promise(function(resolve, reject){

// }) 

// likh liya promises(2).js file mei

// vapas se ho hi setTimeout use kar lete hai, yeh lijiye
// setTimeout()

// new Promise(function(resolve, reject){
    //    setTimeout() 
// }) 

// likh liya promises(2).js file mei

// setTimeout() ke andar maine kaha ki ek second (1000 ms) baad aap
// wapas se jo bhi karna tha wo kar lijiye

// new Promise(function(resolve, reject){
    //    setTimeout(, 1000) 
// }) 

// likh liya promises(2).js file me

// ( means setTimeout(, 1000) mei 1 second ke baad jo ,
// ke pehle likhenge wo kar lijiye )

// yeh likha humne function(){} , yeh lijiye bada hi basic sa
// koi dikkat hai hi nahi isme to badi basic si baat hai

// new Promise(function(resolve, reject){
    //    setTimeout(function(){
    // 
    // }, 1000) 
// }) 

// likh liya promises(2).js file me

// 17:32

// theek hai ab iske andar kya karenge , wo hi saara kaam
// karte hai, aa... console.log() kara lete hai ek to
// isko ( console.log() ko ) bol dete hai ki aa... 
// -- "Async task 2"

// new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")  
    // }, 1000) 
// }) 

// likh liya promises(2).js file me

// theek hai ji aapka task 2 bhi ho gaya hai (17:47)
// ab ki bar mai bhulunga nahi ki mujhe pata hai ki mujhe resolve()
// ko bhi call karana hai , to yeh lijiye aapne resolve() ko
// call kara diya -- resolve()

// new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")
    //        resolve()    
    // }, 1000) 
// }) 

// likh liya promises(2).js file me

// ab directly hum kya hai kyuki humne 
// isko ( new Promise(function(resolve, reject){ )
// kisi variable mei store hi nahi kara hai
// to mai kya bol sakta hu isko ki -- .then()
// yeh lijiye .then() aapne bol diya

// new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")
    //        resolve()    
    // }, 1000) 

// }).then() 

// likh liya promises(2).js file me

// .then() ke andar kya milega aapko -- ek function
// milta hai, to yeh lijiye ek function

// new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")
    //        resolve()    
    // }, 1000) 

// }).then(function) 

// likh liya promises(2).js file me

// 18:03

// aur yeh humne function liya aur yeh kaam kara
// diya humne

// new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")
    //        resolve()    
    // }, 1000) 

// }).then(function(){

// }) 

// likh liya promises(2).js file me

// ab yahan pe bhi hum console.log() kar sakte hai
// to yeh lijiye console.log() kar diya
// -- Async 2 resolved

// new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")
    //        resolve()    
    // }, 1000) 

// }).then(function(){
//     console.log("Async 2 resolved") 
// }) 

// likh liya promises(2).js file me

// ab isse kya hua ki actually mei ab do (2)
// part mei karne ki bajaye jaisa ki humne pehle
// kiya tha (see promiseOne example -- promiseOne.then()) (18:20)
// ab humne ek hi part mei sara kar diya
// (see this example) (as follows)

// ( // new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")
    //        resolve()    
    // }, 1000) 

// }).then(function(){
//     console.log("Async 2 resolved") 
// })  )

// ki ek new Promise humne create kara (see this example)
// (as follows)

// ( // new Promise(function(resolve, reject){
    //    setTimeout(function(){
    //        console.log("Async task 2")
    //        resolve()    
    // }, 1000) 

// }).then(function(){
//     console.log("Async 2 resolved") 
// })  )

// 18:23

// ab yeh Promise ( new Promise(function(resolve, reject){ )
// ho sakta hai network request laa raha ho
// ( i.e. network request in place of setTimeout )
// ho sakta hai file handling kar raha ho 
// ( i.e. file handling in place of setTimeout )
// kuch bhi kar raha ho , hume koi matlab nahi hai 
// ek second , do (2) second baad (see 1000 ms of setTimeout) 
// jab bhi yeh eventually complete hoga 
// (jab bhi yeh setTimeout eventually complete hoga)
// to wo saara kaam ho jayega (setTimeout ka saara kaam ho jayega / setTimeout ke console.log ka saara kaam ho jayega)
// uske baad yeh resolve() (setTimeout ka resolve()) inform
// kar dega automatically .then() ko,

// ( // }).then(function(){
//          console.log("Async 2 resolved") 
// }) ko )

// , aap kaam kar loge

// to ek bada hi basic example hai (18:40)

// thoda sa dikhne mei syntax ho sakta hai aapko weird
// lag raha ho kyuki jab humne last time baat kari thi
// (ApiRequest.html file mei aa gaye)
// tab hum yeh iss tareh se likh rahe the (as follows)

// (     const requestUrl = 'https://api.github.com/users/anuragsharma160'
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', requestUrl)
    //   xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState);
    //     if (xhr.readyState === 4) {
    //         const data = JSON.parse(this.responseText)
    //         console.log(typeof data);
    //         console.log(data.followers);
    //     }
    // }
    // xhr.send(); )

// ki yeh saara kaam khud hi ho raha hai requestUrl bana
// rahe hai (const requestUrl)
// fir yeh sab open kar rahe hai (xhr.open())
// fir onreadystatechange , usko check kar rahe hai jaise
// hi equals to ho jaa rahi hai ( if (xhr.readyState === 4) { )
// (18:52) wo sab ho rahe hai,

// yahan pe (promises.js file mei aa gaye) utna kaam nahi
// karna pad raha , yahan pe simple sa hai 
// Promise banao ( new Promise(function(resolve, reject){ )
// (see second example) uske andar hume pata hai
// resolve reject hoga ( new Promise(function(resolve, reject){ )

// jaise hi resolve() (see resolve() of setTimeout of 2nd example) 
// hoga to mujhe yeh part (.then() part) (as follows)

// ( // }).then(function(){
//     console.log("Async 2 resolved") 
// })  )

// mil jayega

// (19:00)

// theek hai to yeh hota hai bada basic aapka
// consumption, aap isko chalao to run
// karke dekh lo bar bar run karna mujhe itna
// achha nahi lagta kyuki thoda sa hum deviate ho jaate hai

// node '.\09_advance_one\promises(2).js' in terminal and enter
// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved

// to dekhiye aapka async task complete ho gaya (see o/p)
// fir aapka Promise consume ho gaya (see o/p)
// fir task 2 aapka async hua (see o/p)
// aur uske baad async 2 resolve ho gaya (see o/p)

// 19:16

// ab banate hai hum ek aur promise to uske andar aur
// cheejein dekhte hai ki kaise kaise karte hai,
// to ab hum banate hai apna second promise ya fir
// third promise banate hai

// actually mei aap isko (2nd example ko) second (second Peomise)
// maan lijiye (19:32) , ab hum third promise
// banate hai apna , theek hai ji, chaliye

// to yeh banate hai hum promiseThree 
// (two to ho gaya hai already i.e. promiseTwo)

// const promiseThree

// likh liya promises(2).js file mei

// ab promise three ke andar kya kar rahe hai hum
// wapas se wo hi new Promise(), yeh lijiye promise banaya

// const promiseThree = new Promise()

// likh liya promises(2).js file mei

// aur aapne kaha tha uske ( new Promise() ) andar 
// ek resolve hota hai
// aur ek reject hota hai

// const promiseThree = new Promise(resolve, reject)

// likh liya promises(2).js file mei

// theek hai ji maan li aapki baat, aa... promise
// kar diya, achha isi tareh se karna hai kya
// yeh resolve aur reject, haa test le raha tha thoda sa
// (sir test le rahe the thoda sa)
// kyuki syntax mujhe pata hai kayi log bhul gaye hai
// (upar 1st example mei dekh liya syntax)

// to resolve aur reject ko kariye yahan se cut
// aur hume pata hai yeh callback hai ,
// (means new Promise() ke andar ek callback function ayega)
// to function likhiye, yeh likha

// const promiseThree = new Promise(function(){})

// likh liya promises(2).js file mei

// aur yeh lijiye resolve reject iske andar daal dijiye

// const promiseThree = new Promise(function(resolve, reject){})

// likh liya promises(2).js file mei

// aur yeh aapka ho gaya function yahan pe

// const promiseThree = new Promise(function(resolve, reject){

// })

// likh liya promises(2).js file mei

// theek hai ji yeh to ho gaya hai basic humara kaam
// ki kis tareh se values aa rahi hai, 
// kis tareh se values ja rahi hai
// yeh lijiye

// 20:13

// achha ab nayi cheej hum kya dekhenge ki maine
// aapse kaha tha ki yeh jo resolve hai
// ( // const promiseThree = new Promise(function(resolve, reject){ )
// yeh directly connected hai humare then ke andar (.then())

// to sirf itna to kaam karunga nahi ki har bar setTimeout setTimeout
// karunga aur console.log karaunga (20:26)

// ho sakta hai network se koi data aya ho wo data
// bhi to mujhe pass karna padega to wo bhi seekhna
// padega kaise karte hai

// bahut aasaan hai wapas se wo hi humara ghisa pita
// setTimeout() hi use karne wale hai hum, uski to chinta
// mat kijiye

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout() 
// })

// likh liya promises(2).js file mei

// to yeh lijiye ek second (1000 ms) baad jo bhi ho
// raha hai

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(, 1000) 
// })

// likh liya promises(2).js file mei

// (menas setTimeout(, 1000) mei 1000 ke pehle comma , se pehle
//  jo bhi ho raha hai, wo kaam 1 second (1000 ms) baad hoga )

// 20:39

// aur yahan pe ( setTimeout(, 1000) ) humara function

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
// 
// }, 1000) 
// })

// likh liya promises(2).js file mei

// ab suppose kariye iss function ( setTimeout(function(){ ) 
// ne bahut saara kaam kara, kahin se network se jaake kuch
// data laya , file system se kuch data laya , lekin actually
// mei mujhe karna kya hai, karna to yeh hai ki actually mei
// eventually jaake yeh jab promise (promiseThree) mai
// consume karunga, 

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
// 
// }, 1000) 
// })

// promiseThree

// likh liya promises(2).js file mei

// uske (promiseThree) upar mai .then()
// lagane wala hu

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
// 
// }, 1000) 
// })

// promiseThree.then()

// likh liya promises(2).js file mei

// to .then() ka yeh jo function hai (.then())
// yahin pe (.then()) to mai saara kaam karaunga, 
// isi ke (.then()) andar maine kaha
// tha ki aapko saari value return hoti hai

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
// 
// }, 1000) 
// })

// promiseThree.then(function(){

// })

// likh liya promises(2).js file mei

// but yahan se (as follows)

// ( // const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
// 
// }, 1000) 
// }) )

// yahan pe (as follows)

// ( // promiseThree.then(function(){

// }) )

// values kaise pass karu, wo pass karne ka kaam
// bhi humara resolve (resolve()) karega kyuki
// resolve to lagana jaruri hai

// to yeh resolve() humne lagaya

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve() 
// }, 1000) 
// })

// promiseThree.then(function(){

// })

// likh liya promises(2).js file mei

// 21:12

// ab iss resolve ke andar actually mei parameters
// mei aap data bhi pass kar sakte ho 

// ( relate karo jo following humne thodi der pehle notes mei likha tha -- line 1178)
// ( ab suppose kariye iss function ( setTimeout(function(){ ) 
// ne bahut saara kaam kara, kahin se network se jaake kuch
// data laya , file system se kuch data laya , )

// jadatar jo data aapko pass hota hua dikhayi dega wo
// ek object hoga iss tareh se - {} - resolve({})

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({}) 
// }, 1000) 
// })

// promiseThree.then(function(){

// })

// likh liya promises(2).js file mei

// chaho to array pass karo aapka mann kare,
// function pass kar do, aapka jo mann kare aap
// pass karo

// ab ek suppose kariye humne yahan pe ( resolve({}) )
// username liya

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:}) 
// }, 1000) 
// })

// promiseThree.then(function(){

// })

// likh liya promises(2).js file mei

// aur username hum lete hai yahan pe ( resolve({username:}) )
// "Chai" , obvious si baat hai aur kya hi lenge

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai"}) 
// }, 1000) 
// })

// promiseThree.then(function(){

// })

// likh liya promises(2).js file mei

// aur email bhi lete hai (21:33), to email
// hai humara -- "chai@chaiaurcode.com"

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@chaiaurcode.com"}) 
// }, 1000) 
// })

// promiseThree.then(function(){

// })

// likh liya promises(2).js file mei

// theek hai, mera (Sir ka) nahi hai yeh domain ,
// to example hi likh lete hai pata nahi kiske email
// chala jayega (21:44) -- email: "chai@example.com"

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) 
// }, 1000) 
// })

// promiseThree.then(function(){

// })

// likh liya promises(2).js file mei

// theek hai to yeh humne le liya hai yahan pe
// chai@example.com

// ab baat yeh aati hai ki theek hai aapne resolve()
// mei pass kar diya 
// ( resolve({username: "Chai", email: "chai@example.com"}) )
// but yahan pe (as follows)

// ( // promiseThree.then(function(){

// }) )

// mai wo data lunga kaise, haa ji yeh interesting baat
// hai ki kaise yeh data liya jayega (21:59)

// dekhiye jaise hi aap bolte hai ki function ko
// yahan pe ( promiseThree.then(function(){ )
// aapne dot then (.then()) kar liya , to
// resolve ( resolve({username: "Chai", email: "chai@example.com"})  )
// aur iska ( promiseThree.then(function(){ ) connection
// hai

// to yahan pe ( promiseThree.then(function(){ mei () mei )
// expect aap kar sakte ho by default ki kuch data
// ayega, 

// ab wo poora object hai 
// ( resolve({username: "Chai", email: "chai@example.com"}) mei
//  {username: "Chai", email: "chai@example.com"} poora object hai )

// uss object ko maan lete hai ki hum uss object ko user
// bula rahe hai

// ( resolve({username: "Chai", email: "chai@example.com"}) mei
//  {username: "Chai", email: "chai@example.com"} poora object hai
//  {username: "Chai", email: "chai@example.com"} object ko user bula rahe hai )

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) 
// }, 1000) 
// })

// promiseThree.then(function(user){

// })

// likh liya promises(2).js file mei

// 22:11

// to yahan pe ( promiseThree.then(function(user){ )
// hum simply ek console.log() karke dekh lete hai
// kya humare pas user mei print aati hai values

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) 
// }, 1000) 
// })

// promiseThree.then(function(user){
//       console.log(user)
// })

// likh liya promises(2).js file mei

// theek hai save karte hai isko bhi run karke dekh
// lete hai

// node '.\09_advance_one\promises(2).js' in terminal

// to ek second baad obviously hoga to dekhiye
// Async 2 resolved to wo to upar ho gaya hai (see o/p)
// but yahan pe (see o/p in terminal) ab mere pas 
// wo data aa gaya hai ( { username: 'Chai', email: 'chai@example.com' } )

// to yeh baat to confirm ho gayi hai ki jab bhi aapke
// pas iss tareh ka syntax hai (22:31) (as follows)

// ( // const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) 
// }, 1000) 
// })

// promiseThree.then(function(user){
//       console.log(user)
// }) )

// hum jab jaise hi uska consumption karte hai (as follows)

// ( // const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"}) 
// }, 1000) 
// }) )

// to resolve() ke andar jo bhi
// ( resolve({username: "Chai", email: "chai@example.com"}) )
// aap parameter pass karoge, wo parameter mujhe
// yahan pe (as follows)

// ( // promiseThree.then(function(user){
//       console.log(user)
// }) mei console.log(user) mei user ki taraf ishara kiya sir ne )

// mil jata hai , usme koi bhi issue nahi hai
// 22:39

// theek hai to yeh to ho gaya humara basic ki kis
// tareh se data consumption hota hai , values aati hai
// aur yeh sab aati hai , but abhi bhi baaki hai
// aisi baat nahi hai ki kaam ho gaya hai

// ab hum humara fourth promise banate hai, 
// ek ek karke har promise ke andar ek na ek nayi cheej hum
// seekhte ja rahe hai, isliye yeh syntax mujhe (Sir ko)
// jada achha lagta hai, to yeh ho gaye humare promiseFour
// const promiseFour

// const promiseFour 

// likh liya promises(2).js file mei

// yeh lijiye promiseFour kaise banega, wo hi
// same humari kahani , usme to koi dikkat hai hi nahi
// ki yeh lijiye Promise (23:03)

// const promiseFour = new Promise()

// likh liya promises(2).js file mei

// iss bar to aap yaad bhi rakhenge ki uske ( new Promise() )
// andar function hai,

// const promiseFour = new Promise(function)

// likh liya promises(2).js file mei

// uske andar (function ke) resolve hai, reject hai,
// aur yeh ho gaya kaam

// const promiseFour = new Promise(function(resolve, reject){

// })

// likh liya promises(2).js file mei

// achha theek hai ji, ab wapas se wo hi humara setTimeout() function
// le lete hai ek bar, theek hai yeh ho gaya humara setTimeout()

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout()
// })

// likh liya promises(2).js file mei

// aur yeh lijiye yeh hum le liya 1000 pe (1000 ms) , 2000 pe
// (2000 ms) jaisa bhi aapka mann kare

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(, 1000)
// })

// likh liya promises(2).js file mei

// yeh lijiye function bhi le liya aur yeh values bhi likh
// li

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
// 
// }, 1000)
// })

// likh liya promises(2).js file mei

// theek hai ab kya karna hai ki ab iske andar kya karta hu
// mai aapko ek error bhi deta hu

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error
// }, 1000)
// })

// likh liya promises(2).js file mei

// to suppose kariye, error true hai yani ki error
// hai humare pas (23:33)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
// }, 1000)
// })

// likh liya promises(2).js file mei

// 23:34

// ab error base checking pe karke mai bolunga ki
// actually mei resolve hoga ya reject hoga

// ab suppose kariye maine web request kari network request
// kari ya file access karni chahi , 
// file access ho gayi , to kuch bolunga , 
// file access nahi ho payi , tab bhi to kuch bolna padega

// 23:47

// to uss hisab se karenge

// to suppose kariye ki hum yahan pe conditional check (if)
// laga dete hai

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (condition) {
            
//         } 
// }, 1000)
// })

// likh liya promises(2).js file mei

// ... to suppose kariye ki hum yahan pe conditional check (if)
// laga dete hai -- ki agar error nahi hai (!error)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
            
//         } 
// }, 1000)
// })

// likh liya promises(2).js file mei

// 23:53

// to kya karo, agar error nahi hai, to obvious si baat
// hai resolve kar do cheejon ko, error nahi hai 
// matlab ki resolve ho gayi hai (cheejein resolve ho gayi hai)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve()
//         } 
// }, 1000)
// })

// likh liya promises(2).js file mei

// 24:00

// ab uske (resolve()) andar kya kara maine , 
// yahan pe (resolve()) wapas se ek object pass
// kar diya -- resolve({})

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({})
//         } 
// }, 1000)
// })

// likh liya promises(2).js file mei

// ... ki suppose kariye kisi file mei jaake aye the
// aap aur database bhi ho sakta hai uss file...
// database bhi to file hi hai file hi to access kar
// rahe hai (24:09)

// to suppose kariye uska username jo hai wo
// hitesh aaya

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh"})
//         } 
// }, 1000)
// })

// likh liya promises(2).js file mei

// aur password jo aya humare pas, yeh lijiye
// password aya "123", theek hai

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } 
// }, 1000)
// })

// likh liya promises(2).js file mei

// chaliye chota sa password hai, theek hai yeh
// to tab kaam ayi cheejein jab aapke pas cheejein
// resolve ho gayi 
// (see if condition !error means no error means cheejein resolve ho gayi)

// 24:25

// varna else case mei bhi to kuch karna padega, 

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
    
//         }
// }, 1000)
// })

// likh liya promises(2).js file mei

// to else case mei actually mei baat aati hai aapke rejection ki

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject()
//         }
// }, 1000)
// })

// likh liya promises(2).js file mei

// kyuki itni der se hum ek keyword leke ghoom rahe hai
// saath mei reject ( const promiseFour = new Promise(function(resolve, reject){ )
// but usko (reject) use nahi kar rahe
// 24:34

// to yeh rejection kya hai error deta hai,
// ab error bhi actually mei koi aisa kuch hawa mei to hai nahi
// error bhi aapko dena hi padega

// to aapko error kuch iss tareh se aap de sakte hai
// agar aap chahein to -- reject('')

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('')
//         }
// }, 1000)
// })

// likh liya promises(2).js file mei

// 24:43

// ki hum yahan pe de dete hai --
// 'ERROR' 
// aur bol dete hai -- Something went wrong
// 'ERROR: Something went wrong'

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// likh liya promises(2).js file mei

// but aapke liye obvious si baat hai yeh error
// kuch achha nahi hai kuch bata hi nahi raha
// detail mei kya ho raha hai, kya nahi ho raha
// but abhi syntax se chalega

// ab iss promise (promiseFour) ko kaise consume
// karna hai, theek hai ji yeh bhi karke dekh
// lete hai (24:58)

// yeh promiseFour hai
// promiseFour likh liya

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour

// likh liya promises(2).js file mei

// ab yahan pe aati hai aapki callback actually mei
// cheejein, to thoda sa mai aapko ek step aur aage leke
// jaata hu (25:05)

// itna to aapko pata hai ab ki .then() laga ke
// ( promiseFour.then() ) values le lunga

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then()

// likh liya promises(2).js file mei

// agar error ayegi to .catch() laga ke value le lunga

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then().catch()

// likh liya promises(2).js file mei

// isme to koi dikkat wali baat nahi hai aapko
// pata hai ki ek function dono mei (.then() and .catch())
// mei declare kar dunga, 
// catch (.catch()) ke andar bhi function jaana hai
// then (.then()) ke andar bhi function jaana hai
// 25:17

// but ek step aage leke jaate hai ab cheejon ko
// kyuki itna ( promiseFour.then().catch() ) 
// to samajh mei aa hi gaya hai

// to actually mei aata hu iss then (.then()) ke
// andar

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then()

// likh liya promises(2).js file mei

// theek hai ji iss then (.then()) ke andar kya
// expect kara maine ki aap mujhe -- user doge

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then(user)

// likh liya promises(2).js file mei

// theek hai ji aur mai yahan pe ( promiseFour.then(user) ) ab arrow function use kar
// leta hu, theek hai arrow function hi laga leta hu taki
// syntax bhi aapko achhe se samajh mei aye , vaise to direct
// one liner bhi likh sakte the but suppose kariye hum aise
// likh rahe hai (as follows)

// (.then(user) mei user ko backspace kar diya 
// and arrow function likh liya)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then(() => {
    
// })

// likh liya promises(2).js file mei

// theek hai ab yahan pe ( arrow function ke () mei )
// maine kaha yeh -- user mere pas aya

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
    
// })

// likh liya promises(2).js file mei

// 25:40

// theek hai ji ab mai callback hell bata raha hu
// aapko iske andar ki callback hell se kaise avoid kiya
// jata hai aur kaise sirf ek .then() aur .catch()
// nahi hota , aap jitne chahein .then() laga sakte hai
// 25:49

// theek hai ab mujhe pata hai last time jab maine user
// yahan pe (as follows)

// ( // promiseFour.then((user) => {
    
// }) )

// karwaya tha
// (means last example i.e. promiseThree mei jab yahan pe
// i.e. similar situation mei user karwaya tha)
// to user ke andar (means user object ke andar) mujhe yeh
// username , email jo poora user object hai wo poora hi
// mil gaya

// (comment out promiseFour and type
// node '.\09_advance_one\promises(2).js' in terminal to see o/p of promiseThree)
// ( o/p -- { username: 'Chai', email: 'chai@example.com' } )

// 25:57

// (comment on promiseFour)

// ab mai chahta hu ki aapko yeh poora object lene ki jarurat nahi hai
// mai sirf aapko username dena chahta hu
// ( resolve({username: "hitesh", password: "123"}) -- see code of promiseFour )

// theek hai aap chahein to ab yahan pe (as follows -- inside arrow function)

// ( // promiseFour.then((user) => {
    
// }) )

// destructure
// karke hum extract kar sakte hai but hum ek 
// long scenario yahan pe imagine kar rahe hai

// 26:08

// to ab uske liye (long scenario) kya karta hu mai
// yahan pe console.log()... , 
// console.log() bhi kara sakte hai (26:12)
// chaliye console.log() kara hi lete hai
// ki user to yahan pe poora mere pass aa raha hai
// -- console.log() -- console.log(user)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
// })

// likh liya promises(2).js file mei

// Lekin yahan se mai return kya karna chah raha hu

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return
// })

// likh liya promises(2).js file mei

// ...Lekin yahan se mai return kya karna chah raha hu
// iss user ke saath (return user) dot username 
// (return user.username) kar raha hu (karna chah raha hu)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })

// likh liya promises(2).js file mei

// abhi maine check nahi kara yahan pe ki user sahi mei
// aa bhi raha hai ya nahi aa raha 
// ( console.log(user) ka o/p terminal mei check nahi kara )
// real code mei karenge 
// (real code mei check karenge ki user sahi mei aa raha hai ya nahi aa raha , terminal mei)
// but yahan se ( return user.username ) mai isko return kar deta hu

// ab interesting si baat yeh hai ki yahan se ( return user.username )
// aap jo return kar rahe ho wo actually mei jaa kaha pe raha hai

// kya mai yahan pe (as follows)

// ( // promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }) )

// ek variable declare karu 
// (means promiseFour.then() ko ek variable mei store karu)
// uss variable ke andar jaa raha hai (26:35)

// dekh lete hai to isko ( promiseFour.then() ko ) 
// bol dete hai -- const username = promiseFour.then()
// yeh lijiye

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// const username = promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })

// likh liya promises(2).js file mei

// to kya yahan pe username
// ( const username = promiseFour.then((user) => { )
// ke andar jaa raha hai

// 26:45

// yeh bhi dekh lete hai ji isme kya baat hai
// yeh lijiye username aapne print kara -- console.log(username)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// const username = promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })

// console.log(username)

// likh liya promises(2).js file mei

// yeh lijiye chaliye chala ke dekhte hai username mei kya hai

// node '.\09_advance_one\promises(2).js' in terminal and enter

// o/p (Promise { <pending> }
// Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// node:internal/process/promises:389
//       new UnhandledPromiseRejection(reason);
//       ^

// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".
//     at throwUnhandledRejectionsMode (node:internal/process/promises:389:7)
//     at processPromiseRejections (node:internal/process/promises:470:17)
//     at process.processTicksAndRejections (node:internal/process/task_queues:96:32) {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// Node.js v20.17.0)

// to username mei humne dekha ki aise to kaam nahi
// chal raha hai kyuki username to seedha hi print ho gaya
// (see o/p)
// to pehli baat to wahan pe (see o/p) uske andar humne dekha ki
// promise hi tha jo ki pending state mei tha ( Promise { <pending> } see o/p )

// abhi padha na documentation mei alag alag stages hoti hai
// to pending state mei tha, chaliye ek baat to clear ho gayi (27:07)

// yahan tak aye 
// ( { username: 'Chai', email: 'chai@example.com' } see o/p Async 2 resolved , ke neeche)
// to promise jaise hi resolve hua wo print bhi ho gaya (27:11)

// Lekin jaise hi maine iss username ko print karane ki koshish
// kari ( return user.username ) to kaha ki yeh kya kar rahe ho sir aap
// ( see o/p -- new UnhandledPromiseRejection(reason);
    //   ^

// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".
//     at throwUnhandledRejectionsMode (node:internal/process/promises:389:7)
//     at processPromiseRejections (node:internal/process/promises:470:17)
//     at process.processTicksAndRejections (node:internal/process/task_queues:96:32) {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// Node.js v20.17.0 )

// (see o/p UnhandledPromiseRejection:) aa... yeh to promise rejection hai
// This error originated either by throwing inside... (see o/p)
// matlab function catch (see o/p) kya kar rahe ho aap kuch samajh nahi aa raha

// to aisi situation mei jab aapko wahan se (object se) data nikaalna hai
// tab yeh kaam ( const username = promiseFour.then((user) => { ) to
// hum nahi kar sakte , itna to samajh mei aa gaya

// ( to, const username = promiseFour.then((user) => {  mei const username ko
// backspace kar diya and console.log(username) ko backspace kar diya))

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })



// likh liya promises(2).js file mei

// ki aise to nahi ho raha hai (27:31)

// to actually mei kya syntax hota hai ki
// yeh jo .then() hai ( promiseFour.then((user) => { )
// iski aap chaining kar sakte ho aur further down
// to .then() ek aur bar aap laga sakte ho

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then()



// likh liya promises(2).js file mei

// wo hi same rahega , ki iske andar (2nd .then() ke)
// bhi wo hi callback aata hai humare pas to
// aap chaho to function use kar sakte ho,
// chaho to arrow function use kar sakte ho 
// jo bhi chahe

// ab yahan pe mujhe pata hai ki yeh mera suppose
// kariye ki arrow function hai , yeh lijiye
// aapka arrow function


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then(() => {
    
// })

// likh liya promises(2).js file mei

// 27:49

// ab yahan pe 
// (2nd .then() ke arrow function ke () mei) 
// jo value aa rahi hai wo kya aa rahi hai
// isko bolte hai chaining , yani ki jo
// upar wale .then() (1st .then()) se humare pas value
// return hoke ayegi , wo hi aapke naye chain
// mei ayegi

// jab aap database connection karte hai na
// tab yeh bahut jada kaam mei ayega ,
// iss syntax ko achhe se abhi dhyan se samajh lijiyega

// to yahan pe (2nd .then() ke arrow function ke () mei) 
// aapne likha ki ab mujhe kya mil raha hai
// return kya kar raha hai user.username ( return user.username )
// to obvious si baat hai username hi return ho raha hai, (28:09)

// to suppose kariye usko ( jo username return ho raha hai ) 
// username hi bol lete hai, ya myUsername bol lete hai ya
// fir jo bhi aapko bolna hai variable ka naam hai 
// jo chahe boliye

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
    
// })

// likh liya promises(2).js file mei

// 28:15

// aur yahan pe (inside 2nd .then() ke arrow function ke andar)
// jab mai yeh console.log() karta hu isko, 
// to actually mei username mere pas ayega
// -- console.log(username)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// })

// likh liya promises(2).js file mei

// 28:20

// theek hai wapas se isko run karke dekhte hai ki
// actually mei ho kya raha hai aur jo mai bol
// raha hu wo ho bhi raha hai kya

// node '.\09_advance_one\promises(2).js' in terminal

// o/p ( Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// node:internal/process/promises:389
//       new UnhandledPromiseRejection(reason);
//       ^

// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".
//     at throwUnhandledRejectionsMode (node:internal/process/promises:389:7)
//     at processPromiseRejections (node:internal/process/promises:470:17)
//     at process.processTicksAndRejections (node:internal/process/task_queues:96:32) {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// Node.js v20.17.0 )


// to humne run kara, achha wapas se humare pas errors aa rahi hai
// ki theek hai aapke pas yeh jitna bhi sara process hai (see error)
// aa... maine save nahi kara kya usko, 
// i think humne save nahi kara...

// actually mei hume catch (catch()) bhi dena padega kyuki
// actually mei problem kya ho rahi hai ki humare
// pas aa... rejection etc 
// ( let error = true ,if (!error) { resolve({username: "hitesh", password: "123"}) } else reject('ERROR: Something went wrong') ) 
// bhi aa rahe hai to actually
// mei isko abhi mai karta hu par pehle isko complete
// kar lete hai humare code ko kyuki sirf .then() laga ke
// to kaam chalega nahi, (1st .then() and 2nd .then())

// aa... , .catch() bhi lagana padega kyuki error bhi aa
// rahi hai humare pas ,

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch()

// likh liya promises(2).js file mei

// catch (.catch()) ka bhi bahut aasaan kaam hai
// kuch bhi nahi hai iske (.catch()) andar, yeh lijiye function
// aya aapke pas

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function())

// likh liya promises(2).js file mei

// jo bhi value return hogi , usko hum
// error bol lete hai ( .catch(function(error)) ), 
// aapa mann kare err boliye , error boliye ,
// jo bhi aapko bolna hai boliye

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){

// })

// likh liya promises(2).js file mei

// aur console.log() kara deta hu uss error ko
// theek hai yeh lijiye maine error ko console.log
// kara liya -- console.log(error)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// })

// likh liya promises(2).js file mei

// ab atleast properly mai handle kar raha hu ki errors
// kya aa rahe hai, jo bhi values aa rahi hai usko properly
// handle kar rahe hai, 

// theek hai to chaliye, wapas se run karke dekhte hai ab isko

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong

// ab isko run kara, thoda sa time laga ,
// ab isne kaha ki -- ERROR: Something went wrong (see o/p in terminal)
// 29:18

// haa ji something went wrong
// to isko error ko abhi true thi
// (error to abhi true thi)
// error aa rahi thi (let error = true, see code)

// ab error ko false bhi karke dekh lete hai (let error = false)
// ki actually mei jo mai dusri kahani aapko
// (29:25) samjha raha tha wo bhi sahi hai ya nahi hai
// theek hai to usko (let error = false) bhi karke dekh lete hai

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// })

// likh liya promises(2).js file mei

// to yeh lijiye abhi humne error nahi hai humare pas (let error = false , see code)
// 29:30

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// { username: 'hitesh', password: '123' }
// hitesh

// to dekhiye yahan pe mere pas , first do (2) time to jo
// bhi tha (promiseOne and promiseTwo), wo error Chai wala 
// bhi print ho gaya ( { username: 'Chai', email: 'chai@example.com' } see o/p ) ( username: 'Chai' )
// fir yahan pe hitesh bhi hai wo bhi print ho gaya
// ( { username: 'hitesh', password: '123' } see o/p mei username: 'hitesh')
// ab yahan pe seedha mere pas .hitesh (i.e. .username) (i.e. hitesh , see o/p)
// aya hai (29:40)

// theek hai achha to yeh sara ho gaya humara basic kaam
// yeh actually mei perfect tarika hai karne ka
// achha isme ek syntax bhi aap dekhoge
// dekhiye .catch() .then() 

// ( // }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }) )


// yeh thoda sa syntactic issue hai prettier etc se bhi aa jata hai
// kayi log kya karte hai infact mai bhi yeh prefer karta hu
// ki jahan pe mujhe iss tareh ka chaining karna hai (as follows)

// ( // promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }) )

// to mai actually mei usko naye line pe prefer karta hu (29:59)
// to yahan pe kuch .then() (1st .then()) iss tareh se hoga (as follows)

// ( // promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }) )

// .then() (2nd .then()) fir yahan pe iss tareh se (as follows)

// ( // promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }) )

// aur fir .catch() yahan pe iss tareh se (as follows)

// ( // promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error) 
// }) )

// to kya hai thoda read ability aa jati hai (30:06)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error) 
// })

// likh liya promises(2).js file mei

// ki achha yahan pe .then() hai (as follows)

// ( // promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }) )

// yahan pe .catch() hai (as follows)

// ( // .catch(function(error){
//     console.log(error) 
// }) )

// ya fir yeh purana wala bhi mujhe kaafi
// theek lagta hai (as follows)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// })

// likh liya promises(2).js file mei

// ki yeh sirf syntactical issue hai (as follows)

// ( // promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }) )

// aisa kuch nahi hai ki aapko yahan pe

// ( ( // promiseFour
// .then((user) => { )

// same hi line mei likhna hai nahi likhna hai
// wo sab aapke upar hai

// achha yeh to ho gaya humara .then() aur .catch()
// theek hai ji error aya , wapas se error ko trigger
// kar lete hai ek bar ke liye ki (30:21) yeh ho gaya
// humare pas true ( let error = true ) (30:22)

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// })

// likh liya promises(2).js file mei

// to ab kya ayega , obvious si baat hai error hi
// aane wala hai

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong

// isme koi magical baat to hai nahi
// to yeh humne errors bhi gracefully handle kar liya
// (30:29)

// Lekin aisi bahut saari situations aapke pas hogi
// jahan pe aap ek aur keyword use karoge wo hai -- finally()

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }).finally()

// likh liya promises(2).js file mei

// to dekhiye error aya, theek baat hai,
// promise resolve ho gaya, wo bhi theek baat hai
// lekin kayi bar kya hota hai ki mujhe aap bata do
// end mei ki yar aapka jo bhi kaam hona tha na wo
// ho gaya kya

// resolve karna tha to resolve kar do
// aur iska bhi ek time hota hai aisa nahi hai ki
// promise unlimited time tak chalta hai, iska bhi
// time hota hai ,

// aisa nahi hai ki aap yahan pe 3 ghante (3 hours)
// ka wait laga sakte ho, uske liye documentation
// padhenge kabhi aur discuss karenge (30:57)

// but finally mujhe ek x amount of time ke baad
// bata do ki yar jo bhi aapka hona tha na wo ho gaya
// hai kya (31:01), yeh (.finally()) humesha humesha 
// execute hoga

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }).finally(())

// likh liya promises(2).js file mei

// almost kind of default maan sakte ho isko ( .finally(()) )
// ki yeh ( .finally(()) ) to hoga hi hoga

// to isme ( .finally(()) ) kuch nahi, hum seedha ka seedha
// ek console.log kara dete hai yahan pe ( .finally(()) ) to
// direct hi kara sakte hai, ab to aap itna samajh hi gaye hai
// koi dikkat wali baat hi nahi hai

// ( ( .finally(()) ) -- one liner may be... )

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }).finally(() => console.log())

// likh liya promises(2).js file mei

// 31:12

// aur yahan pe ( }).finally(() => console.log()) ) 
// likh dete hai hum "Finally"...

// aur yahan pe ( }).finally(() => console.log()) ) 
// achha sa syntax likh dete hai
// -- "The promise is either resolved or rejected"
// -- console.log("The promise is either resolved or rejected")

// kuch to ho hi gaya hai humare promise ka jo bhi hum karna
// chah rahe the uske saath

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
// }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error) 
// }).finally(() => console.log("The promise is either resolved or rejected"))

// likh liya promises(2).js file mei

// to theek hai isko bhi ek bar run kara ke dekh lete hai
// ki actually mei iske saath kya hota hai

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong
// The promise is either resolved or rejected

// 31:34

// to promise aapka chahe resolve ho chahe rejected ho
// yeh finally ( .finally(() => console.log("The promise is either resolved or rejected")) mei .finally())
// hota hi hota hai ( The promise is either resolved or rejected , see o/p )
// to bada achha syntax hai bahut hi kaam aata hai yahan pe

// achha theek hai yeh to ho gaye humare basic ki kis 
// tareh se hota hai

// ab kya hai ki iske andar ab interesting cheejon pe hum aate hai
// jo ki shayad aapne nahi dekhi hogi, theek hai ji
// promiseFive bhi to banayenge, haa ji itni jaldi thodi na
// chord denge, promiseFour mei hai abhi to maja aana
// start hua hai ab five ( promiseFive ) ke andar bhi
// aate hai kuch aur nayi cheejon pe bhi discuss karte hai
// theek hai

// const promiseFive

// likh liya promises(2).js file mei

// promiseFive jo hai na wo bhi apne aap mei bahut interesting hai
// to chaliye, to promiseFive pe aate hai, theek hai ji
// yeh promiseFive humne banaya, 
// wo hi same kahani new Promise() , yeh lijiye promise de dijiye

// const promiseFive = new Promise()

// likh liya promises(2).js file mei

// yeh le lijiye function , aap arrow function bhi use kar sakte hai
// koi dikkat wali baat nahi hai, mai thoda sa yeh function prefer
// kar raha hu , samjhane ke taur pe iska (function(){}) syntax
// achha hota hai thoda sa samajh mei aata hai, aa..., 2 minute lagti
// hai dimag mei register hone mei, to yeh (function(){}) deta hai 2 minute , 
// to theek hai

// const promiseFive = new Promise(function(resolve, reject){})

// likh liya promises(2).js file mei

// yahan pe resolve ho gaya aur ek reject bhi ho gaya
// theek hai ji aur yeh lijiye

// const promiseFive = new Promise(function(resolve, reject){

// })

// likh liya promises(2).js file mei

// ab kya karna hai hume, achha ab wapas se wo hi setTimeout etc
// sara kaam karna hai to actually mei mai isko copy paste
// kar leta hu taki thoda sa time bache humara
// to yeh lijiye setTimeout maine liya yahan se 
// (promiseFour se setTimeout copy kar liya)
// as it is paste kar diya

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)    
// })

// likh liya promises(2).js file mei

// 32:47

// ab thoda sa hum errors etc aur yeh jitne bhi
// values hai (see code of setTimeout) in sabko thoda sa
// change karenge

// isko (username: "hitesh" mei "hitesh" ko) bol dete hai "javascript"
// aur password humara "123" hi rehne dete hai

// error (see else{}, see reject) 
// isko ( reject('ERROR: Something went wrong') ) hum
// reject('ERROR: JS went wrong') likh dete hai taki atleast pata
// lage ki humara konsa wala error aa raha hai (in terminal o/p)
// konsa wala value reject ho rahi hai to yeh promiseFive ho gaya

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// likh liya promises(2).js file mei

// 33:04

// achha theek hai ab kya hai abhi tak aapne jo syntax
// dekha , wo kya tha ki jab bhi aapke pas promise aa jaye
// iss tareh se -- promiseFive (in next line) (const promiseFive = ...)

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// promiseFive

// likh liya promises(2).js file mei

// to promiseFive.then() laga do

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// promiseFive.then()

// likh liya promises(2).js file mei

// ab kya hai actually mei yeh real situation hai mai aapko
// batata hu ki actually mei hua kya
// ek bar mai (Sir) ek live class le raha tha
// aur uske andar maine ek promise tha isi tareh se
// uss promise ko maine async await se handle kar diya

// ab wo bachha to ho gaya pareshan ki sir yeh kaise ho gaya,
// are promise kya hai -- future mei hone wali ek cheej hi to hai

// aur yeh koi guarantee nahi hai ki humesha aap usko (promise ko) .then()
// .catch() se hi handle karoge (33:33)
// nahi nahi , aisa nahi hai aapne jahan se bhi padha wo shayad
// thoda sa half padha aapne, padhaya to sahi hoga jisne bhi
// padhaya hoga

// but actually mei aapko jaruri nahi hai ki humesha aap promise
// .then() .catch() se hi karo, especially yeh topic kaafi
// discuss hota hai jab aap database connection karte hai
// 33:46

// kuch log async await prefer karte hai, 
// kuch log .then() karte hai 
// aur kayi log aise bhi aake jidd te hai -- ki
// nahi nahi mere favourite youtuber ne to bataya tha ki
// .then() hota hai , dot aa..., async await to bahut bekar hai
// nahi nahi aisa kuch bhi nahi hai (33:57)

// aa..., aap .then() bhi use kar sakte hai yeh syntax bhi

// to dekhiye .then() maine aapko syntax bataya aap use
// kar sakte hai ( promiseFive.then() ) lekin ab hum
// kya karte hai ispe ek dusra approach lagate hai
// ki mai iss bar kuch aur karna chahta hu ki iss
// promise yeh jo five hai (promiseFive) isko mai
// dusri tareh se accept karna chahta hu ya isko karna
// chahta hu

// (promiseFive.then() ko backspace kar diya)

// to ek aur humare pas ek syntax hota hai async await ka
// syntax
// async await kya hota hai exactly .then() .catch()
// type se hi hai ki thodi der wait karta hai kaam ke
// hone ka, agar wo (kaam) ho jata hai tab hi aage badhta hai (async await)
// varna wahi pe aapko error de deta hai (34:26)

// to isme kya hai ki thoda gracefully hum catch (.catch()) handle nahi
// karte hai, yeh ek thoda sa iska (async await) issue rehta hai
// but kayi jagah hume jaruri hota hai ki database connection hua
// hi nahi to mujhe aage badhna hi nahi hai (34:34)
// uss cases mei

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// async

// likh liya promises(2).js file mei

// to chaliye aapne ek function yahan pe declare kara
// aur iss function ka naam hum le lete hai consumePromiseFive
// -- async function consumePromiseFive
// aur to kya hi naam denge yahan pe
// -- async function consumePromiseFive(){}

// ab promiseFive ko consume kaise karna hai (34:46)

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// async function consumePromiseFive(){

// }

// likh liya promises(2).js file mei

// ab dekhiye jahan pe bhi async aa gaya 
// ( async function consumePromiseFive(){ )
// ab aap ek andar ( async function consumePromiseFive(){ ke andar)
// ek aur naya keyword use kar sakte hai -- await

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// async function consumePromiseFive(){
//     await
// }

// likh liya promises(2).js file mei

// to humne kya kaha -- await
// aur usko kaha ki ji await karte raho
// kya await karte raho
// yeh jo promiseFive hai
// -- await promiseFive
// yahan pe isko

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// async function consumePromiseFive(){
//     await promiseFive
// }

// likh liya promises(2).js file mei

// 34:57

// ab kya hai ki aapne jaise hi await kara 
// iss promiseFive ke liye (const promiseFive = ...)
// to jo bhi isse (const promiseFive = ...) value hogi
// wo aapke pass aa jayegi ab

// ab value konsi ayegi 
// ya to .then() se ayegi
// ya .catch() se ayegi

// ab dekhte hai kahan se value aati hai 
// kaise aati hai usko bhi hum dekhte hai

// 35:09

// theek hai ji to yeh to ho gaya humare pas promiseFive
// ( await promiseFive )
// lekin isko ( await promiseFive ) ek variable mei
// hold bhi to karna padega

// to suppose kariye isko const de dete hai hum yahan pe
// aur isko bol dete hai -- const response
// const response = await promiseFive
// theek hai ji

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// })

// async function consumePromiseFive(){
//     const response = await promiseFive
// }

// likh liya promises(2).js file mei

// ... theek hai ji aapne response yahan pe handle kar liya hai
// ( const response = await promiseFive )
// (35:22)

// promiseFive ke baad ; laga diya 
// (no need aise hi, sir ne function(){} ka syntax galat likha tha
// usko debugg karne ke chakkar mei)

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive(){
//     const response = await promiseFive
// }

// likh liya promises(2).js file mei

// to theek hai yeh humare pas response aa gaya
// ( const response = await promiseFive )
// ab isko hum jaate hai pehle console.log() ke andar
// ki response kya aa raha hai aapke pas wo batayiye aap
// -- console.log(response)

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

// likh liya promises(2).js file mei

// revision -- to yeh lijiye humne likha async
// async , 
// wo hi humara function 
// async function
// ab function kya hai humara wapas se consumePromiseFive
// async function consumePromiseFive(){

// }

// ab iske andar kya karna hai, maine bataya tha aapko
// aap await keyword use kar sakte hai (36:24)

// async function consumePromiseFive(){
//     await
// }

// kya await kar sakte hai ki humara yeh jo promiseFive hai
// (const promiseFive = ...)
// jo bhi isse (const promiseFive = ...) resolve hoke aye
// ( const promiseFive = new Promise(function(resolve, reject){ see code)
// (let error = true, if{resolve} else{reject} see code)
// ab chahe error aye , chahe kya aye , 
// mujhe pata to hai nahi ki kya aane wala hai,
// bas mai uska wait kar raha hu 
// (jo bhi iss promiseFive se resolve hoke aye mai uska wait kar raha hu)
// 36:32

// async function consumePromiseFive(){
//     await promiseFive
// }

// achha ek cheej dhyaan rakhiyega promise (const promiseFive = ...) 
// ek object hai, to isko ( await promiseFive ) aap 
// iss tareh se ( await promiseFive() ) consume nahi karte ho
// theek hai yeh eventual completion object hai but hai
// to object hi
// 36:40

// ab isko ( await promiseFive ) hum yahan pe ek response
// ke andar (const response) handle (store) kar lete hai
// yeh lijiye response
// const response = await promiseFive

// async function consumePromiseFive(){
//     const response = await promiseFive
// }

// ab response ( const response = await promiseFive ) ke
// andar value kya ayegi, to yeh lijiye
// console.log(response)

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response) 
// }

// ab sabse interesting baat yahan pe yeh hai ki jab bhi
// yeh function ( async function consumePromiseFive(){ )
// aap execute karwayenge,
// abhi hi karwa lete hai -- consumePromiseFive()

// 36:57

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

// consumePromiseFive()

// likh liya promises(2).js file mei

// 36:57

// tab humare pas error nahi ayegi , pehle humne dekha
// tha error aa rahi thi, kyu error aa rahi thi kyuki
// aapne uss value... , uss data ke andar, uss variable ke andar
// koi value ayi hi nahi thi aur aapne usko print karane
// ki koshish kari

// 37:08

// kyuki aapne ek magical keyword isko de rakha hai async await

// ( // async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// } )

// to wo error nahi ayegi yahan pe easily kaam ho jayega
// chaliye isko print kara ke dekhte hai 2 - 3 methods ke
// andar ki kaise values ho rahi hai kya value aa rahi hai
// humare pas

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong
// The promise is either resolved or rejected
// node:internal/process/promises:389
//       new UnhandledPromiseRejection(reason);
//       ^

// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".
//     at throwUnhandledRejectionsMode (node:internal/process/promises:389:7)
//     at processPromiseRejections (node:internal/process/promises:470:17)
//     at process.processTicksAndRejections (node:internal/process/task_queues:96:32) {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// Node.js v20.17.0

// (37:19)

// to thoda sa yahan pe time laga (terminal o/p mei)
// aur uske baad kya aaya humare pas --
// The promise is either resolved or rejected (see o/p , under ERROR: Something went wrong)
// theek hai yahan tak to humara kaam ho gaya

// ( UnhandledPromiseRejection: This error originated either by throwing inside of an async function
//  without a catch block, or by rejecting a promise which was not handled with .catch(). 
// The promise rejected with the reason "ERROR: Something went wrong". 
// see o/p)

// This error originated either by throwing inside of an async function
// without a catch block, -- to ek aur cheej seekhne ko mili, (37:32)

// haa yeh database jab connectivity etc karte hai tab mai sikhata hu
// ki actually mei agar aap iss tareh se 
// ( This error originated either by throwing inside of an async function
// without a catch block, (see o/p) mei catch block ko mouse drag highlight kiya sir ne )
// database connection kar rahe ho

// aur abhi hume pata hai yahan se error hi throw kiya hai humne true
// ( let error = true if (!error) {resolve} else {reject} -- see code )

// achha agar yahan pe error nahi aati kuch bhi (37:42)
// false agar aata (let error = false)
// to obvious si baat hai sab kuch badiya chalta
// koi dikkat wali baat hi nahi thi kyuki aapne
// async kara await kara

// ( async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// } )

// aur aapka sara kaam ho gaya hai

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

// consumePromiseFive()

// likh liya promises(2).js file mei

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong
// The promise is either resolved or rejected
// { username: 'javascript', password: '123' }

// 37:49

// theek hai, to yeh dekhiye sara kaam ho gaya hai humare
// pas javascript , 123 sab aa gaya hai
// ( { username: 'javascript', password: '123' } see o/p )

// (pehle wale promiseFive ke o/p mei agar error ho to correction
// kar lena username: "javascript" karke code mei)

// (37:54)

// Lekin jab aapka iss tareh se promise designed hai (as follows)
// aur wahan pe error aa sakti hai (let error = true)

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }

// consumePromiseFive()

// likh liya promises(2).js file mei

// ya fir aap suppose kariye ek network request
// hi kar rahe the 
// (await promiseFive mei promiseFive pe mouse drag highlight kiya sir ne)
// aur uss network request ke andar agar
// iss tareh se (as follows)

// ( async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// } )

// values aa gayi hai (38:04)
// to problem ho sakti hai
// kyuki async await ka ek problem kya hai
// wo directly errors ko handle nahi kar sakte hai

// aur iss case mei agar humare pas error hai (let error = true)
// to obvious si baat hai wo khud hi aapko suggest kar raha
// hai (see terminal o/p)

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong
// The promise is either resolved or rejected
// node:internal/process/promises:389
//       new UnhandledPromiseRejection(reason);
//       ^

// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".
//     at throwUnhandledRejectionsMode (node:internal/process/promises:389:7)
//     at processPromiseRejections (node:internal/process/promises:470:17)
//     at process.processTicksAndRejections (node:internal/process/task_queues:96:32) {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// Node.js v20.17.0

// ki aapne shayad yeh poori cheej ko (code ko) try catch (.catch()) (.then() .catch())
// block mei wrap nahi kiya hai 
// (see o/p -- UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block,
//  or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".)

// aapne direct hi usko handle kiya hai aur expect kiya hai
// ki jab bhi yeh promise resolve hoga 
// (await promiseFive mei promiseFive ko mouse drag highlight kiya sir ne)
// aapke pas value 
// ( const response = await promiseFive mei response ko mouse drag highlight kiya sir ne
// as console.log(response) )
// ayegi hi ayegi

// 38:25

// but kyuki rejection hua hai (let error = true, pe mouse cursor hover kiya sir ne)
// to obvious si baat hai reject aya hai aapke pas ( else {reject('ERROR: JS went wrong')} )
// 38:28
// reject ne aapko error diya hai ( else {reject('ERROR: JS went wrong')} )
// reject ka matlab hi error code hai

// achha isko (iss code ko) kya kar sakte hai ,
// poore ko aap try catch block mei kar dijiye (.catch())
// ki theek hai async await to ho gaya hai

// ( async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// } )

// iss code ko mai leta hu cut karta hu

// ( async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }  mei 

//     const response = await promiseFive
//     console.log(response);

// ko cut kar liya)

// aur yahan pe ek bar try catch hum try kar lete hai

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive() {
//     try {
        
//     } catch (error) {
        
//     }
// }

// consumePromiseFive()

// likh liya promises(2).js file mei

// 38:41

// try part mei mai try karta hu console.log(response) ki

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
        
//     }
// }

// consumePromiseFive()

// likh liya promises(2).js file mei

// aur agar error aa gaya ( catch (error) {} )
// to mai usko gracefully handle kar lunga iss bar
// uske andar ( catch (error) {} ) console.log()
// laga leta hu aur yeh lijiye 
// error maine gracefully handle kar liya
// jo bhi error mere pas aa raha tha
// -- console.log(error)

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)    
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// likh liya promises(2).js file mei

// ab iss situation mei kya code run hoga
// chaliye dubara se karke dekhte hai

// (38:55)

// node '.\09_advance_one\promises(2).js' in terminal

// o/p Async task is completed
// Promise consumed
// Async task 2
// Async 2 resolved
// { username: 'Chai', email: 'chai@example.com' }
// ERROR: Something went wrong
// The promise is either resolved or rejected
// ERROR: JS went wrong

// ('Error: JS went wrong' likh lena promiseFive ke setTimeout
// ke else ke reject mei)

// to iss bar humare pas gracefully error handle hua hai
// -- ERROR: JS went wrong (see o/p)
// bas itna sa hi antar aata hai

// to dono mei se koi syntax galat nahi hai
// aapko agar yeh .then() .catch() wala syntax (promiseFour example -- .finally() wala) 
// easy lagta hai, to usme bhi aapne itna hi code
// likhna hai (see promiseFour example -- .finally() wala)

// agar aapko yeh jada easy lagta hai ki try catch 
// (try {} catch (error) {} promiseFive example) ke baad mai karna chahu
// to aap wo bhi kar sakte ho,
// as such koi problem wali baat hi nahi hai

// theek hai ab yahan pe ek chota sa aur yahan pe
// hum experiment sort of kar lete hai

// abhi humne dekha tha ki last video ke andar
// humne ek json response etc kara tha to wo
// bhi mai aapko dubara se kara deta hu

// (bluebirdjs.com/docs/api-reference.html webpage pe aa gaye)

// (new tab mei aa gaye browser mei)

// aap chahein to wo ka wo hi response use kar sakte hai
// github ka, 
// chahein to aap yeh wala response
// (https://jsonplaceholder.typicode.com/users)
// bhi use kar sakte hai

// abhi to humne khud ki bhi library bana li hai ek open source
// kabhi uspe bhi baat karenge
// (39:30)

// but yahan pe 
// (https://jsonplaceholder.typicode.com/users)
// hum dekh sakte hai ki url hai jsonplaceholder.typicode.com/users
// to yahan pe (https://jsonplaceholder.typicode.com/users)
// bahut sare users mil jate hai 
// (scroll down and see in https://jsonplaceholder.typicode.com/users)

// kuch nahi hai basically array hai

// ( [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       } 

// see in https://jsonplaceholder.typicode.com/users)

// jiske andar bahut sare users hai ,
// to mai chahta hu yeh response 
// (https://jsonplaceholder.typicode.com/users wala response)

// aap chaho to wo hi github wala bhi use kar sakte ho koi
// dikkat wali baat nahi hai, maine (sir ne) socha ek variety ho
// jayegi to isliye maine kaam kar liya
// 39:45