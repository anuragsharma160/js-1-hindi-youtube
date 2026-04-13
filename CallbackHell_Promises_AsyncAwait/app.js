// Synchronous , 

// console.log("one")
// console.log("two");
// console.log("three");

// sequence

// first kaam complete hone par hi 
// second kaam start hoga

// ============================================

// Asynchronous

// Kabhi kabhi hum synchronous programming (sequence) karte hai na,
// to ho sakta hai beech wali koi instruction ho
// jo jada time le rahi ho kaam complete karne mei

// Ab console.log() (as follows)

// console.log("one")
// console.log("two");
// console.log("three");

// to bas print karwana hota hai browser console window mei
// wo to bahut jaldi instantaneiusly kaam ho jata hai,

// par kuch kaam aise hote hai jo kuch second le sakte hai
// to wo time le sakte hai complete hone mei 
// to aise mei agli wali instructions ko wait kyu karna pade
// unke liye
// to yahan se concept nikal ke aata hai asynchronous programming ka

// Next chapter mei padhenge achhe se jab API padhenge

// for eg as follows

// code likha (synchronous)
// code likha
// API se data chahiye (asynchronous)
// code likha
// code likha

// ab API ka code humne to likha nahi
// ho sakta hai API 2 second laga de data bhejne mei
// 2 second programming ke andar kaafi bada delay hota hai

// ho sakta hai API ke andar failure ho gaya ho 
// wo 10 second baad data bhej rahi hai

// to kya iske baad ( API se data chahiye (asynchronous) ) 
// wala kaafi sara code hai usko wait karna chahiye ki 
// API se ek baar data ayega tabhi baki ka code run hoga
// jo shayad code iss API data pe depend bhi nahi karta

// to aise cases mei synchronous programming karna achhi cheej
// nahi hoti,

// aise cases mei hum asynchronous programming ki taraf jaate hai

// Ab yeh asynchronous programming kehne ka kya matlab hai
// asynchronous programming ka concept yeh kehta hai

// code 1
// code 2
// API 
// code 3
// code 4

// to asynchronous programming ka concept yeh kehta hai
// code 1 run kar do
// code 2 run kar do
// agar yeh API wala code ya yahan par koi bhi code ho sakta hai
// koi bhi instructions ho sakti thi, 
// agar yeh instruction jada time leti hai to isko parallely run hone do
// aur aap aage ka (code 3 and code 4) execute karte raho

// aur jaise hi maan lo 5 second baad yeh (API) run ho gaya
// fir iska (code 3 and code 4) o/p dikha do

// to iss tarike se hume iss instruvtions ke (API)
// complete hone ka wait nahi karna padega

// to iss tarike se real time systems kaam karte hai ki koi
// instructions ko execute hone mei jada time lag raha hai
// to uske liye jada wait nahi karna hume

// hume kya karna hai aage badh jana hai

// ab iska ek eg dekhte hai javascript ke andar
// as follows

// setTimeout()

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000)

// se o/p in browser console

// another example

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 4000)

// another example

// setTimeout(() => {
//     console.log("hello");
// }, 4000)

// to setTimeout apna time leta hai immediately nahi run hota

// another example

// console.log("one")
// console.log("two")

// setTimeout(() => {
//     console.log("hello");
// }, 4000)

// console.log("three");
// console.log("four");

// o/p one
// app.js:123 two
// app.js:129 three
// app.js:130 four
// app.js:126 hello

// isko kehte hai asynchronous programming
// iss chapter ke andar asynchronous programming ko hum detail
// mei explore karne wale hai

// ======================================================================================

// 12:40

// Callbacks
// A callback function is a function passed as an argument to another function

// 12:52

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallBack) {
//     sumCallBack(a,b)
// }

// dusre function ka kaam pehle function ko
// call karwana hai

// to hum calculator ko call kar sakte hai
// to calculate the sum of 1 and 2
// and iske andar hum apne sum function ko bhi pass
// kar sakte hai

// calculator(1, 2, sum)

// sum ka reference de diya calculator ke execution call ko
// and sum ko define humne kar hi rakha hai

// o/p 3

// sum is callback function isliye sumCallBack likha hai
// sumCallBack ki jagah sum bhi likh sakte hai

// jab bhi hum callbacks ko pass karte hai ise paranthesis ke saath pass
// nahi karna, kyuki () ke saath pass kiya to run nahi karega
// code , kyuki () ke saath pass karne ka matlab hai
// ki hum sum functio ko yahin ki yahin execute kar rahe hai
// ( calculator(1, 2, sum()) ) , 
// error aa jayega, sumCallBack is not a function

// aise ( calculator(1, 2, sum()) ) nahi likhenge
// aise ( calculator(1, 2, sum) ) likhenge
// as iska ( sum() ) matlab hai execution call
// kyuki yahan ( function calculator(a, b, sumCallBack) { ) jo
// value pass hui that is not a function, 
// that ( sumCallBack ) is reference of sum function

// isko ( calculator(1, 2, sum()) mei sum() ko ) aapne execute kar diya
// aur kuch cheej print karwa di that's why error
// jabki sum function calculator function ki definition ke andar hi execute
// ho raha hai

// to callback function ko sirf unke naam ke saath pass karna padta hai
// without any paranthesis

// ===================================================================================

// same kaam ko aise bhi kar sakte the as follows

// ab hum chahte to sum ki jagah poora ka poora functio bhi
// pass kar sakte the

// function calculator(a, b, sumCallBack){
//     sumCallBack(a, b)
// }

// calculator (1, 2, (a, b) => {
//     console.log(a + b);
// })

// function ko call pehle kar liya , define baad mei
// kar diya (hoisting)

// yani callback ke andar hum kisi function ko already
// banakar sirf uska naam (reference) bhi pass kar sakte hai
// ya fir 
// complete wo function bhi hum pass kar sakte hai wo bhi valid syntax hoga

// yeh ho gaye sync prog ke callback

// =======================================================================

// asyn callback

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000)

// hello is also a callback

// iss tareh se callback synchronous aur setTimeout ke
// andar asynchronous tarike se bhi kaam karte hai

// 15:46

// ============================================================================

// Callback Hell

// Nested callbacks

// Nesting

// Nested if else

// let age = 19
// if(age >= 18){
//     if(age >= 60){
//         console.log("senior");
//     } else{
//         console.log("middle");
//     }
// } else{
//     console.log("child");
// }

// Nested loops

// for(let i = 0; i < 5; i++){
//     let str = ""
//     for (let j = 0; j < 5; j++) {
//         str = str + j
//     }
//     console.log(i, str);
// }

// suppose humne aisi website banayi hai jo database se data
// leke aati hai

// username , password enter karega to
// hum check karenge database mei match kar raha hai kya
// to aap log in ho jaoge

// to jab bhi hum database se kuch mangwate hai to usme
// ho sakta hai kuch time lag jaye
// kyuki kuch databases fast hote hai , 
// kuch database ke andar ho sakta hai kuch time lag jaye

// large database se data fetch karne mei time lagta hai

// to aisa hi hum ek chota sa function bana lete hai
// uss database ki copy bana lete hai jo humare liye data
// banega

// to iss function ko hum keh dete hai getData
// yeh hume data return karta hai, 
// this (getData) is basically our database

// function getData(dataId) {
//     console.log("data", dataId);
// }

// jab hum getData ko call lagayenge means
// hum database se data access karne ki koshish
// kar rahe hai

// getData(123) in browser console

// o/p data 123
// undefined

// getData(1) in browser console

// o/p data 1
// undefined

// let suppose yeh database (getData) kuch time leta hai
// abhi to turant send kar raha hai, yeh 2 second leta
// hai data ko search and send karne mei

// 2 second ke liye hum setTimeout ko use kar sakte hai

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000)
// }

// getData(456) in browser console

// o/p undefined
// app.js:320 data 456

// getData(4) in browser console

// o/p...

// ===================================================================

// ab for eg hume aisa code likhna hai jisme
// hume pehle to data 1 chahiye, 
// uske baad data 1 humare pas aa gaya
// fir hume data 2 chahiye
// fir data 2 aa gaya
// uske baad data 3 chahiye

// iss cheej ko karne ke liye hum kya kar sakte hai
// humare dimag mei aata hai pehle getData(1) kar dete hai
// uske baad getData(2), uske baad getData(3) kar dete hai

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000)
// }

// getData(1)
// getData(2)
// getData(3)

// o/p data 1
// app.js:348 data 2
// app.js:348 data 3

// teeno data humare pas ek saath aa gaye
// hume ek saath nahi chahiye tha

// hume data 1 chahiye
// fir 2 sec ka delay chahiye
// fir data 2 chahiye
// fir 2 sec ka delay chahiye
// fir data 3 chahiye


// teeno ka timer ek saath complete hua aur teeno ka ek saath humare
// pas data1 , data 2 , data 3 aaya

// 25:27

// par aisi situation ho sakti hai ki first data aye data 1
// tabhi hum second data 2 search karein
// second data 2 aye tabhi hum third data 3 search karein

// for eg - instagram account login
// ab humara code iss tareh se likha hua hai ki pehle
// database ke andar username search kiya jayega

// agar wo username instagram ke upar exist karta hoga tabhi
// hum password ko search karenge

// to pehle hum username ko search kar rahe hai, 
// agar username mil gaya ho sakta hai usme 2 second, 1 second lag jaye
// vaise real life mei millisecond ya aur bhi kum time
// lagta hai search karne mei

// but for understanding purpose let use 2 sec lag gaye
// username ko search karne mei

// ab username ho sakta hai ho hi nahi database mei
// to hum password ko kyu check karein

// hum user ko batayenge seedha aapka username galat hai
// it doesn't exist in our database

// Lekin agar username mil gaya fir hum password ko
// check karenge, to usme bhi ho sakta hai agle 2 sec
// lage

// to iss tareh ki condition hum yahan pe replicate karne ki
// koshish kar rahe hai jisme hume data jo search karni hai cheej
// wo ek saath nahi chahiye, 
// hume to individual delay ke saath cheejein chahiye
// to usko karne ka kya tarika hoga
// usko karne ka ek practical tarika hota hai callbacks

// callback se hum kaise cheej ko kar sakte hai

// humare pas yeh jo getData(1) naam ka jo function hai
// ise hum kya karenge , ek aur function iske pas (function getData)
// pas kar sakte hai,
// ek aur callback iss getData (function getData) ko
// pass kar sakte hai jisko keh sakte hai getNextData

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000)
// }

// dataId(1)
// dataId(2)
// dataId(3)

// getNextData kya karega ek bar yeh data humne print karwa
// liya ( console.log("data", dataId); ) uske baad bhi
// hume koi data chhaiye hoga to usko get karega

// to getNextData ek function pas kar denge
// ( function getData(dataId, getNextData){ )
// aur ek bar humne yeh print karwa liya 
// ( console.log("data", dataId); )
// fir hum getNextData ko call karenge -- getNextData()

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         getNextData()
//     }, 2000)
// }

// getData(1, getData(2))

// 1 humara dataId ho jayega
// humne usi function ko (getData(2)) ko as a callback
// pas kar diya
// ab iss tareh se hum callback pas nahi kar sakte
// kyuki yahan (getData(2)) function ke saath ()
// lag gaya to wo immediately execute ho jayega
// error aa jayega -- getNextData is not a function

// to aise (getData(2)) nahi likhna apne callback ko

// jab bhi hume saath mei kuch argument pass karna hai
// (getData(2))
// to apne callback ko aise (getData(2)) likhne ki bajaye
// hum kya karte hai hum ek arrow function bana dete hai
// aur isko aise likh dete hai

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         getNextData();
//     }, 2000)
// }

// getData(1, () => {
//     getData(2)
// })

// function ke andar dusra function hai, 
// this arrow function is our callback function

// 28:46

// ek aur cheej hume dhyan rakhni hai kyuki 
// getData() ke andar first time to humne koi callback pass kar diya
// ( getData(1, () => {}) )
// par yeh jo second time hum getData(2) ko call kar rahe hai
// isme to getNextData hai hi nahi
// ( function getData(dataId, getNextData){ )

// to yahan hum check laga sakte hai ki agar getNextData yeh
// function exist karta ho, tabhi iss function ( getNextData )
// ko call karo

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2)
// })

// o/p data 1
// data 2

// 2 sec delay then data 1
// 2 sec delay then data 2

// to jo kaam hum karna chah rahe the usko
// humne achieve kar liya kaise achieve kar liya
// callback ki form mei

// (callback function ka ya to reference (means only name)
// ya definition pass karte hai)

// =========================================================

// Ab let suppose 2 second lagte hai (30:10)
// hume data 1 lane mei, 
// fir 2 sec lagte hai hume data 2 lane mei
// ab dubara se 2 sec ke baad hume data 3 chahiye
// to wo to kaam humare liye bahut aasaan ho gaya

// basically humne yahan pe jo callback pass kiya
// as follows

// getData(1, () => {
//     getData(2)
// })

// aise hi callback hume iss function ( getData(2) ) 
// ke andar pass karna hai, to yahan pe ( getData(2) ) 
// kya karenge ek arrow function bana lenge
// aur arrow function ke andar kar denge get data of 3
// getData(3)

// function getData (dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// })

// o/p data 1
// data 2
// data 3

// ==========================================================

// Infact ab agar aapko data 4 bhi chahiye
// to kuch nahi karna 3 wale mei ek arrow function banana hai
// ( getData(3) ) aur iske ( getData(3) ) andar get data
// karna hai 4 -- getData(4)

// 30:48

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })

// ab yeh humne achieve kar liya using callback

// ============================================================

// Callback Hell

// but this (just above) is callback hell

// real programming ke andar bahut complex programs
// hote hai jaise getting data 2 ...

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, () => {
//             console.log("getting data 4");
//             getData(4)
//         })
//     })
// })

// ====================================================================

// Callback Hell ki problem ko solve karne ke
// liye hum promises use karte hai

// 33:32

// ==========================================================================

// Promises

// Promise in javascript is for eventual completion of task

// yani humare code ne hume ek promise de diya iska matlab hai
// ki eventually jis bhi, jo bhi kaam hum karne ki koshish
// kar rahe hai wo ya to resolve hoga
// ya reject hoga

// matlab wo kaam hoga, ab wo successfully kaam hota hai
// ya uske andar koi error aa jata hai
// wo hume nahi pata but eventually kaam humara
// complete ho raha hoga

// Promises are a solution to callback hell

// kaise yeh callback hell ki problem ko solve
// karta hai yeh hum baad mei samjhenge but pehle hum
// promises ko samajhte hai

// ==============================================================================

// let promise = new Promise(function(){

// })

// Promise word is class in javascript

// promise ko create karne ke liye hum ek function
// pass karte hai

// aur function ke andar 2 handlers callback functions hote hai -- resolve and reject

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
// })

// promise in browser console

// Promimse state pending
// Promise result undefined

// promise ke andar prototype hota hai kyuki yeh ek object
// hai har object ke pass prototype hota hai

// abhi humari state hai pending state and result is undefined

// ============================================================================

// par agar hume promise ko fulfill karana hai to
// uss case mei hum resolve() ko likhte hai

// yeh resolve() function automatically javascript se create hota
// hai

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123)
// })

// promise in browser console

// Promise state fulfilled
// Promise result 123 (because we use resolve(123))

// 39:43

// =================================================================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success")
// })

// promise in browser console 

// Promise state fulfilled
// Promise result success (because we use resolve("success"))

// ====================================================================

// jaise promise resolve hota hai vaise promise reject bhi hota hai

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error")
// })

// promise in browser console 

// o/p I am a promise
// app(2).js:113 Uncaught (in promise) some error

// promise in browser console

// promise state rejected
// promise result some error

// =======================================================================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error occurred")
// })

// o/p I am a promise
// app(2).js:113 Uncaught (in promise) some error occurred

// promise in browser console

// promise state rejected
// promise result some error occurred

// ==================================================================

// vaise yahan hum promise object ko create kar rahe hai
// but general programming ke andar hum promise object ko create nahi
// karte

// agar hum kisi API ke pas request bhejte hai ki hume
// kuch data chahiye, to wo hume kya bhejti hai
// wo API hume ek promise return karti hai

// aur fir hum promises se apne data ke saath deal karte hai
// promises se apna data nikaalte hai
// result nikaalte hai
// uski state check karte hai

// but yahan kyuki API ke saath humne deal karna start nahi
// kiya, hum dusre kisi system ke saath deal karna start
// nahi kiya, to abhi apne promises ko hum khud create kar rahe hai

// par general programming ke andar dusri APIs,
// dusre systems, dusre log humare liye
// promises ko create karte hai aur hum bas promises
// ko handle kar rahe hote hai

// ===================================================================

// ab general programming ke andar promises kaise use hote hai
// for eg humare pas humara yeh function tha (41:53)
// jo getData ke liye hum use kar rahe the as follows

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// ki let suppose humari yeh koi API hai
// ( function getData(dataId, getNextData){ )
// jo hume data return karti hai

// ab APIs is tarike se (as follows) 

// setTimeout(function(){
    //     console.log("data", dataId);
    //     if(getNextData){
    //         getNextData()
    //     }
    // }, 2000)

// hume directly data
// return nahi karti (42:02)

// APIs kya karengi, hume ek promise return
// karengi

// function getData(dataId, getNextData){
//     return new Promise()
// }

// new promise wo hume return karti hai
// aur new promise ke andar kya ho sakta hai,
// yeh humara ek function hoga arrow function
// jiske andar resolve hoga and reject hoga

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {

//     })
// }

// generally isi tareh se logically isi tareh se
// cheejein work kar rahi hoti hai
// ki humare pas ek promise return hoke aata hai
// (API se)
// promise ke andar resolve and reject hai

// and promise ka yeh jo function hai arrow function
// iske andar sara kaam ho raha hota hai
// (setTimeout code paste kar diya inside arrow function)

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if(getNextData){
//                 getNextData()
//             }
//         }, 2000)
//     })
// }

// to iss tareh se jab hum getData ko call karenge
// to hume kya milega,
// getData ko call karne pe ek promise return hoke
// milega

// getData() in browser console

// o/p [[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// app(2).js:128 data undefined (after 2 second)

// promise state pending hai, 
// promise result undefined 

// as humne resolve nahi kiya isliye promise state pending hai, 
// promise result undefined  hai

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if(getNextData){
//                 getNextData()
//             }
//         }, 5000)
//     })
// }

// let result = getData(123) 
// result 
// in browser console

// 43:34

// Promise state pending
// Promise result undefined
// 5 second baad data 123

// result in browser console

// Promise state pending
// Promise result undefined
// 5 second baad data 123

// abhi bhi pending hai because 
// apne promise ko humne na resolve kiya na reject kiya

// to jab bhi koi API ya koi function
// promise return kar raha hota hai
// to agar successfullt agar hum humara data return (print in this case)
// kar dete hai (console.log("data", dataId);)
// to last mei jate jate hum kya kar dete hai
// apne promise ko hum resolve kar dete hai
// resolve("success")

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData()
//             }
//         }, 5000)
//     })
// }

// jaise hi hum data ko print karwa dein vaise hi 
// promise resolve ho jayega

// getData ko call lagane pe yeh data nahi dega
// data yeh 5 second baad dega
// hume yeh immediately promise dega ki 
// mai aapko vada kar raha hu 5 second
// baad mai apko data de dunga

// let promise = getData(123) in browser console

// let promise = getData(123)
// undefined

// promise
// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "pending"
// [[PromiseResult]]
// : 
// undefined

// app(2).js:128 data 123 (after 5 seconds)

// promise
// Promise {<fulfilled>: 'success'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "success"

// yeh API directly data return nahi karti yeh apna kuch time
// le rahi hai return karne mei
// yeh immediately hume promise return kar rahi hai
// ki mai vada kar raha hu 5 sec baad data return kar dunga

// jab tak setTimeout execute nahi hota yeh promise pending hai

// =======================================================================

// yahan pe promise humne create kara but general programming ke andar
// hume promise return hoke milta hai
// jaise yahan pe (as follows)

// (let promise = getData(123)
// undefined)

// hume promise return hoke mila
// fir hum apne promise ke saath kuch kuch kuch kuch operations
// kar sakte hai

// ===========================================================================

// jaise agar yahan pe kuch error aa jata, 
// for eg hum data send nahi kar pate
// console.log("data", dataId) ko comment out kar diya
// resolve("success") ko comment out kar diya

// to use case mei kya karte hum apne promise ko
// yeh API kya karti reject karti
// error ke saath reject kar rahi hoti
// reject("error")

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error")
//         }, 5000)
//     })
// }

// let promise = getData(123)
// undefined

// promise
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined

// app(2).js:142 Uncaught (in promise) error (after 5 seconds)
// (anonymous) @ app(2).js:142
// setTimeout
// (anonymous) @ app(2).js:141
// getData @ app(2).js:140
// (anonymous) @ VM620:1Understand this error

// promise
// Promise {<rejected>: 'error'}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: "error"

// ==============================================================================================================

// yeh promise ka basic ho gaya

// par promise ko use kaise karte hai

// yeh to promise ko create karna ho gaya
// yeh to promise ko resolve reject karna hoga
// par hume to nahi karna resolve reject
// wo to koi aur karega humare liye

// hume ek bar promise mil gaya to uss
// promise ko hum use kaise karenge wo
// humare liye sabse important hai

// 47:34

// ==========================================================================================

// to promise ko use karne ke liye humare pas do (2)
// function hote hai .then() and .catch()

// .them() -- fulfill
// .catch -- reject

// fulfill hone pe ho sakta hai hume kuch success ka message
// dikhana ho (.then()) 

// ya 

// promise reject ho raha ho tab ho sakta hai hume kcuh kaam karna ho
// reject hone par ho sakta hai hum ek aur request bheje
// dubara data maange kuch bhi kaam ho sakta hai

// promise ke fullfil ya reject hone ka wait karte hai
// to fulfill hone pe kuch kaam karane hote hai
// reject hone pe kuch kaam karane hote hai

// fulfill -- promise.then()
// reject -- promise.catch()

// .then() ka callback promise ke fullfill (resolve())
// hone pe hi execute hota hai

// .catch() ka callback promise ke reject (reject())
// hone pe hi execute hota hai

// for eg

// promise ke resolve hone pe hum kya kaam karwana
// chahte hai uss kaam ko hum .then() ke callback mei
// likh sakte hai (wo kaam kuch bhi ho sakta hai)

// promise ke reject hone pe hum kya kaam karwana
// chahte hai uss kaam ko hum .catch() ke callback mei
// likh sakte hai (wo kaam kuch bhi ho sakta hai)

// ek function hai (eg API) jo ek promise return kar raha hai
// hum uss function ko call kar rahe hai 
// jaise hi promise resolve ho
// console.log("promise fullfilled"); print hoke aa jaye

// const getPromise = () => {
//     new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success")
//     })
// }

// let promise = getPromise()

// promise.then(() => {
//     console.log("promise fullfilled");
// })

// o/p I am a promise
// promise fullfilled

// 50:43

// ===============================================================================

// par agar iss promise ko reject kar dete yahan pe
// reject("error")

// uss case mei .then() ki cheej kabhi print nahi hogi

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("error")
//     })
// }

// let promise = getPromise()
// promise.then(() => {
//     console.log("promise fullfilled");
// })

// o/p I am a promise
// index.html:1 Uncaught (in promise) error

// error ko catch karne ke liye hume likhna
// padta hai promise.catch()

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("error")
//     })
// }

// let promise = getPromise()
// promise.then(() => {
//     console.log("promise fullfilled");
// })

// promise.catch(() => {
//     console.log("rejected");
// })

// o/p I am a promise
// app(2).js:178 rejected
// index.html:1 Uncaught (in promise) error

// ==========================================================

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("error")
//     })
// }

// let promise = getPromise()

// promise.then((res) => {
//     console.log("promise fullfilled", res);
// })

// promise.catch((err) => {
//     console.log("rejected", err);
// })

// o/p I am a promise
// app(2).js:197 rejected error
// index.html:1 Uncaught (in promise) error

// eg -- reject("network error")

// ============================================================

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success")
//     })
// }

// let promise = getPromise()

// promise.then((res) => {
//     console.log("promise fullfilled", res);
// })

// promise.catch((err) => {
//     console.log("rejected", err);
// })

// o/p I am a promise
// app(2).js:212 promise fullfilled success

// promise ka use -- .then() and .catch()

// ==============================================================

// Promise Chaining

// for eg humare pas koi asynchronous function hai
// yeh asynchronous function hume kuch data return karega
// ya data ki jagah yeh hume ek promise return karega

// ab promise return ho raha hai to uske andra kuch kaam
// hoga 
// aur kyuki yeh ek asynchronous function hai
// isliye hum kya karte hai yahan pe ek setTimeout chala
// dete hai
// ki 4 sec baad hume kuch data return karta hai
// (print karta hai)

// yeh asynchronous function hai , 
// asynchronous function kyu hai kyuki
// setTimeout() hum use kar rahe hai

// aur data resolve karne ke baad (print) apne 
// promise ko resolve kar leta hai
// resolve("success")

// ab iss asynchronous function ko hum call lagayenge
// aur call lagane pe yeh hume koi promise return karega
// jaise hi yeh promise resolve hota hai hum iske
// result ko print karwana chahte hai 
// to p1.then() kar sakte hai
// aur uske pehle likh diya -- console.log("fetching data1");

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc()
// p1.then((res) => {
//     console.log(res);
// })

// o/p fetching data1....
// data1
// success

// (setTimeout() -> resolve() -> .then() -> console.log)

// yeh wala kaam asyncFunc wala kaam yeh generally APIs
// kar rahi hoti hai, hume to promise milta hai (let p1 = asyncFunc())
// aur promise ke upar hum .then() laga dete hai

// ===============================================================================

// ab suppose ek humari API hai ( function asyncFunc1() { )
// jo hume data1 return karti hai

// aise hi mere pas ek aur dusri API hai ( function asyncFunc2() { )
// jo mujhe data2 return karti hai , 4 second ke baad

// mujhe chahiye ki pehle mere pas data1 aa jaye
// fir mere pas data2 aa jaye

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res);
// })

// console.log("fetching data2....");

// let p2 = asyncFunc2()
// p2.then((res) => {
//     console.log(res);
// })

// ab kayde se hum kya soch sakte hai ki
// hum data1 ko fetch karenge, hume promise1 return ho jayega
// fir .then() lag jayega (data1)

// fir hum data2 ko fetch karenge, 
// fir humare pas promise2 ayega
// fir hum .then() ko execute kara denge

// but actually kya hota hai ki 
// promise to humare pas aa gaya (let p1 = asyncFunc1())
// ab yeh wala kaam to parallely chalta rahega (p1.then())
// we dont have to wait for the promise1 to get resolve

// hum to aage ka kaam karenge

// to jaise hi yeh wala (let p1 = asyncFunc1()) 
// first promise ayega, waise hi immediately hum
// yahan ( console.log("fetching data2...."); )
// aa jayenge aur yahan bhi (let p2 = asyncFunc2())
// dono kaam parallely honge (p1 and p2)

// aur iss tareh se code likhne par dono data 1 and data 2
// ek saath print hoke ayenge kyuki dono 4 sec baad aane wale hai

// 57:34

// o/p fetching data1....
// app(2).js:264 fetching data2....
// app(2).js:242 data1
// app(2).js:261 success
// app(2).js:251 data2
// app(2).js:268 success

// par hume aise nahi chahiye, 
// hume chahiye pehle data 1 fetch ho 
// uske baad hi data 2 fetch ho

// to uske liye hum chaining kar sakte hai
// chaining yani ek then ke andar dusra then use kar sakte hai

// kaise , 
// hum chahte hai pehla promise resolve ho ( p1.then((res) => { )
// uske baad hi dusre data ke liye search kiya jaye

// yani instagram ke database mei username mila tab hi password
// search karo, vaisa hi

// ============================================================================

// to uske liye humara syntax yeh hoga
// (following ko ko backspace kar diya)

// console.log("fetching data2....");

// ( let p2 = asyncFunc2()
// p2.then((res) => {
//     console.log(res);
// })  ) 

// ki pehle hum data1 ko fetch karenge
// ( console.log("fetching data1...."); )

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res);
// })

// ki pehle hum data 1 ko fetch karenge
// ( console.log("fetching data1...."); )

// aur jaise hi data1 mil jata hai ( p1.then((res) => { )
// (i.e. promise1 ke resolve hone ke baad .then() ke callback function mei
// parameter receive ho gaya, means data1 mil gaya)
// to humne result ko print karwa diya ( console.log(res); )
// (means resolve ko print karwa diya)

// fir hum kya karenge uske baad data2 ko fetch karenge

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2....");
// })

// i.e. p1 resolve hone par data2 ko fetch karna
// start karenge

// aur fir hum kya karenge dubara se
// ek aur naya promise lenge (variable)
// let p2 = asyncFunc2

// and p2 pe bhi .then() laga denge
// p2.then()

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncFunc2()
//     p2.then()
// })

// p2 pe .then() laga kar jo bhi uska result hai (parameter receive kar liya .then() ke callback mei)
// jaise hi p2 resolve ho jayega
// vaise hi console.log() kar denge result
// console.log(res)

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncFunc2()
//     p2.then((res) => {
//         console.log(res);
//     })
// })

// and infact hum chahe to result hata bhi
// ( console.log(res); )
// sakte hai we don't really need to print the result
// hume to bas data ko fetch karne se khaas matlab hai

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()

// p1.then((res) => {
//     console.log("fetching data2....");
//     let p2 = asyncFunc2()
//     p2.then((res) => {})
// })

// asyncFunc1 and asyncFunc2 dono 4 sec
// lete hai data dene mei
// pehle first data1 chahiye fir hume second data2 chahiye

// pehle asyncFunc1 ko call lagayi asyncFunc1()
// hume promise1 return hua ( p1.then((res) => { )
// promise 1 abhi unfullfilled hai
// promise 1 abhi pending hai

// to promise1 jaise hi resolve hoga ( p1.then((res) => { )
// tab hi data2 wali call lagayenge ( let p2 = asyncFunc2() )

// save and run

// o/p fetching data1....
// app(2).js:281 data1
// app(2).js:301 fetching data2....
// app(2).js:290 data2

// jo kaam pehle callback se kar rahe the wo kaam
// humne promise chain se kar liya

// 59:53

// same hi kaam kiya jo pehle callback se kiya tha
// ab promises se kar rahe hai but callback ke
// comparison mei promises ka syntax easy hai

// ====================================================================

// isko aur simplify kar dete hai, hume p1 banane ki
// need nahi hai, hum directly asyncFunc1 ko call lagayenge
// aur hume pata hai asyncFunc1() hume promise return
// karega, 

// to humara yeh jo .then() hai hum directly ispar
// asyncFunc1() par create kar sakte hai

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     let p2 = asyncFunc2()
//     p2.then((res) => {})
// })

// aur uske baad asyncFunc2 par .then()
// directly laga diya instead of p2

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {})
// })

// to iss tareh ka code hum likh sakte hai
// ki pehle hum data1 ko fetch kar rahe hai
// ( console.log("fetching data1...."); )
// data1 ko humne fetch kiya isne (asyncFunc1())
// ne promise return kiya

// fir wo (asyncFunc1) jaise hi resolve hota hai
// uske baad hum data2 ko fetch kar rahe hai
// (console.log("fetching data2....");)
// fir wo hume data2 return karke dega

// save and run

// ==============================================================

// yeh ho gaya promise chaining,
// chaining means ek then ke saath maine dusra then chain
// karke likh diya

// ab yeh to ho gaya humare example ke saath

// hum agar apne purane data wale example par aa jayein
// to yahan par ( getData() ) bhi hum apni promise chaining
// kar sakte hai

// 1:00:58

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData()
//             }
//         }, 5000)
//     })
// }

// Callback Hell

// getData(1, () => {
//     console.log("Getting data 2 ....");
//     getData(2, () => {
//         console.log("Getting data 3 ....");
//         getData(3, () => {
//             console.log("Getting data 4 ....");
//             getData(4)
//         })
//     })
// })

// yeh to ho gaya callback hell

// ab isi same kaam ko promise chaining
// se kaise karenge, 
// callback hell ko comment out kar liya

// isi same kaam ko hum promise chain se karne wale hai
// kaise karenge sabse pehle to getData() ko call karte hai
// promise 1 lete hai p1 , hum getData ko call karte hai 
// aur let suppose hume getData se
// data1 chahiye

// aur jaise hi mera promise resolve hoga (to .then() karenge)
// mujhe kya print karwana hai
// mere pas kuch result aa jayega (parameter receive ho jayega)
// and i want to print my result

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData()
//             }
//         }, 5000)
//     })
// }

// let p1 = getData(1)
// p1.then((res) => {
//     console.log(res);
// })

// abhi getNextData hum nahi kar rahe ( getData(1,) mei 1 ke baad )
// par hum new promise return kar rahe hai
// aur fir settimeout and then finally
// jaise hi data humare pas print ho jayega vaise hi yeh
// resolve ho jayega (see settimeout code)

// save and run

// o/p data 1
// app(2).js:354 success (after 5 seconds)

// ab kyuki hum promises ko use kar rahe hai
// hume callback use karne ki jarurat nahi hai
// yani yeh jo getNextData() (see 2nd parameter) 
// jo hume complex cheej lag rahi thi 
// hume sochna padd raha tha kya function
// pas ho raha hai kya ajeeb se cheejein chal rahi hai
// isko (getNextData) ko karne ki ab hume jarurat hi nahi hai

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 5000)
//     })
// }

// let p1 = getData(1)
// p1.then((res) => {
//     console.log(res);
// })

// to ab humara function kya hoga simple sa function
// hoga ki aap mujhe dataId do mai aapko promise deta hu
// ki 5 second baad aapko aapka data return karke dunga
// 1:02:20 (see function getData code)

// to 5 second baad hume humara data milega
// (console.log("data", dataId);)
// aur humara promise resolve ho jayega (resolve("success"))

// to ab first data to humne iss tareh se le liya
// as follows

// ( let p1 = getData(1)
// p1.then((res) => {
//     console.log(res);
// })  )

// second data kis tareh se lein
// hume pata hai yeh data1 hai ( let p1 = getData(1) )
// hume variable ki jarurat nahi hai ab (p1)
// 1:02:33

// hume p1 ki jarurat nahi hai hum directly kya likh sakte
// hai getData(1).then()

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 5000)
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
// })

// save and run

// o/p data 1
// app(2).js:375 success (after 5 seconds)

// =========================================================================

// ab second data ke liye hume call kab lagani hai
// second data ke liye hume call kab lagani hai
// jab humare pas first data aa jaye
// yani humara result print ho jaye (console.log(res);)

// to second data ke liye hum yahan par 
// ( inside getData(1).then((res) => {} ke {} ke andar)
// getData(2)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 5000)
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2)
// })

// aur getData(2) se bhi humare pas kuch result ayega
// to yahan par ( getData(2) ) dubara se hum .then()
// likh sakte hai ( getData(2).then() )
// aur .then() ke andar jo apna
// result hai use hum second time print karwa sakte hai
// console.log(res)

// thoda sa time decrease kar lete hai to 3 seconds
// 1:03:14

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     })
// })

// to ab kya hoga humare pas
// data 1 ki request jayegi ( getData(1).then((res) => { )
// fir data 1 print ho jayega ( console.log("data", dataId); )
// aur data 1 ka result (res) bhi print ho jayega
// ( console.log(res); )

// fir getData(2) ki request jayegi ( getData(2).then(() => { )
// fir data 2 ka result print hoga ( console.log(res); )

// save and run

// o/p data 1 (after 3 sec)
// app(2).js:394 success
// app(2).js:384 data 2 (after 3 sec)
// app(2).js:396 success

// to iss tareh 3 sec ke delay ke baad humari request hai wo chalti rahegi

// ============================================================================

// ab ise likhne ka ek aur better tarika hai

// better tarika yeh hai ki yahan par 
// (2nd .then() inside getData(1).then((res) => {} ke {} ke andar lagane ki bajaye)
// simpler tarika jisko hum actual promise chain kehte hai
// hum ise ( getData(2).then(() => {} mei getData(2) ko ) return kar denge

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
//     return getData(2)
// })

// jo bhi getData() ( getData(2) ) se mere pas ayega use hum return kar denge yahan se
// and yeh result ( console.log(res); ) abhi ke liye print nahi karwate hai

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1).then((res) => {
//     return getData(2)
// })

// 1:03:53

// getData ( getData(2) ) se jo bhi ayega use return kar denge
// data se ( getData ( getData(2) ) ) return karne ka matlab kya hoga
// ( return getData(2) )
// ki yeh jo .then() function hai abhi (1st .then() function hai)
// yeh mujhe promise return karega

// kyuki yeh mujhe getData(2) wala promise return karega (( return getData(2) ))
// to uske upar (1st .then() ke upar) dubara se ek .then() laga sakte hai

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1).then((res) => {
//     return getData(2)
// }).then()

// to dubara se we can do .then() and yahan pe hum console.log
// kar sakte hai apna result

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     console.log(res);
// })

// to yeh (as follows)

// ( .then((res) => {
//     console.log(res);
// })  )

//  mera final result hoga

// to isko (as follows)

// (  getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     console.log(res);
// })  )

// actually hum promise chaining kehte hai

// promise chaining kya hai getData(1) ko call
// lagayi, successful ho gayi ( .then((res) => { ),
// to data(2) ko call lagao and getdata(2) ko return kar do
// yeh bhi (getdata(2)) agar successful ho gayi ( .then((res) => { )
// to fir hum getData(3) ko bhi laga sakte hai
// and final success message recieve kar sakte hai
// (console.log(res);)

// save and run

// o/p data 1 (after 3 sec)
// app(2).js:403 data 2 (after 3 sec)
// app(2).js:414 success 

// ==============================================================================

// aise hi hum chahe to getData(3) ki bhi call laga sakte hai
// return getData(3)

// 1:04:55

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     return getData(3)
// })

// and iske upar bhi isi tarike se ek aur .then()
// laga denge

// .then() ke andar iss bar console.log kar
// denge finally apna success (res)
// console.log(res)

// time 2s 

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000)
//     })
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     return getData(3)
// })
// .then((res) => {
//     console.log(res);
// })

// pehle data 1 ayega ( getData(1) ), 
// successful ho gaya ( .then((res) => { )
// tabhi data 2 ayega ( return getData(2) )

// successful ho gaya ( .then((res) => { )
// tabhi data 3 ayega ( return getData(3) )

// successful ho gaya ( .then((res) => { )
// to finally success kar do ( console.log(res); )

// o/p data 1
// app(2).js:446 data 2
// app(2).js:446 data 3
// app(2).js:460 success

// isi code ko agar hum humare callback hell wale
// code se compare karein, to callback code difficult
// to understand hai

// bas .then() chaining ka code thoda sa easier to
// understand hota hai callback code se

// ============================================================

// but .then() chaining ka code bhi bahut achha nahi
// hai means isse bhi bahut achhe se samajh nahi aa raha
// ki kya chal raha hai exactly

// kyuki iske andar bhi aap console.log() wali statements
// add kar doge to yeh bhi complex hona start ho jayega

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000)
//     })
// }

// console.log("getting data1 ....");

// getData(1)
// .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2)
// })
// .then((res) => {
//     console.log("getting data3 ....");
//     return getData(3)
// })
// .then((res) => {
//     console.log(res);
// })

// aur bhi bahut sara code ho sakta hai 
// console.log("getting data3 ...."); ki jagah

// to yeh .then() chain bhi complex hona start ho
// jayega

// save and run

// o/p getting data1 ....
// app(2).js:470 data 1
// app(2).js:480 getting data2 ....
// app(2).js:470 data 2
// app(2).js:484 getting data3 ....
// app(2).js:470 data 3
// app(2).js:488 success

// same kaam humne callback hell and promise chaining se kiya

// but promise chain bhi difficult to understand hoti hai

// ==============================================================================

// Async Await

// but promise chain bhi difficult to understand hoti hai
// isliye hum ek aur naya concept seekhenge async await

// async await humare 2 keywords hai javascript ke andar
// jinka kaam hota hai basically asynchronous programming ko
// simple banana

// kyuki async await callback hell and promise chaining
// se aur aasaan kar denge cheejon ko

// async keyword hum functions ke saath use karte hai
// hum kisi bhi normal function ko async function bana sakte hai

// 1:07:57

// aur jo ek async function hota hai wo kya karta hai
// --- it returns a promise

// async function always returns a promise
// aur kisi bhi normal function ko hum async bana sakte hai

// for eg apne code par aa jate hai
// yahan par hum ek normal function banate hai lets call it hello

// function hello(){
//     console.log("hello");
// }

// ab iss function ke saamne hum apna async keyword
// likh sakte hai

// async function hello(){
//     console.log("hello");
// }

// to ab yeh ek async function ho gaya

// hello() in browser console

// o/p hello
// Promise {<fulfilled>: undefined}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// undefined

// yeh function hello to print karwa raha hai but yeh
// function automatically hume ek promise return karwa raha hai

// although humne kahin define nahi kiya ki konsa promise return
// karna hai kya resolve hoga, humne return statement bhi nahi likhi
// (see code) 

// par jaise hi aapne async likh diya matlab iss function ka kaam
// hai to return a promise compulsoryly 

// to async function ka yeh humare pas matlab hota hai

// ab kisi bhi function ko hum chahein to async bana sakte hai

// second keyword humare pas hota hai await keyword
// await ka english ke andar humare pas matlab hota hai to wait
// kisi cheej ka intejar karna

// to await keyword jahan bhi use hota hai, 
// it pauses the execution of its surrounding 
// async function until the promise is settled

// kabhi bhi agar hum kisi maan lete hai
// dusre function ko call laga rahe hai
// for eg hum kisi function ko call laga rahe hai
// jis function se hume pata hai ki iss function se 
// koi promise aane wala hai

// function() <----------- promise

// 1:09:21

// agar iss tarike ki hum call laga rahe hai
// to agar isi function ke saamne hum await likh dete hai

// await function() <------------ promise

// to iska matlab await kya karega, 
// await , wait karega promise ka
// aur aait aas paas wali sari execution ko
// rok kar wait karega, jab tak humara promise ( await function() )
// humare pas settle nahi ho jata

// matlab jab tak promise pending hai tab tak
// hum wait hi karte rahenge

// to yahan await use hota hai 
// to pause the execution of the surrounding asynchronous function

// ab ek aur interesting cheej, await keyword ko hum sirf
// kisi async function ( async function myFunc(){} )
// ke andar hi use kar sakte hai

// await ko hum normally use nahi kar sakte, use sirf kisi
// async function ke andar hi hum use kar sakte hai

// ab kaise use karte hai
// 1:10:04

// for eg -- ek random function hai humare pas
// isko keh dete hai apni api ki humare pas koi api hai

// function api(){

// }

// aur yeh api kya karti hai yeh hume ek new promise return
// karti hai,
// koi bhi normal api ho sakti hai 
// yeh hume ek promise return karti hai

// function api(){
//     return new Promise((resolve, reject) => {

//     })
// }

// promise ke andar humare pas console.log karke 
// let suppose humare pas weather ka data aata hai
// console.log("weather data")

// function api(){
//     return new Promise((resolve, reject) => {
//         console.log("weather data");
//     })
// }

// yeh humari api hai jo hume weather ka data deti hai
// aur yeh resolve bhi ho sakti hai
// reject bhi ho sakti hai, 
// jaise hi weather ka data de degi (console.log("weather data"))
// vaise hi hum ise resolve kar denge
// with a message of success -- resolve("success")

// ya success ki jagah jo humari websites hoti hai
// success ke andar message ke liye basically hum 200
// yeh number pas karte hai
// 200 represents a successful api call , 
// to hum resolve kar denge with a message of 200 -- resolve(200)

// function api(){
//     return new Promise((resolve, reject) => {
//         console.log("weather data");
//         resolve(200)
//     })
// }

// ab agar hum chahte hai ki yeh jo kaam hai as follows

//        ( console.log("weather data");
//         resolve(200) )

// yeh immediately na ho 
// api 2 second ke baad data return kare
// to yeh sara jo code hai ise hum setTimeout
// ke andar likh sakte hai

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// so yeh humara normal ek function hai which is
// our api

// ab hume pata hai humari yeh jo api call hogi -- api()
// yeh call ( api() ) kya hai, yeh ek asynchronous call hai
// matlab iss call ko execute hone mei kuch time lagega

// to hum iske ( api() ) saamne await ko use kar sakte hai
// await api()

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// await api()

// ....... to hum iske ( api() ) saamne await ko use kar sakte hai
// await api()
// ki call to lagao but wait karo, aage ka kaam karne se pehle
// (1:11:29) wait karo uss call (api()) ke complete hone ka
// but await ko iss tareh se ( await api() ) normally
// programming ke andar hum use nahi kar sakte

// save and run

// o/p Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules (at app(2).js:512:1)

// humare pas error aa jayega await is only valid in async functions
// and the top level bodies of modules

// abhi ke liye isko ignore karte hai
// ( and the top level bodies of modules )

// await generally async functions ke andar use hota hai
// to iss await ko aise ( await api() ) likhne ki bajaye
// hum ek naya async function banayenge ( async function )

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// async function

// 1:11:56

// yahan par let's make it async function ( async function )
// aur isko ( async function ) keh dete hai getWeatherData
// ( async function getWeatherData)

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// async function getWeatherData() {

// }

// iss tarike ka kuch humne function bana diya
// aur iske ( async function getWeatherData() {} ) 
// andar hum await api() ( await api() )
// use kar sakte hai

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// async function getWeatherData() {
//     await api()
// }

// in browser console we call our getWeatherData()
// 1:12:10
// and isko call lagayenge -- getWeatherData()

// o/p getWeatherData()
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// app(2).js:520 weather data

// abhi promise pending hai,
// lekin jaise hi humari yeh call complete ho jayegi
// (weather data) humara promise fullfill ho jayega

// to hum async await ko kuch isi tareh se use karte hai
// humare pas already koi function hota hai ( function api(){} ) 
// jo promise return kar raha hota hai 
// but uss promise ko accept karne ke liye
// hum apne then catch, callbacks ko use nahi karte

// hum kya karte hai async aur await ko kuch iss tareh
// (as follows)

// ( async function getWeatherData() {
//     await api()
// }  )

// se use karte hai (1:12:43)

// ====================================================================================

// Ab let's suppose hume iss api call ( function api(){} ) 
// ko do (2) bar call lagani hai
// iss api ko hume do (2) bar call lagani hai

// pehle hume first time data chahiye ( await api() , see previous code)
// uske baad hume dubara se data chahiye

// to hum await api() ki first call laga sakte hai -- ( await api() )

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// async function getWeatherData() {
//     await api() 1st call
// }

// 1:12:57

// to jaise hi first call jayegi ( await api() 1st call ),
// humara sara execution ruk jayega iss function ka (as follows)

// ( async function getWeatherData() {
//     await api() 1st call
// }  )

// yani pehle yeh kaam ( await api() 1st call ) hoga
// tab hi baki ke sare kaam honge
// 1:13:03

// fir hum dusri call lagayenge -- await api()

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// async function getWeatherData() {
//     await api() 1st call
//     await api() 2nd call
// }

// to fir 2nd call jayegi ( await api() 2nd call)
// to pehle 1st call complete hogi ( await api() 1st call )
// tab hi second call complete hogi ( 2nd call jayegi )

// save and run

// getWeatherData() in browser console

// o/p getWeatherData()
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// 2app(2).js:537 weather data
// 2app(2).js:537 weather data

// pehle 1st time humare pas data ayega (2 sec)
// fir hum 2 sec ka wait karenge
// fir 2nd time humare pas data ayega

// ==========================================================================================================

// Ab yehi jo same concept hai async await ka
// ise hum use kar sakte hai apne iss wale 
// getData wale function ke andar

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// to yeh (previous eg) humara basic sa example tha
// jisme humne api() ki call lagayi thi
// basically humare liye problem yeh hoti thi
// ki kaise hum asynchronous mei wait karayein (await api())
// kaise iss tareh ki condition create karein ki
// pehle pehla kaam ho tabhi dusra kaam ho raha ho
// pehle dusra kaam ho tabhi teesra kaam ho raha ho
// 1:13:44

// yani instagram mei pehle username check ho
// tabhi humara password check ho
// tabhi humare user ko access mil jaye

// to uss tareh ke kaam ke liye async await
// humare liye ek suitable syntax hume provide karta hai

// ab async await ko yahan par (getData()) kaise use
// karenge , let's write our heading async await

// Async Await

// async await ko basically getData iske saath use karne ke liye
// hume getData ko call lagani hai getData() apne Id ke saath
// ( getData(dataId) ) aur hume use await karna hai

// ab await normally (global scope mei / normal function mei , etc)
// to kar nahi sakte to hum ek async function laga sakte hai
// (function getData(dataId) {} ke baad async function() {} likh liya)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function name() {
    
// }

// jisko keh sakte hai getAllData(){}

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
    
// }

// and iske andar hum await karenge getData() ko (1:14:27)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData()
// }

// yani getData ko call lagayenge with Id 1 -- getData(1)
// aur ise ( getData(1) ) hum await karenge -- await getData(1)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData(1)
// }

// aur yeh wali call complete hogi -- await getData(1)
// tab hi hum Id 2 ke saath call lagayenge -- await getData(2)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData(1)
//     await getData(2)
// }

// yeh wali call complete hogi -- await getData(2)
// tab hi Id 3 ke saath call lagayenge -- await getData(3)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
// }

// ise save kar lete hai 
// and ab iss function ko ( getAllData() ko)
// hum call laga denge

// getAllData() in browser console

// o/p getAllData()
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// app(2).js:559 data 1 (2 sec)
// app(2).js:559 data 2
// app(2).js:559 data 3

// and isi tareh se agar hume 6 times yani
// alag alag Id's ke saath data ko access
// karna hota to usko simply hum aise hi likhte
// (as follows)
// 1:15:01

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
//     await getData(5)
//     await getData(6)
// }

// yani await ( await getData(1) , mei await) kehne ka matlab
// hai hume pehle se pata hai ki yeh jo call ( await getData(1) , mei getData(1))
// ja rahi hai iske liye wait kiya jayega,
// hum aage nahi badhenge
// mai dikha bhi deta hu kaise -- console.log("getting data1....")

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
//     await getData(5)
//     await getData(6)
// }

// yeh ( console.log("getting data1....") ) humari 1st statement ho gayi
// uske baad yahan 2nd statement aa jayegi ( console.log("getting data2....") )
// yahan 3rd statement aa jayegi ( console.log("getting data3....") )
// yahan 4th statement aa jayegi ( console.log("getting data4....") )
// yahan 5th statement aa jayegi ( console.log("getting data5....") )
// and so on...

// 5 tak hi rakh lete hai

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// }

// save

// to basically iss code (as follows)

// ( async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// }   )

// ko ab agar hum padhkar dekhenge,
// to yeh hume comparitively kaafi aasaan code lagega
// as compare to jo hum promises use kar rahe the,
// callback hell use kar rahe the,
// uske comparison mei this code (as follows)

// ( async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// }   )

// is very easy to read
// ki pehle isko ( console.log("getting data1....") )
// execute karo,
// jaise hi await mil gaya ( await getData(1) )
// ab yahan ( await getData(1) ) rukna padega

// fir isko ( console.log("getting data2....") )
// execute karo,
// jaise hi await mil gaya ( await getData(2) )
// ab yahan ( await getData(2) ) rukna padega

// iss tareh se humara code execute hoga
// 1:15:49

// ( again write code to avoid scrolling up and down in notes )

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// }

// save

// getAllData() in browser console 

// o/p getAllData()
// app(2).js:609 getting data1....
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// app(2).js:602 data 1
// app(2).js:611 getting data2....
// app(2).js:602 data 2
// app(2).js:613 getting data3....
// app(2).js:602 data 3
// app(2).js:615 getting data4....
// app(2).js:602 data 4
// app(2).js:617 getting data5....
// app(2).js:602 data 5

// to iss tareh se humara async await kaam karta hai

// ====================================================================================================================

// ab for reference mai aapko teeno code dikhaane wala hun
// 1:16:13
// ( callback hell se promises pe and promises se async await pe )

// bahut bade bade codes hote hai to uss case mei
// kaafi complex ho jata hai callback hell and promises

// compare code of callback hell , promises and async await of 
// function getData /  getData()

// async await mei pehle hum data1 ko get kar rahe hai (console.log(getting data1...))
// get kar liya wait karo (await getData(1))
// 2nd ko get kar rahe hai (console.log(getting data2...))
// uske liye wait karo (await getData(2))
// third ko get kar rahe hai (console.log(getting data3...))
// uske liye wait karo (await getData(3))

// 1:17:22

// and ek aur cheej hume dhyaan rakhni hai general programming ke andar
// ki jab bhi humare pas choice hoti hai
// ya to hum async await ko use karte hai
// ya fir hum .then() .catch() ko use karte hai

// maximum scenarios ke andar hum async await ko use karenge
// as it is better and simpler way of programming

// 1:18:00

// =======================================================================================================

// IIFE

// ab yahan par ek choti si problem jo hum encounter kar rahe hai wo yeh hai
// ki jaise hum yeh promise chaining wala code likh rahe the (getData() wala)
// ya hum callback hell wala code likh rahe the (getData() wala)
// isme (callback hell ko (getData() wala)) humara aise koi normally agar hum code likh rahe hai
// to use (callback hell ko (getData() wala)) hume kisi function ke andar daalne ki jarurat nahi hai

// ise callback hell (getData() wala) ko abhi ke liye comment out kar dete hai

// ya yeh code (promise chain getData wala) bhi hai yeh automatically execute karega
// isko hume kisi function ke andar daalne ki jarurat nahi hai

// 1:18:31

// par jab bhi hum async await ko use kar rahe hai (async await getData wala)
// hume iss code ko ek function ke andar daalna padta hai
// aur fir uss function (getAllData) ko hume call karna padta hai (getAllData())
// first time,

// first time ek bar to call hi karna padd raha hai aur yeh call (getAllData())
// kya hai unnecessary call hai

// to isse bachne ka bhi ek tarika hota hai javascript ke andar
// aur iss call (getAllData()) se bachne ka tarika humare pas
// hota hai IIFE
// This is part of advanced javascript

// aap in general bahut jada use nahi kar rahe honge IIFE ka

// IIFE -Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.

// Normal Function IIFE / Regular Function IIFE

// (function () {

// })();

// ===============================================================================

// Arrow Function IIFE 

// (() => {

// })();

// ===============================================================================

// Asynchronous Function IIFE

// (async () => {

// })();

// ================================================================================

// aap in general bahut jada use nahi kar rahe honge IIFE ka
// but mai aapko ek tarika dikha raha hun ki ek problem humare pas ayi
// ki unnecessarily apne code ko hume jo direcly execute ho jaana chahiye tha
// (as follows)

// ( async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// } mei getAllData() )

// usko ek function ( getAllData() ) ke andar daalna pada
// kyu daalna pada , kyuki await ko normally execute
// nahi kar sakte the ( await getData(1) )
// (normally means global scope mei nahi use kar sakte await ko, 
// only async function ke local scope mei execute kar sakte hai await ko)
// aur yahan (browser console mei) hume call lagani padi -- getAllData()
// to uske liye humare pas IIFEs hote hai

// IIFE humara ek aisa function hota hai jo immediately execute ho
// jata hai as soon as it is defined

// matlab yahan par...

// IIFEs , function hi hote hai bas unka koi naam nahi hota,
// aur wo function ek hi bar use hote hai,
// ek bar likhe jaate hai 
// aur jahan likhe jaate hai , wahin execute ho jate hai
// unhe execute karne ke liye alag se call nahi likhni padti

// jaise -- see IIFE syntax above for illustration

// to iss function ko (as follows)

// ( async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// } mei getAllData() ko)

// ab iss function ko ( getAllData() ko ) to mujhe
// call lagani padegi

// par mujhe aisa ek IIFE banana hai jo apne aap
// execute ho jaye to uske liye kya karna hai
// naam iska ( ( async function getAllData() {} mei getAllData ko ) hata do
// naam humne hata diya (as follows)

//  async function () {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// } 

// fir iss function ko paranthesis mei hum enclosed kar denge
// aur uske baad ek aur paranthesis laga denge 
// aur fir semicolon (as follows)

//  (async function () {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// })();

// save kar lete hai , ab yeh jo hai code
// (as follows)

// (   (async function () {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// })();   )

// yeh apne aap execute ho jayega

// complete code likh lete hai

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// (async function () {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// })();

// o/p getting data1....
// app(2).js:629 data 1
// app(2).js:638 getting data2....
// app(2).js:629 data 2
// app(2).js:640 getting data3....
// app(2).js:629 data 3
// app(2).js:642 getting data4....
// app(2).js:629 data 4
// app(2).js:644 getting data5....
// app(2).js:629 data 5


// jaise hi refresh (save code and reload browser console) kiya 
// iss bar getAllData ko
// mujhe call lagane ki jarurat nahi padi
// automatically mera function execute ho raha hai

// So this is the point of using an IIFE
// ki automatically code execute ho jayega

// iska (IIFE ka) nuksaan yeh hai ki
// isko (IIFE ko) aap kabhi dubara
// use nahi kar payenge
// to isko copy paste karna padega hume
// completely

// But IIFEs ka point hi yeh hi hota hai
// ki aapko aisa code jo immediately
// aapko execute karana hai aur ek hi
// bar aap usko use karna chahte hai

// Yeh generally hum unn cases mei use karte hai
// jab hume await karna hota hai (await getData(1))
// par ek hi bar hume call lagani hai
// function hume as such create karne ki
// jarurat nahi hai 
// to IIFE bana kar hum usko use kar sakte hai

// to API calls ke andar generally hum isko (IIFE ko)
// use kar sakte hai

// baki we can go and also read about IIFEs in detail
// IIFE mdn

// immediately invoked -- yani jaise hi aapne likha
// immediately jaise hi aapne likha vaise hi call
// ho jayega , aisa function ka expression hai

// IIFE ke 2 part hote hai

// 1st is the anonymous function with lexical scope
// enclosed in paranthesis

// 2nd is () , jo usko run karta hai

// Ab kyu use hote hai IIFEs 
// Use Cases
// 1. Avoid polluting the global namespace

// kayi bar hum functions banate hai,
// functions ke andar unnecessary humare pas variables create ho jate hai
// aur agar hume aisa function banana hai jisko
// hum bar bar use nahi kar rahe
// to uske andar bahut sare agar unnecessary variables
// honge to unki hume jarurat nahi hai

// to ek saath kya karo IIFE bana do
// IIFE jaise hi execute ho jayega vaise hi wo
// variables bhi delete ho jayenge memory ke andar se

// 2. Execute an async function

// Dusra hota hai jab bhi hum kisi async function
// ko execute karna chahte hai
// vaise ka vaise hi jo humara usecase humne yahan par (getData())
// mei dekha
// ki unnecessary mujhe getAllData() banana pada
// isko banane ki jarurat nahi thi
// iss tareh se IIFE banana tha
// to yeh ek practical use case hai IIFE ka

// aur bhi use case hai IIFE ke jo aap -- IIFE mdn 
// pe jaake padh sakte hai

// This is all about asynchronous programming in javascript

// Class End

// =============================================================================================