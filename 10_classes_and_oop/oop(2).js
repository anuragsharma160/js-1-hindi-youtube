// to ab sabse pehli baat aati hai jo hum baat humari
// start karenge wo actually mei yeh hum Object Literal 
// se start karenge kyuki object literal actually mei hai kya

// dekhiye object literal hai kuch nahi, 
// literally ek object banana hai 
// jaise for eg aapne ek user naam ka ek object
// banaya 
// (chote u se banayiye ya kisi se bhi banayiye koi dikkat wali baat nahi hai)

// const user = {

// }

// yeh (const user = {}) aapka literally ek object hai 
// ab kya hai ki javascript mei isi ko hi base unit bola
// gaya hai ki aapka jo object hai wo hi object literal hai
// aur wo hi sabse basic unit hai jaise wahan pe (other prog languages mei)
// classes hoti hai , yahan pe (js mei) yeh (object literal) hai

// to ab uske (object literal) andar kar kya kya sakte hai
// ab user (const user = {}) hai to uske pas username
// bhi hoga to suppose kariye uske pas username hitesh hai
// theek hai ji koi dikkat nahi hai

// aur uske pas aur kya features honge 
// aa..., loginCount hoga suppose kariye kitni bar
// log in kar raha hai , suppose kariye ki 8 bar login
// kar chuke hai already

// aur kya options ho sakte hai, aa... signedIn ho sakta
// sakta hai , signedIn ki value true to 
// dekh sakte hai string values yeh sab ho sakte hai

// 11:24

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true
// }

// to yeh hi actually mei aapka object literal hai
// ab isko print kaise karayenge aapko pata hai koi bhi
// value lena hai to 2 tarike maine aapko bataye the
// square bracket se bhi le sakte ho
// aur dot notation se bhi acces kar sakte ho

// suppose kariye mujhe username print karna hai
// print karke as such humara koi fayeda hone wala hai nahi
// to par fir bhi kar lete hai print
// koi dikkat wali baat hi nahi hai

// node '.\10_classes_and_oop\oop.js'  in terminal 

// o/p hitesh

// print ho gaya hitesh

// 11:48

// ab object literal jab aap iss tareh se banate ho
// to maine aapse kaha tha ki object literal hote kya hai
// kuch bhi nahi uske andar collection hota hai (see md file)
// properties aur method

// yeh (as follows)

//     (username: "hitesh",
//     loginCount: 8,
//     signedIn: true)

//  sari aapki properties hai, jaise aapke array
// ke andar ek property di jati hai .length
// wo hi .length properties hai

// array ke andar aapko .map etc wo function
// bhi diye gaye hai taki wo kuch kaam bhi kar lein
// to wo kaam bhi hume yahan pe diye jate hai 
// jaise for eg getUserDetails

// to userDetails (getUserDetails) aapka yeh method hai
// to yeh lijiye aapne bana diya kaha ki function hai
// aur yeh function kya karta hai, aapko kuch return karta hai
// kya return karta hai , ya console.log hi kara lete hai 
// return to nahi karate, return bhi kara sakte hai vaise
// to hum

// ek comma , hum yahan ( signedIn: true ) lagana bhool gaye 
// theek hai ji laga diya as follows ( signedIn: true, )

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log();
//     }
// }

// console.log(user.username);

// likh liya

// console.log kara lete hai isko simply bol
// lete hai, "Got user details from database"
// theek hai ji kaise bhi karke gaya hoga
// leke aya hai database se detail, 
// hume kya farak padta hai

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);

// likh liya

// theek hai to iske saath hi ab aap chahte hai ki 
// isko mai access kar saku to bahut hi normal si baat hai
// getUserDetails ( console.log(user.getUserdetails()) )
// run karana padega ( () ) method hai sirf reference nahi de sakte hai

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// likh liya

// o/p hitesh
// Got user details from database
// undefined

// to -- Got user details from database aur undefined
// bhi aa gaya hai uske (undefined) bare mei bhi charcha karenge
// but theek hai abhi humara kaam ho gaya hai itna
// ki theek hai itni values aa gayi

// 13:04

// Lekin ab ek mudde ki baat yeh aati hai ki 
// jaise hi mai browser ke upar jata hu
// to browser ke upar chalte hai hum ek bar
// (browser mei new tab mei browser console open kar liya)

// aur mujhe pata hai ki iss tareh ki cheejein
// mujhe milti hai properties mei jaise suppose
// kariye console ke andar jaate hai clean karke
// let myArray = 
// aur hum kya karte hai isko literal values de dete hai kuch 1, 2, 3
// let myArray = [1, 2, 3] likha in browser console and enter

// to ab itna to mujhe samajh mei aa gaya hai ki
// myArray ke saath kuch properties attach hoti hai
// myArray in browser console and enter
// (3) [1, 2, 3] aya
// dropdown open karke dekha

// to properties mujhe pata hai length (length: 3)
// jo properties maine kari , 
// kuch method bhi assign hote hai
// (prototype dropdown open karke dekha)

// to method jaise yahan pe mujhe pata hai ki map
// yahan pe ek method available hai mujhe theek hai

// lekin uss map ko yeh kaise pata hai ki mujhe
// 1, 2, 3 ( let myArray = [1, 2, 3] ) pe hi loop
// karna hai, 
// kyuki ek aur bhi to ho sakta hai 
// (ek aur array bhi to ho sakta hai)
// ( both dropdown close kar diye )

// 13:53

// suppose kariye aapke pas kuch myArray2 yahan pe
// aa gaya aur yahan pe to 1 2 3 hi nahi 1 2 3 4 5 6
// aur bhi values hai
// let myArray2 = [1, 2, 3, 5, 6] and enter in browser console

// aa..., obvious si baat hai yeh lijiye 6 value
// let myArray2 = [1, 2, 3, 5, 6, 6] and enter in browser console
// to ab aapko kaise pata ki jo my yeh jo map hai
// yeh yahan pe ( let myArray2 = [1, 2, 3, 5, 6, 6] mei [1, 2, 3, 5, 6, 6] mei)
// agar baat karenge map ke andar kyuki map method to ek hi hai na
// (14:13)

// to ispe 1 2 3 pe ( let myArray = [1, 2, 3] ) loop
// lagana hai ya ispe ( let myArray2 = [1, 2, 3, 5, 6, 6] )
// loop lagana hai
// (14:17)