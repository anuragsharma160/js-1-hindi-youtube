// (5:11)

// ab suppose kariye aapne ek function banaya
// yeh function kya karta hai SetUsername
// function SetUsername

// theek hai aap ek application bana rahe hai 
// discord bana rahe hai suppose kar lijiye
// discord mei username set karne ke liye
// kuch rules bhi aap check karte ho
// database se bhi call leke aate ho ki
// kisi aur ne kuch le to nahi rakha hai aisa username
// to yeh sab dete ho

// theek hai ji to humne username yahan se accept kar liya
// user se
// function SetUsername(username){

// }

// aur this.username ke andar humne username add kar diya hai
// function SetUsername(username){
//     this.username = username
// }

// to jab bhi aap isko ( function SetUsername(username){ ) 
// bologe ki username ko set karna hai to
// yeh ( function SetUsername(username){ ) kar dega
// iske ( this.username = username ) upar yahan
// pe yeh kar raha hai apni complex calculation
// to yeh lijiye complex calculation bhi call kar di
// complex DB calls bhi kar diye
// suppose kariye kar diya
// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// achha theek hai ab aapke pas ek aur function hai
// wo function kya karta hai, wo karta hai createUser
// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser

// theek hai ji user banata hai , ab user se
// banate time humne kya kya liya
// username liya
// ek email liya
// aur ek humne liya password
// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password)

// 6:00

// theek hai ji bada hi common sa scenario liya hai humne
// isiliye hi to keh raha hu practical series (playlist)
// hai poori ki poori
// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){

// }

// to ab kya karte hai ki theek hai ji humne kaha
// this.email jo hai usko set kar do email se
// theek hai ji kar dete hai koi dikkat hai hi nahi isme
// yeh to aapne hazaar bar kar rakha hai (this.email = email)
// this.password ko bhi aap set kar do password se 
// yeh lijiye yeh bhi kar dete hai password se (this.password = password)

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     this.email = email
//     this.password = password
// }

// Lekin yeh jo username hai na ( function createUser(username, email, password){ )
// isko directly mat karo
// ek kaam karo yeh method call karao
// jo bhi aapka hai SetUsername wala ( function SetUsername(username){ )
// theek hai ji kara liya

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername()

//     this.email = email
//     this.password = password
// }

// aur isko ( SetUsername() ) pass on kar do
// username ( SetUsername(username) )
// aur yeh ( SetUsername(username) ) set karke dega
// aapko username ko

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername(username)

//     this.email = email
//     this.password = password
// }

// 6:34

// theek hai ji maan liya yeh ( SetUsername(username) )
// karke dega
// achha yeh ( SetUsername(username) ) agar karke dega
// to actually mei yahan pe ( SetUsername(username) ) username
// ka access hona chahiye
// ab yeh method ( SetUsername(username) ) call ho raha hai

// iske andar ( function createUser(username, email, password){ )
// hi call ho raha hai
// ( SetUsername(username) , function createUser(username, email, password){
// ke andar hi call ho raha hai )

// to technically to humne yeh hi dekha tha na ki
// agar uske andar call ho raha hai
// to aapke pas uska access hona chahiye
// (parameter ka access hona chahiye)
// kyuki yahan pe ( inside function createUser(username, email, password){ )
// jitne bhi variable aap declare 
// karte ho unka access aapke pas hota hai

// internally koi bhi agar aur cheej bhi declare karte hai 
// function ke andar aur , 
// ( function createUser(username, email, password){ ke andar )
// to wo bhi access hota hai
// (6:55)

// to iss function ( SetUsername(username) ) 
// ko agar yahan ( inside function createUser(username, email, password){ ) 
// call kar liya hai
// to kayi logo ko lagega ki uska ( SetUsername(username) )
// jo execution context hai
// wo uske andar ( inside function createUser(username, email, password){ ) 
// aa jayega

// haa yahan badi interesting si kahani hai
// to actually mei kahani aapko tab samajh mei ayegi
// jab aap kya karoge ek const loge, suppose karo ek naya user
// bana rahe ho discord pe chai
// const chai
// aur aapne sare protocols follow kare hai
// ki bhai new keyword bhi laga raha hu function ke andar
// taki mujhe sara access bhi mil jaye
// const chai = new
// theek hai yeh sab aap kaam kar rahe ho badi achhi baat hai
// const chai = new createUser()
// kyuki ab aapko aata hai wo sare
// discussion hum kar chuke hai

// le lo bhai username sara "chai" le liya hai username theek hai
// const chai = new createUser("chai")
// email bhi le lo, to chai@fb.com
// const chai = new createUser("chai", "chai@fb.com")
// chai naam ka jo user hai wo facebook mei kaam karta hai
// password "123"
// const chai = new createUser("chai", "chai@fb.com", "123")
// aur console.log karana chahta hu chai ka
// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);
// theek hai ji yeh ho gaya humare pas chai



// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername(username)

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); 

// theek hai ji ab isko run karate hai (in terminal)
// yahan pe aati hai problem ki actually mei kya kya ho raha hai
// o/p createUser { email: 'chai@fb.com', password: '123' }
// theek hai ji email aur password to aa gaye jaise expected the (see o/p)
// par uss property ( this.username = username ) ka kya karein jo
// iss method ( function SetUsername(username){ ) ne set kari hai
// aur set bhi kari hai ki nahi kari hai
// kya guarantee hai iski ( function SetUsername(username){ )
// 8:00

// kyuki yahan pe (see o/p) to humare pas
// wo aya hi nahi hai "chai" diya to tha
// ( const chai = new createUser("chai", "chai@fb.com", "123") )
// par jab log kara raha hu ( console.log(chai); )
// to uska username to set hua hi nahi (see o/p)
// email aur password hi ho raha hai, dekhiye (see o/p)
// email aur password ho raha hai , 
// iske alawa to kuch ho hi nahi raha hai iss object ke andar (see o/p)
// hmm... problem wali baat hai

// to actually mei call ( SetUsername(username) )
// ho bhi raha hai kya
// hmm... pehli baat to yeh
// aur ho raha hai
// to maine bola this.username (see code this.username = username in function SetUsername)
// (8:18)
// to yeh ( this.username = username ) to 
// yahan iss function ( function SetUsername(username){ ) 
// met set ho raha hai

// mujhe to yahan ( function createUser(username, email, password){ ke andar )
// set karna tha yeh ( this.username = username )

// mujhe actually mei likhna to yahan ( function createUser(username, email, password){ ke andar )
// tha na -- this.username = username (as follows)

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername(username)
//     this.username = username
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// to yeh wala jo kaam hai 
// ( this.username = username inside function createUser(username, email, password){ )
// yeh hi to maine outsource kar diya hai
// ki yeh wala kaam US (United States)
// mei jake hoga
// ( function SetUsername(username){ is US United States )
// yeh yahan pe US hai ( function SetUsername(username){ is US United States )
// yahan pe ( function SetUsername(username) ) 
// jaake ho raha hai yeh kaam (this.username = username)
// 8:36

// to kaise yeh kaam (this.username = username) kiya jaye
// achha problem to aa gayi
// to yeh method ( function SetUsername(username){ )
// to call ( SetUsername(username) ) to ho hi nahi raha hai
// kyuki agar ho gaya hota to yahan pe ( function createUser(username, email, password){ ke andar )
// this.username ka access bhi milta (8:42)

// (this.username = username backspace inside function createUser(username, email, password){)

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername(username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// this.username se matlab hai (this.username ka access se matlab hai)
// ki yahan pe ( o/p / const chai = new createUser("username", "chai@fb.com", "123") )
// poora ek object milta jiske andar
// username, email, password teeno aate
// haa ji baat to sahi hai hota
// to actually mei yeh call ( SetUsername(username) ) 
// ho hi nahi raha hai
// haa ji yeh actually mei call ho hi nahi raha hai

// achha theek hai ab isko ( SetUsername(username) ) call
// agar aapko iss tareh (see entire code) se karana hai
// function ke andar se
// (means function createUser ke andar se function SetUsername ko call karana hai)
// tab actually mei yeh jo call hai ( SetUsername(username) )
// aapne uska ( function SetUsername(username){ ) reference diya hai sirf 
// aapne usko ( function SetUsername(username){ ) call nahi kara
// 9:03

// haa mai maanta hu ki yeh ( SetUsername(username) ) 
// thoda sa deceiving hai
// ( SetUsername(username) mei username ko backspace kar diya )

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername()
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// ... haa mai maanta hu ki yeh ( SetUsername(username) ) 
// thoda sa deceiving hai
// ( SetUsername(username) mei username ko backspace kar diya )
// ki yeh paranthesis ( SetUsername() ) se aapko lag raha hoga ki
// nahi call to hua hai
// but technically internally js
// mei uska sirf reference gaya hai
// call nahi hua
// ( SetUsername() ke andar username likh liya )


// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername(username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// to isliye js mei aapko kuch methods milte hai
// jinse aap explicitly jaake unn methods ko call
// kar sakte hai jinme se ek hai dot call
// (9:19)
// SetUsername.call(username)
// ab yeh call method kya karta hai, ( hover call in SetUsername.call(username) ) 
// calls a method of an object, substituting
// another for the current object
// yeh sab chordo kya hai 
// yeh sab ki kahani mai aapko samjha dunga 
// kya hai bada complex likh rakha hai

// but actually mei call likhne ke baad ( SetUsername.call(username) )
// yahan pe actually mei wo ( function SetUsername(username){ ) call ho raha hai
// technically call ho raha hai

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername.call(username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// vaise to aap chaho to yahan pe ( function SetUsername(username){ ke andar ) 
// console.log bhi laga lete hai, 
// taki thoda sa aapko
// idea mil jaye ki actually mei cheejein 
// ho bhi rahi hai ki nahi ho rahi
// to isko hum likh dete hai called -- console.log("called")

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);


// theek hai ji ab isko hatate hai
// ( remove .call from SetUsername.call(username) )
// to aap dekhenge actually mei call to ho raha hai
// but koi kaam ka call nahi ho raha
// hai wo actually mei

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername(username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// save and run in terminal
// o/p called
// createUser { email: 'chai@fb.com', password: '123' }

// ok thodi si aur jitni clarity aaye utna hi achha hai
// dekhiye call to ho raha hai 
// ( see o/p -- called )
// ( function SetUsername(username){ call to ho raha hai )
// theek hai ji bol diya call ho raha hai

// lekin abhi ( SetUsername(username) ) 
// to aapne kaha ki yeh ( function SetUsername(username){ ) 
// call nahi ho raha
// dekhiye call to ho raha hai uska execution context bhi hai
// Lekin problem kya aa rahi hai
// problem yeh aa rahi hai
// (diagram mei aa gaye)
// ki jaise hi yeh hua (callme() - 5th box from bottom)
// call hua theek hai run ho gaya

// ab usne kaha theek hai ji run ho gaya
// to isko (callme() - 5th box from bottom) hatana hai
// to yeh hataya (callme() ko hataya from 5th box from bottom)
// aur iska (callme()) jo execution context ( 5th box from bottom )
// hai yeh bhi hata diya
// to uske (execution context) andar jitne bhi
// variables (variables of callme()) declare hue the
// wo gayab (10:12)

// ab theek hai wo gayab ho gaye
// to yahan tak (4th box from bottom) 
// to kabhi pahunche hi nahi na
// yeh (4th box from bottom) to humara outer function tha
// to yahan pe (4th box from bottom) kabhi pahuche hi nahi hai

// (code editor mei aa gaye)
// ha ji to execute hoke ( SetUsername(username) ) aise ki aise gayab
// thodi na kar dena hai uska ( function SetUsername(username){ )
// reference hold karke rakhna hai

// to reference hold karne ke liye actually mei
// jo method aata hai wo aata hai dot call
// SetUsername.call(username)

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// ... to reference hold karne ke liye actually mei
// jo method aata hai wo aata hai dot call
// SetUsername.call(username)
// aur bhi hai .bind bhi hai 
// aur bhi hai methods

// Lekin iss scenario mei (see entire code)
// iss situation mei
// kyuki mujhe sirf uska ( function SetUsername(username){ )
// reference hold karke rakhna hai
// isliye mai dot call use kar raha hu ( SetUsername.call(username) )

// ab kya hai ki sirf run hi karana tha 
// ( console.log("called"); see code ) ( SetUsername(username) )
// wo problem to maine dekh liya wo to hai hi nahi
// ha theek hai yeh bhi maan liya aapki baat
// 10:45

// Lekin wo jo reference hold karake rakhna hai na
// ki uske ( function SetUsername(username){ ) andar 
// jo bhi variable declare ho rahe hai
// ya jo bhi function call ho rahe hai ya execution ho raha hai
// usse ( function SetUsername(username){ ) 
// jo value return mil rahi hai wo bhi to chahiye
// na mujhe, aisa thodi na hai ki execution context hat gaya
// to bas baat khatam, aisa thodi na hota hai
// to aapko execution context wahan dena padega

// ab sirf aapne agar dot call likha hai wahan pe 
// ( SetUsername.call(username) )
// to bhi kaam nahi hoga actually mei
// call hoga wo ( function SetUsername(username){ )
// lekin actually mei aapko object 
// ( see object in o/p -- createUser { email: 'chai@fb.com', password: '123' } ) 
// mei koi change nahi milega
// save and run in terminal
// o/p called
// createUser { email: 'chai@fb.com', password: '123' }

// ... lekin actually mei aapko object mei koi change nahi milega
// kyuki ab hume pata lag gayi hai
// main problem ki call ho raha hai (see o/p -- called)
// Lekin uske 
// ( see object in o/p -- createUser { email: 'chai@fb.com', password: '123' } ) 
// andar jo bhi variables ho rahe hai username etc
// wo sab hat te hi gayab ho ja rahe hai

// to iske liye kya karna padega
// usko ( function SetUsername(username){ / function createUser(username, email, password){) 
// ek reference dena padega ki
// yar yeh jo aap ( function SetUsername(username){ ) 
// set kar rahe ho na jitna bhi
// as follows

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// mei 

//     // complex DB calls
//     this.username = username
//     console.log("called");

// yeh aap ( function SetUsername(username){ )
// khud ke this ( this.username = username, mei this ) 
// mei mat karo
// kyuki mujhe pata hai har function
// ka apne aap mei ek this hota hai 
// uss this ke andar aur bhi values add kari ja sakti hai

// Lekin mai keh raha hu ki yar
// yeh jo aapka ( function SetUsername(username){ )
// this ( this.username = username, mei this ) hai na 
// yeh actually mei gayab ho jayega
// to isko ( function SetUsername(username){ ke andar this.username = username, mei this )
// use mat karo

// mai ( function createUser(username, email, password){ )
// aapko apna this deta hu reference...
// this kya hai global ek object hi to hai
// aur hai kya, kabhi browser mei windows ho jata hai,
// node js mei yeh...
// (11:38)

// to usko ( function SetUsername(username){ ) 
// mai ( function createUser(username, email, password){ ) 
// apna this de deta hu yahan pe
// to ek kaam karo yeh this le lo aap
// SetUsername.call(this, username)



// function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("username", "chai@fb.com", "123")
// console.log(chai);

// haa ji yeh this ( SetUsername.call(this, username) mei this ) 
// kya hota hai
// jab bhi aap call ( ( SetUsername.call(this, username) mei call ) )
// use karte ho to first parameter (argument)
// aap this ( SetUsername.call(this, username) mei this ) 
// optionally chaho to pass kar sakte ho

// jaise hi ab maine usko this diya
// ( SetUsername.call(this, username) mei this )
// to wo kya kahega , theek hai baki syntax same rahega as follows
// ( function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// } )

// Lekin mai ( function SetUsername(username){ )
// mera this ( this.username = username ) use nahi karunga
// mai ( function SetUsername(username){ )
// aapka ( function createUser(username, email, password){ )
// wala this ( SetUsername.call(this, username) ) use karunga
// aur this ( SetUsername.call(this, username) ) se kya hai
// current context mil raha hai

// wo context jaise hi aapko mila 
// yahan pe ( SetUsername.call(this, username) mei this )
// 12:01
// to usne kya kaha ki theek hai
// ab mai (as follows)
// ( function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// } )
// gayab ho jau to ho jau

// but ek tareh se bol gaya ki
// mere ( function SetUsername(username){ ) 
// saamaan ab aapke ( function createUser(username, email, password){ ) 
// hue
// to mai ( function SetUsername(username){ ) 
// to chala iss duniya se
// mere saamaan aap ( function createUser(username, email, password){ ) 
// rakh lo (12:10)

// theek hai ji to chaliye ab dekhte hai
// ki kaam hua ki nahi hua
// to ab isko wapas se run kara ke dekhte hai 
// save and run

// function SetUsername(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);

// save and run
// o/p called
// createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

// ab run karaya to dekhiye username set ho gaya hai (see o/p -- { username: 'chai')
// to yeh jo this ki kahani hai na context
// pas karne ki ( SetUsername.call(this, username) ) 
// yeh bahut hoti hai

// actually mei bind ki to aur bhi jada kahani
// hoti thi react ke andar kabhi wo bhi sunayenge
// aapko fursat ke andar
// but abhi aapko samajh mei aa gaya hai ki
// actually mei call humara jo method hai
// ( SetUsername.call(this, username) )

// kabhi bhi ab aapse interview mei poche
// ki call ho kya raha hai 
// to ab aap sirf yeh nahi bologe rata rataya
// step ki this yeh...
// call jo hai humara current execution context
// kisi aur function ko pas kar deta hai

// technically sahi ho, 
// Lekin jab poora itna example (see entire code)
// doge achhe se samjhaoge
// to konsa interview nahi nikalne wala sir aapka

// Class End