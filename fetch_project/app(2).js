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