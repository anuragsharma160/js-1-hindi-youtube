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
