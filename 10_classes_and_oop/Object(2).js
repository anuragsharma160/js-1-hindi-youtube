// 9:23

// theek hai ek basic sa function declare karte hai
// aapka jo mann kare function declare kijiye
// iski functionality se hume matlab hi nahi hai
// ki kya ho raha hai

// mai to aapse bas kuch sawaal poochna chahta hu
// ki suppose kariye ek function banaya maine
// multiplyBy5

// function multiplyBy5

// obvious si baat hai kya karta hai ek num
// input leta hai, koi bhi number le leta hai

// function multiplyBy5(num){}

// aur fir return kar deta hai, 

// function multiplyBy5(num){
//    return
// }

// aa..., multiply karke return kar deta hai
// num*5

// function multiplyBy5(num){
//    return num*5
// }

// koi dikkat isme , umeed hai abhi tak to nahi hogi
// comments mei likhte rahiye kariye jab aap isse bhi active
// rehte hai, jab aap active rahenge to aur jada achhe se samajh
// mei ayega
// 9:53

// theek hai chaliye itni baat ho gayi
// ab ek baat batayiye ki iss function ko mujhe pata hai access
// kaise karna hai -- multiplyBy5()
// aur iske andar suppose kariye 5 de diya
// multiplyBy5(5)

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5(5)

// Lekin mai yeh ( multiplyBy5(5) ) nahi karna chahta

// function multiplyBy5(num){
//    return num*5
// }

// likh liya

// agar mai aisa karu multiplyBy5 aur iske andar
// likh du .power =  
// multiplyBy5.power =
// aur likh du 2
// multiplyBy5.power = 2
// to kya yeh ho sakta hai, haa yeh badi interesting baat hai

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5.power = 2

// likh liya

// haa yeh badi interesting baat hai ki declare to function kiya hai
// 10:16 
// label function hai but yeh dot access ( multiplyBy5.power = 2 )
// to object ke saath lagta hai to kya function bhi ek object hai
// haa ji yeh badi interesting si baat hai

// to chaliye console.log karke dekhte hai
// aur aapko thoda sa surprise karte hai yahan pe
// sabse pehle to multiplyBy5()
// console.log(multiplyBy5())
// yeh to aapko basic pata hi hai iska ( console.log(multiplyBy5()) )
// result to kya aane wala hai isme koi dikkat
// wali baat hai hi nahi
// console.log(multiplyBy5(5))

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))

// likh liya

// dubara se console.log(multiplyBy5(5)) likh liya

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5(5))

// likh liya

// Lekin actually mei agar (10:36)
// mai karu usko dot access karke dekhu
// ki multiplyBy5 dot power
// console.log(multiplyBy5.power)
// kya yeh ( console.log(multiplyBy5.power) )
// access ho sakta hai

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)

// likh liya

// aur ho sakta hai to kyu access ho raha hai
// achha ek aur cheej yahan pe ( console.log(multiplyBy5.power) ke next line mei ) 
// agar mai jau aur abhi maine padha yahan pe
// to kya iska ( multiplyBy5 ) bhi koi prototype hota hai
// console.log(multiplyBy5.prototype)

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// likh liya

// 10:50

// kya dot prototype karke maine bola object hai uske andar
// ek dot value hai , abhi humne just dekha yahan pe ki agar
// wahan pe (browser console , const newHero = ["hulk", "spiderman"] example) 
// dot karke access ho jata hai sab kuch
// ( open and close [[Prototype]]: Array(0) in browser console , 
// const newHero = ["hulk", "spiderman"] example , of newHero dropdown)
// kyu ki array (newHero array) mei sab mei dot karke hi .length
// hi to le rahe ho ( length: 2  in newHero dropdown )

// 11:01

// to kya mai dot prototype (.prototype)
// ( [[Prototype]]: Array(0) , under newHero dropdown)
// access kar sakta hu aise
// to wo bhi dekh lete hai function ke andar hota hai ki nahi hota

// yeh sabse interesting cheej hai jo aapne abhi tak
// nahi dekhi hogi kahin pe bhi
// (  console.log(multiplyBy5.prototype)  , see code)

// thoda sa hum terminal ko neehe le aate hai
// aur ab isko run karke dekhte hai ki actually mei
// mamla kya hai yahan pe

// o/p 25
// 2
// {}

// to humne kya dekha ki yeh 25 (see o/p)
// yeh (25 see o/p) to bilkul bhi surprising nahi tha
// bilkul bhi nahi hona chahiye kyuki 25 to obvious si baat hai
// aa hi gaya hai
// 11:27

// yeh 2 (see o/p) kaise aya
// kyuki yeh power ( console.log(multiplyBy5.power) mei multiplyBy5.power / multiplyBy5.power = 2)
// kya mai function ke andar yeh 
// ( console.log(multiplyBy5.power) mei multiplyBy5.power / multiplyBy5.power = 2)
// bhi kar sakta hu

// aur yahan pe empty paranthesis (empty curly braces {}, see o/p)
// yani ki prototype kya hai ek empty paranthesis aya
// 11:36

// haa ji yeh aap kar sakte hai
// to isse humne actually mei samjha kya
// isse yeh samjha humne ki actually mei
// javascript mei har ek cheej object hoti hi hai
// ( {}, see o/p ) (11:45)

// function , function bhi hai 
// aur function , object bhi hai
// function ke andar aapki properties jo hai jo bhi
// uski working hai functionality hai wo function ki
// tareh behave karti hai

// Lekin agar aap chahein to kisi ko bhi ek object
// ki tareh bhi behave kara sakte hai
// 11:58

// kyu aur kaise karva sakte hai
// ( diagram mei aa gaye )
// kyuki end of the day , har koi cheej jake 
// milti hai aapke object se (see diagram)

// isiliye mai bolta hu prototypal inheritance ,
// javascript haar nahi maanti hai,
// har cheej ko upar se upar leke jati hai aur
// jati hi rehti hai

// to array ko bhi upar leke gayi object pe (see diagram)
// aur further object ko aur upar kahin nahi lejaya ja sakta
// (null , see diagram)
// wo end of the world ek tareh se aa gaya hai
// C drive ke bahar kahan hi jaoge
// ya fir linux mei ho to slash ( / ) ke bahar
// kahan hi jaoge

// 12:20

// to wahan pe aapko null (see diagram) ka reference milta hai
// prototype ( null (see diagram) ka reference milta hai as prototype )
// to object (see diagram) ka jo prototype hai wo actually mei
// null (see diagram) hi ho jata hai
// vaise getters aur setters available hai aap chahe to aur
// bhi reference daal sakte hai (in diagram) but nahi daalte
// hai hum usually
// 12:30

// to yahan pe (in diagram) humare pas object (see diagram) mil gaya hai
// (object as prototype of array / string)
// aur yahan pe (in diagram) null (see diagram) mil gaya hai

// to abhi aapko samajh mei aaya function (see diagram)
// bhi ek tareh se technically hum keh sakte hai ki
// yeh reference object ko bhi karta hai
// (12:40)

// humne abhi tak aisi functionality explore nahi kari kyuki
// koi scenario hi nahi aya ,
// but aisa hota hai, ho sakta hai , samjhe...

// chaliye , ab aage chalte hai, thoda sa aur code likhte hai
// yeh to thoda sa interesting aur surprising code ho gaya aapke
// liye, lekin aur chalte hai thoda sa isko aur achhe se explain karne ke liye

// ek function create karte hai jiska naam hum rakh dete hai
// createUser
// function createUser(){}
// aa..., jada kuch khaas nahi karega, functionality
// mei hume vaise bhi koi issue abhi hai nahi , business logic
// pe abhi hum aye bhi nahi hai , jab ayenge tab ki tab dekhenge
// function createUser(username, score){

// }

// 13:05

// to yeh lijiye yeh humare pas ho gaya score (function parameter)
// theek hai ji, ab kya hai ki obvious si baat hai
// mujhe iske (function ke) andar do (2) variables yahan pe create
// karne hai

// Lekin yeh abhi tak mujhe actually mei samajh mei nahi aya achhe se
// ki yeh this keyword ka mamla kya hai
// kyuki this keyword bhi aapka prototype se hi juda hua hai
// 13:19

// aa..., diagrams mei hi jada achhe se samajh mei aa jata hai
// jab theory blackboard etc pe likhte hai wahan pe but theek hai
// abhi ke liye

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){

// }

// likh liya 

// 13:24

// to humne kya jana ki agar mai yahan pe (inside function) 
// ek username banau
// function createUser(username, score){
//     username
// }

// to yeh username maine jo variable andar function ke declare kara hai
// aur jo parameter mei mujhe aya hai , 
// dono ke beech mei confusion ho sakta hai
// ( function ke andar wale variable username and 
// function ke parameter wale username ke beech mei confusion ho sakta hai )
// ki agar username = username likhunga
// function createUser(username, score){
//     username = username
// }

// to konsa wala mera hai, konsa wala yeh hai 
// confusion ho sakta hai

// to uss case mei kya karte hai,
// hum yahan pe this keyword use kar lete hai
// this.username
// function createUser(username, score){
//     this.username = username
// }

// 13:44

// this se kya hai ki current context set hota hai
// to yeh mai abhi bataunga aapko ki kya hota hai 
// lekin actually mei abhi aap dekhenge
// to hume ek empty paranthesis (empty curly braces see o/p) 
// bhi mila hai

// update code and run

// function multiplyBy5(num){
//    return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
// }

// likh liya

// o/p 25
// 2
// {}

// yeh empty paranthesis (empty curly braces , see o/p) 
// hai kya pata hai, jab maine usko bola dot prototype
// ( console.log(multiplyBy5.prototype) , see code )
// yeh actually mei aapke by default kuch context set hote hai
// to by default jo context set hota hai prototype
// ( console.log(multiplyBy5.prototype) , see code, mei prototype )
// ka , yeh jo aapko yahan (o/p mei) dikh raha hai ( {} , see o/p )
// yeh actually mei uss method ka this hai.
// 14:06

// wapas se batau ek bar (14:08)
// thoda sa confusion ho gaya
// haa ji chaliye jinko samajh mei aa gaya pehli bar mei...

// actually mei yeh jo prototype hota hai
// ( console.log(multiplyBy5.prototype) mei prototype , see code)
// yeh sirf kuch methods nahi, uske saath saath aapko kuch
// internal properties bhi deta hai
// (14:18)