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



