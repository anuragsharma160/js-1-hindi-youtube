// 32:51

// humne boiler plate code already generate kiya
// hua hai apne ek index.html file ke andar
// and iss file ko humne title diya hai Currency Converter
// and iske saath humne link kar rakhi hai
// ek style.css file (see index.html)

// agar hum apne browser ke andar jayenge 
// to humara page hume kuch iss tarike se dikhayi dega
// (open with live server)
// jisme humne apni console window ko already open kar
// rakha hai

// ab shuruaat karte hai sabse pehle basic html
// code ke saath
// isme sabse pehle to hum ek div apne liye ek create karenge
// jisko hum naam dene wale hai container
// container ke upar hi humare pas ek h2 heading rakh sakte hai
// jise hum keh denge currency converter

// so this is basically our currency converter
// ab currency converter ke liye ek form hai
// jise hum create karne wale hai
// form ke andar sabse pehle 
// ek div create karte hai jise hum
// kahenge apni amount wala div

// amount div ke andar p tag
// amount div ke andar hum apni kuch amount enter
// karwayenge user se
// to hum yahan likh sakte hai Enter Amount
// and iske andar humare pas ek input box hoga
// jiski value shuruaat mei hum rakh sakte hai as 100

// iske type mei hum add karne wale hai text
// refresh kar diya to yahan par (browser) hum
// chahein to apni value ko hum 500 bhi rakh sakte hai (in browser)
// basically agar mujhe 1000 Dollars ko convert
// karna hai to Indian Rupee to uske liye kya value
// hogi wo hum yahan par (browser) aakar type
// kar rahe honge
// yeh ho gaya humara amount ka div

// iske alawa hum apne liye kuch dropdowns
// create kar sakte hai
// to lets create a div called dropdown
// (just below amount div)
// dropdown ke andar humare pas 2 dropdowns honge

// ek jiske andar hum from wali currency likhenge
// ek jiske andar hum to wali currency likhenge
// for eg hum Dollar se Indian Rupee ke andar
// convert kar rahe hai
// to from mei Dollar aa jayega yani USD
// aur to mei Indian Rupee aa jayega yani INR

// to iss tarike se dropdown mei humare pas
// 2 dropdowns honge
// ek hoga humara from wala dropdown
// and ek hoga humara to wala dropdown

// first dropdown ko sabse pehle create karte hai (from div)
// ise ek paragraph de dete hai From
// saath mei ek aur div hum create karne wale hai
// we will call it select-container
// kyuki iske andar dropdown hai
// to dropdowns ko create karne ke
// liye html ke andar hum select element ko
// use karte hai
// 35:08

// to yahan par humare pas ek select element hoga
// ( select tag inside select-container div )
// select ka name (attribute) hum apne liye
// rakh sakte hai from
// and select ke andar hum kayi sare
// different options hai jinko create kar sakte hai
// (option tag inside select tag)

// for eg humara first option ho sakta hai USD
// second option humare liye ho sakta hai INR
// to yahan (2nd option tag mei) value (attribute) hum rakh denge as INR
// yahan (1st option tag mei) par bhi apni value ko hum rakh denge as USD

// save in bc
// to iss tarike se From 
// and fir humare pas ek dropdown aa jayega
// jis se hum apne options ko select kar sakte hai
// 35:40

// hum chahein to 2 aur options yahan par add kar sakte hai
// ek hum euro ke liye add kar dete hai EUR
// ek hum AUD ke liye add kar sakte hai AUD (Australian Dollar)

// saath ke saath jo bhi country hogi
// (select-container ke just neeche ke liye enter kiya)
// yani jo bhi currency hum select karenge
// hum uss currency ki image ko bhi dikhana chahte hai
// ( img tag below select-container )

// to uske liye hum apna image tag use kar sakte hai
// jiske andar hum kuch link add karenge
// ab humare pas bahut sari countries available hogi
// abhi to humne sirf 4 countries ke yahan pe
// examples (option tag) dikhaye hai apne dropdown ke andar

// par actually aapke pas yeh ek file hogi ( codes.js )
// jo download karne ke liye neeche aapko link
// diya hoga description box ke andar (36:15)
// humare pas poori countries ki ek list hogi ( codes.js )
// iss list ke andar humare pas
// har country ki currency ka code hai
// and har country ka code hai

// to humare pas bahut sari different different
// countries hai , iske andar total 160 countries ki
// information hai, 159 countries ki information hai
// jisko use karke hum apne currency converter ko create karne
// wale hai

// ab har country ka alag ek flag hoga
// to uske liye jaruri to nahi hai
// ki hum har ek country ke flag ki image
// download karke rakhein
// to wo data dene ke liye bhi
// humare pas different different APIs hoti hai
// jinko hum use kar sakte hai

// to flags ke liye we will use this particular link
// ( flagsapi.com )
// jisme humare pas yeh link hota hai
// ( 1st link under Example (img tag) )
// iss link ko use karke hum 
// kisi bhi country ka flag lekar aa sakte hai
// 36:58

// to basically source mei (src) 
// image ke source mei hum iss link ko use karenge
// ( 1st link under Example (img tag) )
// yeh humare pas link hoga (copy link and paste in new tab in browser)
// isko enter kiya to humare pas 
// yeh image aa jayegi which is some country's flag

// ab yahin par (iss link par in browser) agar hum IN
// likh dein (BE ki jagah IN), IN yani India ka flag to humare pas
// India ka flag aa jayega
// agar hum yahan par US likh dein IN ki jagah
// to humare pas US ka flag aa jayega
// if NP , then Nepal
// to iss tareh bahut sare different countries 
// ke flag humare pas aa sakte hai

// to we will start with this flag (IN) (copy link)
// source ke andar hum iss link ( https://flagsapi.com/IN/flat/64.png )
// ko paste kar sakte hai
// shuruaat mei hum converter ko
// USD to INR converter banayenge
// to hum US ka flag hai , ise dikha sakte hai
// ( https://flagsapi.com/US/flat/64.png in img src )

// to yeh basically humara first select-container ban jayega
// 37:44
// and isi select-container ko hum properly yahan par
// copy kar sakte hai and we can paste it here
// ( copy p tag and select-container tag and paste it in, to div )
// yahan par hum To wali information likhenge
// basically yahan par hum paragraph mei likhenge To

// yeh (To wala) bhi humara select-container ban jayega
// yahan par hum India ka flag dikha rahe honge
// 38:07
// ( IN in link in place of US )
// save and refresh in browser
// to yeh humare pas flag aa gaya hai USD (see options in browser)
// yeh humare pas flag aa gaya hai India
// iske andar (To wale ke andar options, see browser India wala)
// options mei bhi India dikhane ke liye
// yeh jo INR hai (html mei)
// yahan par hum selected likh sakte hai (selected attribute)

// save and refresh in browser
// to abhi humara kya converter dikh raha hai
// converter kuch aisa dikh raha hai
// jisme upar hum amount enter karenge
// yahan pe humare pas flag hoga apni country ka
// abhi flag dynamically change nahi ho raha (flag according to options)
// wo sara logic hum javascript file ke andar likhenge

// par basically shuruaat mei hum USD to INR
// iss tarike ka converter banayenge ki kaise
// Dollar ko hum Rupee mei Indian Rupee mei 
// convert kar sakte hai

// to yeh (see html) humare pas proper
// humare 2 dropdowns ho gaye, 
// ek dropdown hai humara From wala (see browser)
// ek dropdown hai humara To wala (see browser)

// next hum chahein to apne liye
// ek aur div bana sakte hai
// lets call this div
// iss div ko hum likh sakte hai apna final message
// msg div
// ( just after dropdown div , just before form closing tag )
// jiske andar we will basically write something like
// 1USD = 80INR
// iss tarike ki kuch information 
// basic information hogi jisko hum dikha rahe honge

// saath ke saath hum apne liye
// ek button create kar sakte hai
// (just after msg div)
// lets create a button jisme hoga
// Get Exchange Rate
// to Get Exchange Rate ko jaise hi click
// karenge, vaise hi kya hoga humara form
// ek tarike se abhi submit ho raha hai

// jaise hi hum form submit karte hai
// form ke andar koi bhi button hota hai
// wo apne aap mei ek submit button ki tareh
// act karta hai

// jaise hi isko click kar rahe hai
// form humara submit ho raha hai
// form submit ho raha hai
// to aapko dikh raha hoga
// ki upar uske (url mei) argument dikhayi de rahe hai
// 39:36
// to yeh form ka default behaviour hota hai
// aur jaise hi isko click kar rahe hai (button ko)
// page humara dubara bar bar bar bar reload ho raha hai
// abhi ke liye iss cheej ko completely ignore karna hai
// par basically yeh humara basic layout hai apne form ka

// ab basic layout humne create kar liya
// saath ke saath ek aur cheej hum kar sakte hai
// we can add some icon in between
// yani yeh From aur To ke beech mei
// hum koi icon add kar sakte hai

// icon ke liye we can go to font awesome
// fontawesome.com/icons
// fontawesome ke andar humare pas kaafi icons
// hote hai
// plus we also have font awesome cdn
// font awesome cdn in browser search

// hum iss link par ja sakte hai
// https://cdnjs.com/libraries/font-awesome
// hum iss link ko (1st highlighted link)
// copy link tag ko copy karenge
// aur ise yahan par (below css file link)
// paste kar denge apne head ke andar

// to yeh humara link hota hai jisse kaafi sare
// freely available icons hote hai jinko
// hum use kar sakte hai
// ab icons ko use kahan se karna hai
// yeh humari font awesome ki website hoti hai
// fontawesome.com/icons
// jahan se hum apne free and open source icons
// ko use karenge
// to basically we can search for exchange
// yeh wala free icon hai jise hum use karne wale hai
// (40:38)
// ( copy i tag )

// lets paste it yahan par (between From and To select-container in html)
// From and To ke beech mei
// ab iss poore layout (browser) ko hume achhe se convert karna hai
// to our currency converter

// css part
// to apni style.css ko open kar lete hai
// cools jaisi kisi bhi website par jakar apne liye
// ek palette generate kar sakte hai
// to kaafi sare different colors ke combination
// hume mil jayenge
// to aisa hi ek combination mam ne
// generate kiya hai #f4e4ba
// 42:07

// 51:46
// ab hume 2 kaam karne hai
// apne javascript ke andar
// sabse pehla yahan (from select ( USD ) in browser)
// par hume sirf 4 countries hi nahi dikhani
// hume sari ki sari countries dikhani hai

// jaise hi hum country change karein
// humara flag change hona chahiye
// aur jaise hi iss button (Get Exchange Rate)
// ko click kiya jaye
// vaise hi poora conversion ho
// aur wo cheej hume yahan pe ( 1USD = 80INR )
// aake dikhayi de

// to iss tarike ka proper
// jo fully functional app hai
// usko hum prepare karna chahte hai

// to uske liye already humne 2 javascript file
// banayi hui hai
// ek javascript file hai -- codes.js ke naam se
// jiske andar humne sari ki countries ki list
// prepare ki hui hai jisme country ka code hai (RHS)
// plus humari country ki country ki currency hai (LHS)
// (see codes.js)

// yeh wali file (codes.js) aapko already neeche
// description box ke andar mil rahi hogi
// to ise jakar hum create kar sakte hai
// nahi to aap chahte hai ki aapko 4-5 countries
// ke saath hi start karna hai 
// to you can also copy the countries directly (from codes.js)
// aap directly bhi apni khud ki file bana sakte hai (like codes.js)

// iss file file (codes.js) ke andar hum as such koi
// kaam nahi karenge
// sara kaam hum apni app.js ke andar kar rahe honge
// ab dono files ( app.js and codes.js ) ko pehle index.html
// se connect bhi kar lete hai

// body tag (body closing tag) se just pehle
// we will write a script (script tag)
// jiske andar source (src) mei hum pehle codes.js
// ko include karenge

// uske baad script mei source (src) mei hum apne
// app.js ko include karenge

// javascript part
// ab yahan aa jate hai apni app.js ke andar
// 53:00
// ab finally hum apne app.js ke andar
// javascript ke logic ko likhna start karenge

// apne js ke code mei sabse pehle apni API
// jise hum use karne wale hai
// use dekh lete hai
// we are going to use this currency API
// ( https://github.com/fawazahmed0/currency-api#readme -- old link )
// ( https://github.com/fawazahmed0/exchange-api -- new link )

// jo hume iss link (just above link) 
// par yahan pe github ke upar
// iss page par available mil jayegi
// and yeh raha iska link 
// ( https://github.com/fawazahmed0/currency-api#readme -- old link )
// ( https://github.com/fawazahmed0/exchange-api -- new link )
// ( 53:21 )

// API ke read me mei basically we have our end points
// to humare pas different different end points hai
// basic format yeh rahega humare API ke URL ka
// ( https://github.com/fawazahmed0/exchange-api -- new link )
// ( URL Structure:
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint} )
// 53:29

// hum iss API ke andar kaafi sari different services hai
// ( scroll down in -- https://github.com/fawazahmed0/exchange-api -- new link )
// hum iss service ko use karna chahte hai
// ( /currencies/{currencyCode}/{currencyCode}
// Get the currency value for EUR to JPY:
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json -- old website )
// ( see migration guide if required )
// basically jab hume ek currency se dusri currency 
// ke andar convert karna hai

// to iss link ko ek bar copy kar lete hai
// ( /currencies/{currencyCode}/{currencyCode}
// Get the currency value for EUR to JPY:
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json -- old website )
// ( see migration guide if required )
// ( our link -- https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr )
// yahan par kya aa raha hai
// hum EURO se i think this is Japanese Yen
// (JPY currency in browser search)
// yes this is one Japanese Yen
// jiske andar convert karne ki koshish ki ja rahi hai

// to iss link par hum ja sakte hai
// ( /currencies/{currencyCode}/{currencyCode}
// Get the currency value for EUR to JPY:
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json -- old website )
// ( see migration guide if required )
// ( just above link is not working )
// 53:55
// (our link -- https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr )

// aur yeh hume date return karega (mam ka link)
// last updated date for the exchange rate
// and saath ke saath kya exchange rate hai ( "rate":92.68 , see browser )
// Euro se Japanese Yen ka wo hume dikha raha hai (mam ke)

// agar hume for eg agar hume chahiye ki hum
// USD se yani Dollar se Indian Rupee ke andar
// convert karna chahte hai to
// (our link -- https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr )
// yeh humare pass aa gaya hai exchange rate
// yeh 14th December ko update hua hai (mam ke)
// exchange rate is 83 Rupees (mam ke)
// ( change required currencies in url )

// to iss tarike se yeh jo humara link hai
// ( /currencies/{currencyCode}/{currencyCode}
// Get the currency value for EUR to JPY:
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json -- old website )
// ( see migration guide if required )
// ( just above link is not working )
// ( our link -- https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr )
// ise hum copy kar sakte hai
// (code editor mei aa gaye)

// and we can create a variable called BASE_URL
// BASE_URL ke andar hum yeh link paste kar lenge
// const BASE_URL = "https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr"

// ab iss link ke andar currencies ke baad (mam ke lnk mei)
// yahan par vaise to USD hai, yahan par INR hai 
// par yeh yahan par baad mei hum apne variables ko
// likhne wale hai
// abhi ke liye ise (mam ke URL ko) itna hi hum chord sakte hai
// and we can save it
// 54:37

// sabse pehle yahan par aa jate hai (browser UI)
// and apne options ko populate karte hai (currency options ko)
// basically sare ke sare options ko hum populate karenge
// to apni index.html se hum select karne wale hai
// apna dropdown (class = dropdown)

// to dropdown =
// const dropdown =
// document.querySelector()
// const dropdown = document.querySelector()
// and we are going to select the dropdown class
// const dropdown = document.querySelector(".dropdown")

// in fact dropdown ke andar jo humare selects hai (see html)
// const dropdown = document.querySelector(".dropdown select")
// ise hum dropdowns hi keh dete hai
// const dropdowns = document.querySelector(".dropdown select")
// querySelectorAll se dropdown ke sare select
// const dropdowns = document.querySelectorAll(".dropdown select")

// ya basically 2 selects hai humare pas dropdowns ke andar
// 2 dropdowns hai (see html) , unko humne select kar liya hai
// aur unhi ke upar hum ek loop chala lenge

// const BASE_URL = "https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr"

// const dropdowns = document.querySelectorAll(".dropdown select")

// ...aur unhi ke upar hum ek loop chala lenge (for of loop)
// const select of dropdowns
// for (const select of dropdowns) {
    
// }
// yeh humari select aa gayi (see loop)
// yeh loop run karne se pehle
// ek bar hum apni country list ko access karna chahte hai

// const BASE_URL = "https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr"


// const dropdowns = document.querySelectorAll(".dropdown select")



// // for (const select of dropdowns) {
    
// // }

// ...ek bar hum apni country list ko access karna chahte hai
// konsi country list jo humare codes.js ke andar
// yeh countryList variable hai ( const countryList = {} )
// ek bar ise access karke hum print karwa ke dekhna chahte hai

// to let code in countryList (for in loop)
// for (const code in countryList) {
    
// }
// console.log
// for (const code in countryList) {
//     console.log();
// }
// humare sare ke sare code humare pas print hokar aa jaye
// for (const code in countryList) {
//     console.log(code);
// }




// const BASE_URL = "https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr"


// const dropdowns = document.querySelectorAll(".dropdown select")

// for (const code in countryList) {
//     console.log(code);
// }

// // for (const select of dropdowns) {
    
// // }





// save in browser
// go to bc
// to bc ke andar humare pas sare ke sare
// codes available hai (see bc)
// 56:07

// apne codes (keys) ke saath hum countryList ke andar
// uss code ka ( uss key ka ) , 
// yani country ka code ( value ) bhi print karwa sakte hai
// countryList[code]
// 56:14
// for (const code in countryList) {
//     console.log(code, countryList[code]);
// }

// yeh ( console.log(code, countryList[code]); mei code ) 
// basically humara currency code hai (key hai)
// yeh ( console.log(code, countryList[code]); mei countryList[code] ) 
// humara country code hai (value hai)


// const BASE_URL = "https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr"


// const dropdowns = document.querySelectorAll(".dropdown select")

// for (const code in countryList) {
//     console.log(code, countryList[code]);
// }

// // for (const select of dropdowns) {
    
// // }

// save and refresh in bc
// (AED AE
// AFN AF
// XCD AG
// ALL AL
// ...
// ...)
// to yeh humara currency code aa gaya (AED)
// yeh humara country code aa gaya (AE)
// 56:21
