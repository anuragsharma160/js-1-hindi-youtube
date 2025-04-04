// Ab truthy values , falsy values ka concept kaise ata hai
// aur kaise kaam karta hai , theek hai batate hai apko

// to suppose kariye aapne database se kuch query kari aur
// aapne pocha ki user ka email batao as follows

// const userEmail

// ab database ne apko user ka email bata diya h@hitesh.ai
// usne (database ne) koi apko email de diya as follows
// theek hai suppose kariye

// const userEmail = "h@hitesh.ai"

// ab apko uske basis pe (jo database ne email diya hai) user ka
// email wahan pe print karna tha, abhi hum print karna nahi jaante
// kaise hum web pe print karenge but hum condition laga k aur
// console.log mei print karke dekh lete hai (condition means if
// )

// const userEmail = "h@hitesh.ai"

// if (condition) {
    
// }

// to humne kya dekha ki hum kya kar sakte hai sirf itna bhi likh
// sakte hai ki agar user ka email hai as follows (inside if condition)

// const userEmail = "h@hitesh.ai"

// if (userEmail) {
    
// }

// to usko console.log kara do as follows (see inside if)

// const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log();
// }

// Aur usko bol do "Got user email" as follows

// const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got user email");
// }

// varna aap kya karo ek else statement likh do as follows

// const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got user email");
// } else {}

// Aur yahan pe console.log kar lete hai hum (inside else)
// as follows

// const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log();
// }

// Aur bol dete hai - Don't have user email as follows

// const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// Ab konsa code run hoga (if wala ya else wala) yehi bahut
// interesting baat hai aur kaise run hoga aur uske behind the
// scene kya hota hai

// to save and run

// o/p Got user email

// Theek hai koi badi baat hai hi nahi yahan pe

// ===================================================================

// theek hai lekin agar suppose kariye aisa situation tha ki apke
// pas email aya (const userEmail = "h@hitesh.ai") as follows

// const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// par humne yahan pe koi true value nahi likha, koi false value
// nahi likha (eg const userLoggedIn = true, // const loggedInFromGoogle = false)
// isko condition ko ( if (userEmail) {} ) humne check nahi kara ki
// userEmail == hai kya kisi k ( if (userEmail == ) {} ) 
// to bas yahan pe value (const userEmail = "h@hitesh.ai") thi humare pas
// to bas humne check kar liya ( if (userEmail) {} ) kya wo value
// hai ( if (userEmail) {} ) aur uske hisab se humne run kar diya
// (means if k andar and else k andar console.log print kar diya)

// to yeh bahut hi interesting situation hai agar aap socho to
// humne koi comparison nahi kara hai aur ek string ( const userEmail = "h@hitesh.ai" 
// mei "h@hitesh.ai" ko) ko maan liya gaya hai ki string true value hai
// yeh hi truthy value hai, jab aap maan lete hai assume kar lete hai
// ki string k andar true value hai (32:36)

// ===================================================================

// Achha yehi nahi agar iss string k andar koi value hi nahi hoti to
// kya hota

// const userEmail = ""

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// dekhte hai run karke isko

// o/p Don't have user email

// to Don't have user email (see o/p) to agar yahan pe empty string hai
// (const userEmail = "") to obvious si baat hai maan liya gaya hai ki wo
// false hai (falsy value) , to string k andar kuch hai to maan liya gaya hai
// wo (truthy value)

// ===========================================================================

// Achha iski jagah agar hota maan lijiye array hota ek, to kya hota
// ab userEmial k andar as follows

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// Ab isko run karke dekhte hai

// o/p Got user email

// to empty array hai to aapne usko true maan liya (truthy value),
// empty string hai to aapne usko false maan liya (falsy value)
// to actually mei hai kya koi rule hai kya ya fir kuch bhi maan liya
// jata hai chalte time

// nahi nahi uska rule hai actually mei humare pas isko bolte hai truthy
// aur falsy value yeh sir sara likh k dete hai abhi aur isi notes k andar aap
// likh rahe hai kahin pe to notes likh bhi lena taki apko easily samajh mei bhi
// aa jaye

// to sir saari hi value yahan pe likh dete hai ki kitni truthy values hoti hai
// aur kitni falsy values hoti hai, sabse pehle jaan lijiye apke pas jo
// falsy values hoti hai

// falsy values

// 1. false
// to sabse pehle to obvious si baat hai false bhi ek falsy value hai,
// matlab obvious si baat hai kul mila k saaransh yeh hai ki kin kin values
// ko false assume kiya jata hai, to false apne aap ek falsy value hai,
// to usko false to maana hi jayega

// 2. 0
// uske alawa jab bhi aap zero likhenge to zero ko humesha hum kya maante hai
// ek falsy value

// 3. -0
// Achha yahan pe kya hota hai ek  thodi si aur cheej bhi aati hai , vaise to
// jadatar aap nahi dekhenge -ve zero -0 ko bhi falsy value maana jata hai
// yeh sirf mostly interviews k liye hi hota hai

// 4. BigInt 0n
// Ek big int humne padha tha (datatype), iske andar kya hota hai zero n (0n)
// likha jata hai , iss 0n ko bhi falsy value hi maana jata hai

// 5. Empty String ""

// 6. null

// 7. undefined

// 8. NaN (Not a number)

// ======================================================================

// inke alawa jo bhi hai wo saare truthy values hai ya fir true values hai
// jaisa ki abhi humne dekha empty array tha previous example mei []
// to isko "Got user email" to isko ( [] ko ) true maana gaya hai

// Sir truthy values bhi likh dete hai taki apko samajhne mei easy rahe
// Jo bhi falsy nahi hai wo obvious si baat hai truthy value hai inke
// alawa (8 falsy values k alawa)

// Kuch values apko surprise kar sakti hai (truthy values)


// Truthy values

// 1. "0"
// string k andar zero "0" truthy value hai

// 2.'false'
// yeh truthy value hai kyuki aapne string k andar likha hai,
// ab single quotes se likho ya double quotes se likho ('' or "")
// sirf 'false' dekh kar false nahi bolna nahi nahi string k andar hai
// string k andar kahani badal jati hai

// 3. " " / ' '
// string k andar ek space de dete hai (single or double quote " " / ' ')
// yeh bhi truthy value hai, strin gk andar kuch bhi value ek bar add ho gayi to
// wo truthy hai

// 4. []

// 5. {}

// 6. function (){}
// iss tareh se ( function (){} ) agar declare hai to wo bhi truthy value
// hai, yeh ( function (){} ) bola jaata hai empty function, iss function k andar
// koi parameter nahi hai, koi iske andar execution code nahi hai, koi iske andar
// kuch bhi nahi ho raha hai

// to gaur se dekhiyega yeh jo zeros hai (falsy values mei 0) yeh hai (truthy values mei "0")
// yeh keviat points hote hai, kaafi aag ejake jab hum projects etc karnege to usme
// apko milega ki kis tareh se values hoti hai

// =====================================================================================

// to kabhi bhi array ko iss tareh se (as follows)

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// use mat kariyega agar aapke pas array hai to array ko check karne ka tarika
// alag hota hai , sir apko bata hi dete hai kis tareh se

// to abhi humne kya kar rakha hai userEmail k andar kya likh rakha hai
// empty array, to isko agar apko check karna ho kabhi bhi to iss tareh
// se (2nd wali if condition) if condition likhiye

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// if (condition) {
    
// }

// array ka naam likhiye as follows (2nd wali if condition k andar)

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// if (userEmail) {
    
// }

// iske andar kya kar sakte hai simply aap iski length
// property ko call kar lijiye (dot laga k type length)
// as follows

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// if (userEmail.length) {
    
// }

// yeh humne length property ko call kiya aur isko aap check
// kar lijiye triple equal se zero se as follows

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// if (userEmail.length === 0) {
    
// }

// ki kya humare pas jo user userEmail pata hona chahiye apko
// uska datatype array hai kya, agar hai to uski length property
// mei zero call kar lijiye

// aur fir yahan pe hum console.log likh sakte hai (inside 2nd if)
// aur yahan pe bol sakte hai ki simply "Array is empty"
// as follows

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// isko jab hum run karenge obvious si baat hai to kya
// hoga humare pas "Array is empty" aa gaya hai (see o/p as follows)

// o/p Got user email
// Array is empty

// to iss tareh se (previous tareh se) direct hum check nahi kar sakte hai
// unko check karne ka tarika hota hai (38:02)

// ============================================================================

// Achha kayi bar log confuse hote hai objects agar empty aa gaye to hum
// kaise check karenge to obvious si baat hai JS k andar object bhi aate
// hai to bhi aap check kar sakte hai

// to isko bolte hai hum emptyObject as follows

// const emptyObj = {}

// yeh lijiye apka empty object aa gaya (as above)

// ab isko conditions mei agar check karna hai to kaise check karnege
// bahut hi aasaan hai as follows

// const emptyObj = {}

// if (condition) {
    
// }

// humne apko agar yaad ho to objects k bare mei kaafi detail padha tha
// aur bhi aage jake padhenge, to aap seedhe call kar lijiye iss object ko
// capital O se as follows

// const emptyObj = {}

// if (Object) {
    
// }

// Aur uske andar kya kariye uski keys ko check kar lijiye (Object.keys)
// as follows

// const emptyObj = {}

// if (Object.keys) {
    
// }

// yeh jo keys hai (Object.keys) aur iss tareh se ( Object.keys() ) likhenge to kya hota hai
// apke pas end of the day ek array banke aa jata hai keyss ka as follows

// const emptyObj = {}

// if (Object.keys()) {
    
// }

// to humne yahan pe apna object pass kar diya yeh empty object (emptyObj) as follows

// const emptyObj = {}

// if (Object.keys(emptyObj)) {
    
// }

// ab yeh jo iss situation mei hai ( if (Object.keys(emptyObj)) {} mei
// Object.keys(emptyObj) ) yeh kya hai yeh poora ka poora apko return karega ek array

// ab array mil gaya hai to humne abhi just seekha tha ki hum uske (array k)
// upar ek dot length (.length) property call kar sakte hai as follows

// const emptyObj = {}

// if (Object.keys(emptyObj).length) {
    
// }

// aur usko (.length ko) match kar lenge zero se ( === laga k ) as follows

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
    
// }

// to isse hume pata lag jayega ki humara object jo hai wo empty hai ya nahi hai
// to yeh bahut hi common practices hai

// to isse hum keh sakte hai "Object is empty" (console.log inside if) as follows

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// save and run

// o/p Object is empty

// bahut aasaan hai , ab apko pata hai ki aap object ko kaise detect
// kar sakte ho empty hai ya nahi, array ko bhi detect kar sakte ho
// empty hai ya nahi, aur iss tareh se values ko hum dekh sakte hai

// ======================================================================

// Achha kuch aur interesting cheejein sir yahan pe bata dete hai
// thoda sa uske liye hum directly browser console mei jayenge

// achha yeh dhyan rakhiyega ki hum jab false ko compare karte hai
// directly equals zero se as follows (in browser console)

// false == 0

// o/p true

// to notice kariye true aya hai (browser console mei)
// to yeh thodi si equality ka comparison hota hai
// ki false ko agar aap equal equal ( false == 0 )
// compare karte hai zero se to wo true (see o/p) hai
// kyuki usko maana jata hai

// ==============================================================

// Lekin false ko jab aap compare karte hai empty string se
// in browser console as follows

// false == ''

// o/p true (in browser console)

// to bhi apke pas true ata hai (see o/p)

// ================================================================

// Aur isi tareh se zero ko jab aap compare karte hai ( 0 == )
// (in browser console) empty string se as follows

// 0 == ''

// o/p true (in browser console)

// to yeh bhi true hai humare pas (see o//p)

// ===================================================================

// To inn teeno true statement ka abhi apko meaning itna nahi lagega ki
// important hai ya nahi hai, but yeh bas dhyan rakhiyega kayi bar
// kuch interview questions ya kayi jagah aage jake competitive
// programming etc karnege to wahan pe inka (inn teeno true statement ka) thoda sa 
// impact apko mil jayega

// agar apko samajh mei aya hai theek hai, nahi aya isliye sir ne yahan pe (browser console)
// mei likha hai kyuki hum itna iske (inn teeno true statement ka) upar interested nahi hai
// bas apko general knowledge ki taur pe pata hona chahiye ki kya basics hai aur kaise unko
// karna hai

// theek hai yeh to hua humara basic ki kis tareh se truthy aur falsy values hoti hai

// ================================================================

// Achha ab itna apko aa gaya hai samajh mei, ab thodi si apki memory ko
// wapas leke jate hai kyuki yeh to bahut hi aasaan tha apko achhe se samajh mei aa gaya hai
// (// o/p Object is empty wala)

// ==================================================================

// Agar apko yaad ho to humne yahan pe one.js mei iske andar kuch discussion kiya tha
// "and" (&&) aur "or" (||) operator ka , to yeh hum bolte hai inko
// logical operator. "And" (&&) ka simple matlab hai ki jitni bhi conditions hai wo
// sari ki sari true aani chahiye ( eg if (userLoggedIn && debitCard && 2==3) {) ) .
// "Or" (||) ka matlab hai ki sirf ek bhi condition agar yahan pe true hai to mai 
// apna kaam karunga ( eg if (loggedInFromGoogle || loggedInFromEmail) {} ) uss condition
// k andar jaunga

// to isi tareh se ek aur interesting yahan pe topic ata hai

// aur yeh jo hai hum bolte hai isko -- Nullish Coalescing Operator (??)
// yahan pe jitna bhi apko dekhna hai wo sara ka sara apko dekhna hai 2 hi
// keyword k upar -- ek to null aur ek undefined k upar, sari kahani inhi
// dono k upar tiki rehti hai

// Nullish Coalescing Operator (??): null undefined

// Achha yeh operator hota kya hai aur karta kya hai wo bhi batate hai

// to suppose kariye yahan pe ek value le lete hai jiska naam de dete hai
// val1 as follows

// let val1

// aur uss val1 k andar humne kya hai kuch bhi assign nahi kara hai as follows

// let val1;

// Ab kya hai ki hume uss val1 k andar kuch value assign karni hai
// to theek hai kaise assign karnege as follows

// let val1;
// val1 

// humne likha ek equal sign as follows

// let val1;
// val1 =

// aur yahan par likha ki suppose kariye uske andar value kya jaani hai
// ya to jayegi 5 as follows

// let val1;
// val1 = 5

// aur humne yahan pe diye 2 question mark as follows

// let val1;
// val1 = 5 ??

// (ek nahi 2 question mark)

// aur diya hai 10 as follows

// let val1;
// val1 = 5 ?? 10

// to ab aap batayiye ki value actually mei hai konsi uske andar

// to console.log hum karke dekhte rahenge multiple times taki hume pata
// rahe ki uske andar abhi last value kya hai

// yeh humne likha val1 as follows (inside console.log)
// aur isko hi print kar lete hai direct (as follows)

// let val1;
// val1 = 5 ?? 10




// console.log(val1);
// o/p 5

// to abhi dekha humne value uske andar gayi hai 5 (see o/p)
// theek hai aasaan tha

// ==============================================================

// Ab aap kahenge ki yeh jo operator hai (?? in val1 = 5 ?? 10)
// yeh lagane ka sense hi kya hua agar wo first ( first means 5 among 5 ?? 10 in -- val1 = 5 ?? 10 )
// value hi jo 5 hai wo hi uske andar jaani thi

// kayi bar kya hota hai jab aap database se call karnege ya specially kuch
// firebase etc inn sab ka use karenge, appwrite ka use karenge to apko
// kya hai directly apko response nahi milta hai, apko 2 values milti hai,
// to chances hai ki ho sakta hai apke pas null response aa jaye, ya ho sakta hai
// response aye hi na , undefined aa jaye, to uss case mei apka pora ka pora
// code structure pareshan ho sakta hai , to uss cases k liye especially yeh (??)
// banaya gaya hai ki values ko apko treat karna hai ki achha null ho to uske andar
// null assign kar lo taki mai uss hisab se case ko adjust kar lu, undefined ho
// to theek hai varna agar koi value aa rahi hai to wo value assign do

// to uss special case k liye jo ki aap database mei aage jake padhenge to apko aa jayega
// bus dhyan rakhiyega ki yeh (??) chalta kaise hai

// =====================================================================================

// let val1;
// val1 = 5 ?? 10




// console.log(val1);

// Sir apko 1 - 2 example aur dete hai to yeh aur clear ho jayega apke andar

// Ab yahan pe sir ne kya kara wapas se bola hai ki yeh jo val1 hai iske
// andar value assign karni hai (as follows 3rd line)

// let val1;
// val1 = 5 ?? 10
// val1 = 



// console.log(val1);

// to value konsi assign hogi, to suppose kariye humne yahan pe likha null
// as follows

// let val1;
// val1 = 5 ?? 10
// val1 = null



// console.log(val1);

// aur likha ?? aur yahan pe likh diya humne suppose kariye 10 as follows

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10



// console.log(val1);

// to isko (2nd line ko) hum comment out kar dete hai as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10



// console.log(val1);

// to ab batayiye konsi value assign hogi, kyuki purane logic
// k hisab se jo pehle ata hai wo assign ho jata hai
// (for eg -- val1 = null ?? 10  , mei null pehle aa raha hai)

// to isko run karke dekhte hai
// o/p 10

// to iske andar kya assign ho gaya -- 10 (see o/p)

// to yeh jo null coalescence operator hai yeh basically kaam
// kya karta hai ki agar null value ayi hai to uska safety check
// kar de kyuki null ( val1 = null ?? 10  mei null) k basis pe ho 
// sakta hai kuch program run na kare ya kuch aage jake problem aa jaye
// to badi carefully yeh (??) design kiya gaya hai naya operator hai

// to iske andar agar value null hai ( val1 = null ?? 10  mei null)
// to obvious si baat hai theek ha ya to null ( val1 = null ?? 10  mei null) 
// assign kar do ya fir agar value aa gayi hai (sir ne , val1 = null ?? 10  mei
// 10 pe hover kiya) abhi to yahan pe 10 dikh raha hai (o/p mei 10) but actually
// mei 10 nahi hoga 

// to yahan pe ( val1 = null ?? 10  mei 10 ki jagah) hum kya karte hai
// ek complex function laga dete hai wo function ko hi database call kar
// raha hai wahan se value aa rahi hai, agar value ayi hai to theek hai
// varna null assign kar do taki mai uss hisab se handle kar lu aage ki
// situation ko , to iss tareh se usko dikhaya jata hai

// Same hi case apke pas aur bhi hai isko ( val1 = null ?? 10 ) 
// comment out kar dete hai as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out



// console.log(val1);

// To suppose kariye agar aap kehte hai ki var1 hai yahan pe as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// var1


// console.log(val1);

// uske andar (var1) ya to undefined announce kar do as follows
// (undefined set kar do)

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// var1 = undefined


// console.log(val1);

// ya fir jo bhi apke pas methods se functions se call se value ayi hai
// suppose kariye yahan pe apke pas 15 value ayi hai as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// var1 = undefined ?? 15


// console.log(val1);

// tab aap apko pata hi lag gaya hoga ki kya value uske andar assign
// karni hai (save and run)

// o/p undefined

// haa ji thoda sa chakme mei aa gaye ki yeh kasie ho gaya, humne
// to expect kiya tha ki wapas se 15 value aa jayegi ( var1 = undefined ?? 15
// mei jo 15 hai )

// yahan pe actually mei thoda sa problem yeh hua hai ki humne yahan pe thoda sa
// mistake kar di hai (var1 ki jagah val1 likhna tha) aap pareshan mat hoyiye logic 
// wo hi hai same hi hai humare pas as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// val1 = undefined ?? 15


// console.log(val1);

// save and run

// o/p 15

// itna pareshan mat ho jaya kariye kabhi kabhi Sir bhi majak kar lete hai
// to humare pas value 15 aa gayi hai (see o/p), logic wo hi hai abhi bhi
// same hai

// to yeh jo null coalescence operator hai (??) yeh sirf null aur undefined
// k liye bana hai (eg - val1 = null ?? 10 , eg - val1 = undefined ?? 15)

// Achha iski (??) ek aur interesting baat yeh hai ki hum yahan pe
// comment out kar dete hai fourth line ko as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// val1 = undefined ?? 15 commented out


// console.log(val1);

// ==================================================================================

// to yahan pe ek aur case Sir bata dete hai vaise aap karenge nahi
// aisa case but fir bhi Sir apko bata dete hai

// to suppose kariye yeh value hai val1 as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// val1 = undefined ?? 15 commented out
// val1

// console.log(val1);

// aur apne kuch functions likhe hai
// suppose kariye first function apko null return karta hai
// as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// val1 = undefined ?? 15 commented out
// val1 = null ??

// console.log(val1);

// fir aapne second ek aur function likha, wo apke pas 10
// return kar deta hai as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// val1 = undefined ?? 15 commented out
// val1 = null ?? 10

// console.log(val1);

// aur fir aapne ek aur yahan pe likha (function) to wo function
// apko 15 return karta hai as follows

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// val1 = undefined ?? 15 commented out
// val1 = null ?? 10 ?? 15

// console.log(val1);

// to iss case (val1 = null ?? 10 ?? 15) mei kya hoga jab aapne
// null coalescence operator use kiya hai, to jo bhi first value
// (i.e. val1 = null ?? 10 ?? 15 mei 10 first value hai) isko
// yahan pe (val1 = null ?? 10 ?? 15) mil gayi hai wo hi value
// iske andar assign ho jati hai (see o/p)

// o/p 10

// to bada ho easy sa tha basic sa hai aisa kuch difficult hai nahi

// ==================================================================

// let val1;
// val1 = 5 ?? 10 commented out
// val1 = null ?? 10 commented out
// val1 = undefined ?? 15 commented out
// val1 = null ?? 10 ?? 20

// console.log(val1);

// o/p 10

// ====================================================================

// to abda ho basic hai kis tareh se null coalescence operator kaam karta hai
// basically ek humara fallback hai ki agar errors aye to hum kis tareh se usko
// handle karein ya fir error ki jagah hum koi value assign karna chahein
// (val1 = null ?? 10 ?? 20 mei error ki jagah 10 value assign kari hai)
// to wo value kaise assign ho to bahut hi basics hai kis tareh se yeh hota hai

// =========================================================================

// to ek chota sa ek aur isi tareh ka operator sir bata dete hai kyuki aksar
// log usi operator mei bhi confuse ho jate hai to null coalescence operator
// ya  nullish coalescence operator aur jo terniary operator hai wo dono alag alag
// cheej hai

// Terniary Operator

// Yeh hai humara Terniary Operator

// Yeh humara if else ka chota sa syntax hai to hum likhte
// hai yahan pe seedha kya hi -- condition as follows

// condition

// aur uske baad lagate hai question mark ? as follows

// condition ?

// aur yahan pe hum likhte hai apni true statements jo bhi execute aap
// karwana chahte hai as follows

// condition ? true

// fir likhte hai colon : as follows

// condition ? true :

// aur yahan pe likhte hai false as follows

// condition ? true : false

// to aksar log yeh jo ? hai (condition ? true : false mei jo ? hai)
// isko dekh k sochte hai achha yeh bhi isi tareh (null coalescence operator
// ki tareh se) act karta hoga

// nahi iska (terniary operator) la design alag hai iska pattern alag hai
// iska goal alag hai ki kya aap actually mei karna chahte hai, iska
// (terniary operator) goal ekdum alag hai

// to eyh apke hote hai terniary operator

// ek sir terniary operator use karke bata dete hai ki basic hai bahut hi
// aasaan hai to seedhe hi aap condition check kar sakte hai

// to suppose kariye sir ne apke liye banaya ek const as follows

// const

// aur yahan pe banaya iceTeaPrice as follows

// const iceTeaPrice

// aur price rakh di wahan pe 100 as follows

// const iceTeaPrice = 100

// to apko seedha hi check karna hai to aap kya kar sakte hai
// seedhe ayiye yahan pe aur bol dijiye ki mujhe check karna hai
// ice tea ki price (iceTeaPrice) as follows

// const iceTeaPrice = 100
// iceTeaPrice

// aur ice tea ki price (iceTeaPrice) agar greater than equal to >=
// hoti hai agar 80 se as follows

// const iceTeaPrice = 100
// iceTeaPrice >= 80

// to hum kya kar sakte hai , ? laga k , humara true statement likh sakte hai
// as follows

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ?

// (true statement) to hum yahan pe likh denge console.log aur iske andar
// likh denge "less than 80" as follows

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("less than 80")

// aur yahan pe seedha aap ek colon laga k ( : laga k ) apna agla
// statement (false statement) likh sakte ho as follows

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("less than 80") :

// (agla statement) jisme likh sakte hai console.log("") aur seedha hi humne
// likh diya "more than 80" as follows

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

// to yeh apka basic ho gaya ek hi line mei apka pora statement ho gaya hai ki
// kya apka sahi hai kya galat hai wahan pe to bahut hi aasaan hai basic sa ho
// jata hai

// to yeh jo operator hai (terniary operator) yeh bilkul alag hai

// save and run

// o/p less than 80

// to less than 80 (see o/p) humare pas aa gaya hai yahan pe kyuki obvious
// si baat hai yeh true statement hai actually mei ( console.log("less than 80") )
// to agar price greater than 80 hai ( iceTeaPrice >= 80 ) jo ki hai
// ( const iceTeaPrice = 100 ) to humara true statement (i.e. to humara true statement
// print ho agya o/p mei)

// ========================================================================================

// to actually mei humne check to yeh karna chahiye tha ki price less than equal to
// 80 hai kya as follows

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// kyuki price to 100 hai ( const iceTeaPrice = 100 ) to hume jada aur samajh mei ayega
// but aap samajh gaye ki kis tareh se Sir batana chah rahe hai yahan pe

// o/p more than 80

// ab humare pas more than 80 (see o/p i.e. false statement) print ho gaya hai

// to humne check kara ki price 80 se kum ya equal hai kya ( iceTeaPrice <= 80 )
// agar kum hoti to yeh ( console.log("less than 80") ) print ho jata o/p mei
// (i.e. true statement) , ab kyuki kum nahi hai to obvious si baat hai
// yeh ( console.log("more than 80") ) print ho gaya hai (i.e. false statement)

// ====================================================================================

// to yeh bahut hi basics hai kuch humne conditional flows k baare mei jaana
// kafi kuch jaana humne iss video class k andar

// ====================================================================================

// ek chota sa summary sir de dete hai taki apke liye aur aasaan rahe

// to sabse pehle humne jaana ki all tim epe hum sara code execute nahi karna
// chahte hai, hume chahiye control ki kuch situation ho to yeh control execute ho,
// kuch situation ho to yeh control execute ho

// to humne eg dekhe ki userlogged in hai, temperature k basis pe ki temperature
// humare pas jada hai to yeh execute karo, temperature kum hai to yeh karo

// isi tareh se hum aage jake eg dekhenge user rating ka ki agar user ne 1 rating
// di hai to usko yeh message do, 2 rating di hai to yeh message do,
// 5 rating di hai to yeh message do, to aap sari ratings etc check kar sakte hai

// uske baad humne dekha ki kis atreh se conditions k andar hum kis tareh se values 
// ko true ya false leke aate hai to obvious si baat hai question pochna padega
// compare karna padega kisi se ki aap chote ho kya , aap bade ho kya, aap jada ho
// kum ho to unhi ka jawab hume inn operators se milta hai <, >, <=, >=, etc

// === k bare mei bhi humne dekha ki yeh sirf na keval value check karta hai but
// uske type ko bhi check karta hai

// uske baad humne dekha ki kis tareh se humare pas scope hota hai scope k andar
// jo bhi declare ho agay wo scope k andar hi erhta hai bahar nahi ata hai

// uske baad humne dekha ki bahar agar likhte hai to kis tareh k errors aate hai

// fir humne dekha ki , laga k multiple lines bhi likh sakte hai , hume {}
// ki bhi need nahi hai , to ek line likhte hai to theek hai but , laga k likhte
// hi jaate hai to theek baat nahi hai (if {} nahi hai to)

// uske baad if k saath ek else if bhi aata hai to aap else laga k multipple
// condition check kar sakte hai

// uske baad humne dekha multiple checkings to ek nahi multiple conditions
// check karni hai to && ka matlab hai ki sari condition true
// honi chahiye aur || ka matlab hai ek bhi true ho to kaam chal jayega

// uske baad hum switch pe aye the kyuki bahut saara kayi bar check karna hota hai
// jaise rating ki hi baat kar lijiye to 1 se leke 5 tak ya 1 se leke 10 tak to
// if else likhte likhte pareshan ho jate hai to uss case mei hum switch case use
// karte hai aur hum compare karte hai key se (eg - month is key) to yeh humari month
// key hai ab chahe uske andar number ho chahe string ho ya chahe koi aur datatype
// ho unn sabko yahan se case match ho jayega (case "jan")

// humne thodi si baat kari break ki bhi (jo har case mei hai) kya language
// ka ek chota sa flaw hai ki uske baad saare hi waterfall ki tareh execute ho jate hai
// to uske liye hum break keyword use karte hai (jo har case mei hai) except default

// agar kuch bhi case match nahi karega to obvious si baat hai default code to run hoga hi hoga

// truthy falsy
// ek eg humne dekha tha ki user ka email agar hai to kaisa o/p ayega
// empty string hai to kaisa o/p ayega
// empty array hai to kaisa o/p ayega

// uske baad konkon si falsy and truthy values hoti hai

// fir humne jaana ki achha array aa gaya to usko kaise check karo empty hai ya nahi

// object aa gaya to usko kaise check karenge empty hai ya nahi
// kyuki aage jake karna padega hume jab hum APIs etc detail mei
// banayenge tab yeh sab check karne padenge

// nullish coalescence operator - iske andar baat sirf itni si hai ki
// hum kayi bar multiple functions , abhi yahan apko direct values dikh
// rahi hai , eg - val1 = null ?? 10  mei 10 etc value hai, isliye thoda sa samajh ne
// mei problem ho rahi hai, aage jaake dekhenge ki itni aasaani se 
// values nahi aa jati hai yahan pe return values aati hai
// eg - val1 = null ?? 10  mei 10 etc return value hai

// koi function execute hua hai usne kya value di hai to ho sakta hai
// kayi bar wo function humare control mei na ho third party ka ho
// firebase ka ho , appwrite ka ho , wo (function) ho sakta hai return mei apko
// null kar de

// ab iske andar ( val1 = null ?? 10 ) hum null nahi lena chahte , to hum
// ?? laga ke, koi aur function execute karke uske andar value laga du
// ( val1 = null ?? 10 , yeh karke koi aur function execute karke 10 value laga di 
// using ?? )

// ya fir hum uske andar koi aur flag value daal du taki mere ko pata rahe
// kya karna hai , kya nahi karna hai, kyuki yeh maana jata hai ki agar apke
// program mei kisi mei bhi null ya undefined hai ( eg - val1 = null ?? 10 ,
// val1 = undefined ?? 20 ) to yeh theek baat nahi hai kyuki aapo pata nahi
// ki wo value kaise ayi hai , to null aur undefined se achha hai ki aap
// koi flag value daal dijiye , true daal dijiye, false daal dijiye,
// to iske liye basic hum null coalescence operator use karte hai

// chinta mat karo aage jake projects ayenge tab samajh aa jayega

// Terniary operator

// to yeh ho gaya complete , apke jitne logical controls hote hai
// ya fir control flows hote hai

// =============== LECTURE END ==========================================================


