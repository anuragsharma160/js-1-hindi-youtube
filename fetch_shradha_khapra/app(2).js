// Hum cover karenge apni fetch api ko
// yani hum jaanenge ki kis tareh se
// javascript se hum apne api endpoints par
// call laga sakte hai, data ko recieve kar sakte hai
// aur iss data ko use karke kaafi sare interesting cheejein
// hai jo ki ja sakti hai

// and fir finally isi chapter ke end mei
// hum ek chota sa mini project build kar rahe honge
// using the fetch api
// jiske andar hum ek currency converter ko build karenge
// humari aaj tak ki js ki jitni knowledge hai
// jisko humne poori series ke andar collect kiya hai
// uss knowledge ko apply karte huye

// hum DOM ko use karenge
// hum APIs ko use karenge
// hum strings, arrays jaisi basic cheejon ko bhi use kar rahe honge
// apne project ko build karte time
// (0:41)

// to shuruaat karte hai apne chapter ke saath
// (0:54)
// Chapter 13
// Fetch API

// hum baat karenge APIs ki
// hum discuss karenge ki kis tarike se
// hum API calls jo hai unko initiate kar sakte hai
// unhe kuch request bhej sakte hai 
// aur kuch data recieve kar sakte hai

// abhi tak humne promises ke concept ko padha hai
// aur wo concept hume thoda sa theoritical lag sakta hai
// par aaj ke chapter ke andar hum samajh rahe honge ki
// kis tarike se promises day to day life mei js ke andar
// hume dekhne ko milte hai 
// aur practically hum unko use kar rahe hote hai
// (1:27)

// saath ke saath apni jo API ki knowledge hai usko use karke 
// hum apne liye ek project bhi build kar rahe honge at the 
// end of this chapter
// to shuruaat karte hai

// sabse pehle hum ek basic sa apna revision kar lete hai
// last class mei jo humne seekha tha regarding APIs
// API ke bare mei baat ki thi ki API humara ek aisa system hota hai
// basically isko hum aise samajh sakte hai ki
// kisi dusre vyakti ne apni ek dusri website banayi hui hai
// apna ek system banaya hua hai
// ek server banaya hua hai

// ... jiske upar hum koi request bhej sakte hai
// (1:55)
// request mei ho sakta hai yeh jo API hai iska
// kaam ho sakta hai bahut sari dishes ki receipi store
// karti hai (API dishes ki receipi store karti hai)
// ki kheer kaise banti hai
// ya halwa kaise banta hai

// iss tareh ke bahut sare different different food items hai
// burger kaise banta hai
// pizza kaise banta hai
// inn sabke yeh receipi store karti hai

// to humne request bheji ki 
// hume ek pizza ki receipi chahiye ki
// usko kis tarike se banana hai
// to API kya karega (2:13)
// hume kuch response bhejega
// aur response ke andar
// kuch accurate data hoga ki
// kis tarike se hum wo food item hai
// usko prepare kar sakte hai
// usko cook kar sakte hai
// iss tarike ka kuch response aa raha hoga

// to APIs basically request response cycle ke upar chalte hai
// ki hum unhe (API ko) kuch request bhejte hai
// wo hume response ki form mei kuch data return
// karke dete hai

// aur yeh data kya hoga wo depend karta hai ki
// hum kis tareh ki API ko use kar rahe hai
// (2:37)

// to finally hum API calls ko karna seekh rahe honge
// aaj ke apne iss session ke andar (2:42)
// and API calls karne ke liye hum
// use karenge apne liye fetch API ka

// aur fetch API mai aapko pehle hi bata deta hu
// bahut easy lagega hume use karne mei
// yani abhi tak humne promises dekh liye
// callbacks dekh liye 
// wo sara ka sara syntax bahut complex hota tha

// par fetch API ka jo kaam hai wo bahut hi simple hai
// bahut hi chota sa simple sa code hume dekhne ko mil
// raha hoga which will be really easy to understand
// (3:02)

// ab jab bhi hum fetch API ki baat karte hai
// ya kisi bhi API ki baat karte hai
// API ki full form -- Application Programming Interface
// aur generally jo humari day to day basis par
// hum APIs ke saath deal karte hai
// wo basically aisa interface hote hai jo hume
// kuch data return karte hai

// jaise for eg hum kisi restaurant ke andar gaye
// restaurant ke andar jo humara waiter hota hai
// waiter ko hum kuch bhi request de dete hai
// ki hume yeh yeh food items order karne hai
// to waiter kya karta hai kitchen ke andar jata hai
// aur wahan se humare liye khaana lekar aa jata hai

// ab kitchen ke andar kis tarike se khaana prepare hua
// kisne khaana prepare kiya
// kya kya ingredients dale
// wo sari cheejein hume pata nahi chalti
// hume kya pata chalta hai
// hume final output,
// yani final result dekhne ko milta hai

// vaisa hi kuch interface
// vaisa hi kuch system APIs hote hai
// ki hum unhe request bhej dete hai
// wo ab data kahan se API lekar ayi
// wo data kitna accurate hai , kitna nahi hai
// kaise uss data ko prepare kiya gaya hai
// inn sari cheejon se hume koi matlab nahi hota
// hume bas final jo o/p wala data hai
// wo humari API hume return kar deti hai
// (3:57)

// ab API ko call karne se pehle hum
// APIs ke kuch kuch examples ko dekhne wale hai
// sabse pehle yahan par hum jaa sakte hai
// yani we can literally go and search
// for free APIs (free apis in google search)

// bahut sare links aate hai
// jahan par hume kaafi sari free public APIs mil jati hai
// hum kisi bhi random link par jaa sakte hai
// (https://github.com/public-apis/public-apis)

// ab jaise yahan par hume ek list mil jayegi
// (under Index heading)
// of a lot of free APIs
// jaise for eg hume Books se related API search karni hai
// (click on Books under Index heading)
// to yahan par Books se related humare pas 
// bahut sari different different APIs aa jayengi
// Business se related APIs aa jayengi (under Books)
// Calendar se related APIs aa jayengi (under Business)

// isi tareh se aap kisi dusre link par jayenge
// (https://apilist.fun/)
// to hume wahan par kafi sari different APIs
// mil jayengi
// jaise yeh food API hai
// (Food Api in search bar and enter)
// for eg Food Api humare pas hai
// iss link par gaye

// (try another Api as Food Api is not working)
// ( go to wannaeat Api)
// to generally jo bhi Apis hoti hai unki apni ek
// documentation hoti hai (Go to API docs button / option)
// documentation ke andar likha hota hai ki kis
// tarike se hum uss API ko use kar sakte hai
// (Click on -- Go to API docs button / option)
// (new page will open showing as follows
// {"status":"failure", "code":401,"message":"You are not authorized. Please read https://spoonacular.com/food-api/docs#Authentication"} )
// aur iss tarike se API
// hume kisi ek object format ke andar
// data return karke deti hai (just above)
// (4:55)

// to jaise yahan par hume yeh object jaisa kuch data dikh raha hai
// (just above)
// isi tarike ka data hume API return karke deti hai (just above object)
// kab deti hai jab hum iss tareh ke ek url
// ( jo url Go to API docs button / option pe click karne ke baad open hua hai )
// yani ek link ke upar request bhej rahe hote hai
// (5:04)

// to APIs are nothing but endpoints
// jo humare url endpoints hote hai
// yani jaise koi link hota hai uske upar
// humne request bhej di jaise for eg
// hum google.com par jana chahte hai
// (google.com in browser search and enter)
// to jaise hi humne google.com likha (and enter)
// hum iss page par aa gaye (after enter)

// to humare browser ne kya kiya
// humare browser ne google.com ko
// request bheji, 
// to google ke server ke pas request gayi hogi
// usne fir response mei hume yeh page bhej diya
// (jo page google.com and enter ke baad mila hai)

// isi tarike ka system APIs ke saath hota hai ki
// humare system ko kuch request bhejni padegi
// API ke endpoint ko aur endpoint yani wo jo link hai (5:32)
// wo fir hume kuch data return back karke dega

// ab eg ke liye humare pas bahut sari APIs hoti hai
// maine ek link aapke liye already save karke rakha hai
// so this is a page jahan pe kaafi sari APIs humare pas
// available hai
// https://free-apis.github.io/#/browse

// jaise Anime se related ho gayi (Anime API)
// Anti-Malware , Computers , Finance
// bahut sari different different APIs
// yahan par available hai
// hum koi bhi ek random API choose kar sakte hai

// so let us go with this Cat Facts API
// jo hume cats se related facts jo hai
// wo return karke degi
// ab yeh jo API hai iska hum github ka
// page bhi dekh sakte hai (View on Github option pe click kiya, old option)
// documentation bhi dekh sakte hai
// scroll down and click on API documentation / Start developing!
// ( option not available -- so go to -- https://alexwohlbruck.github.io/cat-facts/docs/ for API documentation)

// iss page par hum aa gaye (6:06) ( API documentation )
// to basically documentation ke andar likha hua hai
// Base URL for all endpoints https://cat-fact.herokuapp.com
// yani sare ke sare jo link hai isse ( https://cat-fact.herokuapp.com )
// shuru honge, to heroku par yeh hosted hai
// aur endpoint mei hum /facts jab lagayenge (see under Endpoints heading -- /facts)
// to humare pas cat se related koi random fact ayega (6:19)

// base url yani shuru wala link
// to yeh humne shuru wala link likha
// https://cat-fact.herokuapp.com in browser
// aur /facts jaise hi hum enter karenge
// https://cat-fact.herokuapp.com/facts in browser
// vaise hi kya hoga, kuch data humare pas return hokar aya
// (array uske andar object -- array of objects in black screen)
// (nahi aya to dusri API try kar lena)
// 6:28

// ab yeh data (just above) (array uske andar object -- array of objects in black screen)
// kis form mei hai
// hum agar thoda sa zoom in karein
// so this is basically an array
// yeh array form mei hai kyuki bahar square brackets
// lage hue hai
// aur andar kuch objects hai

// par abhi iss data (array of objects in black screen) 
// ke andar kya hai
// usse hume jada matlab nahi rakhna
// hume ek cheej notice karni hai ki
// haa kuch data (array of objects in black screen)
// humare pas return hoke aa raha hai
// jab hum kisko request bhej rahe hai
// jab hum iss link -- https://cat-fact.herokuapp.com/facts
// ko request bhej rahe hai

// to yeh -- https://cat-fact.herokuapp.com/facts
// basically humara API endpoint hai
// yani humara URL hai
// jisko hume request bhejni padegi
// apni API se data wapas lane ke liye
// 6:54

// ab yeh to hai browser se directly request bhejna
// (6:57)
// jab bhi hum apne browser ke upar koi bhi
// link paste karte hai
// jaise hum google.com likhte hai
// amazon.com likhte hai
// to humara browser automatically request bhej deta hai
// uss link ke pas uss server ke pas

// ab hum seekh rahe honge
// ki wo kaam jo browser humare liye karta aa raha tha
// aaj tak, wo hum apne javascript ke code se kaise kar sakte hai
// (7:13)

// (dogs api use kar lena as cats api is not working -- base url, endpoints)
// to uske liye yeh jo link hai ise copy kar lete hai
// copy this link -- https://cat-fact.herokuapp.com/facts
// lets go to our code
// code ke andar humne index.html already banai hui hai
// humare pas boiler plate code hai
// jisko humne app.js se connect kiya hai
// (7:23)
// yeh humari app.js hai
// (7:25)

// ============================================================================


// 7:25

// iske andar ek variable bana lete hai URL
// const URL = https://cat-fact.herokuapp.com/facts

// const URL ke andar humara yeh jo link tha jiske upar
// request bhejne se browser ko data mil raha tha
// usse hum bhi apni javascript ke code ke through
// data pana chahte hai, to iss link ko hum save kar lete hai

// aur basically jo hume api call karni hai wo iss link ko
// ( const URL = https://cat-fact.herokuapp.com/facts )
// hume call karni hai aur wahan se humare pas data ayega
// 7:43

// apne page par hum aa jate hai, 
// ab jab bhi hum api call karna chahte hai using fetch api
// to fetch api kya hota hai, fetch api is basically , 
// it provides an interface for fetching (sending / receiving) , 
// fetching ka matlab kisi
// cheej ko lekar aana

// to jab bhi hum kuch resources bhejna chahte hai ya recieve
// karna chahte hai, usko hum kehte hai fetch karna

// to jab bhi humare pas koi end point hai yani koi url hai
// jise hum koi request bhejna chahte hai, to request ke andar
// ho sakta hai hum kuch extra data bhi send kar rahe ho
// ya jab iska response humare pas ayega (8:11)

// yani jab hum data ko receive karenge yani resources ko receive karenge
// to yeh dono kaam (request send and resources receive) karne ke liye
// hi hum apni fetch api ko use kar sakte hai

// aur fetch api internally ek request and response object ko use karti hai
// ab itna detail mei abhi hum nahi jayenge , pehle dheere dheere samjhenge
// par yeh hume samajh mei aa gaya ki hume fetch api naam ki ek cheej
// use karni hai data bhejne and receive karne ke liye

// 8:32

// ab fetch api ko use karne ka matlab hota hai -- fetch() method ko use karna
// fetch() method humare pas javascript ke andar already hota hai which is
// used to fetch a resource -- yani jo data fetch karne ke kaam aata hai

// aur isko likhne ka syntax yeh hota hai ki hum fetch method likhte hai
// --- fetch()
// aur uske andar apna url likhte hai, url yani apna link
// aur itna likhne se ( fetch(url) ) automatically humara code iss link (url)
// ke upar ek request bhej deta hai,
// -- fetch( url )

// request bhejega to kuch data return hokar ayega, 
// par fetch mei kya return hokar aata hai fetch mei humare pas ek promise
// return hokar aata hai
// let promise = fetch( url )

// jo eventually pending se jaake ya to fullfill ho jayega
// ya reject ho jayega
// but yeh (fetch) kya return karta hai , yeh hume ek promise return karta hai
// to yahan pe practical usecase humare pas aata hai promises ka
// let promise = fetch( url, [options] )

// jinko (promises ko) humne theoritically seekha tha pichle chapter mei
// ab baat kar rahe honge ki kaise wo promises actual apis hume
// return kar rahi hoti hai (9:17)

// url ke saath fetch method ke andar kuch kuch options bhi hote hai
// jinko hum use kar sakte hai par abhi ke liye options ke detail mei
// nahi jayenge
// let promise = fetch( url, [options] )
// abhi ke liye sirf fetch() method ko ek bar dekhte hai

// fetch method ko use karne ke liye basically hum likh sakte hai fetch
// aur uske andar hum pas kar denge apna url -- fetch(URL);

// const URL = "https://cat-fact.herokuapp.com/facts"

// fetch(URL);

// aur fetch ( fetch(URL); ) hume kuch value return karega, yeh jo value hai ( fetch(URL) )
// this value is going to be a promise -- let promise = fetch(URL)

// const URL = "https://cat-fact.herokuapp.com/facts"

// let promise = fetch(URL);

// aur iss promise ko hum chahein to print karwa sakte hai

// const URL = "https://cat-fact.herokuapp.com/facts"

// let promise = fetch(URL);
// console.log(promise);

// 9:41
// dekhte hai promise print hoga to hume eventually pata hi chal
// jayega ki yeh ek promise hai dekhte hai kis tareh se pata chalega
// save and see in broser console
// (koi dusra url le lo)

// refresh in bc
// refresh kiya to kya print hua , humare liye
// promise print hua (in bc)
// dropdown open promise and see in bc

// promise mei shuruaat mei jab 
// promise print hua tab tak pending tha (see in bc, before dropdown open)
// par data aa gaya, to matlab promise humara fulfill ho gaya 
// ( dropdown open promise and see in bc )

// aur response mei humare pas kya aya hai
// ( dropdown open [[PromiseResult]]: Response )
// response mei humare pas yeh sari cheejein ayi hai
// (10:03)

// yani humare pas response ki kuch body ayi hai
// kuch headers aye hai jinke andar
// aur information humare pas hogi
// ( dropdown open headers in [[PromiseResult]]: Response )
// ( dropdown open [[Prototype]]: Headers in headers in [[PromiseResult]]: Response )
// status aya hai 200
// status 200 ka matlab hota hai successful request
// yani jo data aap chahte the wo aapko return karke mil gaya hai

// statusText mei aya hai OK (mam ke OK aya hai)
// statusText mei aya hai "" (mam ke OK aya hai)
// and iss url "https://jsonplaceholder.typicode.com/users" 
// par basically humne request bheji thi (see in bc)

// iske andar bhi humare pas response hai
// ( dropdown open [[Prototype]]: Response and see )
// ( dropdown close )
// yani kuch theek response humare pas print hokar aya hai

// (code editor mei aa gaye)
// ab agar hume pata hai ki jab bhi hum promises ( let promise = fetch(URL) )
// ko use karte hai
// humare pas multiple tarike hote hai promises se result nikalne ke
// ek tarika hota hai promise chaining jisme hum
// .then() .catch() inn sabko use kar rahe hote hai

// par usse bhi ek aur better tarika humne nikala tha
// which was using async await
// to hum async await se apni iss API call ko
// execute kar rahe honge

// ab async await ko use karne ke liye hume ek
// asynchronous function banana padega
// iss function ko keh dete hai getFacts
// kyuki hum cat facts get karne ki koshish kar rahe hai

// const URL = "https://jsonplaceholder.typicode.com/users"

// let promise = fetch(URL)
// console.log(promise);

// const getFacts = () => {
    
// }

// aur isi (asynchronous function) ke andar hum apna poora yeh kaam karne wale hai

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = () => {
//     let promise = fetch(URL)
//     console.log(promise);
// }

// aur basically kyuki hum yahan promises ( let promise = fetch(URL) )
// ke saath deal kar rahe hai
// to hume async banana padega apne iss function ko
// to arrow function ko async banane ke liye
// aage hum async likh dete hai

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = async () => {
//     let promise = fetch(URL)
//     console.log(promise);
// }

// 11:08

// aur kyuki yeh ( let promise = fetch(URL) , mei fetch(URL) ) humara asynchronous kaam hai
// kisi bhi API ko call karke usse data mangwana
// asynchronous kaam hai
// kyuki ho sakta hai API kuch time le data lane mei
// to iske ( let promise = fetch(URL) , mei fetch(URL) ) 
// saamne hum likh denge await

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = async () => {
//     let promise = await fetch(URL)
//     console.log(promise);
// }

// kyuki iss kaam ( let promise = await fetch(URL), mei fetch(URL) ) 
// ko time lag sakta hai
// aur jab ek bar promise ( let promise = await fetch(URL) )
// humara resolve ho jayega
// tabhi hum jo bhi data isne ( let promise = await fetch(URL), mei await fetch(URL) ) 
// return kiya hoga
// uss data ko print karwa rahe honge ( console.log(promise); )
// 11:28

// ab yahan se ( let promise = await fetch(URL) ) jo bhi cheej
// return hoti hai,
// use generally hum kya kehte hai programming ke andar
// use hum apna response kehte hai

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = async () => {
//     let response = await fetch(URL)
//     console.log(response);
// }

// ki humne API ko call lagai ( let response = await fetch(URL), mei await fetch(URL) )
// aur API ne hume kya bheja API ne hume humara
// response bheja ( let response = await fetch(URL), mei response )
// aur uss response ko hum print karwa sakte hai
// ( console.log(response); )

// in fact yahan (before fetch line) console.log bhi karwa sakte hai
// getting data .....

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = async () => {
//     console.log("getting data .....");
//     let response = await fetch(URL)
//     console.log(response);
// }

// save and refresh in bc
// ab hume getFacts ko call karna padega
// getFacts() in bc and enter
// o/p getting data .....
// Promise {<pending>}
// aya fir 1 sec pause ke baad
// Response print hua bc mei

// jaise hi call karenge pehle aya getting data .....
// and ek cheej notice ki hogi aapne
// humare liye promise print ho gaya
// Promise {<pending>} in bc
// par yeh final data (Response in bc)
// humare liye print hone mei thoda sa thoda sa (1 sec)
// delay aya 
// (12:01)

// yehi delay hota hai jo asynchronous programming chal
// rahi hai usko dikhata hai
// refresh karenge in bc
// lets call getFacts again
// getsFacts() in bc and enter

// ( o/p getting data .....
// Promise {<pending>}
// aya fir 1 sec pause ke baad
// Response print hua bc mei )

// thoda sa delay aya (0.1 sec)
// aur fir humare pas yeh cheej (Response in bc)
// aakar print hui
// to iss cheej (Response in bc) ke andar
// (dropdown open Response in bc)
// yeh humara proper response hai (from type: 'cors' to [[Prototype]]: Response)
// jo humari API se humare pas aya hai
// 12:15

// (dropdown close Response)
// and ek aur interesting cheej aapne notice ki hogi
// ki even though hum apni API ko request bhej rahe hai
// (code editor mei aa gaye)
// par data humare pas jo return hokar aa raha hai
// uski vajeh se humara page reload nahi ho raha
// (see browser)

// generally nayi jo information aati hai page
// ke upar wo page ke reload hone ke baad aati hai
// par jab bhi hum API calls kar rahe hote hai internally
// to humara page bilkul bhi reload nahi ho raha (see browser)
// and run time pe sari ki sari information update ho rahi hai
// 12:36

// (dropdown open Response in bc)
// yeh jo Response hai , yeh runtime pe update ho raha hai
// to kuch kuch cheejon ko summarize karte hai
// basically humne yeh dekha ki
// fetch API se kaise hum ek request bhej rahe hai
// aur hume kuch data recieve ho raha hai

// aur iske andar request and response objects ko hum use karte hai
// to yeh jo cheej yahan par print ho rahi hai (as follows)
// (let response = await fetch(URL)
// console.log(response); see code)
// yeh jo response hai jab hum ise print kar rahe hai
// (see in bc)
// yeh Response exactly kya hai (open Response in bc)
// this Response is an object

// kyuki iske (Response in bc) ke andar prototype bhi hume dikhayi
// de raha hai
// ( open [[Prototype]]: Response in Response in bc)
// yeh Response prototype ke upar based ek object hai
// jiske andar kaafi sari different different values hai
// (close dropdown in bc)

// (code editor mei aa gaye)
// hum chahein to apni yeh jo response hai (as follows)
// (let response = await fetch(URL)
// console.log(response); see code)
// iska status print karwa sakte hai

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = async () => {
//     console.log("getting data .....");
//     let response = await fetch(URL)
//     console.log(response.status);
// }

// save and refresh in bc
// getFacts() in bc and enter
// (o/p getting data .....
// Promise {<pending>}
// 200)
// iss bar sirf response ka status print hoga which is 200
// yani sari cheejein ok chali gayi

// isi tarike se hum dusri values ko bhi print karwa sakte hai
// ( console.log(response.status); see code by changing status )
// so Response is an object
// to humari API jo calls hai
// wo request response object ke upar call karti hai

// fetch() method is used to fetch a resource or data
// aur fetch method ko hum iss tareh se use kar rahe hote hai
// as follows
// ( let promise = fetch(url , [options]) )

// ab jab bhi fetch method ko hum use karte hai
// aur hum koi bhi options use nahi bhejte
// ( let promise = fetch(url , [options]) )
// to fetch method ek particular type ki request
// create karta hai aur iss request ko hum
// kehte hai humari GET request
// 13:38

// humare pas request ki terms mei jab bhi
// hum network request ki baat karte hai yani ki
// internet ke upar jo bhi hum request bhej rahe hote hai
// uske andar humare pas different different types hote hai
// GET request, DELETE request, PUT request
// bahut sare different different types hote hai

// wo request jo sirf data lane ka kaam karti hai
// jinka kaam hota hai bas kuch data humare pas kahin
// se return hoke aa jaye
// kisi server se return hoke aa jaye
// kisi API se return hokar aa jaye
// unn request ko hum GET request kehte hai

// vaise hi ab yahan par (see code till yet)
// jo humne request bheji hai that is
// a GET request
// by default ya maximum time jab hum 
// fetch API ko use karte hai ,
// hum GET request ke liye hi use kar rahe hote hai

// ab yahan par kyuki API ko hume kuch data
// nahi bhejna, 
// hume simply kya karna hai
// sirf data recieve karna hai (see code till yet)
// isiliye yeh request humari GET request ki category mei
// aati hai (see code till yet)
// 14:20

// and ek aur interesting cheej yahan par note karne wali
// hai ki jab hum response ko print karwa rahe hai

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = async () => {
//     console.log("getting data .....");
//     let response = await fetch(URL)
//     console.log(response);
// }

// if we look at this response
// bc mei aa gaye
// getFacts() in bc and enter
// ( getting data .....
// Promise {<pending>}
// Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …} )

// open Response in bc
// this is (after open Response in bc) not an accurate response
// humare pas Response mei hum expect kya kar rahe the
// hum expect kar rahe the ki
// iss tarike ka humare pas kuch ayega (as follows)

// [
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
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
//   {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//       "street": "Douglas Extension",
//       "suite": "Suite 847",
//       "city": "McKenziehaven",
//       "zipcode": "59590-4157",
//       "geo": {
//         "lat": "-68.6102",
//         "lng": "-47.0653"
//       }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//       "name": "Romaguera-Jacobson",
//       "catchPhrase": "Face to face bifurcated interface",
//       "bs": "e-enable strategic applications"
//     }
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//       "street": "Hoeger Mall",
//       "suite": "Apt. 692",
//       "city": "South Elvis",
//       "zipcode": "53919-4257",
//       "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//       }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//       "name": "Robel-Corkery",
//       "catchPhrase": "Multi-tiered zero tolerance productivity",
//       "bs": "transition cutting-edge web services"
//     }
//   },
//   {
//     "id": 5,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//       "street": "Skiles Walks",
//       "suite": "Suite 351",
//       "city": "Roscoeview",
//       "zipcode": "33263",
//       "geo": {
//         "lat": "-31.8129",
//         "lng": "62.5342"
//       }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//       "name": "Keebler LLC",
//       "catchPhrase": "User-centric fault-tolerant solution",
//       "bs": "revolutionize end-to-end systems"
//     }
//   },
//   {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//       "street": "Norberto Crossing",
//       "suite": "Apt. 950",
//       "city": "South Christy",
//       "zipcode": "23505-1337",
//       "geo": {
//         "lat": "-71.4197",
//         "lng": "71.7478"
//       }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//       "name": "Considine-Lockman",
//       "catchPhrase": "Synchronised bottom-line interface",
//       "bs": "e-enable innovative applications"
//     }
//   },
//   {
//     "id": 7,
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//       "street": "Rex Trail",
//       "suite": "Suite 280",
//       "city": "Howemouth",
//       "zipcode": "58804-1099",
//       "geo": {
//         "lat": "24.8918",
//         "lng": "21.8984"
//       }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//       "name": "Johns Group",
//       "catchPhrase": "Configurable multimedia task-force",
//       "bs": "generate enterprise e-tailers"
//     }
//   },
//   {
//     "id": 8,
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//       "street": "Ellsworth Summit",
//       "suite": "Suite 729",
//       "city": "Aliyaview",
//       "zipcode": "45169",
//       "geo": {
//         "lat": "-14.3990",
//         "lng": "-120.7677"
//       }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//       "name": "Abernathy Group",
//       "catchPhrase": "Implemented secondary concept",
//       "bs": "e-enable extensible e-tailers"
//     }
//   },
//   {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//       "street": "Dayna Park",
//       "suite": "Suite 449",
//       "city": "Bartholomebury",
//       "zipcode": "76495-3109",
//       "geo": {
//         "lat": "24.6463",
//         "lng": "-168.8889"
//       }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//       "name": "Yost and Sons",
//       "catchPhrase": "Switchable contextually-based project",
//       "bs": "aggregate real-time technologies"
//     }
//   },
//   {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//       "street": "Kattie Turnpike",
//       "suite": "Suite 198",
//       "city": "Lebsackbury",
//       "zipcode": "31428-2261",
//       "geo": {
//         "lat": "-38.2386",
//         "lng": "57.2232"
//       }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//       "name": "Hoeger LLC",
//       "catchPhrase": "Centralized empowering task-force",
//       "bs": "target end-to-end models"
//     }
//   }
// ]

// 14:37

// yani jab humara browser request bhej raha hai
// browser bhi GET request hi bhej raha hai
// yahan par (browser mei) jab hum normally koi bhi link paste karte hai
// browser ke andar, to by default GET request jati hai

// to browser jab GET request bhej raha hai
// to uske pas yeh sab (array of objects) aa raha hai
// haa browser ke pas bhi status hai (use another api)
// (14:49)
// browser ke pass bhi dusri cheejein hai
// par yeh (browser) yeh (array of objects) print karwa raha hai

// par hume jo Response mil raha hai (see in bc, open Response)
// that is something like this (as shown in bc, open Response)
// ab isme se (as shown in bc, open Response)
// cat facts yani jo data hume actually chahiye tha
// wo hume dikhayi nahi de raha

// to basically yeh data isliye dikhayi nahi de raha (as shown in bc, open Response)
// kyuki yeh data (as shown in bc, open Response)
// ek alag format mei hai
// jisko hum abhi read nahi kar paa rahe
// 15:05

// ab iss cheej ko samajhne ke liye
// hume kuch terms ko samajhna padega
// sabse pehli term jisko hum samajhne wale hai
// i understand ki yeh terms AJAX ho gaya
// JSON ho gaya
// yeh terms bahut difficult lagti hai shuruaat mei
// dekhne mei par inke matlab bahut aasaan hai

// ek bar humne yeh dekh liya ki haa iss term ka yeh matlab
// hai to bahut easy hoga humare liye remember karna
// kuch terms ko hum samjhenge aur fir
// jaanenge ki hum jo response print karwa rahe hai (in bc)
// wo sahi kyu nahi print hokar aa raha

// sabse pehli term hai humare pas AJAX
// AJAX ka matlab hota hai
// AJAX is asynchronous javascript and XML
// AJAX is Asynchronous JS and XML
// pehle jamaane mei yani pehle jab
// humare pas modern js nahi hoti thi
// kaafi sare concepts nahi hote the
// to pehle network request kaise jati thi

// network request yani jaise abhi humne apni
// API ko request bheji hai
// pehle humare pas agar koi data aana hota tha
// to wo XML files ki form mei humare pas aa raha hota tha
// yani pehle agar hum kisi API ko
// request bhejte to jo data ka
// format hota wo XML hota tha
// 15:56

// par aaj ki date mei XML bahut kum (less)
// hota hai data ka format
// generally jo humara data
// aata hai wo JSON format mei aata hai
// 16:03

// ab yahan data format kehne ka kya matlab hai
// jaise for eg aapka ek dost hai
// aap apne dost ko kuch bhi money send karna chahte ho
// to money ko aap different different formats
// ke andar send kar sakte ho
// aap chaho to apne dost ko cash bhi de sakte ho
// use aap chaho to directly net banking se paise
// transfer kar sakte hai
// nahi to hum chahein to UPI bhi kar sakte hai

// to at the end ja to wo hi data raha hai
// ja to money hi raha hai
// but wo different different formats ke andar
// ja raha hai

// to formats alag ho gaye to uss data ke saath deal karne
// ki technique bhi alag ho jayegi
// agar directly cash diya hai
// to use wo directly use kar payenge
// agar UPI diya hai aur dost
// ko cash chahiye to unhe jakar kahin se
// ATM se uss cheej ko withdraw karna padega

// to iss tarike se data ka format change ho jata hai
// par at the end data wahi jata hai
// pehle data jata tha XML format mei
// aajkal data jata hai JSON format mei
// ab JSON format ka kya matlab hai
// JSON is javascript object notation

// yani jo data ja raha hoga
// wo javascript objects jaisa hume dikhayi dega
// isiliye iska naam JSON hota hai
// to humare code mei (see code)
// yeh jo response humare pas ( console.log(response) )
// aa raha hai (see bc Response)
// yeh kis format mei hai
// yeh JSON  format mei hai

// const URL = "https://jsonplaceholder.typicode.com/users"

// const getFacts = async () => {
//     console.log("getting data .....");
//     let response = await fetch(URL)
//     console.log(response); // JSON format
// }

// JSON format js object jaisa format hota hai
// yani yeh jo cheej yahan par print hoke aa rahi hai
// (open bc Response)
// yeh humari js object jaisa format hai
// but this is (Response in bc) not js object
// bas yeh uss jaisa dikhayi deta hai
// (17:13)

// ab as a js developer kyuki hum js ke saath
// already deal kar rahe the hume already js aati hai
// to humare liye JSON data ko parse karna
// uske saath deal karna kaafi aasaan hota hai
// as compared to XML data

// nahi to hume XML bhi alag se jaake seekhni padti
// par aaj ki date mei sirf JSON ke andar hi hota hai 
// (data JSON ke andar hi hota hai)
// to XML ko hume seekhne ki jarurat nahi padti
// to aajkal jo maximum APIs use kar rahe hote hai
// wo kyuki JSON format ke andar data return karti hai
// to unn APIs ko hum AJAJ bhi keh sakte hai

// to AJAJ kehne ka basic matlab hoga
// Asynchronous Javascript And JSON ( AJAJ )
// kyuki XML ko JSON ne replace kar liya hai
// but AJAJ kyuki sunnne mei bahut weird lagta hai
// to it is not really a very popular term
// hum aaj bhi jo humara exchange hota hai
// network request jati hai
// response aata hai use aaj bhi hum AJAX hi kehte hai
// (18:00)
// ( kehna AJAJ chahiye )

// even though XML ki jagah humare pas JSON aa gaya hai
// par agar aap word sunte hai AJAX
// to uska matlab yeh hi hai
// ki hum API calls jo humne karke dekha abhi fetch API se
// isi ki hum baat kar rahe hai
// hum network pe kuch request bhejein
// aur humare pas kahin se kuch response aa raha hai
// and that is using AJAX (AJAJ)
// (18:15)

// ab humara API ko call karne ka process kaise work karta hai
// sabse pehle humari API ko jaise hi humne request bheji
// humare pas kuch Response aata hai
// aur yeh jo Response hota hai yeh JSON format ke andar hota hai
// 1. Response (JSON)
// hume ise JSON format se js object ke andar convert
// karna padta hai
// to yeh humara second step hota hai
// 2. JS object
// jab hum iss response ko ek usable format ke andar
// convert karenge

// ab wo convert karne ke liye hum ek special method
// use karte hai which is called JSON method
// ab yeh jo JSON method hai yeh bhi ek asynchronous method hota hai
// jaise fetch API ka jab hum fetch method use kar rahe hai
// fetch method asynchronous hota hai
// promise return karta hai

// vaise hi JSON method bhi asynchronous method hota hai
// promise return karta hai (18:54)
// to it ( json() method ) returns a second promise
// already response aa gaya fetch se (1. Response (JSON) ) 
// fetch ne first promise return kiya

// .json() ( json() method ) kya karega
// second promise return karega
// that ( second promise ) resolves with the result
// of parsing the response (1. Response (JSON) ) body text as JSON
// (Input is JSON, output is JS object)
// 19:08

// yani hum iss json() method ko input mei JSON dete hai (1. Response (JSON) )
// aur yeh output mei hume javascript object 
// yani usable data return karke deta hai

// to json() method se hum apna actual usable
// data nikalte hai Response object (bc Response) ke through
// to ise ( json() method ) use karne ke liye
// what we can do is (19:22)