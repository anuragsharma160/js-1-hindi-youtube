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
// yeh sirf kuch methods nahi, uske saath saath kuch aapko
// internal properties bhi deta hai
// (14:18)

// to iss function ( function multiplyBy5(num){} ) 
// ki bhi to kuch property hogi
// jaise yahan pe ( function createUser(username, score){} )
// bhi to likh rahe hai hum this.username (see code)
// 14:22 (function ki properties means function ke andar ke variables)

// Lekin yahan pe ( function multiplyBy5(num){} ) to seedha return kar diya
// ( return num*5, see code)
// but agar hoti to (agar function multiplyBy5(num){} ki properties hoti to)
// num yahan pe ( function multiplyBy5(num){} ) bhi karta mai
// this.num = num
// tab bhi to kuch reference lete hi hum yahan pe ( function multiplyBy5(num){} )
// 14:31

// to uss case ke liye (agar this.num = num, hota function multiplyBy5(num){} ke andar) 
// yahan pe ( function multiplyBy5(num){} )
// iski bhi value hoti hai (14:33)

// ab dekhiye yahan pe ( function multiplyBy5(num){} )
// agar mai le leta hu -- this.num = num
// to yahan pe ( function multiplyBy5(num){} ) 
// bhi to kuch values mai leta

// function multiplyBy5(num){
//     this.num = num
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
// }

// likh liya

// theek hai to agar values mai iss tareh se leta
// to agar mai isko run karau wapas se
// (run in terminal)

// o/p 25
// 2
// {}

// to yahan pe ({} , see o/p) kuch na kuch reference to aana chahiye na
// 14:47
// to yeh reference ({} , see o/p) ke andar humare pas
// this.num (this.num = num, see code) actually mei store hota hai
// (14:50)

// aur bhi kayi cheejein hoti hai,
// (aur bhi kayi cheejein {} see o/p mei store hoti hai / aur bhi kayi cheejein hoti hai) 
// abhi yahan pe ( function multiplyBy5(num){} ) actually mei...

// achha ab aap keh rahe honge ki yeh this.num = num ( this.num = num, see code )
// to mujhe yahan ({}, see o/p) dikha hi nahi,
// nahi wo ( this.num = num, see code ) dikhega bhi nahi
// kyuki uska ( this.num = num, see code ) reference aapko
// lena padta hai, use karna padta hai,
// uska ( this.num = num, see code ) context mai abhi aapko samjhaunga chinta mat kijiye
// (15:01)

// but abhi ke liye yeh maan sakte hai ki aapki
// aur bhi jo prototype ki properties hoti hai
// plus (+) jo this ka context hai wo bhi aapke
// pas available hota hai yahan pe (15:08)

// ( this.num = num , backspace kar liya )

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
// }

// likh liya

// this pe jada chinta mat kijiye
// achhe se samjhayenge aapko aur detail mei
// example lene ke saath

// aur ek hum le lete hai this.score
// this.score =
// aur isko bhi de dete hai score
// this.score = score

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// likh liya

// chaliye ji itna kaam to ho gaya
// ab yeh function ( function createUser(username, score){ ) 
// ek bada hi aam function hai
// koi dikkat wali baat nahi hai

// Lekin kyuki maine aapko bataya 
// just abhi (diagram mei aa gaye)
// ki function bhi object hai (see diagram)
// aur yahan pe aur bhi (object bhi) null (see diagram) 
// humare pas available hai
// 15:31

// (browser console mei aa gaye, newHero array example)
// to kya aisa possible hai ki
// mai chahu to kuch functionalities bhi
// inject karva saku (see newHero dropdown)

// jaise mujhe pata hai array ke andar .length hota hai
// (see under newHero dropdown , length: 2)
// aur array maine declare kara (const newHero = [])
// to prototype ( [[Prototype]]: Array(0) , see newHero dropdown)
// se mujhe kuch functionalities milti hai
// ( open [[Prototype]]: Array(0) )
// by default

// jaise ki suppose kariye mujhe milta hai 
// .map , slice (see under [[Prototype]]: Array(0) dropdown)
// aur yeh sab,
// to kya mai meri functionality bhi inject kara sakta hu kisi
// aise function ke andar, object hi to hai aakhirkaar
// ( function object hi to hai aakhirkaar , see diagram)

// 15:52

// object mei properties hoti hai, 
// (object mei variables hote hai i.e. key value pair)
// aur ek koi property humara function hold kar legi
// (aur ek koi variable humara function hold kar lega)

// jaise yeh slice (see under [[Prototype]]: Array(0) dropdown)
// bhi to ek property hai (slice, left hand side)
// yeh function hai ( slice ka funnction , right hand side)

// to kya mai mere functions declare kar sakta hu
// haa ji bilkul kar sakte hai koi problem hi nahi hai usme
// (code editor mei aa gaye)
// 16:02

// jaise suppose kariye aapne kaha ki yeh createUser aapka ek 
// function hai
// createUser
// ab iske andar aap kya karte hai dot prototype lete hai
// createUser.prototype
// aur prototype ke andar jo aapka mann kare wo aap inject kar dijiye
// createUser.prototype.
// jaise suppose kariye mai kar deta hu iske andar increment
// createUser.prototype.increment
// 16:15

// ab increment kya hai ek function hai
// createUser.prototype.increment = function(){}
// yeh lijiye function aur yeh function ki ho gayi body
// ab iss body ke andar kya karna chahte hai
// mai score ko increase karana chahta hu

// achha theek hai ji score ko increase kara dete hai
// isko bol dete hai score++
// createUser.prototype.increment = function(){
//     score++
// }







// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     score++
// }

// likh liya

// theek ha ji bada hi basic sa mamla hai
// achha yahan pe ( createUser.prototype.increment = function(){ )
// kuch ab problem hai

// 16:32

// problem kya hai ki iss function ( function createUser(username, score){ )
// ke andar mai yeh values 
// ( function createUser(username, score){ mei (username, score) )
// pas kar raha hu
// ( means hum function createUser(username, score) ke andar 
// username, score as values pas kar rahe hai, see code )

// to suppose kariye iss function ( function createUser(username, score){ )
// ke users alag alag ho sakte hai
// to ek user to uska ho gaya -- chai, theek hai ji
// const chai = 

// chai ne bola ki createUser mai le raha hu
// const chai = createUser()
// aur createUser ka kya karo ki username le lo
// ( function createUser(username, score){ )
// to uska username chaliye ji -- chai le liya
// const chai = createUser("chai")

// 16:51

// aur chai ka price le lete hai
// ( aur chai ka score le lete hai )
// ( function createUser(username, score){ )
// to maan lijiye thodi mehangi chai hai 25 rupees ki le lijiye
// const chai = createUser("chai", 25)

// aur ek ho gaya humare pas -- tea
// ( function createUser(username, score){} ka dusra user humare pas ho gaya tea )
// const tea = 
// yeh tea bhi createUser hi use kar raha hai
// ( yeh tea user bhi function createUser(username, score){} ko hi use kar raha hai )
// const tea = createUser()
// aur createUser iss bar bol raha hai ki dekhiye
// mera naam to tea hai
// const tea = createUser("tea")
// to obvious si baat hai tea ho gaya naam , to ab yeh
// 250 ki ho gayi
// const tea = createUser("tea", 250)
// 17:07





// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     score++
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// likh liya

// mehangi chai ho gayi

// ab kyu maine prototype 
// ( createUser.prototype.increment = function(){} , mei prototype, see code )
// ke through yeh increment
// ( createUser.prototype.increment = function(){} , mei increment, see code )
// inject kar diya hai iske andar ( function createUser(username, score){} ke andar )

// Lekin problem pata hai kya hai
// problem yeh hai ki score (score++ , see code)
// mai kiska badhau ab
// 17:18

// yeh thoda confuse ho jayega ab internally
// ki increment method hai koi dikkat nahi hai
// ( createUser.prototype.increment = function(){} , mei increment )
// increment method chalega usme koi dikkat nahi hai

// Lekin increment method ke saath ab mai...,
// kyuki dono (const chai , const tea) 
// ek hi to function ( function createUser(username, score){} )
// use kar rahe hai
// 17:29

// aur function ( function createUser(username, score){} ) 
// pe jaake upar se tapak ke
// wo baith gaya hai apna method createUser... 
// ( createUser.prototype.increment = function(){}, me increment )

// to ab createUser 
// ( createUser.prototype.increment = function(){} / function createUser(username, score){} )
// ko kaise pata ki jab mai increment score 
// ( score++ ) karunga to
// 25 ko badhana hai ya ( const chai = createUser("chai", 25) )
// 250 ko badhana hai ( const tea = createUser("tea", 250) )

// 17:39

// kyuki uske ( createUser ) pass context nahi hai
// usko ( createUser ) idea nahi hai
// ki kaise values ko mujhe increment karna hai 
// ya kis value ko (25 ko ya 250 ko)
// kisne mujhe call kiya hai
// kyuki ho sakta hai koi bhi ( const chai or const tea ) call kar le

// to yeh jo context hai dene ke liye
// jaise obvious si baat hai na
// aapko ek saath 2 awaaz laga di 
// ek mummy ne , ek papa ne
// to kiske pas jana hai
// mummy ne awaaz lagai to mummy ke pas

// to context samajh mei aata hai aapko
// haa ji ki kisne awaaz diya,
// to kisne bulaya hai
// 18:00

// to isiliye abhi kya hai ki 
// iske pas (createUser / createUser.prototype.increment = function(){})
// context (const chai or const tea)
// hai hi nahi

// to yeh context samjhaane ke liye
// ki jisne bhi awaaz di
// kyuki hardcode value to nahi likh sakta na
// mai yahan pe ( score++ )
// 18:07

// ki aa..., chai ke andar jao
// aur uska hi score badhao (as follows)
// ( createUser.prototype.increment = function(){
//     chaiscore++
// } , see code)

// ya fir tea ke andar jao 
// aur uska hi score badhao (as follows)
// ( createUser.prototype.increment = function(){
//     teascore++
// } , see code)

// 18:13

// hardcode value to le hi nahi sakta
// to mai yahan (as follows)

// ( createUser.prototype.increment = function(){
//     score++
// } , see code)

// bol deta hu jisne bhi, 
// theek hai this ko humesha 
// yaad rakhne ka sabse easy best tarika hota hai
// jisne bhi bulaya hai uske pas jao
// 18:22

// to this matlab jis
// this.score++
// to this ne bulaya hai
// uska score badha do (as follows)

// createUser.prototype.increment = function(){
//     this.score++
// }

// 18:27




// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// likh liya

// theek hai to ab aapko yaad rahega
// this matlab jis
// to jisne bhi bulaya hai
// uska kaam kar do current context ka

// to ab yeh confusion hona uska
// ( createUser / createUser.prototype.increment = function(){ )
// dhoor ho gaya hai
// to jisne bhi ( this.score++ , see code mei this. / this )
// usko ( createUser / createUser.prototype.increment = function(){ )
// bulaya hai, yeh ( createUser / createUser.prototype.increment = function(){ )
// usi ka (const chai or const tea)
// hi value (25 / 250)
// increase karega

// Lekin lekin abhi bhi problem solve nahi hui hai
// yeh behind the scence hai bahut behind the scence hai javascript
// ke

// achha ab yeh itna mamla ho gaya 
// ab aapko lag raha hoga ki theek hai ji
// ab ek aur method bhi yahan pe inject kar lete hai
// itna inject kar liya to ek method aur sahi isme kya hai
// 18:52

// to yeh lijiye createUser ho gaya
// createUser
// uske andar maine kaha dot prototype
// createUser.prototype
// aur printMe naam se aapne ek method bana diya
// createUser.prototype.printMe
// yeh lijiye function
// createUser.prototype.printMe = function(){}
// aur humne fatafat se ek method bana diya
// createUser.prototype.printMe = function(){

// }

// 19:03

// ab yeh method kya karta hai simply console.log karta hai
// jada kuch karne ki jarurat hi nahi hai isko
// createUser.prototype.printMe = function(){
//     console.log();
// }

// back ticks le lete hai humare
// createUser.prototype.printMe = function(){
//     console.log(``);
// }

// aur bol dete hai isko ki -- score is
// createUser.prototype.printMe = function(){
//     console.log(`score is`);
// }

// aur yeh lijiye dollar sign -- ${}
// createUser.prototype.printMe = function(){
//     console.log(`score is ${}`);
// }

// aur score
// createUser.prototype.printMe = function(){
//     console.log(`score is ${score}`);
// }

// 19:15






// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${score}`);
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// likh liya


// achha wapas se score ( console.log(`score is ${score}`); )
// ki problem , kiska score dikhau bhai...
// chai ka ki tea ka (const chai or const tea)

// haa ji jisne bhi bulaya, uska dikhao (uska score dikhao)
// to obvious si baat hai jis ka matlab -- this -- this.score (as follows)
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }

// comment mei likhte jayiyega yeh -- jis ka matlab this
// to sabko pata rahega ki aap padh rahe hai aur humne kis
// context mei isko (this) samjha hai

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// likh liya

// to this.score , ( console.log(`score is ${this.score}`); )
// jisne bhi score poocha hai uska score bata do
// theek hai to yeh ho gaya humara method
// ( createUser.prototype.printMe = function(){ )

// ab kya hai ki interesting si cheej hai
// ki maine bola ki chai...
// chai
// chai backspace kar diya
// achha jab array bhi declare karte ho to jo bhi
// naam rakha hai aapne myArray
// myArray
// to usme aap aise jake likhte ho kya dot prototype
// myArray.prototype
// dot map()
// myArray.pprototype.map()
// iss tareh se likhte ho kya
// 19:56

// nahi iss tareh se ( myArray.prototype.map() )
// nahi likhte ho aap kabhi bhi

// jab bhi aap seedhe array pe jate ho (browser console newHero array example)
// to seedha (20:00) bolte ho ki achha yeh jo
// array hai newHero ( newHero dropdown open close )
// seedha ispe map laga do

// to dekho newHero hai humare pas yahan pe
// newHero dropdown close ke neeche newHero , likh liya in browser console
// newHero
// yeh lijiye newHero
// aur seedha hi map laga lete hai
// newHero.map , likh liya in browser console
// aur accessible hota hai
// 20:10

// to yeh ek feature hume deta hai javascript ki
// dekhiye prototype ka kaam mai kar lunga behind the scene
// ki usse upar se upar se jake khud dhoondh lunga
// mai apne aap (20:16)

// aapko bar bar nahi karna hai kyuki prototype ke andar
// ek aur prototype hua to kitni bar likhoge
// .prototype.prototype.prototype ................
// aap to pareshan ho jaoge
// to mai (javascript) yeh behind the scene kar lunga
// yeh syntactical sugar mai (javascript) aapko dunga
// aapko yeh bar bar prototype ( myArray.prototype.map() mei prototype ) 
// likhne ki jarurat nahi hai
// ( isliye aise -- myArray.prototype.map() nahi likhte )
// 20:28

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// myArray.prototype.map()

// likh liya

// myArray.prototype.map() ko backspace kar diya





// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// likh liya

// to isi tareh se jab aap khud bhi inject karenge
// ( myArray.prototype.map() ko backspace kar diya )
// to aap kya kariye seedhe boliye chai 
// chai
// aur jo bhi aapko
// method access karna hai 
// chai.
// ab wo seedha hi use kariye
// 20:36

// to suppose kariye yeh printMe ho gaya humare pas
// chai.printMe
// yeh lijiye
// theek hai ab printMe 
// ( createUser.prototype.printMe = function(){} )
// use karne ke liye kya karna hai
// chai.printMe()

// kuch nahi yeh ( printMe , createUser.prototype.printMe = function(){} )
// kuch value value to leta nahi hai
// jaise increment ( createUser.prototype.increment = function(){} )
// etc bhi koi value le nahi raha
// chahe to de bhi sakte hai but yeh printMe
// ho gaya ( chai.printMe() )
// 20:47

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()

// likh liya

// ab ek problem ayi hai
// haa problem kya aayi hai
// yeh aapke interviews clear karayegi yeh problem
// kayi bar

// dekhiye ab kya hai ki mai iss code ko
// run karata hu yahan pe

// o/p 25
// 2
// {}
// C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\Object.js:27
// chai.printMe()
//      ^

// TypeError: Cannot read properties of undefined (reading 'printMe')
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\Object.js:27:6)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0

// to yahan pe ek chota sa problem aya hai
// Cannot read properties of undefined see o/p
// achha ji abhi to aap bol rahe the ki aapko aise aise 
// properties mil jati hai, yeh sab hota hai

// achha problem kya hai properties inject hui hai
// ( chai.printMe() , see o/p)

// 21:09

// aa..., aapka yeh jo function hai
// ( createUser.prototype.printMe = function(){} / createUser.prototype.increment = function(){} )
// uske andar prototype karke
// ( createUser.prototype.printMe = function(){} / createUser.prototype.increment = function(){} , mei prototype)
// uss object ke andar aap jaake dekhoge
// to aapke pas uss function ke agar aap
// poora prototype aap print karke dekhoge
// to wahan pe aapke pas properties ayi hai 
// 100 % ayi hai
// 21:20
// ... 100 % ayi hai , jab memories etc kholke dekhoge

// Lekin jab aapne yeh 
// function se ( const chai = createUser("chai", 25) , mei createUser se )
// iske andar ( const chai = createUser("chai", 25) , mei chai ke andar )
// values transfer kari, tab aapne usko bataya nahi
// ki mere pas yeh (as follows)

// ( createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }  , see code ( dono functions / dono functions mei se ek) )

// additional properties ayi hai (21:33)
// yeh batana padega

// yeh batane ke liye sara kaam karta kon hai
// yeh batane ka sara kaam actually mei new keyword karta hai
// const chai = new createUser("chai", 25)

// 21:39

// haa ji to itni der se jo mai ramayan samjha raha tha aapko
// uska saar yeh hi tha ki mujhe new keyword ka importance aapko samjhana tha
// yeh sab to bada abhi achha lag raha tha ki
// haa nahi nahi karke haa prototype bhi ho gaya yeh bhi ho gaya
// sab ho gaya
// but itna jada importance hai, significance hai new keyword ka
// const chai = new createUser("chai", 25)

// aur isi tareh se jab interview mei aap samjhaoge 
// ki achha yeh lijiye example le raha hu , yeh sab maine kiya
// Lekin yeh code nahi chal raha hai
// nahi code chalna hi aapko interview mei select karata hai kyuki
// aapko pata hona chahiye wo kyu nahi chal raha hai
// 22:04

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()

// likh liya

// ab jaise hi aapne yahan pe new keyword ek inject kar diya
// ( const chai = new createUser("chai", 25) )
// ab usko pata hai ki mujhe kya kya kaam karna hai
// 22:11
// behind the scene new ke kya kaam hote hai mai aapko
// poora list mai dunga abhi chinta mat kijiye

// but ab agar mai iss code ko run karta hu yahan pe

// o/p 25
// 2
// {}
// score is 25

// to dekhiye usko pata hai -- score is 25 (see o/p)
// 22:20

// score 25 hi kyu hai uska ya fir price bol lijiye
// score to yahan pe theek nahi hai price bol lete hai
// kyuki chai ki price ki baat kar rahe hai hum
// ( console.log(`price is ${this.score}`); )

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()

// likh liya

// 22:27

// to usko pata hai ki chai ka jo daam hai wo
// 25 rupees hi hai yahan pe (see o/p)
// run in terminal

// o/p 25
// 2
// {}
// price is 25

// yeh ( price is 25, see o/p ) usko pata laga
// Lekin yeh new keyword ( const chai = new createUser("chai", 25) , see code )
// hata dein to usko pata hi nahi lag raha hai
// 22:35

// achha to new keyword ( const chai = new createUser("chai", 25) )
// kuch na kuch to kar hi raha hai behind the scene
// wapas se dekh lete hai yeh lijiye new keyword hataya
// ( const chai = createUser("chai", 25) )

// 22:40

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()

// likh liya

// aur yeh ka yeh same code aapne run kiya to

// o/p 25
// 2
// {}
// C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\Object.js:27
// chai.printMe()
//      ^

// TypeError: Cannot read properties of undefined (reading 'printMe')
//     at Object.<anonymous> (C:\Users\MSI-GF-63\OneDrive\Desktop\JS-CHAI-AUR-CODE\10_classes_and_oop\Object.js:27:6)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.17.0

// ..... aur yeh ka yeh same code aapne run kiya to
// usne kaha are... sir kya kya kya pooch rahe ho yeh sab,
// yeh sab to mujhe pata hi nahi hai (see o/p)

// kyuki kabhi createUser ( function createUser(username, score){} )
// ke andar iss tareh ki cheejein (as follows)

// ( createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// } , see code )

// aapne by default di hi nahi thi
// (means createUser.prototype.increment = function(){}
// and createUser.prototype.printMe = function(){} 
// aapne function createUser(username, score){} ke andar by default di hi nahi thi, see code )

// 22:49

// agar aap yahin pe ( function createUser(username, score){} ke andar )
// direct de dete ( means aap createUser.prototype.increment = function(){}
// and createUser.prototype.printMe = function(){} , direct
// function createUser(username, score){} ke andar de dete )
// to wo le leta ki theek hai
// function ke andar ek aur function ho sakta hai
// koi burai nahi hai uske andar

// to new keyword actually mei kaam to humare pas kaafi kar raha hai
// to yeh lijiye humne ek new keyword 
// laga diya
// const chai = new createUser("chai", 25)
// 23:01

// function multiplyBy5(num){
    
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()

// likh liya

// ek aur baar finally run karke dekh lete hai
// ki kaise ho raha hai

// o/p 25
// 2
// {}
// price is 25

// ab maine banaye hai aapke liye thode se notes
// aa..., jo mai aapko direct isi file ke andar de deta hu
// aur thoda sa unko study bhi kar lete hai
// kyuki yeh aapke interviews etc mei kaafi jagah kaam ayenge

// 23:13

// yeh jo poora text maine aapko diya hai
// yeh actually mei hai poora new keyword ki functionality
// vaise to higher level hai , aap chahein to isko
// skip bhi kar sakte hai

// jo log extraordinary tayiyari kar rahe hai javascript
// ki SDE 2 se 3 mei jaane ki jump ki koshish
// kar rahe hai to expect karo yeh question to
// aapse poocha hi jayega
// beginners mei rarely poocha jata hai
// ya fir koi hifi company ke liye aap target kar rahe ho
// to fir poocha hi jayega
// 23:32

// to behind the scene kya kya hota hai aapke new keyword mei
// ki ek new object create hota hai
// -- The new keyword initiate the creation of a new javascript object.
// 23:40

// theek hai ji jaise hi aapne new keyword diya
// ( const chai = new createUser("chai", 25) , mei new , see code)
// to yeh jo chai hai
// ( const chai = new createUser("chai", 25) , mei chai , see code)
// yeh chai to banega hi banega
// 23:44
// but aapka ek new object create hota hai

// ab uss new object ka ek reference hona chahiye
// to abhi humne uss new object ka reference diya hai
// ki yeh function (as follows)

// ( function createUser(username, score){
//     this.username = username
//     this.score = score
// } , see code)

// hi humara reference hai to function ki properties 
// to uske ( const chai = new createUser("chai", 25) ) andar do hi do 
// but ek naya object ( const chai = new createUser("chai", 25) ) create karo
// 23:56

// ab new object create hone ke saath saath maine aapko padhaya
// property... yeh jo prototype hai
// bahut important hai

// to naya object bana hai to object to prototype
// se linked hoga hi hoga
// theek hai to -- A prototype is linked: The newly created object
// gets linked to a prototype property of the constructor function.
// constructor functions pe bhi hum ayenge abhi eventually
// 24:15

// but yeh javascript ka tarika hai , 
// javascript classes ke through constructor function nahi deti hai
// javascript new keyword ke through constructor function deti hai
// haa ji new keyword lagaya matlab jo classes ke andar
// aap object ke saath karte ho, (in other programming languages / javascript)
// new keyword laga ke ek naya instance initiate / instantiate kar dete ho object
// yeh sara kaam aapka new ke saath hota hai
// 24:30

// yeh ek approach hai
// yeh hi approach saalon (for years) tak chali ayi thi
// Lekin fir logo ko laga ki yar thoda confusing ho jate hai
// itna depth mei koi jata nahi hai to ek kaam karo
// aa..., ki jo baki developers aate hai
// unke benifit ke liye seedha class keyword ka hi syntax de do
// 24:42

// isiliye maine iss video mei classes nahi li
// classes next video mei lunga
// pehle aapko samajh mei to aye behind the scene
// to actually mei yeh hi kaam hai
// iske upar wrapper laga diya gaya hai bas

// theek hai to humare pas constructor function hota hai
// -- This means that it has access to properties and methods
// defined on the constructor's prototype.

// to yeh jo hum kar paa rahe hai na upar
// ( createUser.prototype.increment = function(){} and createUser.prototype.printMe = function(){} )
// yeh prototype etc
// ( createUser.prototype.increment = function(){} and createUser.prototype.printMe = function(){} , mei prototype)
// kar rahe hai , yeh abhi tak hawa mei tha
// 25:00
// jab aapne new keyword lagaya ( const chai = new createUser("chai", 25) , mei new )
// tab usne kaha achha achha ab mujhe
// assemble karna hai, to fir usne ek object liya (take hand towards ourselve gesture kiya sir ne)
// uss object ke andar ek prototype inject kara
// fir aapne kaha ki are prototype to inject kar diya
// ( createUser.prototype.increment = function(){} and createUser.prototype.printMe = function(){} , mei prototype)
// maine kuch method bhi define kare hai
// ( createUser.prototype.increment = function(){} and createUser.prototype.printMe = function(){} , 
// mei increment and printMe are methods)
// fir uss method ko define kara

// fir uske baad bola ki achha to iske (as follows)

// ( function createUser(username, score){
//     this.username = username
//     this.score = score
// } , see code)

// basis pe banana hai, fir iske (just above function) basis pe banta hai
// 25:16 

// theek hai, fir uske baad constructor obvious si baat hai
// ban gaya to constructor call bhi hoga
// -- The constructor function is called with the
// specified argument and this is bound to the newly created object
// If no explicit return value is specified from the constructor,
// Javascript assumes this, the newly created object,
// to be the intended return value.
// 25:34

// to yeh sab jada aapke detail mei nahi padhne ka hai aapko abhi
// jinko samajh mei aa raha hai advance part wo theek hai
// but aap itna dekh lijiye ki constructor ke andar prototype
// link hota hai aur uske baad constructor ko call kar diya jata hai
// jisse aapke sare jo this context wale hai na 
// this.username, this.score
// wo sab uske saath inject hoke aur kar diye jate hai
// 25:49

// aur finally aapko ek naya object wapas de diya jata hai
// jo ki hume chai 
// ( const chai = new createUser("chai", 25) , mei chai , see code)
// ke andar de diya gaya

// to haa ji ek chota sa keyword 3 letter hai maatr
// literally 3 letter hai
// aur itna sab kuch kar jate hai behind the scene
// 26:01

// haa, haa, thoda sa tensed hai but theek hai ummeed
// karta hu ki aapko bhi achha lag raha hoga ki haa kaafi
// kuch yahan pe mil raha hai samajhne ko bhi aur yeh bhi
// takreeban aadha ghanta mei hume sirf ek keyword samajh mei
// aya hai -- new ( const chai = new createUser("chai", 25) , mei new )

// ab dekhiye itni fursat to chaiaurcode pe hi milti hai
// chai ke saath hi code pe milti hai
// paid courses ya kahin pe bhi aur hote to itni fursat nahi milti
// itna detail mei aaraam se samjhane ki

// theek hai yeh to aa gaya hai ab aapko samajh mei
// ab iska ek thoda sa aur easy example jo mai
// aksar classes etc mei bhi leta hu
// to wo mai aapke saath yahan pe share kar deta hu
// taki aapko aur samajh mei aye
// 26:33

// ( Object.js file ko close kar diya )

// theek hai yeh example hum purely purely
// lenge prototype ko samajhne ke liye

// 10_classes_and_oop folder mei Prototype.js naam
// se new file bana li

// 26:40