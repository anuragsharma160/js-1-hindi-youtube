// for of loop

// iske andar hum ek loop iss tareh ka bhi padhenge
// jo ki ek higher order function hai, higher order function
// k bare mei bhi hum thoda sa detail janenge, mdn pe bhi
// janenge, itna jada difficult hai nahi

// achha iska (for of loop) ka syntax kya hai yeh thode se loops
// ab jo hum padhne wale hai yeh sare thode array specific loop hai

// to dekhiye arrays aur yeh objects jo hai yeh JS k andar bahut hi powerful
// hai

// ek common situation jo apke pas milegi na jaise yeh ek array hai

// []

// ab iske andar hum jaise strings daal dete hai, to yeh ek string ho gay

// [""]

// uske baad yeh ek string ho gayi

// ["", "",]

// aur uske baad yeh ek string ho gayi

// ["", "", ""]

// to isi tareh se hum kya karte hai, array k andar objects bhi daalte hai
// to objects kaise daalenge (array k andar objects kaise daalenge)

// ek object yeh ho gaya hai

// [{}]

// ek object yeh ho gaya hai

// [{}, {}]

// aur ek object yeh ho gaya hai

// [{}, {}, {}]

// to yeh bahut hi common scenario hai ki array k andar apko
// bahut saare objects milenge aur har iteration mei apko
// objects mei se kuch value nikaani hai

// to pehle loop lagayiye fir object k andar jayiye aur dot
// notation se ya square notation se ek value leke ayiye

// to ek bahut common syntax hai, bahut common scenario hai aage
// jaake hum bahut saare exercise karnege ispe, to unhi k baare mei yeh charcha
// hai humare for of loop ki

// to sabse pehle hum kya karte hai ek array le lete hai

// const arr =

// ab iske andar hum jada dimag nahi lagane wale hum simply
// value rakh dete hai 1,2,3,4,5

// const arr = [1, 2, 3, 4, 5]

// kyuki uske andar value 12345 ho koi super hero k naam ho
// ya koi states k naam ho, kya farak padta hai values hai iterate karni hai

// to sabse pehle hum baat karte hai for of loop ki

// const arr = [1, 2, 3, 4, 5]

// for (const element of object) {
    
// }

// iterator = element ( for (const element of object) {} , new update in JS)

// to dekhiye for of loop k andar kya hai -- const iterator aur of object
// (see syntax)

// ab yeh jo iterator aur of object hai isse pareshan mat hoiyega
// aisa nahi hai ki yeh loop object k liye hi kaam aata hai
// loop , loop hai kisi bhi iterator ho sakta hai

// objects bhi aapke iteratable hai matlab unpe bhi aap loops laga sakte hai
// array bhi aapke iterators hai unpe bhi aap loop laga sakte hai
// string bhi aapki iterator hai unpe bhi aap loop laga sakte hai

// to theek hai isne bola iterator of object (see for of loop syntax)
// ki kis object pe lagana chahte ho, sabse pehli baat to yeh

// to yeh jo iterator hai (see for of loop syntax) yeh aapka jaise i value
// hum declare karte the basic wo hi hai aap chahe to iska naam (iterator ka,
// see for of loop syntax) i bhi rakh sakte hai

// const arr = [1, 2, 3, 4, 5]

// for (const i of object) {
    
// }

// vaise kuch achha naam rakhte hai kuch val de dete hai isko value ki tareh
// ya fir isko num de dete hai kuch num ki tareh to jo aapka man kare wo
// naam deke rakhiye

// const arr = [1, 2, 3, 4, 5]

// for (const num of object) {
    
// }

// dekhiye isse (const num of object) pata lag raha hai const yahan (const num of object)
// par declare kara hai to const k baad to vvariable ka naam (num) hi aana hai
// to basic aapka naam aa gaya

// yeh jo object hai (object in , (const num of object) ) yeh ek bahut hi broader term mei
// use kiya jaa raha hai yahan pe (const num of object), kis object pe aap loop lagana chahte hai

// isko (object in , (const num of object) ) JS k objects se aap mat confuse kariyega
// thoda sa language k andar yahan thoda sa problem hai to yeh object matlab
// (object in , (const num of object) ) uss cheej k upar se yahan pe uske baare mei baat kari
// jaa rahi hai, bahut se log isko (object in , (const num of object) ) samajh lete hai ki
// are yeh loop to object pe hi lagta hai, nahi nahi aisa nahi hai, yahan pe language
// ka jo isne documentation padha hai usko hi pata lagega ki object se yahan pe (object in , (const num of object) )
// unka tatparye yeh hai ki kis cheej k upar loop lagana hai

// ab mujhe arr jo mera array hai uske upar loop lagana hai

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
    
// }

// bas that's it itna hi karna hai, yeh apne aap pata kar lega kab loop
// end ho raha hai, kab uss values ki size kya hai , aapko kuch nahi karna
// hai uske bare mei aap sirf apna variable declare kariye ( const arr = [1, 2, 3, 4, 5] ) usko batayiye
// kispe loop lagana hai, aur bas chord dijiye

// ab yahan pe humne console.log kiya aur bola ki yeh num hi print kar do
// jo bhi aapki num ki value hai

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// bas koi declaration nahi koi increment nahi koi decrement nahi, haan tabhi to sir
// keh rahe the, bahut saare log while loop , do while loop, for loop
// wo sab inhi (for of loop) se kaam chalate hai, aur jab kaam ho raha hai to kyu
// nahichalayein, koi galat baat bhi nahi hai

// save and run

// o/p 1
// 2
// 3
// 4
// 5

// to dekhiye 5 tak humare pas value print ho gayi, ab uske andar 5 tak hoti , 500 tak hoti
// uske andar states k naam hote kya farak padta hai humara kaam ho gaya
// to yehi basic hai

// =================================================================================================

// Achha isi tareh se kya hai ki yeh jo loop hai na (above wala) jaisa ki sir ne
// apko bataya tha ki object ka hona jaruri nahi hai, aap isko (for of loop ko) strings
// etc kisi pe bhi laga sakte hai

// to dekhiye suppose kariye hum yahan pe ek string lete hai as follows

// to isko hum greetings bol dete hai

// const greetings = 

// to greetings k andar kya obvious si baat hai pehle humari hello world wali
// greeting jo hoti hai exclamation k saath wo to lena jaruri hai
// as follows

// const greetings = "Hello world!"

// aur for of loop lijiye, yeh ho gaya humara for of loop

// const greetings = "Hello world!"

// for (const element of object) {
    
// }

// kya karna hai -- iterator (element ki jagah, see syntax)
// to greet naam de dete hai as follows (element = greet)

// const greetings = "Hello world!"

// for (const greet of object) {
    
// }

// aur isko (object , see syntax) ko bol dete hai greetings
// as follows

// const greetings = "Hello world!"

// for (const greet of greetings) {
    
// }

// Achha yeh bada hi common aap scenario aap dekhenge jaise yahan pe
// humne liya hai array of numbers ( previous eg mei, const arr = [1, 2, 3, 4, 5] )
// to iska usually naam kaise hota hai numbers [ const numbers = [1, 2, 3, 4, 5] ]
// for num in numbers , ya fir for num of numbers ( for (const num of arr) {} see 
// previous eg) for greet of greetings (see this eg), to iss tareh k common
// programmers lete hai, apko agar nahi jamta hai to aap isko i lijiye , j lijiye
// jo bhi apko value likhna hai to sir ne yahan pe ek individual word ko sir ne greet le
// liya hai ( for (const greet of greetings) {} ) to uska naam greet hoga (5:25)

// (uska naam greet hoga means const greetings = "Hello world!" mei "Hello world!" ka)

// to obvious si baat hai ab console.log kar lete hum yahan pe aur bol dete hai ki
// each character kya hai -- `Each char is` aur inject kar dete hai humara variable
// ( using ${} ) aur variable kya hai humare pas yeh greet hai as follows

// const greetings = "Hello world!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// save and run

// o/p Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !

// to obvious si baat hai dekhiye -- hello world! aapka poora
// print ho gaya hai space k saath (see o/p)
// aur aap iske andar chahe to apne basics laga sakte hai ki agar
// aapko maan lijiye continue karna hai (continue keyword) ki agar space
// detect ho to mai usko nahi print karwana chahta to aap continue keyword use
// kar sakte hai ( space b/w hello and world!)

// ya aap chahte hai ki space detect ho jaye ( space b/w hello and world!) to mai
// pora hi exit kar jaaun to aap break keyword use kar sakte hai
// to aap aur practice kar sakte hai iske upar

// ==================================================================================

// theek hai aab sirf itna hi nahi hai , humare pas ek aur datatype bhi hota hai
// JS k andar uske bare mei bhi thodi si charcha kar lete hai yahan pe kyuki uske
// upar bhi aap iterate kaafi karenge

// Achha ek JS k andar kya hota hai maps bhi hote hai

// Maps

// Maps kya hote hai - maps k bar emei humne jada baat to nahi kari but
// ek tareh se aap smajh sakte hai ki array jaise ho hote hai lekin thoda
// sa iske andar iteration etc k andar hota hai, aage jaake jab humari exercise
// etc hogi tab hum aur ispe baat kar lenge, abhi fataak se dekh lete hai ki
// map k andar kaise values set karni hoti hai aur kaise hote hai

// to itna jada kuch difficult hota nahi hai map k andar, unique values hoti hai bas
// to hum kya karte hai ek map lete hai

// const map

// aur uss map ko kya bolte hai new map as follows

// const map = new Map()

// yeh lijiye humne map le liya

// ab iss map k andar kuch values set karni hai , to map apne aap mei ek
// object hai, waps se JS mei sab kuch hi object hai, dot karte hai to dekhiye

// const map = new Map()
// map.

// dot karte hai to dekhiye, clear delete entries forEach bhi hum laga sakte hai
// yahan pe, get, has , keys, size , values , to map k bar mei sir abhi aur basic
// bata denge ki ksi tareh se hota hai but abhi iske andar kuch values set karte hai
// infact pehle padh hi lete hai hum

// to aap ispe ( const map = new Map() , mei , map pe  ) click karenge jaise hi hover karenge
// map k upar , abhi nahi aa raha hai yahan pe, vaise to mdn ka docs directly aa jata hai
// but theek hai koi baat nahi hum mdn k docs ko direct hi dekh lete hai (inn google
// search map js mdn)

// tp map kya hai object hai jo ki hold karta hai key value pair, jaise humne dekha tha humare objects
// key value pair hai same usi tareh se hai -- (see mdn) -- insertion order of the keys,
// jo original jis order mei aap insert karenge uss order ko yaad rakhta hai , jo aapke objects
// hote hai wo order ko yaad nahi rakhte hai wahan kaise bhi aata hai

// (see mdn) to Any value both key (objects) and primitive values (7:46) may be used either as
// a key or as a value, to aap jaisa chahe usko use kar sakte hai

// (scroll down see mdn , Try it section) strings lijiye keys ko, numbers lijiye , jo aapka man kare
// wo lijiye (7:53) to bola tha jada iske andar kuch hai hi nahi

// (see mdn ) Description - collection of key value pairs, only occurs, it is unique in the
// Map's collection
// to basically jo difference ata hai wo itna hi aata hai ki koi bhi duplicate value iske andar hoti
// nahi hai aur apko sari unique values milti hai , bas itna hi basic hai

// Kabhi aur humdetail mei hum iska specific eg dekhenge tab hum padh lenge , abhi k liye itna
// bahut hai humare liye

// ++++++++++++++++++++++++++++++++++++++++++

// const map = new Map()
// map.

// aur sabse basic hai iske andar values apko set karni hai to yeh lijiye value aap set kar
// lete hai map.set as follows

// const map = new Map()
// map.set

// aur key value aap de sakte hai

// const map = new Map()
// map.set()

// jaise suppose kariye hume iske andar ( map.set() ) key values deni hai kuch
// aa... state k naam dene hai hume, state aur kuch iss tareh se hum de dete hai
// country code hum de dete hai, to yahan pe hum de dete hai IN , to yeh 'IN'
// humara key hai aur iski value humari ho gayi yahan pe "India" (8:37) as follows

// const map = new Map()
// map.set('IN' , "India")

// aur isi tareh se aur bhi country code de dete hai 'USA'
// aur iska bhi naam likh lete hai hum pora "United States of America"

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")

// aur ek aur de lete hai hum yahan pe just for basics k liye

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")

// theek hai ji yeh humne kuch de diye hai

// ab sabse pehle to print kara k dekhte hai map mei actually mei
// print kya hota hai basic, basic kaise dikhai deta hai
// to yeh lijiye humne map print kara console.log(map)

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")

// console.log(map);

// ab pehle dekhte hai yeh values kaise aati hai

// o/p Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'FR' => 'France'
// }

// to humare pas yeh ho gaya map (see o/p) ek object ki tareh hi
// hai wo hi key values hai, key values thoda sa difference but yeh hai... (9:19)

// =====================================================================================

// Achha iske andar ek interesting cheej kya aati hai jaise suppose
// kariye hum isko ( map.set('IN' , "India") ) copy kar lete hai yahan pe
// aur kisi kaaran se humne wapas se bola ki "India" wapas se iske andar add
// kar do as follows

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")


// console.log(map);

// to kya hoga , save and run

// o/p Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'France'
//   }

// to dekhiye (see o/p) "India" wapas se iske andar nahi gaya hai
// do (2) entries nahi hai, to maps jo hai wo unique values k liye jaane
// jaate hai ki values unique hogi aur jis order mei aapne enter kiya hai
// uss order k andar bhi rehti hai

// aage jaake kai bar jab hum data structures etc padhte hai tab wahan pe
// kaafi kuch kaam mei aa jati hai

// ============================================================================

// ab mudde ki baat yeh hai ki kya hum ispe (map pe) loop laga sakte hai
// aur agar loop laga sakte hai to kaise lagega wo loop
// chaliye laga k dekhte hai hum yahan pe

// to yeh ho gaya humara basic for of loop as follows

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")


// console.log(map);

// for (const element of object) {
    
// }

// ab for of loop jab aap lagate hai, ab humko lagana hai iss
// map pe, ab agar iss map pe hum lagayenge as follows

// ( for (const element of map) {} )

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")


// console.log(map);

// for (const element of map) {
    
// }

// to suppose kariye iss iterator (element) ki jagah hum iski value
// lete hai kuch key le lete hai as follows

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")


// console.log(map);

// for (const key of map) {
    
// }

// theek hai ab hum isko print karna chahte hai, to kaise print
// karein, aur kya print hoga, uski key print hogi ya uski
// value print hogi

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")


// console.log(map);

// for (const key of map) {
//     console.log();
    
// }

// to yahan pe le lete hai , seedhe hi key ko print kar dete hai
// koi value etc kuch aage peeche likhte nahi hai (jaise console.log mei
// message likhte hai ${} se pehle vaise nahi likha)

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")


// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

// save and run

// console.log(map) ko hata dete hai kyuki ab iski jarurat to hai nahi
// as follows

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const key of map) {
//     console.log(key);
    
// }

// save and run

// o/p [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]

// to humne isko run kiya to kya print hua , are yeh to pora ka pora
// hi array humare pas aa gaya hai, yeh to aise (as o/p) print karna
// hi nahi tha , hume to alag alag values chahiye

// to apko agar iss tareh (as o/p) se alag alag values chahiye to yahan pe ek
// shortcut hota hai aapke pas, kya shortcut hota hai agar key lenge
// to aapke pas kya hoga ek ek value sari aa jayegi

// lekin agar aisa nahi chahiye to aap kya kar sakte hai, yahan pe
// ( for (const key of map) {} , mei key pe) aake aap ek square bracket laga dijiye
// as follows , haa ji yeh syntax hai

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const [key] of map) {
//     console.log(key);
    
// }

// aur iske baad aap key aur value ko alag alag hold kar sakte hai, (i.e. [key, value] )
// as follows, yeh array ka destructure ho jata hai yahan pe

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const [key, value] of map) {
//     console.log(key);
    
// }

// 10:53

// to jaise hi aap key aur value iss tareh se [key, value] alag alag lete hai
// to aapne map liya -- const key aur value ( for (const [key, value] of map) {} )
// ab aap key aur value ( [key, value] ) ko alag alag print kar sakte hai

// to key ( console.log(key) jo pehle se likha hai as follows )

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const [key, value] of map) {
//     console.log(key);
    
// }

// aur uske baad hum kya karte hai yahan pe , laga k
// i.e. console.log(key, );

// aur fir ek quote leke ''

// aur colon :- laga k yeh likh dete hai -- ':-',

// aur uske baad value likh dete hai -- ':-', value
// as follows

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")
// map.set('IN' , "India")

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

// to ab humne key aur value dono le li hai aur destructure kar liya hai array k andar

// save and run

// o/p IN :- India
// USA :- United States of America
// FR :- France

// o/p explanation - India i.e. IN aur fir humara yeh colon print ho gaya hai : 
// , colon aur arrow (dash) :- aur fir yeh -- India
// to yeh ek bada hi interesting syntax hai

// ==================================================================================

// theek hai ab yeh for of loop mei aap kahenge ki theek hai yeh map to aapne
// naya bata diya hai yahan pe but agar humare pas ek object hota to hum uspe
// for of loop laga sakte the kya

// dekhte hai try karke , aur isko bolte hai myObject

// const myObject

// iske andar bhi hum yehi likhte hai wapas se , to suppose kariye kya likhein

// const myObject = {

// }

// game k name likh lete hai , to game1 jo hai uska likh lijiye aap 'NFS'
// theek hai ji

// const myObject = {
//     'game1': 'NFS' 
// }

// aur isi tareh se hum yahan pe game2 likh lete hai, aur game2 likhenge
// yahan pe -- 'Spiderman'
// 2 se hi kaam chala lete hai , 2 agar print ho gaye to 10 bhi print
// ho jayenge

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'

// }

// ab ispe (iss myObject pe) for of loop kaise lagana hai

// to theek hai wapas se for of loop pe aa gaye

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'

// }

// for (const element of object) {
    
// }

// iterator ( iterator = element , see for of loop syntax) k anadr kya wo hi technique kaam
// karegi, dekhte hai

// pehle square bracket lagaya ( for (const element of object) {} , mei element pe)

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'

// }

// for (const [element] of object) {
    
// }

// ab yahan pe ( for (const element of object) {} , mei element ki jagah) likh lete hai
// g... game le a... kya values le , key values lete hai chaliye, key aur value
// [key , value]

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'

// }

// for (const [key, value] of object) {
    
// }

// kis object pe lagani hai -- myObject pe lagani hai
// as follows

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'

// }

// for (const [key, value] of myObject) {
    
// }

// theek hai ji aur yeh hi ( console.log(key, ':-', value); ) print karwa lete hai
// (previous eg se copy paste kiya)

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'

// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// ab dekhte hai kya difference aata hai yahan pe

// save and run

// o/p for (const [key, value] of myObject) {
    // ^

    // TypeError: myObject is not iterable

// ab yahan pe problem aa gayi , isne kaha ki yeh jo myObject
// hai yahan pe yeh iterable nahi hai, haa ji yeh iterable nahi hai
// iss tareh se 12:46

// achha yeh object (myObject) to ban gaya hai lekin yeh iterable
// kyu nahi hai, objects ko bhi iterate karane k tarike hote hai,
// yeh bhi aage jaake sir batayenge ki kis tareh se aap usko iterate
// kara sakte hai, but yeh jaan na jada jaruri hai ki kahan pe cheej kaam
// kar rahi hai, aur kahan pe kaam nahi kar rahi hai

// Achha aap yeh bhi dekhenge ki yeh 'game1' iss tareh se 'game1' likh
// rakha hai aur yeh 'game1' iss tareh se game1

// agar iss tareh se game1 hum likhte hai to kya hota hai, yeh bhi jaan na
// apka bahut jaruri hai as follows

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'

// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// aur sir ke samjhane se jada achha hai ki aap isko run kara k dekh le

// save and run

// o/p for (const [key, value] of myObject) {
    // ^

    // TypeError: myObject is not iterable

// to problem to abhi bhi wo hi hai ki yeh jo myObject hai yeh
// iterable hi nahi hai

// iss liye maps iterable hai, objects ko iterate karne k liye
// aapke pas dusre tarike hote hai, aisa nahi hai usse nahi hota hai
// but wahan pe bhi tarike hai but yeh jo for of loop wala hai
// yeh wala syntax aur yeh wala structure as follows

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// to yahan kaam nahi kar raha hai

// theek hai kya kaam kar raha hai kya kaam nahi kar raha hai
// yeh bhi jaan na bahut jaruri hota hai

// ============================================================================

// theek hai ab aate hai hum dusre k upar, thoda objects k bare mei
// charcha kar rahe hai to objects ki aur charcha kar lete hai

// to actually mei isko hum nayi file mei likhte hai ab