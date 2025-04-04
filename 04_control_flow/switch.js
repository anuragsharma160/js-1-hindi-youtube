// to yahan pe kya ho raha hai aapne dekha ki ek humare pas
// situation thi jahan pe hum kya hai bahut sara checking kar rahe the yeh
// 500 se bhi checking kar rahe the ( if (balance < 500) {} )
// 750 se bhi checking kar rahe the ( if (balance < 750) {} )
// 900 se bhi checking kar rahe the ( if (balance < 900) {} )
// 1200 se bhi checking kar rahe the as follows
// else {
    //    console.log("less than 1200");
    // }

// to iss tareh k cases thode se aam hai thode se common hai ki kayi
// bar ek value hai usko multiple conditions se apko check karna hai
// to uss cases mei kya hota hai humare pas ek switch case statement
// aata hai

// aage jake jab aap redux etc yeh sab padhenge to wahan pe yeh
// bahut kaam mei ata hai

// to yeh hai humare pas switch case as follows
// (yeh uska syntax hota hai)


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// to syntax k andar kya hai ki apke pas ek key hai (key)
// aur uski aap multiple value check karte ho (case value:)
// yeh basic syntax hai, isko hum comment out kar dete hai

// hum basics yahan pe check karke dekh lete hai ki kis tareh se isko
// likha jata hai

// to suppose kariye humare pas ek value lete hai hum yahan pe
// month ki value le lete hai

// const month =

// theek hai to apke pas suppose kariye month hai 1 se leke 1 ko
// January maan lete hai hai, iss tareh se apke pas yeh 3rd month hai

// const month = 3

// January Feb March iss tareh se 0 1 2 3 , ....

// Ab obvious si baat hai apko 12 month k liye check karna hai
// to ek ek if else if else kar sakte ho koi problem wali baat nahi
// hai lekin obvious si baat hai bahut time lagega

// to isliye aisi condition mei hum switch case use karte hai

// const month = 3

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// ab mujhe check karna hai key k liye (see (key) in switch syntax), 
// to key kya hai wo value jo mujhe har bar check karni hai (25:55)
// to month ( const month = 3 ) check karna hai mujhe har bar 

// to yeh month ( const month = 3 ) ko copy kariye aur key (see (key) in switch syntax)
// ki jagah likh dijiye month as follows

// const month = 3

// switch (month) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// yeh (month jo key ki jagah copy paste kiya hai) key hai iss value ko check karo
// to ek tareh se aap aisa samajh sakte hai ki bahut saare lock hai aapke pas
// (see inside switch case value break default break)
// ek apke pas yeh chabi (key ki jagah month jo likha hai) hai , jo bhi tala
// khul jayega uss chabi se uske andar ka code execute kar denge

// to suppose kariye pehla taala number one humare pas kya hai

// to suppose kariye yahan pehla tala hai ki aap check kar rahe hai
// ki value (see switch syntax) 1 k barabar hai ya nahi as follows
// (write 1 in place of value in switch syntax)

// const month = 3

// switch (month) {
//     case 1:
        
//         break;

//     default:
//         break;
// }

// theek hai agar 1 k barabar hai to hum yahan pe console.log kara dete hai
// ki yeh jo month hai humare pas konsa hai January as follows

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;

//     default:
//         break;
// }

// isi tareh se aap kya kariye isko (case 1 se leke first break tak)
// pore ko select kariye break ko bhi select kariyega aur press
// karna shiflt alt aur down arrow (D) as follows
// (duplicate)

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 1:
//         console.log("January");
//         break;

//     default:
//         break;
// }

// to yeh humne check kar liya 1 k liye
// ab value hum check karte hai 2 k liye as follows
// to humare pas 2 hai aur yeh ho gaya humare pas feb
// as follows

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;

//     default:
//         break;
// }

// ek aur check kar lete hai isi tareh se, do (2) kar lete hai (check)
// to yeh duplicate duplicate (2 bar duplicate) as follows

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 2:
//         console.log("feb");
//         break;

//     default:
//         break;
// }

// to humne yahan check kar liya 3 k liye bhi aur yahan pe
// check kar lete hai 4 k liye bhi
// to 3 mei march and 4 mei april as follows

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         break;
// }

// ek yahan pe jaise humne dekha tha ki else case mei hota hai ki
// koi bhi condition agar if else humari true nahi hui to else to
// execute hoga hi isi tareh se default (see switch syntax) bhi ata 
// hai yahan pe ki agar kuch execute nahi hua ya kuch match nahi hua 
// to yeh defalut case ho jayega (console.log inside default) as follows
// (console.log("default case match");) ya jo bhi apko yahan pe execute
// karna hai code wo aap likh sakte hai

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// to ab isse hoga kya isko run karte hai hum

// o/p march

// to dekhiye march yahan pe match ho gaya hai (see o/p)
// obvious si baat hai march hi match hona tha kyuki value yahan pe
// 3 hai (const march = 3)

// theek hai to isi tareh se humare pas kisi bhi month ka aap match
// kar sakte hai

// achha ab yahan pe kahani break ki bhi ati hai (jo break case 1, case 2
// case3, case 4 mei console.log("January") console.log("feb") console.log("march") 
// console.log("april") k baad likha hai)

// break bada hi interesting hai yahan pe , by default kya hota hai ki jahan pe
// bhi apka key match ho gaya hai (for eg yahan pe case 3 mei key match ho gaya hai
// and key month tha iss case mei) uske baad ka saara code execute ho jata hai,

// to problem kya ati hai suppose kariye yahan pe case 3 mei march match ho gaya hai
// aur yeh break (jo case 3 mei console.log("march"); k baad likha hai) nahi hota iss
// tareh se comment out hota as follows

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break; commented out
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// to uske baad kya karta yeh inn cases (case 4, case 5, etc ...) ko
// match hi nahi karta hai

// Ab modern jo languages ayi hai aaj k daur mei jaise swift etc jo abhi
// designed hui hai unke andar to aisa nahi hota hai but yeh (JS) old school
// language hai thodi si, to ek bar jahan pe bhi case match ho gaya
// (for eg yahan pe case 3 mei case match ho gaya) to uske baad ka sara ka sara
// code (eg case 4, cae 5, etc ...) execute karta hai except default (see switch
// syntax jo default end mei likha hai jisme console.log("default case match");
// aur break; likha hai) yaad rakhiyega question pocha jata hai except default

// theek hai to isko save and run karte hai as follows

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break; commented out
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// o/p march
// april

// to dekhiye march hbi aa gaya april bhi aa gaya isilye aap
// break lagate hai (jo break case 1 , case 2, case 3 , case 4
// mei likha hai) to break kya karta hai control flow ki hum baat
// kar rahe hai (class name - control flow) to uss control flow ko
// break kar deta hai ki iss tareh se mat kariye (jo break case 3 mei
// commented out kiya hai)

// =====================================================================

// theek hai ab yahan pe kayi bar kya hota hai ki users confuse ho jate hai
// jo bhi naya code likh rahe hai ki suppose kariye agar yeh month 3 ki jagah
// humare pas koi string value hotijaise suppose kariye april hota ya fir march
// hota to isko hum kaise compare karte as follows

// const month = "march"

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// koi dikkat nahi hai jaise aap if (if else) condition mei match karte hai
// vaise hi exactly same match karte , if condition mei agar hume kuch bhi match
// karna hota hai string k liye to hum yahan pe string likh dete hai
// jaise yahan pe humne kiya tha 40 ( if( temperature === 40 ){} ) as follows

// const temperature = 41

// if( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// waise hi hum yahan pe usko match kar lenge

// to iss case (as follows) k andar kya kariye,

// const month = "march"

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// case k andar likh dijiye ki suppose kariye aap match kar rahe hai
// ki yeh "jan" (case 1 mei 1 ki jagah "jan") as follows

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// case sensitivity ka dhyan rakhiyega exactly usi 
// (console.log("January") mei January se match karna hai) se match karna hai

// to case agar "jan" hai i.e. case "jan": to "January" print kar do
// (console.log("January"))

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// uske baad agar apka case "feb" hai to "feb"  print kar do (console.log("feb");)
// uske baad agar apka case "march" hai to "march"  print kar do (console.log("march");)
// uske baad agar apka case "april" hai to "april"  print kar do (console.log("april");)
// to jis bhi value se aapko usko compare karna ho chahe wo string ho chahe wo number ho
// uss hisab se aap dekh lijiye aur usko match karwa lijiye

// o/p march


// bahut aasaan hai ,to dekhiye wapas se march aa gaya (see o/p)
// to jaruri nahi hai har examples mei sir ne dekha hai numbers hi
// lete hai (const month = 3) aur numbers k chalte kayi students
// confuse ho jate hai ki acha number to ho gaya but string aya
// (const month = "march") to kaise match karenge aur koi datatype aya
// to kaise match karnege, kuch bhi nahi apko directly bas usko
// likh dena hai (case "jan": , case "feb": , case "march": , case "april":)

// fayeda yeh hai ki yahan pe hum bracket mei laga k wo equal equal (2 bar =)
// comparator operator etc yeh sab hume nahi likhne padte hai, yeh bahut hi basic
// hota hai

// to theek hai yeh ho gaya apka control flow lekin ab ati hai kuch interesting
// baatein

// abhi tak aapne dekha ki humari jitni bhi kahani chal rahi hai chahe if else
// mei ho, chahe kisi mei bhi ho wo chal rahi hai inn true aur false k upar
// (const userLoggedIn = true, const debitCard = true, const loggedInFromGoogle = false,
// const loggedInFromEmail = true) ki final jo result hai jaise 2==3 hai
// (if (userLoggedIn && debitCard && 2==3) {}) yeh aana chahiye ya to true ya false
// to yahan pe ek bahut hi interesting statement ata hai jisko bolte hai
// truthy value aur falsey value

// dekhiye true aur false to strict true aur false value hai, 2==2 obvious si baat
// hai yeh to true hai, lekin kuch values hoti hai jinko assume kar liya jata hai
// ki haa yeh sahi hi hoga ya fir yeh galat hi hoga, to aisi bhi kuch values hoti
// hai interviews mei kai pochi jati hai, to bada hi interesting hai uske bare
// mei jaanna

// to hum uske liye ek nayi file bana lete hai -- truthy.js (for both truthy and falsy.js)

