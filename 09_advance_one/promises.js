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