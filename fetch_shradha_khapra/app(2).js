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

// ============================================================================


// 7:25

// iske andar ek variable bana lete hai URL
// const URL = https://cat-fact.herokuapp.com/facts

// const URL ke andra humara yeh jo link tha jiske upar
// request bhejne se browser ko data mil raha tha
// usse hum bhi apni javascript ke code ke through
// data pana chahte hai, to iss link ko hum save kar lete hai

// aur basically jo hume api call karni hai wo iss link ko
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
// aur itna likhne se automatically humara code iss link (url)
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
// ab baat kar rahe honge kaise wo promises actual apis hume
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

// aur fetch hume kuch value return karega, yeh jo value hai ( fetch(URL) )
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



