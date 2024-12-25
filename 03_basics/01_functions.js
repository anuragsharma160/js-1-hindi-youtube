// Functions

// Function ka seedha matlab hai jo bhi aapne code likha hai 10 line ka ,
// 20 line ka , 5 line ka , usko ek package mei band kar diya hai ,
// wo package aap jitni bar jahan chahe utha k uski copies le ja sakte hai , theek hai
// aur wo kaam apka ho jayega

//  jaise suppose kariye abhi hume yahan likhna tha console.log() as follows

// console.log();

// Aur humne yahan likh diya iske andar "H"

// console.log("H");

// ek aur copy le lete hai , iske andar likha "I" as follows

// console.log("I");

// ek aur copy le lete hai , iske andar likha "T" as follows

// console.log("T");

// Similarly as follows

// console.log("E");

// console.log("S");

// console.log("H");

// to obvious si baat hai ye sara kaam karne k liye agar sir apko kahe ki
// 10 bar apko kaam karna hai to problem hogi, 10 bar kaam karne mei dikkat hogi

// To humare pas ek tarika hai function jiske through hum yeh sara kaam agar hume 5 bar
// karwana ho to hum bahut hi asani se karwa sakte hai

// Kaise karwa sakte hai , function likhne ka tarika bahut hi asaan hai as follows
// aap likhte hai sabse phele function jo key word hai apne aap mei as follows

// function

// iske baad jo marji aye naam dijiye

// function sayMyName

// uske baad lagayiye paranthesis as follows

// function sayMyName()

// aur fir likhte hai hum function ka scope yani ki function ki definition , wo likhte hai curly braces k andar as follows

// function sayMyName(){

// }

// Ab upar yeh jitna bhi code hai i.e. console.log("H"), ......... console.log("H"), yeh code
// cut kar lijiye and iss function k andar paste kar dijiye as follows

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// yeh above ho gaya apka function taiyyar

// yeh function ka hai definition as follows

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// Ab yeh function ko hume jitni baar call karana hai, hume kuch nahi khena
// padega , we do so as follows

// sayMyName
// yeh (just above) function ka hai reference

// agar isko execute karana hai to yeh ho gaya execute as follows -- ()
// sayMyName()

// paranthesis jaise hi apne laga diya yahan pe function ki definition i.e. sayMyName k baad, to
// yeh ho gaya uska execution as just above

// sayMyName - yeh ho gaya uska reference, yeh yaad rakhiyega jab React mei aap aage jaake padhenge
// ya fir on click etc DOM manipulation padhenge , tab bahut jada kaam mei aane wala hai

// to isko kiya humne yahan pe save as follows

// sayMyName()

// ab isko i.e. sayMyName() run karte hai
// o/p H
// I
// T
// E
// S
// H

// to jo bhi hume print karna tha wo print ho gaya hai

// ===================================================================

// Accha ek aur important cheej hoti hai ki agar aap function ka aise -- sayMyName, likhte to kya hota
// as follows

// sayMyName

// isko i.e. sayMyName ko run karate hai
// o/p - kuch bhi nahi aya kyu ki yeh i.e. sayMyName , sirf uska (function) reference hai, aap
// bata rahe hai ki wo function wahan rehta hai, rehne ki to baat hi nahi hai, yahan pe hume
// execute karna tha, but aage jake kai jagah aisa hoga jahan pe aap bolenge ki function ko
// execute kaise karna hai, to yeh hum comment out kar dete hai

// Yeh to ho gaya basic

// =======================================================================

// Ab function likhenge jahan achha kuch kaam ho raha ho, iss tareh k console.log nahi likhenge

// To function k andar sabse phele suppose kariye, sabse basic function banate hai
// 2 numbers ko add kar lete hai bahut hi asaan hai as follows

// Sabse phele function likha as follows

// function

// fir function ka naam likha kuch bhi as follows

// function addTwoNumbers(){

// }

// ab function k andar 2 numbers add karwane hai , to 2 number pass bhi to karne padenge jaise
// calculator k andar aap pas karte hai, to unn numbers ko hum kya bolte hai simply yahan pe jake
// yahan means -- addTwoNumbers k aage jo paranthesis hai usme i.e. isme -- ()

// uska naam de dete hai bolte hai -- number1 aur comma laga k bol dete hai -- number2 as follows

// function addTwoNumbers(number1, number2){

// }

// Ab JavaScript k andar unn number ka apko type dene ki jarurat nahi hai, lekin yahan kuch
// problems ati hai

// Hum kya karte hai simply isko bol dete hai ki haa theek hai hum return karenge number1 + number2 as follows

// function addTwoNumbers(number1, number2){
//     number1 + number2
// }

// yeh number add to ho gaya hai (number1 + number2) , lekin abhi isko koi print nahi karwa raha
// to hum kya karte hai isko karte hai cut (i.e. number1 + number2 ko cut karte hai) , aur bolte hai isko
// kya karo console log k andar yeh (i.e. number1 + number2) kar do print as follows

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// theek hai ji aur iss function ko call kaise karenge , abhi humne seekha hai ki function ka naam
// bas bol dijiye addTwoNumbers aur paranthesis as follows

// addTwoNumbers()

// Ab simply isko execute karenge to kuch bhi nahi hoga dekhiye kaise, isko hum terminal
// mei karte hai execute

// addTwoNumbers() ka o/p -- NaN

// to o/p aya NaN (Not A Number) , because above function mei console.log(number1 + number2) mei
// number1 k andar bhi pata nahi hume kya value thi and number2 k andar bhi hume pata nahi kya value thi isliye
// NaN aya o/p mei, kyuki aapne koi argument diya hi nahi, argument diya nahi means aapne jab iss
// function ko call karwaya i.e. addTwoNumbers() kiya to addTwoNumbers k baad ka jo paranthesis hai i.e. ()
// isme koi argument nahi diya , to iss paranthesis k andar jo bhi hum likhte hai usko bolte hai argument

// to let hum 3, 4 de dete hai argument as follows

// addTwoNumbers(3, 4)
// o/p 7

// Accha problem kahan ati hai aap isko i.e. addTwoNumbers() k paranthesis mei number nahi denge
// kyuki humne to maan liya ki jo bhi user ne number diya hai wo number hi hai aur number humne de diya hai (6:10)
// lekin agar suppose kariye iski jagah (i.e. argument mei 4 ki jagah) kisi ne agar quotes k andar 4 de diya hota
// to kya hota as follows

// addTwoNumbers(3, "4")
// o/p 34
// Ab obvious si baat hai JavaScript apna dimag khud lagayegi, yeh sir ne phele bhi bataya tha kis tareh se conversion hota
// hai kafi detail mei humne baat kari thi, to just above ka o/p aa gaya 34
// Kyu ki isne socha yeh i.e. "4" string hai to isne socha yeh i.e. 3 bhi string hai that's why

// Ab iske andar dikkat pata hai kab ati hai jab aap iss "4" ki jagah de denge "a" as follows

// addTwoNumbers(3, "a")
// o/p 3a
// Ab "4" ki jagah jab "a" de denge to kyu ki aapne function k andar kabhi check hi nahi kara tha ki inn
// dono ko (i.e. number1 + number2 ko) kis tareh se add karna hai tab problem aa jati hai kai bar

// Aur yeh to chalo aapne yeh i.e. "a" diya tha argument mei 3 k saath, agar suppose karo aap
// null de dete tab kya hota as follows

// addTwoNumbers(3, null)
// o/p 3
// to yahan pe checking jaruri hai

// Lekin abhi kya hai hum checking nahi kar sakte kyuki humne if else condition kaise check hota hai
// wo sab nahi kiya varna sir iss line pe ate i.e. iss function mei console.log(number1 + number2) line k
// phele ek line pe ate as follows

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// aur sabse phele check karte kya iska i.e. function addTwoNumbers(number1, number2){ , mei number1 ka datatype
// number hai ya kya iska i.e. number2 ka datatype bhi number hai, agar dono ka datatype number hai to hi
// hum usko add karne dete, but abhi hum logic ki baat nahi karenge, logic k liye sir bahut sari exercise karwayenge,
// abhi hum sirf dekh rahe hai ki function kya hota hai

// ==========================================

// Ab yahan pe bahut hi interesting cheej ati hai kai log isko bolte hai parameters
// aur kai log isko bolte hai arguments , to konsa wala sahi hai

// Ab yeh jo cheej hai i.e. -- function addTwoNumbers(number1, number2){ , mei (number1, number2)
// isko bola jata hai parameters, jab aap function ki definition banate hai, to uske andar jo bhi
// aap input lete hai (i.e. yahan pe (number1, number2) , numbers nahi aap string bhi lijiye
// to usko bola jata hai parameters

// Aur jab function ko aap call karate hai i.e. -- addTwoNumbers(3, null), 
// tab jo value aap uske andar call karte hai i.e. -- addTwoNumbers(3, null) mei (3, null) hai value,
// usko bola jata hai arguments (i.e. (3, null) hai arguments)

// =========================================================================================

// Ek interesting cheej JavaScript k andar jo functions hote hai na yeh bahut hi interesting hote hai

// Jaise ki sir ne argument mei 3,5 diya as follows

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5)
// o/p 8

// to 8 humare pas value ayi, ab JavaScript k andar kya hota hai iss sabhi ko i.e. -- addTwoNumbers(3, 5) ko
// hum variable k andar bhi store kar sakte hai as follows

// to jaise suppose kariye iska naam likh diya result as follows

// const result = addTwoNumbers(3, 5)
// o/p 8

// to result k andar store kar diya addTwoNumbers ka result, ab humne dekha ki result aya hai 8
// to kya hum isko store kar sakte hai, yahin pe sabse badi problem karte hai beginners
// ab 8 to aa gaya o/p mei kyuki function execute ho gaya, lekin yeh jo result hai iske andar value
// kya hai as follows

// to hum iss result ki value likhte hai kusch iss tareh se as follows
// isko bolte hai ki result ki jo value hai wo hume iss tareh se dikhao as follows

// console.log("Result: ", result);
// o/p Result:  undefined
// Ab result k andar jo value hai wo hai undefined , lekin o/p to aa rha hai yahan pe 8
// to result k andar value undefined kaise gayi, yehi sabse bada interesting concept hai
// ki functions se aapne kya wapas bheja

// Ab kai log galti se yeh samajh lete hai ki console.log(number1 + number2) kiya hai (function k andar)
// console k andar dikh raha hai to yeh hi value (i.e. o/p 8) wapas ki gayi hai
// nahi nahi nahi yehi sabse badi galti hai, console print karne ka matlab yeh nahi ki
// wo function wo value return bhi kar rha hai

// return apne aap mei ek concept hai, console sirf ek console print karna hai

// ============================================================================================

// to isi function ko hum kya karte hai dusri tareh se likhte hai to iski (same function)
// ki hum copy bana lete hai and upar wale function ko hum comment out kar dete hai as follows

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// ab kya hai yahan console.log nahi karna hai, sir 2-3 tarike batate hai
// sabse phele kaise to hum yahan pe ek variable le lete hai uska naam hum lete hai result as follows

// function addTwoNumbers(number1, number2){
//     let result
// }

// uss result k andar hum number1 + number2 kar dete hai as follows

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
// }

// aur jo bhi yeh result aya uske peeche yeh key word lagate hai return as follows
// (means result k phele return key word likh diya as follows)

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// (means result k phele return key word likh diya as follows) yani ki jab humara
// function execute ho jayega uske baad iss result (jo result humne function k andar likha hai) ko return kar do

// Fir humne phele ki jaise kiya as follows kiya

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// Ab iss result (i.e. yeh wale result -- const result = addTwoNumbers(3, 5) ) k andar
// jo value hogi , wo actually mei kuch value hogi, jab hum isko run karenge i.e. console.log("Result: ", result) 
// to result k andar abki bar kya aya hai 8 i.e. Result:  8
// o/p -- Result:  8

// lekin print nahi hua hai kuch bhi (jaise phele 8 print hua tha iska -- const result = addTwoNumbers(3, 5) o/p 8 print hua tha)
// kyuki humne bola hi nahi usko console.log karo

// ===================================================================================

// Ab ek cheej apko pata honi chahiye agar hum iss function k andar console.log likhte hai
// aur uske andar likhte hai "Hitesh" as follows

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    console.log("Hitesh");   
}

// yeh "Hitesh" ( i.e. function k andar console.log("Hitesh") ) kabhi execute nahi hoga
// kyuki by default function ki ek definition ka ek rule hota hai ki return jo aapne kar diya
// uske baad koi kaam nahi karega function

// Ab dekhiye iss function k andar console.log("Hitesh") pe hover karenge to yeh bolega unreachable code

// Aur isko jab hum execute karenge to yeh "Hitesh" kabhi print nahi hoga as follows

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
// o/p -- Result:  8

// =============================================================================

// Jaise hi hum iss "Hitesh" ko ek line upar le jate hai as follows

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     console.log("Hitesh");   
//     return result
// }

// Ab function k andar result baad mei hai, tab yeh print hoga (print isliye
// hoga kyuki hume console.log kiya hai function k andar "Hitesh" ko)

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// o/p Hitesh
// Result:  8

// to yeh dhyan rakhna result k baad kuch bhi print nahi hota hai

// ================ 10:46 =======================================================

// Now same function mei console.log hata dete hai as follows

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// Ek aur cheej yeh jo kaam humne kiya hai ki 
// phele humne ek variable result yahan pe declare kiya hai function k andar
// (i.e. let result = number1 + number2) uske baad humne number1 aur number2 yahan pe liaya hai
// (i.e. let result = number1 + number2) aur fir fir humne result ko return kiya hai (i.e. return result)

// Humare pas ek aur asaan tarika hai, isko hum comment out kar dete hai
// i.e. function k andar, let result = number1 + number2 ko and return result ko
// hum comment out kar dete hai as follows

// Again code likhne ke tarike hai dono hi tarike sahi hai koi sahi galat baat hai hi nahi as follows

// Aap direct hi return kar do number1 plus number2 ko as follows

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// to dekhiye bahut hi asaani se return ho gaya hai aur  ek thodi si space bhi save
// kar li humne taki ek naya variable (let result = number1 + number2) declare nahi karna pada
// aur uske andar values aa gayi hai

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// Achha sabse interesting cheej pata hai kya hai, iske baare mei aage jaake hum padhenge ki
// scope naam ki bhi ek cheej hoti hai, yeh jo result aap dekh rahe hai
// (i.e. result = number1 + number2 jo comment out kiya hai function k andar)
// yeh humne declare kara hai kahan pe addTwoNumbers k andar ( i.e. function addTwoNumbers(number1, number2) )

// aur yeh jo result declare kara hai ( i.e. const result = addTwoNumbers(3, 5) )
// yeh humne kara hai iss function k bahar , to yeh dono alag alag cheejein hai
// iske bare mei hum aage videos mei detail mei discuss karenge but abhi k liye
// hum itna hi rakhte hai ki theek hai kaise kaise yeh kaam karta hai

// to yeh samajh aa gaya hoga ki yeh return value (return number1 + number2)
// kaise kaam karti hai aur jab bhi aap return karenge to aap usko
// kisi variable ( const result = addTwoNumbers(3, 5) ) mei store kar sakte hai
// sirf console.log se nahi kar sakte hai

// scope k bare mei sir alag se video banayenge ki kasie yeh dono alag alag cheejein hai

// =================================================================================================

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// Abhi hum discuss karenge ki yeh jo values humne pas kari hai yahan pe -- 3,5
// ( i.e. const result = addTwoNumbers(3, 5) ) aur yeh jo value aapne le li hai number1, number2
// ( i.e. function addTwoNumbers(number1, number2){ )  , yeh aur kitne tarike se value li ja sakti hai
// ya aur kya kya kaam hum kar sakte hai yahan pe

// isko -- console.log("Result: ", result); hum comment out kar dete hai taki hum aur bhi kuch kar sake
 
// =============================================================================================================

// Ab hum ek aur naya function banate hai

// function loginUserMessage

// user login hua hai , uske baad hum usko ek message dikhana chahte hai
// ki aapko ek job mila hai

// to humne yahan pe likha aur jo bhi user hai , humne uska naam poch liya
// ki username do as follows

// function loginUserMessage(username)

// Aur humne ek function likha as follows

// function loginUserMessage(username){

// }

// Aur iss function k andar humne kya kara -- hum return kar rahe hai
// kya return kar rahe hai , to hum back ticks use karte hai kyuki
// sabse asaan yehi hai string interpolation as follows

// function loginUserMessage(username){
//     return ``
// }

// dollar sign laga k to hum yahan pe variables k naam likh sakte hai as follows

// function loginUserMessage(username){
//     return `${}`
// }

// And uske baad bol diya just logged in as follows

// function loginUserMessage(username){
//     return `${} just logged in`
// }

// Ab iske andar ( i.e. {} ), variable k andar kuch value daalni padegi
// to hum yeh username daal dete hai as follows

function loginUserMessage(username){
    return `${username} just logged in`
}

// to humne kya bola ki jo bhi aap hume yahan pe (i.e. (username) mei i.e.-- function loginUserMessage(username) ) 
// argument pass karoge uss function k andar, usi ka hum samajh lenge and usi ka yahan pe
// (i.e. ${username} mei i.e. return `${username} just logged in`) values hum add kar denge

// to iss function ko execute kaise karenge, simple hai bahut
// yeh ho gaya loginUserMessage (yeh ho gaya uska reference) as follows

// loginUserMessage

// yeh usko call kar diya as follows

// loginUserMessage()

// Ab iske andar jo value apko dalni hai suppose kariye ki yaha pe sir ka hi naam daal dete hai
// as folows

// loginUserMessage("hitesh")

// o/p -- kuch nahi aya
// Ab result (o/p) kya ayega humare pas, ab yahin kai log karte hai problem
// jo ki sir ne abhi samjhaya , isko ( loginUserMessage("hitesh") ) sir run karte hai terminal mei and
// kuch bhi run nahi hua (i.e. o/p kuch bhi nahi aya)

// kyu run nahi hua, function execute hua hai, lekin uss function ne values return (return `${username} just logged in`)
// kar di hai

// Aapne bola uss value ko return kar do ( loginUserMessage("hitesh") ) , to isne kar di ,
// lekin kahin bola to nahi aapne ki print karo usko ya fir kisi variable k andar store karo

// yehi baat sir ne abhi hume samjhai thi ( console.log("Result: ", result); )
// to isi baat ko sir ne repeat kiya hai, but ab hume thoda sa aur concept samajh ayega
// isko ( loginUserMessage("hitesh") )  wrap karte hai hum aur iske ( loginUserMessage("hitesh") )
// aage (phele) hum likh dete hai console.log as follows

// console.log(loginUserMessage("hitesh"));

// Ab kyuki wo value jo return ho rahi hai usko humne print ( console.log(loginUserMessage("hitesh")); )
// karne ka instruction diya hai, to ab wo print hogi, to iss tareh se parameter liye jate hai

// o/p -- hitesh just logged in

// =============================================================================

// ek aur cheej hume pata honi chahiye , thoda sa if else bhi sir introduce karenge
// uske bare mei aur detail mei baat karenge

// Lekin suppose kariye agar kisi ne iss method ko (just previous method) 
// call kiya aur usne koi value hi pass nahi kari hai ya empty string pass kari hai
// tab to bahut hi asaan hai kyuki empty string hai ab isko hum run kar dete hai terminal mei as follows

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage(""));
// o/p --  just logged in

// to empty string ko humne run kara to isne bola o/p mei --  just logged in

// ===========================================================================================

// lekin agar koi value hi pass nahi kari hoti tab kya ata as follows

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage());
// o/p -- undefined just logged in

// jab aap kuch pass hi nahi karte hai to ata hai undefined, null nahi ata hai
// undefined ata hai , kyuki wo define hi nahi hua hai

// theek hai to iske liye kya karte hai bahut hi easy sa kaam hai
// aap phele check kar lete hai, ab sir thoda sa if else ka syntax introduce
// kar hi dete hai as follows (after line break)

// ============================================================================

function loginUserMessage(username){
    return `${username} just logged in`
}

// lekin hum yahan pe (function k andar before return line) ek if statement se check kar sakte hai
// ki kya wo value hai ya nahi, if bahut hi asaan hai, agar uska result true hai to hum code k andar
// jaate hai nahi to nahi jaate, to hum kya hai yahan pe (function k andar before return line) check kar lete hai
// as follows

// to yahan pe if laga k iss tareh se syntax hota hai yeh if statement ka as follows

// function loginUserMessage(username){
//     if(){

//     }
//     return `${username} just logged in`
// }

// to yahan pe ( i.e. function k andar, if(){} k small bracket k andar ) aap value check karte ho paranthesis k andar
// aur curly braces ( i.e. function k andar, if(){} k curly bracket k andar ) k andar aap code execute karte ho

// to hum yahan ( i.e. function k andar, if(){} k small bracket k andar ) check kar lete hai, ki yeh jo username hai,
// kya yeh equal hai ( triple equal use karte hai yahan pe, double equal bhi kar sakte hai ) ki yeh undefined hai
// as follows

// function loginUserMessage(username){
//     if(username === undefined){

//     }
//     return `${username} just logged in`
// }

// to yahan pe kya karo ek console message hi de do user ko, kya bolo
// "Please enter a username" as follows

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

// iss tareh se aap check karenge, to humne undefined check kar liya
// to hum isko run karwate hai as follows

// console.log(loginUserMessage());
// o/p Please enter a username
// undefined just logged in

// to humne isko run kiya , to isne bol diya (o/p mei) -- Please enter a username

// ======================================================================================

// theek hai ab yahan pe to yeh ho gaya lekin hum chahte hai ki
// yeh wali code line ( function k andar -- return `${username} just logged in` ) run hi nahi ho kabhi
// to iske liye humne abhi just padha tha kya kar sakte ho return key word use kar lo
// iss line ( console.log("Please enter a username"); ) k baad
// jaruri thodi na hai kuch return hi karo, maan lete hai kuch return hi nahi karenge hum as follows

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// lekin return likhne k baad kya hoga, agar yeh (return jo abhi humne likha hai) execute ho gaya yahan pe

// iss block k andar agar hum aa gaye ( i.e. if statement k curly braces wale block andar ) if statement k baad 
// to yeh kuch baki ka kaam hi nahi karega (means if statement k curly braces block k baad wala code
// i.e. return `${username} just logged in` , kaam hi nahi karega)

// to run karte hai isko as follows

// console.log(loginUserMessage());
// o/p Please enter a username
// undefined

// to dekhiye (o/p mei) yahan pe aya -- undefined aur yahan pe aya -- Please enter a username

// =================================================================================================

// to yeh to ho gaya basic , ab iska ek aur tarika hota hai jo aap professional code
// k andar dekhenge

// Dekhiye yeh ( function k if k andar ka -- username === undefined ) humesha tab run hoga jab
// apki jo situation hai wo true mei evaluate hogi aur sahi baat hai aap kuch pass hi nahi kar rahe
// (means function k andar iss line -- console.log("Please enter a username"); k baad return mei kuch nahi de rahe) 
// to undefined hai (o/p mei undefined hai) , to username kya equal hai undefined hai
// i.e. username === undefined

// to isko kya karte hai log iss tareh se bhi dekhte hai ki username
// achha ek aur symbol hota hai aapke pas -- ! i.e. exclamatory as follows (if k braces k andar)

// function loginUserMessage(username){
//     if(!){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// yeh ! exclamatory kya hota hai ek not symbol hota hai, yeh true
// ko convert kar deta hai false mei aur false ko kar deta hai true mei

// Ab JavaScript k andar kya hota hai if else k dauraan hum aur dekhenge
// ki kuch cheejein hoti hai jisko convert matlab maan liya jata hai ki
// wo false value hai, jaise ki empty string ko maan liya jata hai ki
// wo false value hai as follows

// function loginUserMessage(username){
//     if(""){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// isi tareh se undefined ko maan liya jata hai ki wo false value hai as follows

// function loginUserMessage(username){
//     if(undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// lekin problem kya hai agar false value (i.e. if k braces mei undefined as value) hogi to iss block
// (i.e. function k andar -- if(undefined){} wale curly braces block k andar)
// hum kabhi jayenge hi nahi kyuki iss block k andar tabhi jate hai jab true ho (braces wali value)
// to apko iss tareh ka code dikhega ki actually mei username jo ki abhi undefined hai as follows

// function loginUserMessage(username){
//     if(username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// uska ulta kar do as follows

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
} 

// to exclamation lagaya to iss tareh ka code apko kai bar dikhega
// jo ki equivalent hai jo humne phele likha tha -- username === undefined
// to iss tareh ka code (!username) kai bar apko dikhega especially jab hum React etc
// k andar baat karenge, to uska meaning yehi hai

// Ab hum isko run karke dekhenge as follows

// console.log(loginUserMessage());
// o/p Please enter a username
// undefined

// to isko run karke dekha to wapas se ayega yehi apke pas
// theek hai to yeh ho gaya ki parameters kaise lete hai

// ===========================================================================================

// Achha suppose kariye ki iss tareh ki situation hai (exclamation wali) as follows

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// } 

// aur hum chahte hai ki usko hum avoid hi karein,
// iss tareh se koi user agar kuch pass hi nahi kare ( i.e. console.log(loginUserMessage()); 
// means humne braces mei kuch value nahi likhi hai ) , to aap kya kar sakte ho aap kuch
// default values bhi de sakte ho

// default value dene k liye kya kar sakte hai hum simply yahin pe eqaul karke
// aur uski value de do as follows ( username = "" )

// function loginUserMessage(username = ""){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// } 

// Lijiye hum value de dete hai sam as follows

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
} 

// Theek hai , ab kya hoga, ab hum iss block k andar
// ( i.e. function k andar -- if(!username){} wale curly braces wale block k andar )
// kabhi jayenge hi nahi kyu ki uss username ki value ( i.e. if(!username) ) kabhi bhi undefined nahi ho sakti hai
// uski value minimum se minimum "sam" hogi, agar aap kuch bhi pass nahi karoge i.e. console.log(loginUserMessage());
// to uski value hai -- sam just logged in as follows humne isko run karaya


// console.log(loginUserMessage());
// o/p -- sam just logged in

// ==============================================================================================

// Aur agar aapne pass kar di hai koi value jaise "hitesh" pass kar di as follows

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
} 

// Aur agar aapne pass kar di hai koi value jaise "hitesh" pass kar di to wo value 
// apne aap overwrite kar di jayegi as follows (see o/p)

console.log(loginUserMessage("hitesh"));
// o/p -- hitesh just logged in


// =============================================================================

// return wali agar mistake hai to check kar lena
// ya to wo return ki baat hai ya console.log(loginUserMessage()); ki baat hai