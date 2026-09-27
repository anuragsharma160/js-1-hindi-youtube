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